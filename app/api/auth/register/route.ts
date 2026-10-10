import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { SESSION_COOKIE_NAME, createSessionToken } from '@/lib/session';

export async function POST(req: NextRequest) {
  try {
    const { nama, email, kataSandi } = await req.json();

    const trimmedNama = (nama || '').trim();
    const trimmedEmail = (email || '').trim().toLowerCase();

    if (!trimmedNama) {
      return NextResponse.json(
        { error: 'Nama panggilan wajib diisi' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      return NextResponse.json(
        { error: 'Format email tidak valid' },
        { status: 400 }
      );
    }

    if (!kataSandi || kataSandi.length < 8) {
      return NextResponse.json(
        { error: 'Kata sandi minimal 8 karakter' },
        { status: 400 }
      );
    }

    const existingUser = await prisma.user.findUnique({
      where: { email: trimmedEmail },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: 'Email sudah terdaftar. Silakan gunakan email lain atau masuk.' },
        { status: 409 }
      );
    }

    const newUser = await prisma.user.create({
      data: {
        nama: trimmedNama,
        email: trimmedEmail,
        kataSandi,
      },
    });

    // Inisialisasi default UserLibrary untuk user baru
    await prisma.userLibrary.create({
      data: {
        userId: newUser.id,
        durasi: ['10', '15'],
        skills: ['l-sit', 'handstand', 'front-lever'],
      },
    });

    // Inisialisasi UserSkillProgress untuk 3 skill utama
    await prisma.userSkillProgress.createMany({
      data: [
        { userId: newUser.id, skillId: 'l-sit', currentStage: 1, bestHoldSec: 0 },
        { userId: newUser.id, skillId: 'handstand', currentStage: 1, bestHoldSec: 0 },
        { userId: newUser.id, skillId: 'front-lever', currentStage: 1, bestHoldSec: 0 },
      ],
      skipDuplicates: true,
    });

    const payload = {
      userId: newUser.id,
      email: newUser.email,
      nama: newUser.nama,
    };

    const token = createSessionToken(payload);

    const response = NextResponse.json(
      {
        success: true,
        user: {
          id: newUser.id,
          email: newUser.email,
          nama: newUser.nama,
        },
      },
      { status: 201 }
    );

    response.cookies.set({
      name: SESSION_COOKIE_NAME,
      value: token,
      httpOnly: false,
      path: '/',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 30,
    });

    return response;
  } catch (error) {
    console.error('Error register:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Terjadi kesalahan saat pendaftaran' },
      { status: 500 }
    );
  }
}

