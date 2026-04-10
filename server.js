import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import express from "express";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function createServer() {
  const app = express();

  const template = fs.readFileSync(
    path.resolve(__dirname, "./dist/client/index.html"),
    "utf-8",
  );
  const { render } = await import("./dist/server/entry-server.js");

  app.use(
    "/assets",
    express.static(path.resolve(__dirname, "./dist/client/assets")),
  );

  // ✅ Serve env.js with no-cache so browser always gets fresh runtime env
  app.get("/env.js", (req, res) => {
    const envFile = path.resolve(__dirname, "./dist/client/env.js");
    res.set({
      "Content-Type": "application/javascript",
      "Cache-Control": "no-cache, no-store, must-revalidate",
      Pragma: "no-cache",
      Expires: "0",
    });
    res.sendFile(envFile);
  });

  // Explicit route for robots.txt
  app.get("/robots.txt", (req, res) => {
    res.type("text/plain");
    res.sendFile(path.resolve(__dirname, "./dist/client/robots.txt"));
  });

  // Explicit route for sitemap.xml
  app.get("/sitemap.xml", (req, res) => {
    res.type("application/xml");
    res.sendFile(path.resolve(__dirname, "./dist/client/sitemap.xml"));
  });

  app.get("/sitemap.xsl", (req, res) => {
    res.type("application/xslt+xml");
    res.sendFile(path.resolve(__dirname, "./dist/client/sitemap.xsl"));
  });

  app.use("*all", async (req, res) => {
    // Get both rendered HTML and helmet info
    const { appHtml, helmet } = await render(req.originalUrl);

    // Inject rendered app and helmet tags into the template
    const html = template
      .replace("<!--ssr-outlet-->", appHtml)
      .replace("${helmet.title.toString()}", helmet.title.toString())
      .replace("${helmet.meta.toString()}", helmet.meta.toString())
      .replace("${helmet.link.toString()}", helmet.link.toString())
      .replace("${helmet.script.toString()}", helmet.script.toString());

    res.status(200).set({ "Content-Type": "text/html" }).end(html);
  });

  // app.listen(5173, () => {
  //   console.log("Server running at http://localhost:5173");
  // });

  // ✅ Read port from env so it's configurable in Docker
  const PORT = process.env.PORT || 5173;
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}

createServer();
