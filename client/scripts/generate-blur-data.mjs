// client/scripts/generate-blur-data.js
import fs from "fs";
import path from "path";
import { getPlaiceholder } from "plaiceholder";

// Root paths
const IMAGES_ROOT = path.join(process.cwd(), "public/images");
const CONTENT_ROOT = path.join(process.cwd(), "app/content");

// Only static image formats that can have blur placeholders
const IMAGE_EXTENSIONS = /\.(jpg|jpeg|png|webp)$/i;

async function generateBlurDataForFolder(folderName) {
  const folderPath = path.join(IMAGES_ROOT, folderName);
  const outputFile = path.join(CONTENT_ROOT, `${folderName}-data.json`);

  if (!fs.existsSync(folderPath)) return;

  const files = fs.readdirSync(folderPath).filter((file) => IMAGE_EXTENSIONS.test(file));

  if (files.length === 0) {
    console.log(`⚠️  No static images found in ${folderName}, skipping...`);
    return;
  }

  const results = [];

  for (const file of files) {
    const imagePath = `/images/${folderName}/${file}`;
    const fullPath = path.join(folderPath, file);

    try {
      const { base64 } = await getPlaiceholder(fullPath);

      results.push({
        name: file.replace(/\.[^/.]+$/, ""),
        path: imagePath,
        blurDataURL: base64,
      });

      console.log(`✅ Generated blur for ${folderName}/${file}`);
    } catch (err) {
      console.error(`❌ Failed to generate blur for ${folderName}/${file}`, err);
    }
  }

  // Write JSON
  fs.writeFileSync(outputFile, JSON.stringify(results, null, 2));
  console.log(`📝 Saved ${outputFile}`);
}

async function generateAll() {
  // Ensure content folder exists
  if (!fs.existsSync(CONTENT_ROOT)) fs.mkdirSync(CONTENT_ROOT, { recursive: true });

  // Get all folders in public/images
  const folders = fs
    .readdirSync(IMAGES_ROOT)
    .filter((f) => fs.lstatSync(path.join(IMAGES_ROOT, f)).isDirectory());

  for (const folder of folders) {
    await generateBlurDataForFolder(folder);
  }

  console.log("\n✨ All blurDataURLs generated!");
}

// Run the script
generateAll().catch((err) => {
  console.error(err);
  process.exit(1);
});
