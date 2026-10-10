import { WorkoutSession } from '../types';

export const SEED_SESSIONS: WorkoutSession[] = [
  {
    id: 's1',
    nama: 'Push dasar',
    durasiMenit: 10,
    fokus: 'Push',
    exercises: [
      { exerciseId: 'ex2', sets: 3, target: 8, unit: 'reps', istirahatDetik: 45 },
      { exerciseId: 'ex10', sets: 3, target: 5, unit: 'reps', istirahatDetik: 45 },
      { exerciseId: 'ex6', sets: 3, target: 20, unit: 'detik', istirahatDetik: 30 },
    ],
  },
  {
    id: 's2',
    nama: 'Legs dasar',
    durasiMenit: 10,
    fokus: 'Legs',
    exercises: [
      { exerciseId: 'ex3', sets: 3, target: 12, unit: 'reps', istirahatDetik: 45 },
      { exerciseId: 'ex4', sets: 3, target: 8, unit: 'reps', istirahatDetik: 45 },
      { exerciseId: 'ex5', sets: 3, target: 12, unit: 'reps', istirahatDetik: 45 },
    ],
  },
  {
    id: 's3',
    nama: 'Core dan punggung',
    durasiMenit: 10,
    fokus: 'Pull dan core',
    exercises: [
      { exerciseId: 'ex8', sets: 3, target: 10, unit: 'reps', istirahatDetik: 45 },
      { exerciseId: 'ex7', sets: 3, target: 8, unit: 'reps', istirahatDetik: 30 },
      { exerciseId: 'ex6', sets: 3, target: 20, unit: 'detik', istirahatDetik: 30 },
    ],
  },
  {
    id: 's4',
    nama: 'Push 15',
    durasiMenit: 15,
    fokus: 'Push',
    exercises: [
      { exerciseId: 'ex1', sets: 3, target: 8, unit: 'reps', istirahatDetik: 45 },
      { exerciseId: 'ex2', sets: 3, target: 10, unit: 'reps', istirahatDetik: 45 },
      { exerciseId: 'ex7', sets: 3, target: 8, unit: 'reps', istirahatDetik: 30 },
      { exerciseId: 'ex6', sets: 3, target: 30, unit: 'detik', istirahatDetik: 30 },
    ],
  },
  {
    id: 's5',
    nama: 'Legs 15',
    durasiMenit: 15,
    fokus: 'Legs',
    exercises: [
      { exerciseId: 'ex3', sets: 4, target: 12, unit: 'reps', istirahatDetik: 45 },
      { exerciseId: 'ex4', sets: 3, target: 10, unit: 'reps', istirahatDetik: 45 },
      { exerciseId: 'ex5', sets: 3, target: 15, unit: 'reps', istirahatDetik: 45 },
      { exerciseId: 'ex6', sets: 2, target: 30, unit: 'detik', istirahatDetik: 30 },
    ],
  },
  {
    id: 's6',
    nama: 'Pull dan core 15',
    durasiMenit: 15,
    fokus: 'Pull dan core',
    exercises: [
      { exerciseId: 'ex9', sets: 3, target: 8, unit: 'reps', istirahatDetik: 45 },
      { exerciseId: 'ex8', sets: 3, target: 12, unit: 'reps', istirahatDetik: 45 },
      { exerciseId: 'ex7', sets: 3, target: 10, unit: 'reps', istirahatDetik: 30 },
      { exerciseId: 'ex6', sets: 2, target: 30, unit: 'detik', istirahatDetik: 30 },
    ],
  },
  {
    id: 's7',
    nama: 'Full body A',
    durasiMenit: 30,
    fokus: 'Full body',
    exercises: [
      { exerciseId: 'ex1', sets: 4, target: 8, unit: 'reps', istirahatDetik: 45 },
      { exerciseId: 'ex3', sets: 4, target: 12, unit: 'reps', istirahatDetik: 45 },
      { exerciseId: 'ex9', sets: 3, target: 8, unit: 'reps', istirahatDetik: 45 },
      { exerciseId: 'ex4', sets: 3, target: 10, unit: 'reps', istirahatDetik: 45 },
      { exerciseId: 'ex6', sets: 3, target: 30, unit: 'detik', istirahatDetik: 30 },
      { exerciseId: 'ex7', sets: 3, target: 10, unit: 'reps', istirahatDetik: 30 },
    ],
  },
  {
    id: 's8',
    nama: 'Full body B',
    durasiMenit: 30,
    fokus: 'Full body',
    exercises: [
      { exerciseId: 'ex2', sets: 4, target: 10, unit: 'reps', istirahatDetik: 45 },
      { exerciseId: 'ex4', sets: 4, target: 10, unit: 'reps', istirahatDetik: 45 },
      { exerciseId: 'ex8', sets: 3, target: 12, unit: 'reps', istirahatDetik: 45 },
      { exerciseId: 'ex5', sets: 4, target: 15, unit: 'reps', istirahatDetik: 45 },
      { exerciseId: 'ex6', sets: 3, target: 40, unit: 'detik', istirahatDetik: 30 },
      { exerciseId: 'ex7', sets: 3, target: 12, unit: 'reps', istirahatDetik: 30 },
    ],
  },
  {
    id: 's9',
    nama: 'Pull dan legs 30',
    durasiMenit: 30,
    fokus: 'Pull dan core',
    exercises: [
      { exerciseId: 'ex9', sets: 4, target: 8, unit: 'reps', istirahatDetik: 45 },
      { exerciseId: 'ex3', sets: 4, target: 15, unit: 'reps', istirahatDetik: 45 },
      { exerciseId: 'ex5', sets: 3, target: 15, unit: 'reps', istirahatDetik: 45 },
      { exerciseId: 'ex8', sets: 3, target: 12, unit: 'reps', istirahatDetik: 45 },
      { exerciseId: 'ex7', sets: 3, target: 10, unit: 'reps', istirahatDetik: 30 },
    ],
  },
];
