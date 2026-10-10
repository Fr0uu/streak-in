'use server';

import { prisma } from '@/lib/prisma';
import { getSessionUser } from '@/lib/session';

export interface SaveLibraryInput {
  durasi: string[];
  fokus: string[];
  sessionIds: string[];
}

export interface SetLogItemInput {
  exerciseId: string;
  noSet: number;
  nilai: number;
  selesai?: boolean;
}

export interface CreateWorkoutLogInput {
  sessionId: string;
  sessionName: string;
  durasiDetik: number;
  sets: SetLogItemInput[];
}

// 1. saveUserLibrary: Upsert preferensi durasi & fokus siswa ke tabel UserLibrary
export async function saveUserLibrary(input: SaveLibraryInput) {
  try {
    const user = await getSessionUser();

    if (!user) {
      return {
        success: false,
        error: 'Sesi pengguna tidak valid. Silakan masuk terlebih dahulu.',
      };
    }

    const savedLibrary = await prisma.userLibrary.upsert({
      where: {
        userId: user.id,
      },
      update: {
        durasi: input.durasi,
        fokus: input.fokus,
        sessionIds: input.sessionIds,
      },
      create: {
        userId: user.id,
        durasi: input.durasi,
        fokus: input.fokus,
        sessionIds: input.sessionIds,
      },
    });

    return {
      success: true,
      data: savedLibrary,
    };
  } catch (error) {
    console.error('Error saat menyimpan user library:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Gagal menyimpan preferensi library',
    };
  }
}

// 2. getUserLibrary: Ambil preferensi berdasarkan userId
export async function getUserLibrary() {
  try {
    const user = await getSessionUser();

    if (!user) {
      return {
        success: false,
        error: 'Pengguna belum terautentikasi.',
      };
    }

    const library = await prisma.userLibrary.findUnique({
      where: {
        userId: user.id,
      },
    });

    return {
      success: true,
      data: library,
    };
  } catch (error) {
    console.error('Error saat mengambil user library:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Gagal memuat preferensi library',
    };
  }
}

// 3. createWorkoutLog: Simpan sesi latihan selesai ke WorkoutLog sekaligus menyisipkan array SetLog secara nested
export async function createWorkoutLog(input: CreateWorkoutLogInput) {
  try {
    const user = await getSessionUser();

    if (!user) {
      return {
        success: false,
        error: 'Pengguna belum terautentikasi untuk mencatat latihan.',
      };
    }

    const workoutLog = await prisma.workoutLog.create({
      data: {
        userId: user.id,
        sessionId: input.sessionId,
        sessionName: input.sessionName,
        durasiDetik: input.durasiDetik,
        sets: {
          create: input.sets.map((set) => ({
            exerciseId: set.exerciseId,
            noSet: set.noSet,
            nilai: set.nilai,
            selesai: set.selesai ?? true,
          })),
        },
      },
      include: {
        sets: {
          orderBy: {
            noSet: 'asc',
          },
        },
      },
    });

    return {
      success: true,
      data: workoutLog,
    };
  } catch (error) {
    console.error('Error saat mencatat workout log:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Gagal menyimpan catatan latihan',
    };
  }
}

// 4. getWorkoutHistory: Ambil riwayat latihan siswa beserta detail set-nya terurut dari tanggal terbaru
export async function getWorkoutHistory() {
  try {
    const user = await getSessionUser();

    if (!user) {
      return {
        success: false,
        error: 'Pengguna belum terautentikasi untuk melihat riwayat.',
      };
    }

    const history = await prisma.workoutLog.findMany({
      where: {
        userId: user.id,
      },
      include: {
        sets: {
          orderBy: {
            noSet: 'asc',
          },
        },
      },
      orderBy: {
        completedAt: 'desc',
      },
    });

    return {
      success: true,
      data: history,
    };
  } catch (error) {
    console.error('Error saat mengambil riwayat latihan:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Gagal memuat riwayat latihan',
    };
  }
}
