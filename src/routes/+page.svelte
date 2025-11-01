<script lang="ts">
  import { onMount } from "svelte";
  import "../app.css";
  import { base } from "$app/paths";
  import Hero from "$lib/components/Hero.svelte";
  import Marquee from "$lib/components/Marquee.svelte"

  import roadmap from "$lib/assets/road-map.png";
  import app from "$lib/assets/application.png";
  import mobile from "$lib/assets/mobile.png";
  import uiux from "$lib/assets/uiux.png";
  
  import html from "$lib/assets/html.jpg";
  import laravel from "$lib/assets/laravel.jpg";
  import mysql from "$lib/assets/mysql.jpg";
  import golang from "$lib/assets/golang.jpg";
  import java from "$lib/assets/java.jpg";
  import nodejs from "$lib/assets/nodejs.jpg";
  import vue from "$lib/assets/vuejs.jpg";
  import php from "$lib/assets/php.jpg";
  import docker from "$lib/assets/docker.jpg";

  const images = [html, laravel, mysql, golang, java, nodejs, vue, php, docker];

  const steps = [
    { id: 1, title: 'Dasar Pemrograman', desc: 'Kuasai logika, algoritma, dan dasar bahasa pemrograman seperti JavaScript atau Python sebelum masuk ke tahap lanjut.', img: 'https://i.pinimg.com/736x/97/f3/2d/97f32dd3dec3221cca5a193bc352c8f3.jpg' },
    { id: 2, title: 'Web Development', desc: 'Bangun website modern dengan HTML, CSS, JavaScript, dan framework seperti Svelte, React, atau Vue.', img: 'https://i.pinimg.com/736x/c8/23/2e/c8232e214cc8e4ce311949db592fb103.jpg' },
    { id: 3, title: 'Backend & Database', desc: 'Pelajari cara membangun REST API, autentikasi, dan manajemen data menggunakan Node.js, Bun, MySQL, atau MongoDB.', img: 'https://i.pinimg.com/736x/0a/ac/f7/0aacf7f15eb464b8a53dacdaa46b00ae.jpg' },
    { id: 4, title: 'Deployment & Karier', desc: 'Pelajari cara deploy project ke Vercel, GitHub Pages, dan bangun portofolio profesional untuk karier software engineer.', img: 'https://i.pinimg.com/736x/bc/5d/b7/bc5db7c3dbd17856fe0366afda42e871.jpg' }
  ];

