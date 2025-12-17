const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, 'src', 'assets');
const outputDir = path.join(__dirname, 'src', 'assets', 'optimized');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Compression settings
const JPEG_QUALITY = 80;
const PNG_QUALITY = 80;
const MAX_WIDTH = 1920;
const MAX_HEIGHT = 1080;

async function compressImages() {
  console.log('🚀 Starting image compression...\n');
  
  const files = fs.readdirSync(inputDir);
  const imageFiles = files.filter(file => 
    /\.(jpg|jpeg|png)$/i.test(file) && !file.includes('optimized')
  );

  let totalOriginalSize = 0;
  let totalCompressedSize = 0;

  for (const file of imageFiles) {
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(outputDir, file);
    
    try {
      const stats = fs.statSync(inputPath);
      const originalSize = stats.size;
      totalOriginalSize += originalSize;

      if (file.match(/\.(jpg|jpeg)$/i)) {
        // Compress JPEG
        await sharp(inputPath)
          .resize(MAX_WIDTH, MAX_HEIGHT, { 
            fit: 'inside', 
            withoutEnlargement: true 
          })
          .jpeg({ 
            quality: JPEG_QUALITY, 
            progressive: true,
            mozjpeg: true 
          })
          .toFile(outputPath);
      } else if (file.match(/\.png$/i)) {
        // Compress PNG
        await sharp(inputPath)
          .resize(MAX_WIDTH, MAX_HEIGHT, { 
            fit: 'inside', 
            withoutEnlargement: true 
          })
          .png({ 
            quality: PNG_QUALITY, 
            compressionLevel: 9,
            progressive: true 
          })
          .toFile(outputPath);
      }

      const compressedStats = fs.statSync(outputPath);
      const compressedSize = compressedStats.size;
      totalCompressedSize += compressedSize;

      const savings = ((originalSize - compressedSize) / originalSize * 100).toFixed(2);
      const originalMB = (originalSize / 1024 / 1024).toFixed(2);
      const compressedMB = (compressedSize / 1024 / 1024).toFixed(2);

      console.log(`✅ ${file}`);
      console.log(`   ${originalMB}MB → ${compressedMB}MB (${savings}% smaller)\n`);

    } catch (error) {
      console.error(`❌ Error compressing ${file}:`, error.message);
    }
  }

  const totalSavings = ((totalOriginalSize - totalCompressedSize) / totalOriginalSize * 100).toFixed(2);
  const totalOriginalMB = (totalOriginalSize / 1024 / 1024).toFixed(2);
  const totalCompressedMB = (totalCompressedSize / 1024 / 1024).toFixed(2);

  console.log('═══════════════════════════════════════════════');
  console.log('📊 COMPRESSION SUMMARY');
  console.log('═══════════════════════════════════════════════');
  console.log(`Total Original Size:    ${totalOriginalMB} MB`);
  console.log(`Total Compressed Size:  ${totalCompressedMB} MB`);
  console.log(`Total Savings:          ${totalSavings}%`);
  console.log(`Space Saved:            ${(totalOriginalSize - totalCompressedSize) / 1024 / 1024} MB`);
  console.log('═══════════════════════════════════════════════\n');
  console.log('✨ Optimized images saved to: src/assets/optimized/');
  console.log('📝 Next step: Review the images, then replace the originals');
}

compressImages().catch(console.error);
