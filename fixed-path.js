import fs from 'fs';
import path from 'path';

const distDir = './dist';

function fixPaths(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);

    if (fs.statSync(fullPath).isDirectory()) {
      fixPaths(fullPath);
    } else if (file.endsWith('.html')) {
      let content = fs.readFileSync(fullPath, 'utf-8');
      content = content.replace(/\/\.\//g, './'); // Replace `/./` with `./`
      fs.writeFileSync(fullPath, content);
      console.log(`Fixed paths in: ${fullPath}`);
    }
  }
}

fixPaths(distDir);
