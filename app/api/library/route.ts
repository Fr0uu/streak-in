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
          durasi: [10, 15],
          fokus: ['Push', 'Legs'],
          sessionIds: ['s4', 's1', 's2', 's5'],
        },
      });
    }

    return NextResponse.json({ success: true, data: library });
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
    const { durasi, fokus, sessionIds } = body;

    if (!Array.isArray(durasi) || !Array.isArray(fokus) || !Array.isArray(sessionIds)) {
      return NextResponse.json(
        { error: 'Format data tidak valid: durasi, fokus, dan sessionIds harus array' },
        { status: 400 }
      );
    }

    const saved = await prisma.userLibrary.upsert({
      where: { userId: user.id },
      update: { durasi, fokus, sessionIds },
      create: {
        userId: user.id,
        durasi,
        fokus,
        sessionIds,
      },
    });

    return NextResponse.json({ success: true, data: saved });
  } catch (error) {
    console.error('API POST /api/library error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Internal Server Error' },
      { status: 500 }
    );
  }
}