const categories = [
  {
    name: "Web Development",
    image: app,
    title: "Siap Membangun Karier sebagai Web Developer Profesional?",
    description: "Kuasai HTML, CSS, JavaScript, dan framework populer seperti React serta Svelte. Program ini dirancang untuk membawamu dari pemula menjadi developer siap kerja.",
    detail: "Pelajari front-end, back-end, API, database, dan deployment. Cocok untuk kamu yang ingin menjadi full-stack developer."
  },
  {
    name: "Mobile Apps",
    image: mobile,
    title: "Jadilah Mobile App Developer Andal!",
    description: "Pelajari cara membuat aplikasi Android dan iOS menggunakan Flutter atau Kotlin. Cocok untuk kamu yang ingin fokus di dunia mobile development.",
    detail: "Mulai dari dasar Flutter/Kotlin, UI/UX mobile, hingga publish aplikasi ke Play Store atau App Store."
  },
  {
    name: "UI/UX Design",
    image: uiux,
    title: "Bangun Desain Antarmuka yang Memukau",
    description: "Pelajari prinsip desain, wireframing, prototyping, dan tools seperti Figma. Cocok untuk calon desainer yang ingin menciptakan pengalaman pengguna terbaik.",
    detail: "Pelajari desain interaktif, user testing, branding, dan bagaimana membuat desain yang ramah pengguna."
  }
];


  const fiturList = [
    { src: "https://cdn-icons-png.flaticon.com/512/906/906175.png", title: "Materi Kekinian", desc: "Materi di sini selalu up to date sesuai dengan perkembangan teknologi saat ini. Semua materi diperbarui secara berkala." },
    { src: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", title: "Instruktur Berpengalaman", desc: "Instruktur kami adalah praktisi industri berpengalaman. Peserta bisa belajar tidak hanya teori, tapi juga best practice dan pengalaman dunia nyata." },
    { src: roadmap, title: "Roadmap Jelas", desc: "Setiap kelas disusun berdasarkan roadmap yang jelas — dari dasar hingga mahir. Peserta tinggal mengikuti alur pembelajaran yang sudah dirancang dengan sistematis." }
  ];

  let selected = categories[0];
</script>

<!-- svelte-ignore css_unused_selector -->
<!-- svelte-ignore css_unused_selector -->
<svelte:head>
  <!-- Title & Meta Description -->
  <title>Programmer Zaman Now – Belajar Pemrograman dari Dasar hingga Mahir</title>
  <meta name="description" content="Temukan berbagai kelas pemrograman terbaik di Programmer Zaman Now. Belajar JavaScript, Python, Database, API, dan banyak lagi bersama instruktur berpengalaman." />

  <!-- Open Graph (Facebook, LinkedIn) -->
  <meta property="og:title" content="Programmer Zaman Now – Belajar Pemrograman dari Dasar hingga Mahir" />
  <meta property="og:description" content="Temukan berbagai kelas pemrograman terbaik di Programmer Zaman Now. Belajar JavaScript, Python, Database, API, dan banyak lagi bersama instruktur berpengalaman." />
  <meta property="og:image" content="https://www.programmerzamannow.com/img/pzn.png" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://pzn-labs.github.io/pzn-company-profile/" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Programmer Zaman Now – Belajar Pemrograman dari Dasar hingga Mahir" />
  <meta name="twitter:description" content="Temukan berbagai kelas pemrograman terbaik di Programmer Zaman Now. Belajar JavaScript, Python, Database, API, dan banyak lagi bersama instruktur berpengalaman." />
  <meta name="twitter:image" content="https://www.programmerzamannow.com/img/pzn.png" />

  <!-- Canonical URL -->
  <link rel="canonical" href="https://pzn-labs.github.io/pzn-company-profile/" />
</svelte:head>


<style>
  @keyframes marquee { 0% { transform: translateX(0%); } 100% { transform: translateX(-50%); } }
  .scrollbar-hide::-webkit-scrollbar { display: none; }
  .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
  @keyframes fadeIn { 0% { opacity: 0; transform: translateY(10px); } 100% { opacity: 1; transform: translateY(0); } }
  @keyframes fadeIn { 0% { opacity: 0; transform: translateY(10px); } 100% { opacity: 1; transform: translateY(0); } }
</style>

<!-- HERO SECTION -->
<Hero />

<!-- FITUR UTAMA -->
<section class="py-20 sm:py-24 bg-black text-white">
  <div class="mx-auto max-w-7xl px-6 lg:px-24">
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-3xl sm:text-4xl font-bold tracking-tight">Mengapa Pilih Programmer Zaman Now?</h2>
      <p class="mt-6 text-lg sm:text-xl text-gray-200">Platform belajar programming terbaik dengan metode pembelajaran efektif dan mentor berpengalaman.</p>
    </div>
    <div class="mx-auto mt-16 grid gap-16 sm:gap-12 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl">
      {#each fiturList as fitur}
        <div class="flex flex-col items-center text-center group">
          <img src={fitur.src} alt={fitur.title} loading="lazy" class="h-32 w-32 sm:h-40 sm:w-40 lg:h-44 lg:w-44 mb-4 rounded-2xl object-cover shadow-lg transition-transform duration-300 group-hover:scale-110"/>
          <h3 class="text-xl sm:text-2xl font-semibold mb-2">{fitur.title}</h3>
          <p class="text-sm sm:text-base text-gray-300 mt-2 max-w-xs leading-relaxed">{fitur.desc}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- ROADMAP SECTION -->
<section class="relative bg-black text-white py-16 overflow-hidden">
  <div class="max-w-6xl mx-auto px-6 text-center mb-12">
    <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">Roadmap Belajar Programmer Zaman Now</h2>
    <p class="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">Jalur lengkap dari pemula hingga mahir. Pelajari langkah demi langkah dan jadilah programmer profesional.</p>
  </div>

  <div class="relative max-w-7xl mx-auto px-4 sm:px-8">
    <div class="flex md:grid md:grid-cols-4 md:gap-4 overflow-x-auto md:overflow-visible space-x-4 sm:space-x-6 md:space-x-0 snap-x snap-mandatory md:snap-none scroll-smooth scrollbar-hide py-4">
      {#each steps as step}
        <div class="flex-shrink-0 md:flex-shrink md:w-auto snap-center md:snap-none w-72 sm:w-80 bg-gradient-to-b from-gray-900 to-gray-950 border border-gray-800 rounded-2xl p-5 sm:p-6 transition-transform duration-300 hover:-translate-y-1 shadow-lg">
          <div class="overflow-hidden rounded-xl mb-4">
            <img src={step.img} alt={step.title} loading="lazy" class="w-full h-40 sm:h-48 object-cover rounded-lg transition-transform duration-500 hover:scale-105"/>
          </div>
          <h3 class="text-lg sm:text-xl font-semibold mb-2">{step.id}. {step.title}</h3>
          <p class="text-gray-300 text-sm sm:text-sm leading-relaxed">{step.desc}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- PILIHAN KATEGORI TANPA GAMBAR -->
<section class="bg-black py-20 text-white">
  <div class="mx-auto max-w-7xl px-6 lg:px-8 text-center">
    <h2 class="text-3xl sm:text-4xl font-bold mb-4">Pilihan Program Belajar</h2>
    <p class="text-gray-400 mb-10 max-w-2xl mx-auto">
      Temukan jalur belajar yang paling sesuai dengan tujuan kariermu. Semua program disusun agar peserta bisa belajar dari dasar hingga mahir.
    </p>

    <!-- Tombol kategori -->
    <div class="flex justify-center flex-wrap gap-6 mb-12">
      {#each categories as cat}
        <button
          on:click={() => selected = cat}
          class="px-6 py-3 rounded-full font-semibold text-sm sm:text-base border transition-colors duration-300
            {selected.name === cat.name
              ? 'bg-blue-600 text-white border-blue-600'
              : 'bg-transparent border-gray-500 text-gray-300 hover:border-blue-600 hover:text-blue-400'}">
          {cat.name}
        </button>
      {/each}
    </div>

    <!-- Konten kategori -->
    <div class="max-w-3xl mx-auto text-left flex flex-col justify-center space-y-6">
      <div class="bg-gradient-to-r from-blue-800 via-black/80 to-blue-900 p-8 rounded-3xl shadow-2xl space-y-4">
        <h3 class="text-2xl sm:text-3xl font-bold">{selected.title}</h3>
        <p class="text-gray-200 text-base sm:text-lg leading-relaxed">{selected.description}</p>
        <p class="text-gray-300 text-sm sm:text-base leading-relaxed">{selected.detail}</p>
      </div>
    </div>
  </div>
</section>

<!-- MARQUEE SECTION -->
<section class="relative bg-black py-16 text-center text-white overflow-hidden">
  <div class="mb-12 px-6 relative z-10">
    <h2 class="text-3xl sm:text-4xl font-bold mb-3">Kelas Programmer Zaman Now</h2>
    <p class="text-gray-200 max-w-2xl mx-auto text-base sm:text-lg mb-6">
      Tingkatkan skill coding kamu bersama Programmer Zaman Now! Belajar pemrograman modern dari dasar hingga mahir dengan mentor berpengalaman dan materi yang selalu up-to-date.
    </p>
    <a
      href={base + "/kelas"}
      class="inline-block bg-white text-gray-900 hover:text-blue-400 hover:bg-transparent border border-gray-200 hover:border-blue-400 font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
    >
      Lihat Kelas
    </a>
  </div>

  <!-- Marquee kanan -->
  <Marquee {images} direction="right" speed={30} />

  <!-- Marquee kiri -->
  <Marquee {images} direction="left" speed={30} />
</section>






