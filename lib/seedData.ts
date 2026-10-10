export interface Exercise {
  id: string;
  nama: string;
  area: string;
  targetDefault: string;
  langkah: string[];
  kesalahanUmum: string[];
  lebihMudah: string;
  lebihSulit: string;
  isTimeBased?: boolean;
}

export interface SessionExercise {
  exerciseId: string;
  sets: number;
  target: number;
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

export const SEED_EXERCISES: Exercise[] = [
  {
    id: 'ex1',
    nama: 'Push-up',
    area: 'Dada, bahu, triceps',
    targetDefault: '3 x 8',
    langkah: [
      'Tangan sedikit lebih lebar dari bahu, telapak rata di lantai.',
      'Badan lurus sempurna dari kepala hingga tumit, kencangkan perut.',
      'Turunkan dada mendekati lantai, posisi siku sekitar 45 derajat dari torso.',
      'Dorong kembali ke posisi awal sambil menghembuskan napas.'
    ],
    kesalahanUmum: [
      'Pinggul turun atau terlalu naik (tidak lurus).',
      'Siku terlalu melebar menjauh dari tubuh (90 derajat).'
    ],
    lebihMudah: 'Incline push-up',
    lebihSulit: 'Diamond push-up',
    isTimeBased: false,
  },
  {
    id: 'ex2',
    nama: 'Incline push-up',
    area: 'Dada, bahu, triceps',
    targetDefault: '3 x 10',
    langkah: [
      'Letakkan telapak tangan pada permukaan meja kokoh atau tepi ranjang/kursi stabil.',
      'Tubuh membentuk garis lurus diagonal, kaki menapak kuat di lantai.',
      'Turunkan dada perlahan menuju tepi tumpuan.',
      'Dorong tubuh kembali ke atas dengan kontrol penuh.'
    ],
    kesalahanUmum: [
      'Pinggul menekuk atau melorot saat turun.',
      'Bahu naik mendekati telinga saat mendorong.'
    ],
    lebihMudah: 'Letakkan tangan lebih tinggi (misal: dinding)',
    lebihSulit: 'Push-up standar lantai',
    isTimeBased: false,
  },
  {
    id: 'ex3',
    nama: 'Squat',
    area: 'Paha, glute',
    targetDefault: '3 x 12',
    langkah: [
      'Berdiri tegak dengan kaki dibuka selebar bahu.',
      'Dorong pinggul ke belakang seperti hendak duduk di kursi.',
      'Turun sampai paha sejajar dengan lantai, lutut searah jari kaki.',
      'Punggung tetap tegak dan dada terbuka, dorong melalui tumit untuk berdiri.'
    ],
    kesalahanUmum: [
      'Lutut menekuk ke dalam (knee valgus).',
      'Tumit terangkat dari lantai saat posisi bawah.'
    ],
    lebihMudah: 'Squat dengan berpegangan meja/pintu',
    lebihSulit: 'Squat tahan jeda 2 detik di bawah',
    isTimeBased: false,
  },
  {
    id: 'ex4',
    nama: 'Reverse lunge',
    area: 'Paha, glute',
    targetDefault: '3 x 8 per sisi',
    langkah: [
      'Berdiri tegak, lalu langkahkan satu kaki jauh ke belakang.',
      'Turunkan tubuh sampai kedua lutut membentuk sudut sekitar 90 derajat.',
      'Jaga torso tetap tegak dan pandangan lurus ke depan.',
      'Dorong kaki depan untuk kembali ke posisi berdiri, lalu ulangi sisi sebaliknya.'
    ],
    kesalahanUmum: [
      'Lutut depan melewati ujung jari kaki terlalu jauh.',
      'Badan condong terlalu condong ke depan.'
    ],
    lebihMudah: 'Lunge dengan berpegangan dinding',
    lebihSulit: 'Lunge dengan jeda 2 detik di bawah',
    isTimeBased: false,
  },
  {
    id: 'ex5',
    nama: 'Glute bridge',
    area: 'Glute, punggung bawah',
    targetDefault: '3 x 12',
    langkah: [
      'Berbaring telentang di matras dengan lutut ditekuk dan telapak kaki rata di lantai.',
      'Rentangkan tangan di samping tubuh untuk stabilitas.',
      'Angkat pinggul ke atas hingga bahu, pinggul, dan lutut membentuk satu garis lurus.',
      'Kencangkan otot glute di puncak gerakan selama 1 detik sebelum turun perlahan.'
    ],
    kesalahanUmum: [
      'Punggung melengkung berlebihan (hyperextension) di puncak.',
      'Dorongan bertumpu pada jari kaki bukan tumit.'
    ],
    lebihMudah: 'Angkat pinggul lebih rendah',
    lebihSulit: 'Single-leg glute bridge (satu kaki)',
    isTimeBased: false,
  },
  {
    id: 'ex6',
    nama: 'Plank',
    area: 'Core',
    targetDefault: '3 x 20 detik',
    langkah: [
      'Letakkan siku tepat di bawah bahu, lengan bawah menempel lantai.',
      'Kaki lurus ke belakang dengan tumpuan pada ujung jari kaki.',
      'Kunci otot perut, glute, dan paha agar tubuh membentuk satu garis lurus datar.',
      'Pertahankan pernapasan teratur dan pandangan ke arah lantai.'
    ],
    kesalahanUmum: [
      'Pinggul melorot ke bawah (membebani punggung bawah).',
      'Bokong terlalu diangkat tinggi ke atas.'
    ],
    lebihMudah: 'Plank bertumpu pada lutut',
    lebihSulit: 'Plank durasi lebih lama / Single arm tap',
    isTimeBased: true,
  },
  {
    id: 'ex7',
    nama: 'Dead bug',
    area: 'Core',
    targetDefault: '3 x 8 per sisi',
    langkah: [
      'Berbaring telentang dengan lengan tegak lurus ke atas dan lutut ditekuk 90 derajat.',
      'Tekan punggung bawah rapat menempel ke lantai sepanjang gerakan.',
      'Turunkan tangan kanan ke belakang dan kaki kiri ke depan secara bersamaan perlahan.',
      'Kembali ke posisi awal lalu gantikan dengan sisi diagonal berlawanan.'
    ],
    kesalahanUmum: [
      'Punggung bawah terangkat dari lantai saat kaki turun.',
      'Gerakan diayun terlalu cepat tanpa kontrol perut.'
    ],
    lebihMudah: 'Gerakkan kaki saja secara bergantian',
    lebihSulit: 'Tambah jeda tahan 2 detik di ekstensi',
    isTimeBased: false,
  },
  {
    id: 'ex8',
    nama: 'Superman',
    area: 'Punggung',
    targetDefault: '3 x 10',
    langkah: [
      'Berbaring tengkurap dengan lengan lurus ke depan dan kaki lurus ke belakang.',
      'Angkat dada, lengan, dan paha beberapa sentimeter dari lantai secara bersamaan.',
      'Tahan kontraksi di punggung atas dan glute selama 2 detik.',
      'Turunkan perlahan dengan leher tetap netral (jangan mendongak).'
    ],
    kesalahanUmum: [
      'Kepala mendongak ke atas (menekan leher belakang).',
      'Menghentak tubuh secara eksplosif.'
    ],
    lebihMudah: 'Angkat lengan saja atau kaki saja bergantian',
    lebihSulit: 'Tahan pose selama 4–5 detik per repetisi',
    isTimeBased: false,
  },
  {
    id: 'ex9',
    nama: 'Inverted row',
    area: 'Punggung, biseps',
    targetDefault: '3 x 8',
    langkah: [
      'Berbaring di bawah meja yang sangat kokoh atau tiang rendah.',
      'Pegang tepi meja/bar dengan genggaman overhand selebar bahu.',
      'Pertahankan tubuh lurus dari kepala sampai tumit.',
      'Tarik dada mendekati permukaan meja/bar dengan mengencangkan belikat punggung.'
    ],
    kesalahanUmum: [
      'Menggunakan meja yang goyang atau tidak kuat (Bahaya!).',
      'Pinggul melorot ke lantai saat menarik.'
    ],
    lebihMudah: 'Tekuk kedua lutut (kaki 90 derajat)',
    lebihSulit: 'Luruskan kaki lebih jauh ke depan / elevasi tumit',
    isTimeBased: false,
  },
  {
    id: 'ex10',
    nama: 'Push-up lutut',
    area: 'Dada, bahu, triceps',
    targetDefault: '3 x 8',
    langkah: [
      'Posisikan tangan sedikit lebih lebar dari bahu di lantai.',
      'Tumpukan bagian bawah tubuh pada lutut (bukan tempurung lutut langsung, gunakan alas).',
      'Badan membentuk garis lurus dari puncak kepala hingga lutut.',
      'Turunkan dada perlahan mendekati lantai lalu dorong kembali ke atas.'
    ],
    kesalahanUmum: [
      'Pinggul menekuk ke belakang (posisi merangkak).',
      'Siku terlalu melebar ke samping tubuh.'
    ],
    lebihMudah: 'Incline push-up di meja',
    lebihSulit: 'Push-up standar lantai',
    isTimeBased: false,
  },
];

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
