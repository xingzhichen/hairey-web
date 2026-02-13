import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_DIR = path.join(__dirname, '../public');
const COMPRESSED_MARKER = '.compressed';

// Supported image extensions
const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp'];

async function compressImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!IMAGE_EXTENSIONS.includes(ext)) return;

  try {
    const tempPath = filePath + '.temp';
    const image = sharp(filePath);
    const metadata = await image.metadata();

    // Skip if already compressed or too small (optional)
    // For now, we just re-compress everything to ensure optimization
    
    console.log(`Compressing: ${filePath}`);

    if (ext === '.png') {
      await image.png({ quality: 80, compressionLevel: 9 }).toFile(tempPath);
    } else if (ext === '.jpg' || ext === '.jpeg') {
      await image.jpeg({ quality: 80, mozjpeg: true }).toFile(tempPath);
    } else if (ext === '.webp') {
      await image.webp({ quality: 80 }).toFile(tempPath);
    }

    // Replace original file with compressed one
    fs.renameSync(tempPath, filePath);
    console.log(`Done: ${filePath}`);
  } catch (error) {
    console.error(`Error compressing ${filePath}:`, error);
    // Cleanup temp file if exists
    if (fs.existsSync(filePath + '.temp')) {
      fs.unlinkSync(filePath + '.temp');
    }
  }
}

async function scanAndCompress(dir) {
  if (!fs.existsSync(dir)) return;

  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await scanAndCompress(fullPath);
    } else if (entry.isFile()) {
      await compressImage(fullPath);
    }
  }
}

console.log('Starting image compression...');
await scanAndCompress(PUBLIC_DIR);
console.log('Image compression complete.');
