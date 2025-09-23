import express, { type Express } from "express";
import fs from "fs";
import path from "path";
import { createServer as createViteServer, createLogger } from "vite";
import { type Server } from "http";
import viteConfig from "../vite.config";
import { nanoid } from "nanoid";

const viteLogger = createLogger();

export function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  console.log(`${formattedTime} [${source}] ${message}`);
}

export async function setupVite(app: Express, server: Server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true as const,
  };

  const vite = await createViteServer({
    ...viteConfig,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      },
    },
    server: serverOptions,
    appType: "custom",
  });

  app.use(vite.middlewares);
  app.use("*", async (req, res, next) => {
    const url = req.originalUrl;

    try {
      const clientTemplate = path.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html",
      );

      // always reload the index.html file from disk incase it changes
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`,
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });
}

export function serveStatic(app: Express) {
  // Debug: Log current working directory and __dirname equivalent
  log(`🔍 Current working directory: ${process.cwd()}`);
  log(`🔍 __dirname equivalent: ${import.meta.dirname}`);
  
  // Try multiple possible paths for the built files
  const possiblePaths = [
    path.resolve(process.cwd(), "dist", "public"),
    path.resolve(import.meta.dirname, "..", "dist", "public"),
    path.resolve("dist", "public"),
    path.resolve(".", "dist", "public")
  ];
  
  // Debug: Check what files exist in various directories
  log(`🔍 Files in current directory: ${fs.existsSync('.') ? fs.readdirSync('.').join(', ') : 'none'}`);
  log(`🔍 Files in dist directory: ${fs.existsSync('dist') ? fs.readdirSync('dist').join(', ') : 'dist directory does not exist'}`);
  
  let distPath = '';
  for (const possiblePath of possiblePaths) {
    log(`🔍 Checking path: ${possiblePath} - exists: ${fs.existsSync(possiblePath)}`);
    if (fs.existsSync(possiblePath)) {
      distPath = possiblePath;
      log(`✅ Found build directory at: ${distPath}`);
      break;
    }
  }

  if (!distPath) {
    log(`❌ Could not find build directory. Checked paths: ${possiblePaths.join(', ')}`);
    log(`❌ Current directory contents: ${fs.readdirSync('.').join(', ')}`);
    throw new Error(
      `Could not find the build directory. Checked: ${possiblePaths.join(', ')}`,
    );
  }

  // Debug: List files in the found directory
  if (fs.existsSync(distPath)) {
    const files = fs.readdirSync(distPath);
    log(`📁 Files in ${distPath}: ${files.join(', ')}`);
  }

  log(`📁 Serving static files from: ${distPath}`);

  // Serve static files with proper headers
  app.use(express.static(distPath, {
    maxAge: process.env.NODE_ENV === 'production' ? '1d' : '0',
    etag: true,
    index: ['index.html']
  }));

  // Handle all routes by serving index.html for client-side routing
  app.get("*", (_req, res, next) => {
    const indexPath = path.resolve(distPath, "index.html");
    log(`🔍 Looking for index.html at: ${indexPath} - exists: ${fs.existsSync(indexPath)}`);
    if (fs.existsSync(indexPath)) {
      res.sendFile(indexPath);
    } else {
      log(`❌ index.html not found at ${indexPath}`);
      next(new Error("index.html not found"));
    }
  });
}