// server/index.ts
import express from "express";

// server/routes.ts
import { createServer } from "http";
async function registerRoutes(app2) {
  const httpServer = createServer(app2);
  return httpServer;
}

// server/index.ts
import path from "path";
import fs from "fs";
function log(message) {
  const time = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${time} [server] ${message}`);
}
var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get("/health", (req, res) => {
  res.json({
    status: "OK",
    env: process.env.NODE_ENV || "production",
    port: process.env.PORT || 5e3,
    timestamp: (/* @__PURE__ */ new Date()).toISOString()
  });
});
app.use((req, res, next) => {
  const start = Date.now();
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (req.path.startsWith("/api")) {
      log(`${req.method} ${req.path} ${res.statusCode} in ${duration}ms`);
    }
  });
  next();
});
function serveStaticFiles() {
  const possiblePaths = [
    path.resolve(process.cwd(), "dist", "public"),
    path.resolve(process.cwd(), "client", "dist"),
    path.resolve(process.cwd(), "build"),
    path.resolve(process.cwd(), "public")
  ];
  let staticPath = "";
  for (const testPath of possiblePaths) {
    if (fs.existsSync(testPath) && fs.existsSync(path.join(testPath, "index.html"))) {
      staticPath = testPath;
      break;
    }
  }
  if (!staticPath) {
    log("\u26A0\uFE0F  No built files found, serving from current directory");
    staticPath = process.cwd();
  }
  log(`\u{1F4C1} Serving static files from: ${staticPath}`);
  app.use(express.static(staticPath, {
    maxAge: process.env.NODE_ENV === "production" ? "1d" : "0",
    etag: true,
    index: ["index.html"]
  }));
  app.get("*", (req, res) => {
    const indexPath = path.join(staticPath, "index.html");
    if (fs.existsSync(indexPath)) {
      res.sendFile(indexPath);
    } else {
      log(`\u274C index.html not found at ${indexPath}`);
      res.status(404).send(`
        <html>
          <body>
            <h1>Application Not Built</h1>
            <p>Run <code>npm run build</code> first</p>
          </body>
        </html>
      `);
    }
  });
}
(async () => {
  try {
    const server = await registerRoutes(app);
    app.use((err, _req, res, _next) => {
      const status = err.status || err.statusCode || 500;
      const message = err.message || "Internal Server Error";
      log(`\u274C Error: ${message}`);
      res.status(status).json({ error: message });
    });
    serveStaticFiles();
    const port = parseInt(process.env.PORT || "5000", 10);
    server.listen(port, "0.0.0.0", () => {
      log(`\u{1F680} Server running on port ${port}`);
      log(`\u{1F30D} Environment: ${process.env.NODE_ENV || "production"}`);
    });
  } catch (error) {
    log(`\u{1F4A5} Failed to start server: ${error}`);
    process.exit(1);
  }
})();
