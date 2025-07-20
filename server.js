import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import express from 'express'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

async function createServer() {
   const app = express();
  
    const template = fs.readFileSync(path.resolve(__dirname, './dist/client/index.html'), 'utf-8');
    const { render } = await import('./dist/server/entry-server.js');
  
  
    app.use('/assets', express.static(path.resolve(__dirname, './dist/client/assets')));
  
    app.use('*all', async (req, res) => {
      const appHtml = await render(req.originalUrl);
      const html = template.replace('<!--ssr-outlet-->', appHtml);
      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    });

  app.listen(5173)
}

createServer()