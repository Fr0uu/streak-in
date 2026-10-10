'use client';

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  ArrowLeft,
  Award,
  CheckCircle2,
  Clock,
  Flame,
  AlertTriangle,
  Play,
  ShieldCheck,
  ChevronRight,
  Info,
  Sparkles,
} from 'lucide-react';
import { useWorkout } from '@/context/WorkoutContext';
import { SEED_SKILLS } from '@/lib/seedData';
import { MobileContainer } from '@/components/layout/MobileContainer';

export default function SkillDetailPage() {
  const params = useParams();
  const router = useRouter();
  const skillId = (params?.skillId as string) || '';
  const { getSkillProgress, updateSkillStage } = useWorkout();

  const skill = SEED_SKILLS.find((s) => s.id === skillId) || SEED_SKILLS[0];
  const userProg = getSkillProgress(skill.id);
  const currentStageNum = userProg.currentStage || 1;

  // Selected stage tab in timeline
  const [selectedStageTab, setSelectedStageTab] = useState<number>(1);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  React.useEffect(() => {
    setSelectedStageTab(currentStageNum);
  }, [currentStageNum]);

  const selectedStageData =
    skill.stages.find((s) => s.stageNumber === selectedStageTab) || skill.stages[0];

  const handleAdvanceStage = async (newStage: number) => {
    await updateSkillStage(skill.id, newStage);
    setSelectedStageTab(newStage);
    setToastMessage(`Selamat! Stage aktifmu kini naik ke Stage ${newStage}: ${skill.stages[newStage - 1]?.nama || ''}`);
    setTimeout(() => setToastMessage(null), 4000);
  };

  return (
    <div className="min-h-screen bg-[#15171A] text-[#EEF1F4] pb-20">
      <MobileContainer maxWidth="4xl">
        {/* Back Link */}
        <div className="mb-4">
          <Link
            href="/skills"
            className="inline-flex items-center gap-1.5 text-xs text-[#8A929C] hover:text-[#EEF1F4] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Kembali ke Katalog Skill</span>
          </Link>
        </div>

        {/* Success Toast Banner */}
        {toastMessage && (
          <div className="p-4 rounded-xl bg-[#C8F135]/15 border border-[#C8F135]/40 text-[#C8F135] text-xs font-semibold flex items-center gap-2 mb-5 animate-in fade-in duration-200">
            <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
            <span>{toastMessage}</span>
          </div>
        )}

        {/* Skill Hero Header */}
        <div className="card-surface p-5 sm:p-7 border-[#2E3238] mb-6 relative overflow-hidden">
          <div
            className="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl pointer-events-none opacity-20"
            style={{ backgroundColor: skill.badgeColor }}
          />

          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
            <div className="flex items-center gap-2">
              <span
                className="text-xs font-bold px-3 py-1 rounded-full border"
                style={{
                  backgroundColor: `${skill.badgeColor}15`,
                  color: skill.badgeColor,
                  borderColor: `${skill.badgeColor}40`,
                }}
              >
                Level: {skill.level}
              </span>
              <span className="text-xs text-[#8A929C] bg-[#15171A] px-2.5 py-1 rounded-lg border border-[#2E3238]">
                {skill.kategori}
              </span>
            </div>

            <span className="text-xs text-[#8A929C] flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              Estimasi: {skill.durasiMingguEstimasi}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#EEF1F4] mb-2">
            {skill.nama}
          </h1>
          <p className="text-xs sm:text-sm text-[#8A929C] leading-relaxed max-w-2xl mb-4">
            {skill.deskripsi}
          </p>

          {/* User Progress Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-3.5 rounded-xl bg-[#15171A] border border-[#2E3238]">
            <div>
              <span className="text-[11px] text-[#8A929C] block">Stage Aktifmu</span>
              <span className="text-sm sm:text-base font-extrabold text-[#C8F135]">
                Stage {currentStageNum} / {skill.stages.length}
              </span>
            </div>

            <div>
              <span className="text-[11px] text-[#8A929C] block">Rekor Hold Terbaik (PB)</span>
              <span className="text-sm sm:text-base font-extrabold text-[#FF7A3D] flex items-center gap-1">
                <Flame className="w-4 h-4 fill-[#FF7A3D]" />
                {userProg.bestHoldSec || 0} Detik
              </span>
            </div>

            <div className="col-span-2 sm:col-span-1 flex items-center justify-start sm:justify-end">
              <span className="text-[11px] text-[#8A929C]">
                Target: {skill.stages[skill.stages.length - 1]?.targetHoldSec} dtk Full Hold
              </span>
            </div>
          </div>
        </div>

        {/* 5-Stage Interactive Progression Timeline */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#8A929C]">
              Linimasa 5 Stage Progresi (Klik Stage untuk Rincian)
            </h2>
            <span className="text-[11px] text-[#C8F135] font-semibold">
              Stage {selectedStageTab} Terpilih
            </span>
          </div>

          <div className="grid grid-cols-5 gap-2">
            {skill.stages.map((st) => {
              const isSelected = selectedStageTab === st.stageNumber;
              const isCurrent = currentStageNum === st.stageNumber;
              const isPassed = currentStageNum > st.stageNumber;

              return (
                <button
                  key={st.stageNumber}
                  type="button"
                  onClick={() => setSelectedStageTab(st.stageNumber)}
                  className={`p-2.5 sm:p-3.5 rounded-xl border text-center transition-all flex flex-col items-center justify-center gap-1 min-h-[64px] ${
                    isSelected
                      ? 'bg-[#23272D] border-[#C8F135] shadow-lg shadow-[#C8F135]/15'
                      : isPassed
                      ? 'bg-[#15171A] border-[#C8F135]/30 opacity-90'
                      : 'bg-[#15171A] border-[#2E3238] opacity-60 hover:opacity-100'
                  }`}
                >
                  <div className="flex items-center justify-center">
                    {isPassed ? (
                      <CheckCircle2 className="w-4 h-4 text-[#C8F135]" />
                    ) : (
                      <span
                        className={`text-xs font-extrabold w-5 h-5 rounded-full flex items-center justify-center ${
                          isCurrent
                            ? 'bg-[#C8F135] text-[#15171A]'
                            : 'bg-[#23272D] text-[#8A929C]'
                        }`}
                      >
                        {st.stageNumber}
                      </span>
                    )}
                  </div>
                  <span className="text-[10px] sm:text-xs font-bold truncate max-w-full text-[#EEF1F4]">
                    {st.stageNumber === 1 ? 'Dasar' : st.stageNumber === 5 ? 'Mahir' : `Stage ${st.stageNumber}`}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Stage Detail Card */}
        <div className="card-surface p-5 sm:p-7 border-[#2E3238] mb-8 space-y-6">
          {/* Stage Title & Target Badge */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#2E3238]">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold text-[#C8F135] uppercase tracking-wider">
                  Stage {selectedStageData.stageNumber} dari 5
                </span>
                {currentStageNum === selectedStageData.stageNumber && (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#C8F135] text-[#15171A]">
                    Stage Aktifmu
                  </span>
                )}
                {currentStageNum > selectedStageData.stageNumber && (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#C8F135]/20 text-[#C8F135]">
                    Lulus ✓
                  </span>
                )}
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#EEF1F4]">
                {selectedStageData.nama}
              </h3>
              <p className="text-xs sm:text-sm text-[#8A929C] mt-1">
                {selectedStageData.deskripsi}
              </p>
            </div>

            <div className="p-3 rounded-xl bg-[#15171A] border border-[#2E3238] flex items-center gap-3 flex-shrink-0">
              <div className="w-10 h-10 rounded-lg bg-[#FF7A3D]/20 text-[#FF7A3D] flex items-center justify-center font-bold">
                ⏱️
              </div>
              <div>
                <span className="text-[11px] text-[#8A929C] block">Target Tahanan</span>
                <span className="font-extrabold text-sm sm:text-base text-[#EEF1F4]">
                  {selectedStageData.targetHoldSec} Detik × {selectedStageData.targetSets} Set
                </span>
              </div>
            </div>
          </div>

          {/* Syarat Lulus Box */}
          <div className="p-3.5 rounded-xl bg-[#C8F135]/10 border border-[#C8F135]/30 flex items-start gap-3">
            <Sparkles className="w-4 h-4 text-[#C8F135] flex-shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-bold text-[#C8F135] block">Syarat Lulus Stage:</span>
              <p className="text-xs text-[#EEF1F4] mt-0.5">{selectedStageData.syaratLulus}</p>
            </div>
          </div>

          {/* Poin Teknik Utama */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#8A929C] mb-3">
              Langkah Teknik Utama:
            </h4>
            <div className="space-y-2.5">
              {selectedStageData.langkah.map((step, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#EEF1F4] leading-relaxed">
                  <span className="w-5 h-5 rounded-full bg-[#23272D] border border-[#2E3238] text-[11px] font-bold text-[#C8F135] flex items-center justify-center flex-shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Peringatan Keselamatan & Kesalahan Umum */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-[#FF7A3D]/10 border border-[#FF7A3D]/30 text-xs">
              <div className="flex items-center gap-1.5 text-[#FF7A3D] font-bold mb-2">
                <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                <span>Kesalahan Umum yang Dihindari:</span>
              </div>
              <ul className="space-y-1.5 text-[#EEF1F4]/90 pl-5 list-disc">
                {selectedStageData.kesalahanUmum.map((m, idx) => (
                  <li key={idx}>{m}</li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-[#23272D] border border-[#2E3238] text-xs">
              <div className="flex items-center gap-1.5 text-[#C8F135] font-bold mb-2">
                <ShieldCheck className="w-4 h-4 flex-shrink-0" />
                <span>Tips Aman Siswa:</span>
              </div>
              <p className="text-[#8A929C] leading-relaxed">{selectedStageData.tipsAman}</p>
            </div>
          </div>

          {/* Opsi Regresi & Progresi */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="p-3 rounded-xl bg-[#15171A] border border-[#2E3238] text-xs">
              <span className="text-[11px] text-[#8A929C] block font-semibold mb-0.5">Opsi Lebih Mudah (Regresi):</span>
              <p className="font-semibold text-[#EEF1F4]">{selectedStageData.lebihMudah}</p>
            </div>
            <div className="p-3 rounded-xl bg-[#15171A] border border-[#2E3238] text-xs">
              <span className="text-[11px] text-[#8A929C] block font-semibold mb-0.5">Opsi Lebih Sulit (Progresi):</span>
              <p className="font-semibold text-[#EEF1F4]">{selectedStageData.lebihSulit}</p>
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-[#2E3238]">
            <Link
              href={`/latihan/s_${skill.id.replace('-', '')}_${selectedStageData.stageNumber <= 2 ? selectedStageData.stageNumber : 1}`}
              className="w-full sm:flex-1 btn-brand py-3.5 text-sm font-bold flex items-center justify-center gap-2 shadow-lg shadow-[#C8F135]/20"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>Mulai Latihan Stage {selectedStageData.stageNumber} Sekarang</span>
            </Link>

            {currentStageNum === selectedStageData.stageNumber && selectedStageData.stageNumber < skill.stages.length && (
              <button
                type="button"
                onClick={() => handleAdvanceStage(selectedStageData.stageNumber + 1)}
                className="w-full sm:w-auto btn-outline px-5 py-3.5 text-xs font-bold flex items-center justify-center gap-1.5 text-[#C8F135] border-[#C8F135]/40 hover:bg-[#C8F135]/10"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Naik ke Stage {selectedStageData.stageNumber + 1}</span>
              </button>
            )}

            {currentStageNum !== selectedStageData.stageNumber && (
              <button
                type="button"
                onClick={() => handleAdvanceStage(selectedStageData.stageNumber)}
                className="w-full sm:w-auto btn-outline px-5 py-3.5 text-xs font-bold text-[#8A929C] hover:text-[#EEF1F4]"
              >
                Jadikan Stage Aktif
              </button>
            )}
          </div>
        </div>
      </MobileContainer>
    </div>
  );
}

