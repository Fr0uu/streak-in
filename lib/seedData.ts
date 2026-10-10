export interface SkillStage {
  stageNumber: number; // 1 to 5
  nama: string;
  deskripsi: string;
  targetHoldSec: number;
  targetSets: number;
  syaratLulus: string;
  langkah: string[];
  kesalahanUmum: string[];
  tipsAman: string;
  lebihMudah: string;
  lebihSulit: string;
}

export interface Skill {
  id: string; // 'l-sit', 'handstand', 'front-lever'
  nama: string;
  kategori: string;
  level: 'Pemula' | 'Menengah' | 'Lanjutan';
  badgeColor: string;
  deskripsi: string;
  manfaatSiswa: string;
  durasiMingguEstimasi: string;
  stages: SkillStage[];
}

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
  exerciseName?: string;
  sets: number;
  target: number; // reps or seconds
  unit: 'reps' | 'detik';
  istirahatDetik: number;
  isIsometric?: boolean;
}

export interface WorkoutSession {
  id: string;
  nama: string;
  durasiMenit: number;
  fokus: 'Push' | 'Legs' | 'Pull dan core' | 'Full body' | 'Skill Mastery';
  skillId?: string;
  stageNumber?: number;
  exercises: SessionExercise[];
}

// ==========================================
// 1. DATA 3 SKILL UTAMA & 5 STAGE PROGRESI
// ==========================================
export const SEED_SKILLS: Skill[] = [
  {
    id: 'l-sit',
    nama: 'L-Sit Progression',
    kategori: 'Core & Hip Flexors',
    level: 'Pemula',
    badgeColor: '#C8F135',
    deskripsi: 'Fondasi kekuatan inti statis dan bahu terkunci untuk menopang seluruh tubuh membentuk huruf L sempurna.',
    manfaatSiswa: 'Memperbaiki postur duduk bungkuk saat belajar di sekolah & memperkuat otot perut bawah tanpa alat gym.',
    durasiMingguEstimasi: '4–8 Minggu',
    stages: [
      {
        stageNumber: 1,
        nama: 'Support Hold',
        deskripsi: 'Menopang tubuh di atas kursi/parallette dengan lengan lurus terkunci dan bahu ditekan ke bawah (depresi skapula).',
        targetHoldSec: 30,
        targetSets: 3,
        syaratLulus: 'Tahan 30 detik x 3 set dengan bahu kokoh tidak membungkuk',
        langkah: [
          'Letakkan telapak tangan pada dua kursi stabil atau parallettes setinggi pinggang.',
          'Kunci siku lurus 100%, dorong bahu menjauh dari telinga ke arah bawah.',
          'Kencangkan perut dan tahan tubuh melayang dengan kaki sedikit ditekuk atau rileks.',
          'Bernapas teratur, jangan menahan napas.'
        ],
        kesalahanUmum: [
          'Bahu terangkat membungkuk ke atas mendekati telinga (leher tenggelam).',
          'Siku menekuk karena lelah.'
        ],
        tipsAman: 'Pastikan dua kursi atau tumpuan kokoh tidak bergeser di atas lantai.',
        lebihMudah: 'Foot-assisted Support Hold (ujung jari kaki menapak ringan di lantai).',
        lebihSulit: 'Support Hold dengan mengangkat satu lutut bergantian.'
      },
      {
        stageNumber: 2,
        nama: 'Tuck L-Sit (Kaki Menekuk)',
        deskripsi: 'Menopang tubuh dengan kedua lutut ditarik rapat ke dada, melayang seimbang tanpa menyentuh lantai.',
        targetHoldSec: 20,
        targetSets: 3,
        syaratLulus: 'Tahan 20 detik x 3 set dengan lutut tidak melorot',
        langkah: [
          'Dari posisi support hold, dorong telapak tangan kuat ke bawah.',
          'Tarik kedua lutut ke arah dada setinggi mungkin.',
          'Pertahankan panggul sejajar atau sedikit di depan garis tangan.',
          'Tahan kontraksi perut dan paha depan selama target detik.'
        ],
        kesalahanUmum: [
          'Punggung atas terlalu bungkuk hingga dada tertekan.',
          'Lutut perlahan melorot turun mendekati lantai.'
        ],
        tipsAman: 'Kunci otot perut bawah (transversus abdominis) seperti saat menahan batuk.',
        lebihMudah: 'One-Leg Tuck (satu kaki ditekuk di dada, satu kaki menjulur ke bawah menyentuh lantai).',
        lebihSulit: 'Advanced Tuck (buka sudut paha 90 derajat dari torso).'
      },
      {
        stageNumber: 3,
        nama: 'One-Leg L-Sit (Satu Kaki Lurus)',
        deskripsi: 'Satu kaki dijulurkan lurus sempurna sejajar lantai, sementara satu kaki tetap ditarik di dada.',
        targetHoldSec: 15,
        targetSets: 3,
        syaratLulus: 'Tahan 15 detik per kaki x 3 set tanpa kaki turun dari garis horizontal',
        langkah: [
          'Masuk ke posisi Tuck L-Sit di atas tumpuan.',
          'Julurkan satu kaki lurus ke depan sejajar lantai dengan ujung jari runcing (pointed toes).',
          'Kencangkan otot quadriceps kaki yang lurus agar lutut tidak menekuk.',
          'Ganti kaki yang dijulurkan pada set berikutnya.'
        ],
        kesalahanUmum: [
          'Kaki yang lurus turun di bawah ketinggian panggul.',
          'Torso rebah ke belakang untuk mengimbangi beban.'
        ],
        tipsAman: 'Regangkan otot hamstring sebelum latihan untuk mencegah kram paha depan.',
        lebihMudah: 'Julurkan kaki pada sudut 45 derajat (sedikit lebih rendah).',
        lebihSulit: 'Ganti kaki bergantian secara dinamis di udara (flutter kicks).'
      },
      {
        stageNumber: 4,
        nama: 'Straddle L-Sit',
        deskripsi: 'Kedua kaki lurus dan dibuka lebar ke samping kiri-kanan untuk memperpendek tuas beban sebelum L-sit penuh.',
        targetHoldSec: 15,
        targetSets: 3,
        syaratLulus: 'Tahan 15 detik x 3 set dengan lutut terkunci lurus',
        langkah: [
          'Tekan tangan kuat ke bawah pada tumpuan atau lantai.',
          'Buka kedua kaki lurus melebar ke samping kiri dan kanan.',
          'Angkat kedua kaki sejajar lantai dengan mengencangkan paha luar dan perut.',
          'Kunci siku dan dorong bahu ke bawah.'
        ],
        kesalahanUmum: [
          'Lutut menekuk karena keterbatasan kelenturan paha belakang.',
          'Panggul menyentuh lantai.'
        ],
        tipsAman: 'Lakukan peregangan straddle/pancake stretch secara rutin di kamar.',
        lebihMudah: 'Buka kaki lebih lebar untuk meringankan beban tuas.',
        lebihSulit: 'Rapatkan kaki perlahan mendekati posisi L-sit lurus.'
      },
      {
        stageNumber: 5,
        nama: 'Full L-Sit',
        deskripsi: 'Bentuk huruf L sempurna: kedua kaki rapat lurus horizontal sejajar lantai dengan sudut 90 derajat terhadap torso.',
        targetHoldSec: 10,
        targetSets: 3,
        syaratLulus: 'Tahan 10 detik penuh x 3 set dengan form horizontal sempurna',
        langkah: [
          'Tekan kedua telapak tangan ke lantai atau parallettes.',
          'Kunci siku lurus, tekan bahu ke bawah menjauh dari telinga.',
          'Rapatkan kedua kaki dan angkat lurus ke depan setinggi panggul (90 derajat).',
          'Tahan napas terkontrol dan kunci seluruh otot tubuh layaknya papan.'
        ],
        kesalahanUmum: [
          'Panggul bergeser ke belakang garis tangan (cheating leverage).',
          'Lutut menekuk di detik-detik akhir.'
        ],
        tipsAman: 'Lakukan pemanasan pergelangan tangan (wrist prep) jika berlatih langsung di lantai datar.',
        lebihMudah: 'Lakukan di atas dua balok buku tebal atau parallettes.',
        lebihSulit: 'V-Sit (angkat kaki melebihi 90 derajat menuju wajah).'
      }
    ]
  },
  {
    id: 'handstand',
    nama: 'Handstand Progression',
    kategori: 'Bahu & Keseimbangan',
    level: 'Menengah',
    badgeColor: '#FF7A3D',
    deskripsi: 'Penguasaan berdiri dengan kedua tangan melawan gravitasi, melatih stabilitas bahu, inti tubuh, dan fokus mental.',
    manfaatSiswa: 'Meningkatkan aliran darah ke otak untuk kesegaran belajar & membangun rasa percaya diri mengatasi rasa takut jatuh.',
    durasiMingguEstimasi: '6–12 Minggu',
    stages: [
      {
        stageNumber: 1,
        nama: 'Wall Walk Hold',
        deskripsi: 'Merangkak naik ke dinding secara bertahap hingga tubuh membentuk garis diagonal/vertikal menghadap dinding.',
        targetHoldSec: 30,
        targetSets: 3,
        syaratLulus: 'Tahan 30 detik x 3 set dengan siku terkunci stabil',
        langkah: [
          'Mulai dari posisi push-up dengan kaki menyentuh dinding kamar.',
          'Langkahkan satu per satu kaki naik ke dinding sambil tangan mundur mendekat.',
          'Kunci siku lurus 100% dan dorong lantai sekuat tenaga (shoulder elevation).',
          'Tahan posisi selama target detik lalu turun perlahan melangkah maju.'
        ],
        kesalahanUmum: [
          'Punggung melengkung berlebihan menyerupai pisang (banana back).',
          'Siku menekuk karena takut menahan beban tubuh.'
        ],
        tipsAman: 'Pastikan dinding bersih dan gunakan kaos kaki agar kaki tidak selip di dinding.',
        lebihMudah: 'Berhenti di sudut 45 derajat (tangan 1 meter dari dinding).',
        lebihSulit: 'Mundur hingga tangan berjarak 20 cm dari dinding.'
      },
      {
        stageNumber: 2,
        nama: 'Chest-to-Wall Handstand Hold',
        deskripsi: 'Posisi vertikal tegak lurus sempurna dengan dada dan jari kaki hampir menempel dinding kamar.',
        targetHoldSec: 45,
        targetSets: 3,
        syaratLulus: 'Tahan 45 detik x 3 set dengan garis tubuh lurus (hollow body)',
        langkah: [
          'Lakukan wall walk hingga dada berada 10–20 cm dari dinding.',
          'Pandangan diarahkan ke antara kedua ibu jari tangan.',
          'Kencangkan perut dan bokong, rapatkan kedua kaki, jari kaki menunjuk ke langit.',
          'Dorong lantai aktif ke bawah seolah ingin mendorong lantai menjauh.'
        ],
        kesalahanUmum: [
          'Kepala menengadah terlalu jauh ke depan sehingga leher tegang.',
          'Menahan napas hingga pusing.'
        ],
        tipsAman: 'Sisakan tenaga 5 detik untuk turun dengan aman melangkah ke depan.',
        lebihMudah: 'Beri jarak tangan 30–40 cm dari dinding.',
        lebihSulit: 'Lepaskan satu kaki perlahan melayang di udara (One-Leg Float).'
      },
      {
        stageNumber: 3,
        nama: 'Back-to-Wall Toe Taps',
        deskripsi: 'Menghadap keluar membelakangi dinding, lepaskan tumit bergantian dari dinding untuk melatih sensor keseimbangan jari tangan.',
        targetHoldSec: 30,
        targetSets: 3,
        syaratLulus: 'Tahan 30 detik (10 sentuhan ringan) x 3 set',
        langkah: [
          'Tendang kaki ke dinding dengan punggung menghadap dinding.',
          'Cengkeram lantai dengan ujung jari-jari tangan (cambré finger grip).',
          'Tarik satu tumit menjauhi dinding secara halus hingga menemukan titik seimbang.',
          'Sentuh dinding kembali perlahan dan gantikan dengan kaki satunya.'
        ],
        kesalahanUmum: [
          'Menendang terlalu keras hingga dinding terbanting.',
          'Telapak tangan rata tanpa mencengkeram lantai dengan jari.'
        ],
        tipsAman: 'Gunakan jari-jari tangan sebagai rem utama saat tubuh condong ke depan.',
        lebihMudah: 'Lepas tumit hanya 2–3 cm dari dinding selama 2 detik.',
        lebihSulit: 'Lepas kedua tumit bersamaan melayang bebas selama 3–5 detik.'
      },
      {
        stageNumber: 4,
        nama: 'Kick-Up to Wall with Soft Touch',
        deskripsi: 'Melatih tendangan naik terkontrol dari lantai tanpa memantul keras di dinding, menahan seimbang mandiri sebelum menyentuh dinding.',
        targetHoldSec: 20,
        targetSets: 3,
        syaratLulus: '5 tendangan bersih berturut-turut dengan hold mandiri minimal 5 detik',
        langkah: [
          'Satu kaki di depan, condongkan pundak di atas telapak tangan.',
          'Ayunkan kaki belakang ke atas secara terukur sementara kaki depan mendorong ringan.',
          'Rapatkan kedua kaki di titik puncak sebelum menyentuh dinding.',
          'Tahan seimbang selama mungkin sebelum tumit menyentuh dinding kamar.'
        ],
        kesalahanUmum: [
          'Tendangan terlalu kencang sehingga membentur dinding dengan keras.',
          'Siku menekuk saat kaki mengayun naik.'
        ],
        tipsAman: 'Kunci siku lurus kokoh sebelum kaki meninggalkan lantai.',
        lebihMudah: 'Minta bantuan teman memegang kaki di udara.',
        lebihSulit: 'Kick-up di ruang terbuka dengan bersiap teknik bail (putar pinggul).'
      },
      {
        stageNumber: 5,
        nama: 'Freestanding Handstand',
        deskripsi: 'Berdiri dengan tangan di lantai terbuka tanpa dinding sama sekali selama minimal 10 detik dengan garis lurus stabil.',
        targetHoldSec: 10,
        targetSets: 3,
        syaratLulus: 'Tahan 10 detik mandiri di ruang terbuka x 3 set',
        langkah: [
          'Lakukan kick-up terkontrol di area lantai yang lapang.',
          'Gunakan cengkeraman jari tangan untuk mengoreksi keseimbangan secara mikro.',
          'Kencangkan perut, rapatkan paha, dan dorong bahu aktif ke atas.',
          'Tahan posisi garis lurus sempurna dari pergelangan tangan hingga ujung kaki.'
        ],
        kesalahanUmum: [
          'Kaki membuka dan goyang tidak terkendali.',
          'Lupa bernapas saat menahan posisi.'
        ],
        tipsAman: 'Kuasai teknik cartwheel/pirouette bail untuk mendarat aman jika condong berlebih.',
        lebihMudah: 'Target 5 detik hold mandiri.',
        lebihSulit: 'Handstand Shoulder Taps atau Handstand Push-up (HSPU).'
      }
    ]
  },
  {
    id: 'front-lever',
    nama: 'Front Lever Progression',
    kategori: 'Punggung & Lats',
    level: 'Lanjutan',
    badgeColor: '#C8F135',
    deskripsi: 'Puncak kekuatan tarikan calisthenics: menahan seluruh tubuh horizontal kaku layaknya papan hanya dengan bergantungan pada palang.',
    manfaatSiswa: 'Membangun kekuatan punggung dan lats super kuat untuk postur tegap prima serta daya tahan fisik atletik.',
    durasiMingguEstimasi: '8–16 Minggu',
    stages: [
      {
        stageNumber: 1,
        nama: 'Inverted Hang (Gantung Terbalik)',
        deskripsi: 'Bergantung pada palang dengan tubuh terbalik vertikal lurus kaki menunjuk ke langit.',
        targetHoldSec: 30,
        targetSets: 3,
        syaratLulus: 'Tahan 30 detik x 3 set dengan bahu aktif dan stabil',
        langkah: [
          'Gantung pada pull-up bar dengan kedua tangan selebar bahu.',
          'Tarik lutut ke dada dan putar panggul ke atas hingga tubuh terbalik tegak lurus.',
          'Kunci siku lurus, tekan bahu aktif ke belakang.',
          'Tahan napas teratur dan kendalikan tubuh tanpa mengayun.'
        ],
        kesalahanUmum: [
          'Bahu lemas pasif (dead hang) sehingga leher terjepit.',
          'Mengayun tidak terkendali.'
        ],
        tipsAman: 'Pastikan palang pull-up atau pintu kamar kokoh menopang bobot tubuh.',
        lebihMudah: 'Lakukan pada low bar atau gymnastics rings setinggi dada.',
        lebihSulit: 'Turunkan tubuh perlahan ke sudut 45 derajat (negatif).'
      },
      {
        stageNumber: 2,
        nama: 'Tuck Front Lever',
        deskripsi: 'Tubuh horizontal sejajar lantai dari bahu hingga pinggul dengan lutut ditarik rapat ke arah dada.',
        targetHoldSec: 20,
        targetSets: 3,
        syaratLulus: 'Tahan 20 detik x 3 set dengan punggung sejajar lantai',
        langkah: [
          'Dari posisi hanging, dorong palang ke arah paha dengan lengan lurus (straight arm pull).',
          'Tarik lutut rapat ke dada dan luruskan punggung horizontal sejajar lantai.',
          'Retraksi skapula (tarik tulang belikat ke belakang dan bawah).',
          'Tahan posisi tanpa membiarkan pantat turun ke bawah.'
        ],
        kesalahanUmum: [
          'Pinggul melorot ke bawah garis horizontal.',
          'Siku menekuk karena mencoba menarik dengan bisep.'
        ],
        tipsAman: 'Fokuskan tenaga pada otot sayap punggung (latissimus dorsi).',
        lebihMudah: 'Tarik lutut sangat rapat menempel ke dada.',
        lebihSulit: 'Advanced Tuck (buka sudut paha 90 derajat dari dada).'
      },
      {
        stageNumber: 3,
        nama: 'Advanced Tuck Front Lever',
        deskripsi: 'Punggung horizontal sempurna dengan paha membentuk sudut 90 derajat dari torso (lutut tidak menempel di dada).',
        targetHoldSec: 15,
        targetSets: 3,
        syaratLulus: 'Tahan 15 detik x 3 set dengan garis punggung lurus rata',
        langkah: [
          'Masuk ke posisi Tuck Front Lever.',
          'Dorong lutut menjauhi dada hingga paha tegak lurus 90 derajat terhadap badan.',
          'Luruskan punggung rata sempurna sejajar lantai.',
          'Kunci siku dan aktifkan seluruh otot punggung atas.'
        ],
        kesalahanUmum: [
          'Punggung atas membulat karena lats kelelahan menahan tuas yang memanjang.',
          'Siku sedikit menekuk.'
        ],
        tipsAman: 'Istirahat minimal 60–90 detik antar set karena tuntutan saraf motorik tinggi.',
        lebihMudah: 'Kurangi sudut paha kembali mendekati 75 derajat.',
        lebihSulit: 'Julurkan satu kaki lurus ke belakang secara bertahap.'
      },
      {
        stageNumber: 4,
        nama: 'Straddle / One-Leg Front Lever',
        deskripsi: 'Satu kaki dijulurkan lurus penuh sejajar lantai ATAU kedua kaki dibuka lebar ke samping untuk memperpendek tuas.',
        targetHoldSec: 10,
        targetSets: 3,
        syaratLulus: 'Tahan 10 detik x 3 set dengan form horizontal lurus',
        langkah: [
          'Dari posisi advanced tuck, julurkan satu kaki lurus penuh ke belakang atau buka kedua kaki selebar mungkin ke samping.',
          'Pertahankan garis horizontal lurus dari bahu hingga ujung kaki.',
          'Dorong palang ke bawah sekuat tenaga dengan lengan lurus terkunci.',
          'Kencangkan bokong dan punggung bawah.'
        ],
        kesalahanUmum: [
          'Panggul miring atau patah (pike hips).',
          'Lengan menekuk di sendi siku.'
        ],
        tipsAman: 'Hentikan latihan jika terasa nyeri tajam di tendon siku bagian depan.',
        lebihMudah: 'Buka kaki lebih lebar untuk meringankan beban tuas.',
        lebihSulit: 'Rapatkan kaki perlahan selama 3 detik sebelum turun.'
      },
      {
        stageNumber: 5,
        nama: 'Full Front Lever',
        deskripsi: 'Kekuatan tarikan calisthenics tingkat dewa: seluruh tubuh membentuk garis lurus kaku horizontal sejajar lantai.',
        targetHoldSec: 5,
        targetSets: 3,
        syaratLulus: 'Tahan 5 detik penuh x 3 set dengan garis tubuh lurus sempurna',
        langkah: [
          'Rapatkan kedua kaki lurus sempurna dari paha hingga ujung jari kaki.',
          'Tarik palang ke bawah dengan lengan lurus terkunci 100%.',
          'Tahan seluruh tubuh horizontal lurus sejajar lantai tanpa lekukan pinggul.',
          'Kunci lats, dada, core, dan glutes dalam kontraksi isometrik maksimal.'
        ],
        kesalahanUmum: [
          'Pinggul turun sedikit di bawah garis bahu.',
          'Siku bengkok.'
        ],
        tipsAman: 'Lakukan pemanasan lats dan sendi siku menyeluruh sebelum mencoba tes hold maksimal.',
        lebihMudah: 'Tahan 3 detik dengan form sempurna.',
        lebihSulit: 'Front Lever Pull-up (tarik dada menyentuh palang dalam posisi lever).'
      }
    ]
  }
];

