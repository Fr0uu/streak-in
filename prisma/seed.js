import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding initial data...');

  // 1. Akun Siswa Demo
  const demoUser = await prisma.user.upsert({
    where: { email: 'rizky@sma11.sch.id' },
    update: {
      nama: 'Rizky',
      kataSandi: 'rahasia123',
    },
    create: {
      id: 'usr_demo_1',
      email: 'rizky@sma11.sch.id',
      nama: 'Rizky',
      kataSandi: 'rahasia123',
    },
  });

  console.log('User demo berhasil dibuat:', demoUser.email);

  // 2. Default Library untuk Siswa Demo
  await prisma.userLibrary.upsert({
    where: { userId: demoUser.id },
    update: {
      durasi: [10, 15],
      fokus: ['Push', 'Legs'],
      sessionIds: ['s4', 's1', 's2', 's5'],
    },
    create: {
      userId: demoUser.id,
      durasi: [10, 15],
      fokus: ['Push', 'Legs'],
      sessionIds: ['s4', 's1', 's2', 's5'],
    },
  });

  console.log('UserLibrary default berhasil dibuat.');
  console.log('Seeding selesai!');
}

main()
  .catch((e) => {
    console.error('Seeding gagal:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

