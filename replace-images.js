const fs = require('fs');
const path = require('path');

const assetsDir = path.join(__dirname, 'src', 'assets');
const optimizedDir = path.join(assetsDir, 'optimized');
const backupDir = path.join(assetsDir, 'backup_original');

console.log('🔄 Replacing images with optimized versions...\n');

// Create backup directory
if (!fs.existsSync(backupDir)) {
  fs.mkdirSync(backupDir, { recursive: true });
}

// Get all optimized files
const optimizedFiles = fs.readdirSync(optimizedDir);

let replacedCount = 0;

optimizedFiles.forEach(file => {
  const originalPath = path.join(assetsDir, file);
  const optimizedPath = path.join(optimizedDir, file);
  const backupPath = path.join(backupDir, file);

  try {
    // Backup original
    if (fs.existsSync(originalPath)) {
      fs.copyFileSync(originalPath, backupPath);
    }

    // Replace with optimized
    fs.copyFileSync(optimizedPath, originalPath);
    
    console.log(`✅ Replaced: ${file}`);
    replacedCount++;
  } catch (error) {
    console.error(`❌ Error replacing ${file}:`, error.message);
  }
});

console.log('\n═══════════════════════════════════════════════');
console.log(`✨ Successfully replaced ${replacedCount} images!`);
console.log('📁 Original images backed up to: src/assets/backup_original/');
console.log('🚀 Your website will now load MUCH faster!');
console.log('═══════════════════════════════════════════════');
