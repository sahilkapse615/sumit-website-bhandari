import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

async function main() {
  const input = 'public/assets/aistudio/Modern_Solar_Energy_Solutions_Website_Landing_Page_52a6a836.png';
  const outDir = 'public/assets/solar_v2';
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const crops = [
    // Top logo
    { name: 'logo', left: 35, top: 5, width: 135, height: 35 },

    // Hero right visual (house with panels, car, vertical badges)
    { name: 'hero_house', left: 330, top: 35, width: 440, height: 285 },

    // Services photos
    { name: 'service_residential', left: 300, top: 480, width: 105, height: 75 },
    { name: 'service_commercial', left: 418, top: 480, width: 105, height: 75 },
    { name: 'service_industrial', left: 535, top: 480, width: 105, height: 75 },
    { name: 'service_pergola', left: 652, top: 480, width: 105, height: 75 },

    // Why Choose Engineer Banner (right side)
    { name: 'why_choose_banner', left: 520, top: 760, width: 255, height: 135 },

    // Tech items photos
    { name: 'tech_panels', left: 45, top: 975, width: 140, height: 95 },
    { name: 'tech_inverter', left: 228, top: 975, width: 140, height: 95 },
    { name: 'tech_mounting', left: 410, top: 975, width: 140, height: 95 },
    { name: 'tech_ev', left: 593, top: 975, width: 140, height: 95 },

    // Subsidy house
    { name: 'subsidy_house', left: 550, top: 1195, width: 215, height: 135 },

    // Projects photos
    { name: 'project_residential', left: 31, top: 1415, width: 232, height: 88 },
    { name: 'project_commercial', left: 275, top: 1415, width: 232, height: 88 },
    { name: 'project_industrial', left: 518, top: 1415, width: 232, height: 88 },

    // Testimonial Avatars
    { name: 'avatar_rahul', left: 215, top: 1618, width: 30, height: 30 },
    { name: 'avatar_sneha', left: 414, top: 1618, width: 30, height: 30 },
    { name: 'avatar_amit', left: 610, top: 1618, width: 30, height: 30 },
  ];

  for (const crop of crops) {
    try {
      await sharp(input)
        .extract({ left: crop.left, top: crop.top, width: crop.width, height: crop.height })
        .toFile(path.join(outDir, `${crop.name}.png`));
      console.log(`Saved ${crop.name}.png`);
    } catch (err) {
      console.error(`Error saving ${crop.name}:`, err);
    }
  }
}

main().catch(console.error);
