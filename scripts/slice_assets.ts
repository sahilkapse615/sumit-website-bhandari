import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

async function main() {
  const inputImage = 'public/assets/aistudio/Modern_Solar_Energy_Solutions_Homepage_ca85d56a.png';
  const outDir = 'public/assets/solar';
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const metadata = await sharp(inputImage).metadata();
  console.log(`Image dimensions: ${metadata.width}x${metadata.height}`);

  // Let's crop:
  // 1. Logo
  // 2. Hero house with solar panels
  // 3. Four services photos
  // 4. Why choose quote engineer image
  // 5. Tech items photos (solar panel, inverter, mounting structure, ev charger)
  // 6. Subsidy hand holding house
  // 7. Three recent project photos
  // 8. Testimonial avatar
  // 9. Bottom CTA banner background
  
  const crops = [
    // Logo (top left)
    { name: 'logo', left: 39, top: 5, width: 178, height: 46 },
    
    // Hero main house right side
    { name: 'hero_house_full', left: 415, top: 60, width: 570, height: 310 },
    
    // Services images:
    { name: 'service_residential', left: 382, top: 470, width: 140, height: 75 },
    { name: 'service_commercial', left: 539, top: 470, width: 140, height: 75 },
    { name: 'service_industrial', left: 696, top: 470, width: 140, height: 75 },
    { name: 'service_pergola', left: 852, top: 470, width: 140, height: 75 },
    
    // Why Choose right banner: Engineer
    { name: 'why_choose_banner', left: 657, top: 554, width: 330, height: 130 },
    { name: 'why_choose_engineer', left: 810, top: 554, width: 177, height: 130 },
    
    // Tech items
    { name: 'tech_solar_panel', left: 604, top: 775, width: 70, height: 60 },
    { name: 'tech_inverter', left: 705, top: 775, width: 75, height: 60 },
    { name: 'tech_mounting', left: 805, top: 775, width: 85, height: 60 },
    { name: 'tech_ev_charger', left: 910, top: 775, width: 75, height: 60 },
    
    // Subsidy hand holding solar house
    { name: 'subsidy_house_hand', left: 770, top: 920, width: 220, height: 140 },
    
    // Recent Projects images:
    { name: 'project_residential', left: 37, top: 1127, width: 217, height: 90 },
    { name: 'project_commercial', left: 268, top: 1127, width: 217, height: 90 },
    { name: 'project_industrial', left: 498, top: 1127, width: 217, height: 90 },
    
    // Testimonial Avatar
    { name: 'avatar_rahul', left: 768, top: 1205, width: 48, height: 48 },
    
    // Bottom banner background
    { name: 'bottom_banner_bg', left: 0, top: 1282, width: 1024, height: 160 },

    // Leaf decoration on calculator
    { name: 'calculator_leaves', left: 485, top: 720, width: 50, height: 35 },

    // Subsidy temple/pillar icon
    { name: 'subsidy_pillar_icon', left: 50, top: 935, width: 55, height: 50 }
  ];

  for (const crop of crops) {
    await sharp(inputImage)
      .extract({ left: crop.left, top: crop.top, width: crop.width, height: crop.height })
      .toFile(path.join(outDir, `${crop.name}.png`));
    console.log(`Saved ${crop.name}.png`);
  }
}

main().catch(console.error);
