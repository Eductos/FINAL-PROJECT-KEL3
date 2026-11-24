/* ==============================================================
   DATA ARRAY & OBJECT (UNTUK KATALOG KELAS & MINI QUIZ)
   ============================================================== */
const coursesData = [
  {
    id: 1,
    title: "Fundamental Web: HTML5 & CSS3",
    category: "pemrograman",
    categoryLabel: "💻 Pemrograman & IT",
    desc: "Pelajari struktur semantik HTML5, Flexbox, CSS Grid, dan desain responsif modern.",
    duration: "12 Modul",
    level: "Pemula"
  },
  {
    id: 2,
    title: "Logika Algoritma & JavaScript ES6",
    category: "pemrograman",
    categoryLabel: "💻 Pemrograman & IT",
    desc: "Kuasai manipulasi DOM, event handling, dan pengolahan data berbasis array & object.",
    duration: "15 Modul",
    level: "Menengah"
  },
  {
    id: 3,
    title: "Matematika Diskrit & Logika",
    category: "sains",
    categoryLabel: "🔬 Sains & Matematika",
    desc: "Asah kemampuan berpikir analitis melalui himpunan, logika proposisi, dan kombinatorika.",
    duration: "10 Modul",
    level: "Semua Level"
  },
  {
    id: 4,
    title: "Fisika Terapan & Eksperimen",
    category: "sains",
    categoryLabel: "🔬 Sains & Matematika",
    desc: "Memahami konsep mekanika, energi, dan kelistrikan lewat studi kasus kehidupan sehari-hari.",
    duration: "8 Modul",
    level: "Menengah"
  },
  {
    id: 5,
    title: "English Public Speaking Club",
    category: "ekskul",
    categoryLabel: "🎨 Bahasa & Ekskul",
    desc: "Ekstrakurikuler diskusi dan presentasi bahasa Inggris untuk meningkatkan kepercayaan diri.",
    duration: "Pertemuan Mingguan",
    level: "Semua Level"
  },
  {
    id: 6,
    title: "Klub Desain Grafis & UI/UX",
    category: "ekskul",
    categoryLabel: "🎨 Bahasa & Ekskul",
    desc: "Belajar prinsip tipografi, warna, dan pembuatan prototipe antarmuka aplikasi yang menarik.",
    duration: "10 Pertemuan",
    level: "Pemula"
  }
];

const quizQuestions = [
  {
    question: "Jika variabel x = 10 dan y = '10' dalam JavaScript, perbandingan mana yang menghasilkan nilai true?",
    options: ["x === y", "x == y", "x !== y", "x > y"],
    answer: 1,
    explanation: "Operator == melakukan type coercion (menyamakan tipe data dulu sebelum membandingkan), sedangkan === mengecek nilai sekaligus tipe data."
  },
  {
    question: "Dalam teknik manajemen waktu Pomodoro, durasi satu sesi fokus standar sebelum istirahat pendek adalah...",
    options: ["10 menit", "25 menit", "60 menit", "90 menit"],
    answer: 1,
    explanation: "Siklus klasik Pomodoro terdiri dari 25 menit fokus penuh diikuti 5 menit istirahat singkat."
  },
  {
    question: "Apa hasil dari ekspresi logika (true && false) || true pada pemrograman?",
    options: ["true", "false", "undefined", "null"],
    answer: 0,
    explanation: "true && false bernilai false, lalu false || true menghasilkan true karena salah satu sisi operator OR bernilai true."
  },
  {
    question: "Metode belajar mana yang paling efektif untuk menguji sejauh mana otak benar-benar memahami konsep tanpa bantuan catatan?",
    options: ["Active recall", "Highlighting teks", "Menyalin ulang buku", "Menonton video dengan kecepatan 2x"],
    answer: 0,
    explanation: "Active recall memaksa otak mengingat kembali informasi secara aktif sehingga memperkuat daya ingat jangka panjang."
  },
  {
    question: "Struktur data manakah yang bekerja dengan prinsip LIFO (Last In, First Out)?",
    options: ["Queue (Antrean)", "Stack (Tumpukan)", "Array 2D", "Set"],
    answer: 1,
    explanation: "Pada Stack, elemen yang paling terakhir masuk akan menjadi elemen pertama yang keluar."
  },
  {
    question: "Apa tujuan utama dari teknik 'time blocking' pada jadwal belajar harian?",
    options: [
      "Menghapus waktu istirahat sepanjang hari",
      "Menetapkan slot waktu spesifik untuk tugas tertentu agar tidak bentrok atau molor",
      "Mengerjakan semua mata pelajaran sekaligus dalam satu jam",
      "Menunda tugas sulit hingga akhir pekan"
    ],
    answer: 1,
    explanation: "Time blocking membantu memetakan waktu secara realistis sehingga prioritas harian punya porsi yang jelas."
  }
];

