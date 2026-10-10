import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getSessionUser } from '@/lib/session';

export const dynamic = 'force-dynamic';

// GET /api/library - Ambil preferensi library user yang sedang login
export async function GET() {
  try {
    const user = await getSessionUser();

    if (!user) {
      return NextResponse.json(
        { error: 'Unauthorized: Sesi tidak ditemukan' },
        { status: 401 }
      );
    }

    let library = await prisma.userLibrary.findUnique({
      where: { userId: user.id },
    });

    // Jika belum ada library, inisialisasi default
    if (!library) {
      library = await prisma.userLibrary.create({
        data: {
          userId: user.id,
          durasi: ['10', '15'],
          skills: ['l-sit', 'handstand', 'front-lever'],
        },
      });
    }

    return NextResponse.json({
      success: true,
      data: {
        ...library,
        durasi: library.durasi.map(Number),
        fokus: ['Push', 'Legs', 'Skill Mastery'],
        sessionIds: ['s_lsit_1', 's1', 's_handstand_1', 's2'],
      },
    });
  } catch (error) {
    console.error('API GET /api/library error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Internal Server Error' },
      { status: 500 }
    );
  }
}

// POST /api/library - Simpan/Update preferensi library user
export async function POST(req: NextRequest) {
  try {
    const user = await getSessionUser();

    if (!user) {
      return NextResponse.json(
        { error: 'Unauthorized: Sesi tidak ditemukan' },
        { status: 401 }
      );
    }

    const body = await req.json();
    const { durasi, skills } = body;

    const durasiStrings = Array.isArray(durasi) ? durasi.map(String) : ['10', '15'];
    const skillsList = Array.isArray(skills) ? skills : ['l-sit', 'handstand', 'front-lever'];

    const saved = await prisma.userLibrary.upsert({
      where: { userId: user.id },
      update: {
        durasi: durasiStrings,
        skills: skillsList,
      },
      create: {
        userId: user.id,
        durasi: durasiStrings,
        skills: skillsList,
      },
    });

    return NextResponse.json({
      success: true,
      data: {
        ...saved,
        durasi: saved.durasi.map(Number),
        fokus: ['Push', 'Legs', 'Skill Mastery'],
        sessionIds: ['s_lsit_1', 's1', 's_handstand_1', 's2'],
      },
    });
  } catch (error) {
    console.error('API POST /api/library error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Internal Server Error' },
      { status: 500 }
    );
  }
}
