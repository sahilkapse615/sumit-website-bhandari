import sharp from 'sharp';
import fs from 'fs';

async function createCleanBg() {
  const input = 'public/assets/solar/bottom_banner_bg.png';
  const metadata = await sharp(input).metadata();
  const width = metadata.width || 1024;
  const height = metadata.height || 160;

  // Let's create a clean background by sampling the right side (where mountains and solar panels are visible)
  // Right side from x: 960 to 1024 is pure mountains and solar panels
  // Also x: 0 to 40 (far left) has trees and sunrise sky
  // Even better: let's inspect the entire original image public/assets/aistudio/Modern_Solar_Energy_Solutions_Homepage_ca85d56a.png
  // Is there a wider slice or how does bottom_banner look?
  
  // Let's extract a clean patch of solar panels from the bottom of project_industrial or the bottom of the original image
  // At y: 1380 to 1530 in the original image, there is an entire field of blue solar panels!
  // In the original image:
  // y: 1440 is the footer, but at y: 1350 to 1440 and beyond, there are solar panels.
  
  // Let's inspect the original image around y: 1280 to 1440
  // In original image:
  // y: 1280 to 1440 is the banner
  // Notice in the banner:
  // Top 0-60px: Mountains and sunset sky
  // Bottom 60-160px: Solar panels
  
  // Let's see: we can generate a clean, gorgeous backdrop with mountains + solar panels:
  // From bottom_banner_bg:
  // We can take the mountain backdrop (x: 200 to 350, y: 0 to 45) or (x: 950 to 1024, y: 0 to 55)
  // And solar panels from (x: 0 to 1024, y: 115 to 160)
  
  // Let's synthesize or test:
  console.log('Synthesizing clean banner background...');
}

createCleanBg().catch(console.error);