/* ==============================================================
   NAVIGASI HALAMAN & MENU RESPONSIF (ALTHA)
   ============================================================== */
const navLinks = document.querySelectorAll('.nav-link');
const pageSections = document.querySelectorAll('.page-section');
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

function switchPage(targetId) {
  pageSections.forEach(sec => sec.classList.remove('active'));
  navLinks.forEach(link => link.classList.remove('active'));

  const targetSection = document.getElementById(targetId);
  const targetNav = document.querySelector(`.nav-link[data-target="${targetId}"]`);

  if (targetSection) targetSection.classList.add('active');
  if (targetNav) targetNav.classList.add('active');

  if (mainNav) mainNav.classList.remove('open');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = link.getAttribute('data-target');
    switchPage(target);
  });
});

document.querySelectorAll('[data-nav]').forEach(btn => {
  btn.addEventListener('click', () => {
    switchPage(btn.getAttribute('data-nav'));
  });
});

const btnExploreClasses = document.getElementById('btnExploreClasses');
if (btnExploreClasses) {
  btnExploreClasses.addEventListener('click', () => {
    const katalogArea = document.getElementById('katalog-area');
    if (katalogArea) katalogArea.scrollIntoView({ behavior: 'smooth' });
  });
}

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('open');
  });
}

/* ==============================================================
   KATALOG MATERI & TAB FILTER (ALTHA)
   ============================================================== */
const coursesGrid = document.getElementById('coursesGrid');
const tabButtons = document.querySelectorAll('.tab-btn');

function renderCourses(category = 'all') {
  if (!coursesGrid) return;
  coursesGrid.innerHTML = '';
  const filtered = category === 'all'
    ? coursesData
    : coursesData.filter(course => course.category === category);

  filtered.forEach(course => {
    const card = document.createElement('article');
    card.className = 'course-card';
    card.innerHTML = `
      <div>
        <span class="course-tag">${course.categoryLabel}</span>
        <h3>${course.title}</h3>
        <p>${course.desc}</p>
      </div>
      <div class="course-meta">
        <span>📚 ${course.duration}</span>
        <span>🎯 ${course.level}</span>
      </div>
    `;
    coursesGrid.appendChild(card);
  });
}

tabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    tabButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderCourses(btn.getAttribute('data-category'));
  });
});

/* ==============================================================
   MINI QUIZ INTERAKTIF (GHASSAN)
   ============================================================== */
let currentQuestionIndex = 0;
let score = 0;
let answeredCurrent = false;

const quizContainer = document.getElementById('quizContainer');
const quizResultContainer = document.getElementById('quizResultContainer');
const quizProgressText = document.getElementById('quizProgressText');
const quizLiveScore = document.getElementById('quizLiveScore');
const quizProgressBar = document.getElementById('quizProgressBar');
const questionText = document.getElementById('questionText');
const optionsList = document.getElementById('optionsList');
const quizFeedback = document.getElementById('quizFeedback');
const nextQuestionBtn = document.getElementById('nextQuestionBtn');
const restartQuizBtn = document.getElementById('restartQuizBtn');

function loadQuestion() {
  if (!quizContainer) return;
  answeredCurrent = false;
  nextQuestionBtn.disabled = true;
  quizFeedback.className = 'feedback-box';
  quizFeedback.textContent = '';

  const currentQ = quizQuestions[currentQuestionIndex];
  const totalQ = quizQuestions.length;

  quizProgressText.textContent = `Soal ${currentQuestionIndex + 1} dari ${totalQ}`;
  quizLiveScore.textContent = `Skor: ${score}`;
  quizProgressBar.style.width = `${((currentQuestionIndex + 1) / totalQ) * 100}%`;
  questionText.textContent = currentQ.question;

  nextQuestionBtn.textContent = currentQuestionIndex === totalQ - 1
    ? 'Lihat Hasil Akhir 🏆'
    : 'Soal Berikutnya →';

  optionsList.innerHTML = '';
  const letters = ['A', 'B', 'C', 'D'];

  currentQ.options.forEach((optionText, index) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'option-btn';
    btn.innerHTML = `<strong>${letters[index]}.</strong> <span>${optionText}</span>`;
    btn.addEventListener('click', () => selectAnswer(index, btn));
    optionsList.appendChild(btn);
  });
}