// ==========================================
// 2. DATA GERAKAN WORKOUT (EXERCISES)
// ==========================================
export const SEED_EXERCISES: Exercise[] = [
  {
    id: 'ex1',
    nama: 'Support Hold',
    area: 'Bahu, triceps & core',
    targetDefault: '3 x 30 dtk',
    langkah: [
      'Tangan di atas dua kursi kokoh atau parallettes setinggi pinggul.',
      'Kunci siku lurus 100%, tekan bahu aktif menjauh dari telinga.',
      'Angkat tubuh melayang dengan kaki ditekuk atau rileks.',
      'Tahan selama target detik sambil bernapas stabil.'
    ],
    kesalahanUmum: [
      'Bahu membungkuk ke atas mendekati telinga.',
      'Siku ditekuk.'
    ],
    lebihMudah: 'Foot-assisted Support Hold',
    lebihSulit: 'Tuck L-Sit',
    isTimeBased: true,
  },
  {
    id: 'ex2',
    nama: 'Tuck L-Sit',
    area: 'Perut bawah & hip flexors',
    targetDefault: '3 x 20 dtk',
    langkah: [
      'Dari support hold, dorong tangan kuat ke bawah.',
      'Tarik kedua lutut rapat mendekati dada setinggi mungkin.',
      'Pertahankan panggul sejajar garis tangan.',
      'Tahan kontraksi perut dan paha depan.'
    ],
    kesalahanUmum: [
      'Lutut melorot turun ke bawah.',
      'Punggung atas terlalu bungkuk.'
    ],
    lebihMudah: 'One-Leg Tuck L-Sit',
    lebihSulit: 'Full L-Sit',
    isTimeBased: true,
  },
  {
    id: 'ex3',
    nama: 'Wall Walk Hold',
    area: 'Bahu & scapula',
    targetDefault: '3 x 30 dtk',
    langkah: [
      'Posisi push-up membelakangi dinding kamar.',
      'Langkahkan kaki naik ke dinding bertahap sambil tangan mundur mendekat.',
      'Kunci siku lurus dan dorong lantai sekuat mungkin.',
      'Tahan posisi lurus lalu turun melangkah maju.'
    ],
    kesalahanUmum: [
      'Punggung melengkung berlebihan (banana back).',
      'Siku ditekuk.'
    ],
    lebihMudah: 'Diagonal Wall Walk (sudut 45 derajat)',
    lebihSulit: 'Chest-to-Wall Handstand Hold',
    isTimeBased: true,
  },
  {
    id: 'ex4',
    nama: 'Chest-to-Wall Handstand',
    area: 'Bahu, wrist & core',
    targetDefault: '3 x 45 dtk',
    langkah: [
      'Lakukan wall walk hingga dada berada 15-20 cm dari dinding.',
      'Pandangan ke antara kedua jempol tangan.',
      'Kencangkan perut dan pantat, dorong lantai aktif.',
      'Tahan selama target detik lalu turun terkontrol.'
    ],
    kesalahanUmum: [
      'Kepala menengadah terlalu jauh.',
      'Menahan napas.'
    ],
    lebihMudah: 'Wall Walk Hold',
    lebihSulit: 'Back-to-Wall Toe Taps',
    isTimeBased: true,
  },
  {
    id: 'ex5',
    nama: 'Inverted Hang',
    area: 'Lats & posterior chain',
    targetDefault: '3 x 30 dtk',
    langkah: [
      'Gantung pada palang dengan tangan selebar bahu.',
      'Tarik lutut dan putar pinggul ke atas hingga tubuh terbalik tegak.',
      'Kunci siku lurus dan bahu aktif.',
      'Tahan tubuh stabil tanpa mengayun.'
    ],
    kesalahanUmum: [
      'Bahu pasif lemas.',
      'Mengayun tidak stabil.'
    ],
    lebihMudah: 'Low bar Inverted Hang',
    lebihSulit: 'Tuck Front Lever',
    isTimeBased: true,
  },
  {
    id: 'ex6',
    nama: 'Tuck Front Lever',
    area: 'Punggung atas & lats',
    targetDefault: '3 x 20 dtk',
    langkah: [
      'Dorong palang ke arah paha dengan lengan lurus terkunci.',
      'Tarik lutut rapat ke dada dan luruskan punggung sejajar lantai.',
      'Retraksi tulang belikat ke belakang dan bawah.',
      'Tahan posisi horizontal selama target detik.'
    ],
    kesalahanUmum: [
      'Pinggul melorot ke bawah garis horizontal.',
      'Siku ditekuk.'
    ],
    lebihMudah: 'Inverted Hang',
    lebihSulit: 'Advanced Tuck Front Lever',
    isTimeBased: true,
  },
  {
    id: 'ex7',
    nama: 'Push-up',
    area: 'Dada, bahu & triceps',
    targetDefault: '3 x 8 reps',
    langkah: [
      'Tangan sedikit lebih lebar dari bahu, telapak rata di lantai.',
      'Badan lurus sempurna dari kepala hingga tumit.',
      'Turunkan dada mendekati lantai, posisi siku 45 derajat.',
      'Dorong kembali ke atas sambil menghembuskan napas.'
    ],
    kesalahanUmum: [
      'Pinggul turun atau terlalu naik.',
      'Siku melebar 90 derajat.'
    ],
    lebihMudah: 'Incline push-up',
    lebihSulit: 'Diamond push-up',
    isTimeBased: false,
  },
  {
    id: 'ex8',
    nama: 'Incline push-up',
    area: 'Dada, bahu & triceps',
    targetDefault: '3 x 10 reps',
    langkah: [
      'Telapak tangan pada permukaan meja/kursi stabil.',
      'Tubuh membentuk garis lurus diagonal.',
      'Turunkan dada perlahan menuju tepi tumpuan.',
      'Dorong tubuh kembali ke atas dengan kontrol penuh.'
    ],
    kesalahanUmum: [
      'Pinggul kendor ke bawah.',
      'Gerakan terlalu terburu-buru.'
    ],
    lebihMudah: 'Wall push-up',
    lebihSulit: 'Regular Push-up',
    isTimeBased: false,
  },
  {
    id: 'ex9',
    nama: 'Dead Bug',
    area: 'Core & hip flexors',
    targetDefault: '3 x 8 reps',
    langkah: [
      'Berbaring telentang, punggung bawah menempel rata di lantai.',
      'Rentangkan tangan lurus ke atas dan lutut ditekuk 90 derajat.',
      'Turunkan tangan kanan dan kaki kiri bersamaan mendekati lantai.',
      'Kembali ke posisi awal dan ganti sisi sebaliknya.'
    ],
    kesalahanUmum: [
      'Punggung bawah melengkung terangkat dari lantai.',
      'Leher tegang ke depan.'
    ],
    lebihMudah: 'Bent-knee tap (kaki ditekuk turun)',
    lebihSulit: 'Hollow Body Hold',
    isTimeBased: false,
  },
  {
    id: 'ex10',
    nama: 'Plank',
    area: 'Core & abs',
    targetDefault: '3 x 30 dtk',
    langkah: [
      'Tumpuan pada siku dan lengan bawah, siku tepat di bawah bahu.',
      'Tubuh lurus sempurna dari kepala hingga tumit.',
      'Kencangkan perut dan bokong secara konstan.',
      'Bernapas teratur tanpa menahan napas.'
    ],
    kesalahanUmum: [
      'Pinggul melorot ke bawah.',
      'Kepala menunduk ke lantai.'
    ],
    lebihMudah: 'Knee plank',
    lebihSulit: 'Plank shoulder taps',
    isTimeBased: true,
  }
];

