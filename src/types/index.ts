export interface User {
  id: string;
  nama: string;
  email: string;
  kataSandi: string;
}

export interface Exercise {
  id: string;
  nama: string;
  area: 'Dada, bahu, triceps' | 'Paha, glute' | 'Core' | 'Punggung' | 'Punggung, biseps' | 'Glute, punggung bawah';
  targetDefault: string; // e.g. "3 x 8" or "3 x 20 dtk"
  langkah: string[];
  kesalahanUmum: string[];
  lebihMudah: string;
  lebihSulit: string;
  mediaPlaceholder?: string;
  isTimeBased?: boolean;
}

export interface SessionExercise {
  exerciseId: string;
  sets: number;
  target: number; // reps count or seconds
  unit: 'reps' | 'detik';
  istirahatDetik: number;
}

export interface WorkoutSession {
  id: string;
  nama: string;
  durasiMenit: number;
  fokus: 'Push' | 'Legs' | 'Pull dan core' | 'Full body';
  exercises: SessionExercise[];
}

export interface UserLibrary {
  userId: string;
  durasi: number[]; // e.g. [10, 15]
  fokus: string[];  // e.g. ["Push", "Full body"]
  sessionIds: string[];
}

export interface CompletedSet {
  exerciseId: string;
  noSet: number;
  nilai: number; // reps or seconds
  selesai: boolean;
}

export interface ActiveWorkout {
  userId: string;
  sessionId: string;
  mulai: string; // ISO string
  exerciseIndex: number;
  completedSets: CompletedSet[];
}

export interface WorkoutLog {
  id: string;
  userId: string;
  sessionId: string;
  sessionNama: string;
  tanggal: string; // YYYY-MM-DD
  durasiDetik: number;
  setsCompleted: CompletedSet[];
}

export interface ReminderSetting {
  userId: string;
  aktif: boolean;
  jam: string; // "16:00"
}
