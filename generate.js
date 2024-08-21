import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

/**
 * The following files are missing at the beginning
 * because they are generated during the build step.
 */
const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8');
const { render } = await import('./dist/server/entry-server.js');
const { routes } = await import('./dist/assets/routes/routes.js');

function generateStaticPages() {
  for (const { path } of routes) {
    console.log('path:', path);

    const appHtml = render(path)

    const html = template.replace(`<!--app-html-->`, appHtml)

    const filePath = `dist${path}index.html`
    writeFileSyncRecursive(toAbsolute(filePath), html)

    console.log('pre-rendered:', filePath)
  }
}


function writeFileSyncRecursive(filename, content) {
  const dirname = path.dirname(filename);

  // Check if the directory exists
  if (!fs.existsSync(dirname)) {
    // If not, create the directory recursively
    fs.mkdirSync(dirname, { recursive: true });
  }

  // Write the file
  fs.writeFileSync(filename, content);
}

generateStaticPages();
