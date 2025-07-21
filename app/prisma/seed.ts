import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.camera.createMany({
    data: [
      { name: 'Shop Floor A', location: 'Ground Floor' },
      { name: 'Vault', location: 'Basement' },
      { name: 'Entrance', location: 'Main Gate' }
    ]
  });

  const cameras = await prisma.camera.findMany();
  const types = ['Unauthorised Access', 'Gun Threat', 'Face Recognised'];
  const now = new Date();

  const incidents = Array.from({ length: 12 }).map((_, i) => {
    const tsStart = new Date(now.getTime() - (i + 1) * 60 * 60 * 1000);
    const tsEnd = new Date(tsStart.getTime() + 5 * 60 * 1000);

    return {
      cameraId: cameras[i % 3].id,
      type: types[i % types.length],
      tsStart,
      tsEnd,
      thumbnailUrl: `/thumbnails/incident${(i % 4) + 1}.jpg`,
      resolved: false
    };
  });

  await prisma.incident.createMany({ data: incidents });
  console.log('✅ Seed complete');
}

main().catch(console.error).finally(() => prisma.$disconnect());
