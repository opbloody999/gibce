import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import path from "path";
import fs from "fs";

// Simple, universal logger
function log(message: string) {
  const time = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit", 
    second: "2-digit",
    hour12: true,
  });
  console.log(`${time} [server] ${message}`);
}

const app = express();

// Basic middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Health check - works everywhere
app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    env: process.env.NODE_ENV || 'production',
    port: process.env.PORT || 5000,
    timestamp: new Date().toISOString()
  });
});

// Simple request logging
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

// Universal static file serving function
function serveStaticFiles() {
  // Try multiple possible paths for built files
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
    log("⚠️  No built files found, serving from current directory");
    staticPath = process.cwd();
  }
  
  log(`📁 Serving static files from: ${staticPath}`);
  
  // Serve static files
  app.use(express.static(staticPath, {
    maxAge: process.env.NODE_ENV === 'production' ? '1d' : '0',
    etag: true,
    index: ['index.html']
  }));
  
  // Handle all routes for SPA
  app.get("*", (req, res) => {
    const indexPath = path.join(staticPath, "index.html");
    if (fs.existsSync(indexPath)) {
      res.sendFile(indexPath);
    } else {
      log(`❌ index.html not found at ${indexPath}`);
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

// Start server
(async () => {
  try {
    // Register API routes first
    const server = await registerRoutes(app);
    
    // Error handling
    app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
      const status = err.status || err.statusCode || 500;
      const message = err.message || "Internal Server Error";
      log(`❌ Error: ${message}`);
      res.status(status).json({ error: message });
    });
    
    // Serve static files (universal approach)
    serveStaticFiles();
    
    // Start server
    const port = parseInt(process.env.PORT || '5000', 10);
    server.listen(port, "0.0.0.0", () => {
      log(`🚀 Server running on port ${port}`);
      log(`🌍 Environment: ${process.env.NODE_ENV || 'production'}`);
    });
    
  } catch (error) {
    log(`💥 Failed to start server: ${error}`);
    process.exit(1);
  }
})();