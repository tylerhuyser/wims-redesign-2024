// scripts/optimize-images.js
import fs from "fs";
import path from "path";
import sharp from "sharp";

const inputDir = "./public/images";
const outputDir = "./public/optimized-images";
const MAX_WIDTH = 1600;
const QUALITY = 80;

// Ensure output directory exists
fs.mkdirSync(outputDir, { recursive: true });

async function processImage(filePath, relPath) {
  const outputPath = path.join(outputDir, relPath).replace(/\.(jpg|jpeg|png)$/i, ".webp");
  const outputFolder = path.dirname(outputPath);
  fs.mkdirSync(outputFolder, { recursive: true });

  // Skip GIFs or videos
  if (/\.(gif|mp4|mov|webm)$/i.test(filePath)) {
    console.log(`🟡 Skipping ${filePath}`);
    return;
  }

  try {
    const image = sharp(filePath);

    const metadata = await image.metadata();
    if (metadata.width && metadata.width > MAX_WIDTH) {
      await image
        .resize(MAX_WIDTH)
        .toFormat("webp", { quality: QUALITY })
        .toFile(outputPath);
    } else {
      await image
        .toFormat("webp", { quality: QUALITY })
        .toFile(outputPath);
    }

    console.log(`✅ Optimized: ${relPath}`);
  } catch (err) {
    console.error(`❌ Error processing ${filePath}`, err);
  }
}

async function walkDir(dir, baseDir = "") {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    const relPath = path.join(baseDir, entry.name);

    if (entry.isDirectory()) {
      await walkDir(fullPath, relPath);
    } else {
      await processImage(fullPath, relPath);
    }
  }
}

walkDir(inputDir)
  .then(() => console.log("🎉 Image optimization complete!"))
  .catch((err) => console.error(err));