// ==========================================
// 3. DAFTAR SESI LATIHAN (SESSIONS)
// ==========================================
export const SEED_SESSIONS: WorkoutSession[] = [
  // Sesi Skill Progression
  {
    id: 's_lsit_1',
    nama: 'L-Sit Mastery: Stage 1 Support',
    durasiMenit: 12,
    fokus: 'Skill Mastery',
    skillId: 'l-sit',
    stageNumber: 1,
    exercises: [
      { exerciseId: 'ex1', exerciseName: 'Support Hold', sets: 3, target: 30, unit: 'detik', istirahatDetik: 45, isIsometric: true },
      { exerciseId: 'ex9', exerciseName: 'Dead Bug', sets: 3, target: 8, unit: 'reps', istirahatDetik: 45, isIsometric: false },
      { exerciseId: 'ex10', exerciseName: 'Plank', sets: 3, target: 30, unit: 'detik', istirahatDetik: 45, isIsometric: true },
    ]
  },
  {
    id: 's_lsit_2',
    nama: 'L-Sit Mastery: Stage 2 Tuck',
    durasiMenit: 15,
    fokus: 'Skill Mastery',
    skillId: 'l-sit',
    stageNumber: 2,
    exercises: [
      { exerciseId: 'ex2', exerciseName: 'Tuck L-Sit', sets: 3, target: 20, unit: 'detik', istirahatDetik: 45, isIsometric: true },
      { exerciseId: 'ex1', exerciseName: 'Support Hold', sets: 3, target: 20, unit: 'detik', istirahatDetik: 45, isIsometric: true },
      { exerciseId: 'ex9', exerciseName: 'Dead Bug', sets: 3, target: 10, unit: 'reps', istirahatDetik: 45, isIsometric: false },
    ]
  },
  {
    id: 's_handstand_1',
    nama: 'Handstand Mastery: Stage 1 Wall Walk',
    durasiMenit: 15,
    fokus: 'Skill Mastery',
    skillId: 'handstand',
    stageNumber: 1,
    exercises: [
      { exerciseId: 'ex3', exerciseName: 'Wall Walk Hold', sets: 3, target: 30, unit: 'detik', istirahatDetik: 45, isIsometric: true },
      { exerciseId: 'ex7', exerciseName: 'Push-up', sets: 3, target: 8, unit: 'reps', istirahatDetik: 45, isIsometric: false },
      { exerciseId: 'ex10', exerciseName: 'Plank', sets: 3, target: 30, unit: 'detik', istirahatDetik: 45, isIsometric: true },
    ]
  },
  {
    id: 's_handstand_2',
    nama: 'Handstand Mastery: Stage 2 Chest-to-Wall',
    durasiMenit: 18,
    fokus: 'Skill Mastery',
    skillId: 'handstand',
    stageNumber: 2,
    exercises: [
      { exerciseId: 'ex4', exerciseName: 'Chest-to-Wall Handstand', sets: 3, target: 45, unit: 'detik', istirahatDetik: 45, isIsometric: true },
      { exerciseId: 'ex3', exerciseName: 'Wall Walk Hold', sets: 3, target: 20, unit: 'detik', istirahatDetik: 45, isIsometric: true },
      { exerciseId: 'ex7', exerciseName: 'Push-up', sets: 3, target: 10, unit: 'reps', istirahatDetik: 45, isIsometric: false },
    ]
  },
  {
    id: 's_frontlever_1',
    nama: 'Front Lever Mastery: Stage 1 Inverted',
    durasiMenit: 15,
    fokus: 'Skill Mastery',
    skillId: 'front-lever',
    stageNumber: 1,
    exercises: [
      { exerciseId: 'ex5', exerciseName: 'Inverted Hang', sets: 3, target: 30, unit: 'detik', istirahatDetik: 45, isIsometric: true },
      { exerciseId: 'ex9', exerciseName: 'Dead Bug', sets: 3, target: 10, unit: 'reps', istirahatDetik: 45, isIsometric: false },
      { exerciseId: 'ex10', exerciseName: 'Plank', sets: 3, target: 30, unit: 'detik', istirahatDetik: 45, isIsometric: true },
    ]
  },
  {
    id: 's_frontlever_2',
    nama: 'Front Lever Mastery: Stage 2 Tuck',
    durasiMenit: 18,
    fokus: 'Skill Mastery',
    skillId: 'front-lever',
    stageNumber: 2,
    exercises: [
      { exerciseId: 'ex6', exerciseName: 'Tuck Front Lever', sets: 3, target: 20, unit: 'detik', istirahatDetik: 45, isIsometric: true },
      { exerciseId: 'ex5', exerciseName: 'Inverted Hang', sets: 3, target: 20, unit: 'detik', istirahatDetik: 45, isIsometric: true },
      { exerciseId: 'ex10', exerciseName: 'Plank', sets: 3, target: 45, unit: 'detik', istirahatDetik: 45, isIsometric: true },
    ]
  },

  // Sesi Rutinitas Harian
  {
    id: 's1',
    nama: 'Push 15 (Dada & Trisep)',
    durasiMenit: 15,
    fokus: 'Push',
    exercises: [
      { exerciseId: 'ex7', exerciseName: 'Push-up', sets: 3, target: 8, unit: 'reps', istirahatDetik: 45 },
      { exerciseId: 'ex8', exerciseName: 'Incline push-up', sets: 3, target: 10, unit: 'reps', istirahatDetik: 45 },
      { exerciseId: 'ex9', exerciseName: 'Dead Bug', sets: 3, target: 8, unit: 'reps', istirahatDetik: 45 },
      { exerciseId: 'ex10', exerciseName: 'Plank', sets: 3, target: 30, unit: 'detik', istirahatDetik: 45, isIsometric: true },
    ]
  },
  {
    id: 's2',
    nama: 'Core & Stabilizer 10',
    durasiMenit: 10,
    fokus: 'Pull dan core',
    exercises: [
      { exerciseId: 'ex1', exerciseName: 'Support Hold', sets: 3, target: 20, unit: 'detik', istirahatDetik: 45, isIsometric: true },
      { exerciseId: 'ex9', exerciseName: 'Dead Bug', sets: 3, target: 10, unit: 'reps', istirahatDetik: 45 },
      { exerciseId: 'ex10', exerciseName: 'Plank', sets: 3, target: 45, unit: 'detik', istirahatDetik: 45, isIsometric: true },
    ]
  },
  {
    id: 's4',
    nama: 'Quick Fit 10 (Full Body)',
    durasiMenit: 10,
    fokus: 'Full body',
    exercises: [
      { exerciseId: 'ex8', exerciseName: 'Incline push-up', sets: 3, target: 10, unit: 'reps', istirahatDetik: 45 },
      { exerciseId: 'ex9', exerciseName: 'Dead Bug', sets: 3, target: 8, unit: 'reps', istirahatDetik: 45 },
      { exerciseId: 'ex10', exerciseName: 'Plank', sets: 3, target: 30, unit: 'detik', istirahatDetik: 45, isIsometric: true },
    ]
  },
  {
    id: 's5',
    nama: 'Upper Body Blast 20',
    durasiMenit: 20,
    fokus: 'Push',
    exercises: [
      { exerciseId: 'ex7', exerciseName: 'Push-up', sets: 4, target: 10, unit: 'reps', istirahatDetik: 45 },
      { exerciseId: 'ex8', exerciseName: 'Incline push-up', sets: 3, target: 12, unit: 'reps', istirahatDetik: 45 },
      { exerciseId: 'ex1', exerciseName: 'Support Hold', sets: 3, target: 25, unit: 'detik', istirahatDetik: 45, isIsometric: true },
      { exerciseId: 'ex10', exerciseName: 'Plank', sets: 3, target: 40, unit: 'detik', istirahatDetik: 45, isIsometric: true },
    ]
  }
];
