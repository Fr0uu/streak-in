import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getSessionUser } from '@/lib/session';

export const dynamic = 'force-dynamic';

// GET /api/workout-logs - Ambil riwayat log latihan user
export async function GET() {
  try {
    const user = await getSessionUser();

    if (!user) {
      return NextResponse.json(
        { error: 'Unauthorized: Sesi tidak ditemukan' },
        { status: 401 }
      );
    }

    const logs = await prisma.workoutLog.findMany({
      where: { userId: user.id },
      include: {
        sets: {
          orderBy: { noSet: 'asc' },
        },
      },
      orderBy: { completedAt: 'desc' },
    });

    return NextResponse.json({ success: true, data: logs });
  } catch (error) {
    console.error('API GET /api/workout-logs error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Internal Server Error' },
      { status: 500 }
    );
  }
}

// POST /api/workout-logs - Simpan workout log baru beserta detail sets secara nested
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
    const { sessionId, sessionName, durasiDetik, sets } = body;

    if (!sessionId || !sessionName || typeof durasiDetik !== 'number' || !Array.isArray(sets)) {
      return NextResponse.json(
        { error: 'Data tidak lengkap atau format tidak sesuai' },
        { status: 400 }
      );
    }

    const newLog = await prisma.workoutLog.create({
      data: {
        userId: user.id,
        sessionId,
        sessionName,
        durasiDetik,
        sets: {
          create: sets.map((s: { exerciseId: string; noSet: number; nilai: number; selesai?: boolean }) => ({
            exerciseId: s.exerciseId,
            noSet: s.noSet,
            nilai: s.nilai,
            selesai: s.selesai ?? true,
          })),
        },
      },
      include: {
        sets: {
          orderBy: { noSet: 'asc' },
        },
      },
    });

    return NextResponse.json({ success: true, data: newLog }, { status: 201 });
  } catch (error) {
    console.error('API POST /api/workout-logs error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Internal Server Error' },
      { status: 500 }
    );
  }
}
