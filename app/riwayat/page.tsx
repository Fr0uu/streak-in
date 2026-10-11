'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  History as HistoryIcon,
  Flame,
  CheckCircle2,
  Clock,
  ChevronDown,
  ChevronUp,
  Play,
  Calendar,
} from 'lucide-react';
import { useWorkout } from '@/context/WorkoutContext';
import { SEED_EXERCISES } from '@/src/data/seedExercises';
import { MobileContainer } from '@/components/layout/MobileContainer';

export default function HistoryPage() {
  const { logs, streak, todaySession } = useWorkout();
  const [expandedLogId, setExpandedLogId] = useState<string | null>(null);

  React.useEffect(() => {
    if (logs.length > 0 && !expandedLogId) {
      setExpandedLogId(logs[0].id);
    }
  }, [logs, expandedLogId]);

  const toggleExpand = (id: string) => {
    setExpandedLogId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="min-h-screen bg-[#15171A] text-[#EEF1F4]">
      <MobileContainer maxWidth="4xl">
        {/* Header Title */}
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#EEF1F4]">
            Riwayat & Log Latihan
          </h1>
          <p className="text-xs sm:text-sm text-[#8A929C] mt-0.5">
            Pantau konsistensi dan perkembangan repetisi calisthenics harianmu.
          </p>
        </div>

        {/* Top Summary Cards */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="card-surface p-4 sm:p-5 border-[#2E3238]">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-[#8A929C] font-semibold">Total Sesi Selesai</span>
              <CheckCircle2 className="w-4 h-4 text-[#FF7A03]" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#EEF1F4]">
              {logs.length} <span className="text-sm font-normal text-[#8A929C]">Sesi</span>
            </div>
            <span className="text-[11px] text-[#FF7A03]">Disiplin tercatat</span>
          </div>

          <div className="card-surface p-4 sm:p-5 border-[#2E3238]">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-[#8A929C] font-semibold">Streak Saat Ini</span>
              <Flame className="w-4 h-4 text-[#FF7A03]" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#EEF1F4]">
              {streak} <span className="text-sm font-normal text-[#8A929C]">Hari 🔥</span>
            </div>
            <span className="text-[11px] text-[#8A929C]">Konsisten setiap hari</span>
          </div>
        </div>

        {/* Workout Logs List */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#8A929C]">
              Daftar Log Latihan ({logs.length})
            </h2>
          </div>

          {logs.length === 0 ? (
            /* Empty State */
            <div className="card-surface p-8 sm:p-12 text-center border-[#2E3238]">
              <div className="w-16 h-16 rounded-2xl bg-[#23272D] border border-[#2E3238] flex items-center justify-center text-[#8A929C] mx-auto mb-4">
                <HistoryIcon className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-base sm:text-lg text-[#EEF1F4] mb-1">
                Belum ada riwayat latihan
              </h3>
              <p className="text-xs sm:text-sm text-[#8A929C] max-w-sm mx-auto mb-6">
                Mulai sesi pertamamu hari ini. Hanya 10–15 menit untuk membentuk kebiasaan bugar.
              </p>
              <Link
                href={`/latihan/${todaySession.id}`}
                className="btn-brand px-6 py-3.5 text-sm font-bold inline-flex items-center gap-2 shadow-lg shadow-[#FF7A03]/20"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>Mulai Sesi Pertamamu</span>
              </Link>
            </div>
          ) : (
            /* Historical Logs with Accordion */
            <div className="space-y-3">
              {logs.map((log) => {
                const isExpanded = expandedLogId === log.id;
                const durMin = Math.max(1, Math.round(log.durasiDetik / 60));

                return (
                  <div
                    key={log.id}
                    className="card-surface border-[#2E3238] overflow-hidden transition-all"
                  >
                    {/* Log Card Header */}
                    <div
                      onClick={() => toggleExpand(log.id)}
                      className="p-4 sm:p-5 flex items-center justify-between gap-3 cursor-pointer hover:bg-[#2A2F37] transition-colors"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#FF7A03] mt-1.5 flex-shrink-0" />
                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <h3 className="font-bold text-sm sm:text-base text-[#EEF1F4]">
                              {log.sessionNama}
                            </h3>
                            <span className="text-[11px] font-semibold text-[#FF7A03] bg-[#FF7A03]/10 px-2 py-0.5 rounded">
                              Tuntas
                            </span>
                            {log.skillFocus && (
                              <span className="text-[11px] font-semibold text-[#FF7A03] bg-[#FF7A03]/10 border border-[#FF7A03]/25 px-2 py-0.5 rounded flex items-center gap-1">
                                🎯 Skill: {log.skillFocus.toUpperCase()}
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-3 text-xs text-[#8A929C] mt-1">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3.5 h-3.5" />
                              {log.tanggal}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3.5 h-3.5" />
                              {durMin} Menit
                            </span>
                            <span>{log.setsCompleted.length} Set</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="text-xs font-bold text-[#EEF1F4] hidden sm:inline">
                          {log.setsCompleted.length} Set Selesai
                        </span>
                        <div className="w-8 h-8 rounded-lg bg-[#15171A] border border-[#2E3238] flex items-center justify-center text-[#8A929C]">
                          {isExpanded ? (
                            <ChevronUp className="w-4 h-4" />
                          ) : (
                            <ChevronDown className="w-4 h-4" />
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Accordion Expanded Details */}
                    {isExpanded && (
                      <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-1 border-t border-[#2E3238] bg-[#1E2227]/50">
                        <div className="text-[11px] font-bold text-[#8A929C] uppercase tracking-wider mb-2.5">
                          Rincian Gerakan, Tahanan Statis (Isometric) & Repetisi per Set:
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {(() => {
                            // Group sets by exercise with isometric awareness
                            interface ExGroup {
                              id: string;
                              name: string;
                              isIsometric: boolean;
                              values: number[];
                            }
                            const grouped: Record<string, ExGroup> = {};
                            log.setsCompleted.forEach((s) => {
                              const exMeta = SEED_EXERCISES.find((e) => e.id === s.exerciseId);
                              const isIso = Boolean(s.isIsometric || exMeta?.isTimeBased);
                              if (!grouped[s.exerciseId]) {
                                grouped[s.exerciseId] = {
                                  id: s.exerciseId,
                                  name: s.exerciseName || exMeta?.nama || s.exerciseId,
                                  isIsometric: isIso,
                                  values: [],
                                };
                              }
                              grouped[s.exerciseId].values.push(s.nilai);
                            });

                            return Object.values(grouped).map((item) => (
                              <div
                                key={item.id}
                                className="p-3 rounded-xl bg-[#15171A] border border-[#2E3238] flex items-center justify-between text-xs"
                              >
                                <div className="flex items-center gap-1.5 truncate pr-2">
                                  <span className="font-semibold text-[#EEF1F4] truncate">
                                    {item.name}
                                  </span>
                                  {item.isIsometric && (
                                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#FF7A03]/15 text-[#FF7A03] font-mono flex-shrink-0">
                                      Hold
                                    </span>
                                  )}
                                </div>
                                <span
                                  className="font-mono font-bold flex-shrink-0 text-[#FF7A03]"
                                >
                                  {item.values
                                    .map((v) => (item.isIsometric ? `${v}s` : `${v} reps`))
                                    .join(', ')}
                                </span>
                              </div>
                            ));
                          })()}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </MobileContainer>
    </div>
  );
}

