import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding initial data for Calisthenic Siswa (Skill Evolution Engine)...');

  const demoUserId = '00000000-0000-0000-0000-000000000001';

  // 1. Akun Siswa Demo
  const demoUser = await prisma.user.upsert({
    where: { email: 'rizky@sma11.sch.id' },
    update: {
      nama: 'Rizky',
      kataSandi: 'rahasia123',
    },
    create: {
      id: demoUserId,
      email: 'rizky@sma11.sch.id',
      nama: 'Rizky',
      kataSandi: 'rahasia123',
    },
  });

  console.log('User demo terverifikasi:', demoUser.email);

  // 2. Progres Awal 3 Skill Roadmap
  const skillsToSeed = [
    { skillId: 'l-sit', currentStage: 2, bestHoldSec: 18 },
    { skillId: 'handstand', currentStage: 1, bestHoldSec: 25 },
    { skillId: 'front-lever', currentStage: 1, bestHoldSec: 15 },
  ];

  for (const s of skillsToSeed) {
    await prisma.userSkillProgress.upsert({
      where: {
        userId_skillId: {
          userId: demoUser.id,
          skillId: s.skillId,
        },
      },
      update: {
        currentStage: s.currentStage,
        bestHoldSec: s.bestHoldSec,
      },
      create: {
        userId: demoUser.id,
        skillId: s.skillId,
        currentStage: s.currentStage,
        bestHoldSec: s.bestHoldSec,
      },
    });
  }

  console.log('Progres 3 skill utama berhasil di-seed.');

  // 3. User Library Target Siswa
  await prisma.userLibrary.upsert({
    where: { userId: demoUser.id },
    update: {
      durasi: ['10', '15'],
      skills: ['l-sit', 'handstand'],
    },
    create: {
      userId: demoUser.id,
      durasi: ['10', '15'],
      skills: ['l-sit', 'handstand'],
    },
  });

  console.log('UserLibrary berhasil di-seed.');
  console.log('✅ Seeding selesai sukses!');
}

main()
  .catch((e) => {
    console.error('Seeding gagal:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