function selectAnswer(selectedIndex, selectedBtn) {
  if (answeredCurrent) return;
  answeredCurrent = true;

  const currentQ = quizQuestions[currentQuestionIndex];
  const allOptionBtns = optionsList.querySelectorAll('.option-btn');

  allOptionBtns.forEach(btn => {
    btn.disabled = true;
  });

  if (selectedIndex === currentQ.answer) {
    score += 100;
    selectedBtn.classList.add('correct');
    quizFeedback.className = 'feedback-box show correct';
    quizFeedback.textContent = `✅ Benar! ${currentQ.explanation}`;
  } else {
    selectedBtn.classList.add('wrong');
    allOptionBtns[currentQ.answer].classList.add('correct');
    quizFeedback.className = 'feedback-box show wrong';
    quizFeedback.textContent = `❌ Kurang tepat. ${currentQ.explanation}`;
  }

  quizLiveScore.textContent = `Skor: ${score}`;
  nextQuestionBtn.disabled = false;
}

if (nextQuestionBtn) {
  nextQuestionBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
      loadQuestion();
    } else {
      showQuizResult();
    }
  });
}

function showQuizResult() {
  quizContainer.style.display = 'none';
  quizResultContainer.style.display = 'block';

  const maxScore = quizQuestions.length * 100;
  const percentage = Math.round((score / maxScore) * 100);

  document.getElementById('finalScoreValue').textContent = `${percentage}%`;

  const gradeEl = document.getElementById('resultGrade');
  const messageEl = document.getElementById('resultMessage');

  if (percentage >= 80) {
    gradeEl.textContent = '🌟 Luar Biasa! (Sangat Memuaskan)';
    messageEl.textContent = `Kamu menjawab benar ${score / 100} dari ${quizQuestions.length} soal. Pemahamanmu tentang pengembangan web dan logika sudah sangat solid!`;
  } else if (percentage >= 50) {
    gradeEl.textContent = '👍 Cukup Baik! (Terus Tingkatkan)';
    messageEl.textContent = `Kamu menjawab benar ${score / 100} dari ${quizQuestions.length} soal. Ulas kembali beberapa materi di katalog kelas agar hasilnya makin maksimal.`;
  } else {
    gradeEl.textContent = '📚 Perlu Belajar Lagi (Tetap Semangat!)';
    messageEl.textContent = `Kamu menjawab benar ${score / 100} dari ${quizQuestions.length} soal. Jangan menyerah, coba pelajari modul di halaman Beranda lalu ulangi kuis ini!`;
  }
}

if (restartQuizBtn) {
  restartQuizBtn.addEventListener('click', () => {
    currentQuestionIndex = 0;
    score = 0;
    quizResultContainer.style.display = 'none';
    quizContainer.style.display = 'block';
    loadQuestion();
  });
}

/* ==============================================================
   STUDY TRACKER (DOM + LOCALSTORAGE) & FORM KONTAK (FAIRUZ)
   ============================================================== */
const STORAGE_KEY = 'edupro_kelompok3_tasks';
const DEFAULT_TASKS = [
  { id: 101, text: "Menyelesaikan latihan HTML5 Semantik & CSS Grid", priority: "Tinggi", completed: true },
  { id: 102, text: "Mengerjakan 6 soal Mini Quiz di Portal EduPro", priority: "Sedang", completed: false }
];

function loadTasksFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [...DEFAULT_TASKS];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [...DEFAULT_TASKS];
  } catch {
    return [...DEFAULT_TASKS];
  }
}

let tasks = loadTasksFromStorage();

const todoForm = document.getElementById('todoForm');
const todoInput = document.getElementById('todoInput');
const todoPriority = document.getElementById('todoPriority');
const todoError = document.getElementById('todoError');
const todoSearch = document.getElementById('todoSearch');
const todoList = document.getElementById('todoList');
const taskCounter = document.getElementById('taskCounter');

