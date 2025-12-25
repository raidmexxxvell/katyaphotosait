import { mkdir, copyFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, '..');

const targets = [
  {
    from: path.join(
      root,
      'node_modules',
      '@fontsource',
      'cormorant-garamond',
      'files',
      'cormorant-garamond-cyrillic-400-normal.woff2'
    ),
    to: path.join(root, 'public', 'fonts', 'cormorant-garamond.woff2'),
  },
  {
    from: path.join(
      root,
      'node_modules',
      '@fontsource',
      'montserrat',
      'files',
      'montserrat-cyrillic-400-normal.woff2'
    ),
    to: path.join(root, 'public', 'fonts', 'montserrat.woff2'),
  },
];

await mkdir(path.join(root, 'public', 'fonts'), { recursive: true });

for (const t of targets) {
  await copyFile(t.from, t.to);
  // eslint-disable-next-line no-console
  console.log(`Copied ${path.basename(t.from)} -> ${path.relative(root, t.to)}`);
}
