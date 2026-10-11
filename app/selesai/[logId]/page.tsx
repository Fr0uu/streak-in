'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import {
  Trophy,
  Flame,
  Clock,
  CheckCircle2,
  Bell,
  ArrowRight,
  Zap,
  Award,
  Sparkles,
} from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { useWorkout } from '@/context/WorkoutContext';
import { MobileContainer } from '@/components/layout/MobileContainer';

export default function WorkoutDonePage() {
  const params = useParams();
  const logId = (params?.logId as string) || '';
  const { currentUser } = useAuth();
  const { logs, streak, reminder } = useWorkout();

  const [dismissReminderOffer, setDismissReminderOffer] = useState(false);

  // Find the log
  const currentLog = logs.find((l) => l.id === logId) || logs[0];

  const totalSets = currentLog ? currentLog.setsCompleted.length : 0;
  const totalReps = currentLog
    ? currentLog.setsCompleted.reduce((sum, s) => sum + (s.nilai || 0), 0)
    : 0;
  const durationMinutes = currentLog
    ? Math.max(1, Math.round(currentLog.durasiDetik / 60))
    : 15;

  // Cek hold detik terbaik di log ini
  const maxHoldInLog = currentLog
    ? Math.max(
        ...currentLog.setsCompleted
          .filter((s) => s.isIsometric)
          .map((s) => s.nilai),
        0
      )
    : 0;

  // Show reminder offer only if user hasn't set reminder yet
  const showReminderPrompt = !reminder.aktif && !dismissReminderOffer;

  return (
    <div className="min-h-screen bg-[#15171A] text-[#EEF1F4] py-6 sm:py-10">
      <MobileContainer maxWidth="xl" withBottomNav={false}>
        {/* Celebration Header */}
        <div className="text-center mb-8 animate-in fade-in zoom-in-95 duration-300">
          <div className="relative inline-block mb-4">
            <div className="w-20 h-20 rounded-3xl bg-[#FF7A03]/20 border-2 border-[#FF7A03]/40 flex items-center justify-center text-[#FF7A03] mx-auto shadow-2xl shadow-[#FF7A03]/30">
              <Trophy className="w-10 h-10 stroke-[2.5]" />
            </div>
            <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[#FF7A03] text-[#15171A] flex items-center justify-center font-bold text-xs">
              ✓
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#EEF1F4]">
            Latihan Selesai! 🎉
          </h1>
          <p className="text-sm text-[#8A929C] mt-1.5">
            Kerja bagus, {currentUser?.nama || 'Siswa'}! Satu sesi lebih dekat menuju tubuh bugar & penguasaan skill calisthenics.
          </p>
        </div>

        {/* 2x2 Performance Metrics Grid */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="card-surface p-4 border-[#2E3238]">
            <div className="flex items-center gap-1.5 text-xs text-[#8A929C] mb-1">
              <Clock className="w-3.5 h-3.5" />
              <span>Total Waktu</span>
            </div>
            <div className="text-xl sm:text-2xl font-extrabold text-[#EEF1F4]">
              {durationMinutes} Menit
            </div>
            <span className="text-[11px] text-[#8A929C]">Durasi Selesai</span>
          </div>

          <div className="card-surface p-4 border-[#2E3238]">
            <div className="flex items-center gap-1.5 text-xs text-[#8A929C] mb-1">
              <Zap className="w-3.5 h-3.5 text-[#FF7A03]" />
              <span>Program</span>
            </div>
            <div className="text-xl sm:text-2xl font-extrabold text-[#EEF1F4] truncate">
              {currentLog?.sessionNama || 'Calisthenics'}
            </div>
            <span className="text-[11px] text-[#8A929C]">
              {currentLog?.skillFocus ? `Skill: ${currentLog.skillFocus.toUpperCase()}` : 'Target Sesi'}
            </span>
          </div>

          <div className="card-surface p-4 border-[#2E3238]">
            <div className="flex items-center gap-1.5 text-xs text-[#8A929C] mb-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#FF7A03]" />
              <span>Set Tuntas</span>
            </div>
            <div className="text-xl sm:text-2xl font-extrabold text-[#EEF1F4]">
              {totalSets} Set
            </div>
            <span className="text-[11px] text-[#8A929C]">100% Tercapai</span>
          </div>

          <div className="card-surface p-4 border-[#2E3238]">
            <div className="flex items-center gap-1.5 text-xs text-[#8A929C] mb-1">
              <Flame className="w-3.5 h-3.5 text-[#FF7A03]" />
              <span>Total Reps / Detik</span>
            </div>
            <div className="text-xl sm:text-2xl font-extrabold text-[#EEF1F4]">
              {totalReps}
            </div>
            <span className="text-[11px] text-[#FF7A03] font-semibold">Kontraksi Efektif</span>
          </div>
        </div>

        {/* Isometric Personal Best Highlight (If applicable) */}
        {maxHoldInLog > 0 && (
          <div className="card-surface p-4 sm:p-5 mb-4 border-[#FF7A03]/40 bg-gradient-to-r from-[#23272D] to-[#1E2227] flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#FF7A03]/20 text-[#FF7A03] flex items-center justify-center font-bold">
                🔥
              </div>
              <div>
                <span className="text-xs font-bold text-[#FF7A03] uppercase tracking-wider block">
                  Rekor Tahanan (Isometric Hold)
                </span>
                <p className="text-xs text-[#8A929C]">Hold terlama yang dicapai pada sesi ini</p>
              </div>
            </div>
            <div className="text-right">
              <span className="text-2xl font-extrabold text-[#FF7A03] font-mono">
                {maxHoldInLog}s
              </span>
              <span className="text-[10px] text-[#FF7A03] block font-semibold">Tercatat di Database!</span>
            </div>
          </div>
        )}

        {/* Streak Booster Card */}
        <div className="card-surface p-5 mb-5 border-[#2E3238] bg-gradient-to-br from-[#23272D] to-[#15171A]">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-[#FF7A03]/20 text-[#FF7A03] flex items-center justify-center">
                <Flame className="w-6 h-6 fill-[#FF7A03]" />
              </div>
              <div>
                <h3 className="font-extrabold text-lg text-[#EEF1F4]">
                  Streak {streak} Hari 🔥
                </h3>
                <p className="text-xs text-[#8A929C]">
                  Disiplin konsisten di sela tugas sekolah!
                </p>
              </div>
            </div>
            <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#FF7A03] text-[#15171A]">
              +1 Hari
            </span>
          </div>
        </div>

        {/* First Time Reminder Offer */}
        {showReminderPrompt && (
          <div className="card-surface p-4 sm:p-5 mb-6 border-[#2E3238] bg-[#23272D]/80">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-9 h-9 rounded-xl bg-[#FF7A03]/20 text-[#FF7A03] flex items-center justify-center flex-shrink-0 mt-0.5">
                <Bell className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-[#EEF1F4]">
                  Mau diingatkan latihan harian di jam istirahat sekolah?
                </h4>
                <p className="text-xs text-[#8A929C] mt-0.5">
                  Bantu kamu tetap konsisten dan tidak lupa saat tugas menumpuk.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <Link
                href="/notifikasi"
                className="btn-brand px-4 py-2 text-xs font-bold flex-1 text-center"
              >
                Atur Pengingat
              </Link>
              <button
                type="button"
                onClick={() => setDismissReminderOffer(true)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-[#8A929C] hover:text-[#EEF1F4] transition-colors"
              >
                Nanti Saja
              </button>
            </div>
          </div>
        )}

        {/* CTAs */}
        <div className="space-y-2.5">
          <Link
            href="/skills"
            className="w-full btn-brand py-3.5 text-sm font-bold flex items-center justify-center gap-2 shadow-lg shadow-[#FF7A03]/20"
          >
            <Award className="w-4 h-4" />
            <span>Lihat Progres di Katalog Skill</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </Link>
          <Link
            href="/riwayat"
            className="w-full btn-outline py-3.5 text-sm font-semibold flex items-center justify-center gap-2"
          >
            <span>Lihat Riwayat Latihan</span>
          </Link>
          <Link
            href="/home"
            className="w-full text-center py-2 text-xs text-[#8A929C] hover:text-[#EEF1F4] transition-colors block"
          >
            Kembali ke Beranda
          </Link>
        </div>
      </MobileContainer>
    </div>
  );
}