function saveTasks() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function renderTasks(keyword = '') {
  if (!todoList) return;
  todoList.innerHTML = '';

  const filteredTasks = tasks.filter(task =>
    task.text.toLowerCase().includes(keyword.toLowerCase())
  );

  const completedCount = tasks.filter(t => t.completed).length;
  taskCounter.textContent = `${completedCount}/${tasks.length} Selesai`;

  if (filteredTasks.length === 0) {
    todoList.innerHTML = `<li class="empty-state">✨ Belum ada target belajar yang sesuai. Tambahkan tugas baru di atas!</li>`;
    return;
  }

  filteredTasks.forEach(task => {
    const li = document.createElement('li');
    li.className = `todo-item ${task.completed ? 'completed' : ''}`;

    li.innerHTML = `
      <div class="todo-left">
        <input type="checkbox" class="todo-checkbox" ${task.completed ? 'checked' : ''} aria-label="Tandai selesai">
        <span class="todo-text">${task.text}</span>
      </div>
      <span class="todo-badge">${task.priority}</span>
      <button type="button" class="btn-delete" aria-label="Hapus tugas">Hapus</button>
    `;

    li.querySelector('.todo-left').addEventListener('click', () => {
      task.completed = !task.completed;
      saveTasks();
      renderTasks(todoSearch ? todoSearch.value : '');
    });

    li.querySelector('.btn-delete').addEventListener('click', (e) => {
      e.stopPropagation();
      tasks = tasks.filter(t => t.id !== task.id);
      saveTasks();
      renderTasks(todoSearch ? todoSearch.value : '');
    });

    todoList.appendChild(li);
  });
}

if (todoForm) {
  todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = todoInput.value.trim();

    if (!text) {
      todoInput.classList.add('invalid');
      todoError.textContent = '⚠️ Target belajar tidak boleh kosong!';
      todoError.classList.add('show');
      return;
    }

    todoInput.classList.remove('invalid');
    todoError.classList.remove('show');

    tasks.unshift({
      id: Date.now(),
      text: text,
      priority: todoPriority.value,
      completed: false
    });

    saveTasks();
    todoInput.value = '';
    todoInput.focus();
    renderTasks(todoSearch ? todoSearch.value : '');
  });
}

if (todoInput) {
  todoInput.addEventListener('input', () => {
    if (todoInput.value.trim()) {
      todoInput.classList.remove('invalid');
      todoError.classList.remove('show');
    }
  });
}

if (todoSearch) {
  todoSearch.addEventListener('input', (e) => {
    renderTasks(e.target.value);
  });
}

/* Validasi Form Kontak */
const contactForm = document.getElementById('contactForm');
const contactName = document.getElementById('contactName');
const contactEmail = document.getElementById('contactEmail');
const contactTopic = document.getElementById('contactTopic');
const contactMessage = document.getElementById('contactMessage');
const contactSuccess = document.getElementById('contactSuccess');

function setFieldError(inputEl, errorId, message) {
  const errorEl = document.getElementById(errorId);
  if (!errorEl) return true;
  if (message) {
    inputEl.classList.add('invalid');
    errorEl.textContent = message;
    errorEl.classList.add('show');
    return false;
  } else {
    inputEl.classList.remove('invalid');
    errorEl.classList.remove('show');
    return true;
  }
}

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    contactSuccess.classList.remove('show');

    const nameVal = contactName.value.trim();
    const emailVal = contactEmail.value.trim();
    const topicVal = contactTopic.value;
    const messageVal = contactMessage.value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const isNameValid = setFieldError(
      contactName,
      'nameError',
      nameVal === '' ? '⚠️ Nama lengkap wajib diisi.' : ''
    );

    const isEmailValid = setFieldError(
      contactEmail,
      'emailError',
      emailVal === ''
        ? '⚠️ Alamat email wajib diisi.'
        : (!emailRegex.test(emailVal) ? '⚠️ Format email tidak valid (contoh: nama@email.com).' : '')
    );

    const isTopicValid = setFieldError(
      contactTopic,
      'topicError',
      topicVal === '' ? '⚠️ Silakan pilih topik pertanyaan.' : ''
    );

    const isMessageValid = setFieldError(
      contactMessage,
      'messageError',
      messageVal === ''
        ? '⚠️ Pesan tidak boleh kosong.'
        : (messageVal.length < 10 ? '⚠️ Pesan minimal terdiri dari 10 karakter.' : '')
    );

    if (isNameValid && isEmailValid && isTopicValid && isMessageValid) {
      contactSuccess.classList.add('show');
      contactForm.reset();
    }
  });

  [contactName, contactEmail, contactTopic, contactMessage].forEach(field => {
    if (field) {
      const clearError = () => {
        field.classList.remove('invalid');
        const errorSpan = field.parentElement.querySelector('.error-msg');
        if (errorSpan) errorSpan.classList.remove('show');
      };
      field.addEventListener('input', clearError);
      field.addEventListener('change', clearError);
    }
  });
}

/* ==============================================================
   INISIALISASI AWAL SAAT HALAMAN DIMUAT
   ============================================================== */
renderCourses('all');
loadQuestion();
renderTasks();