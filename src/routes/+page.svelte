Anda bilang:
<script lang="ts">
    import { onMount, onDestroy } from "svelte";
    import "../app.css";
    
  
    import golang from "$lib/assets/golang.jpg"
    import html from "$lib/assets/html.jpg"
    import java from "$lib/assets/java.jpg"
    import laravel from "$lib/assets/laravel.jpg"
    import nodejs from "$lib/assets/nodejs.jpg"
    import mysql from "$lib/assets/mysql.jpg"
    import vue from "$lib/assets/vuejs.jpg"
    import php from "$lib/assets/php.jpg"
    import docker from "$lib/assets/docker.jpg"
    import spring from "$lib/assets/spring.jpg"
    import react from "$lib/assets/reactjs.jpg"
    import mongo from "$lib/assets/mongodb.jpg"
    import kotlin from "$lib/assets/kotlin.jpg"
    import git from "$lib/assets/git.jpg"
    import postgre from "$lib/assets/postgre.jpg"
    import redis from "$lib/assets/redis.jpg"
    import dart from "$lib/assets/dart.jpg"
    import typescript from "$lib/assets/typescript.jpg"
    import elastic from "$lib/assets/elasticsearch.jpg"
    import jenkins from "$lib/assets/jenkins.jpg"
    import android from "$lib/assets/android.jpg"
    import openapi from "$lib/assets/openapi.jpg"
    import restfull from "$lib/assets/restfulapi.jpg"
    import http from "$lib/assets/http.jpg"
    import phyton from "$lib/assets/python.jpg"
    import svelte from "$lib/assets/svelte.jpg"
    import bootstrap from "$lib/assets/bootstrap.jpg"
    import rust from "$lib/assets/rust.png"
    import bun from "$lib/assets/bun.png"
    import k6 from "$lib/assets/k6.jpg"
    import nestjs from "$lib/assets/nestjs.jpg"
    import rabbit from "$lib/assets/rabbitmq.jpg"
    import kafka from "$lib/assets/kafka.jpg"
    import roadmap from "$lib/assets/road-map.png"
    import app from "$lib/assets/application.png"
    import mobile from "$lib/assets/mobile.png"
    import uiux from "$lib/assets/uiux.png"
    import { base } from "$app/paths";
    import pznLogo from "$lib/assets/logo-pzn.png"

  // Array gambar
  const images = [
    html,
    laravel,
    mysql,
    golang,
    java,
    nodejs,
    vue,
    php,
    docker,
    spring,
    react,
    mongo,
    kotlin,
    git,
    postgre,
    react,
    redis,
    dart,
    typescript,
    elastic,
    jenkins,
    android,
    openapi,
    restfull,
    http,
    phyton,
    svelte,
    bootstrap,
    rust,
    bun,
    k6,
    nestjs,
    rabbit,
    kafka,
  ];

  let currentIndex = 0;
  let currentImage = images[currentIndex];
  let isFading = false;
  let interval: NodeJS.Timer;

  // Ganti gambar dengan efek fade
  const showNext = () => {
    isFading = true;
    setTimeout(() => {
      currentIndex = (currentIndex + 1) % images.length;
      currentImage = images[currentIndex];
      isFading = false;
    }, 300); // durasi transisi fade
  };

  onMount(() => {
    interval = setInterval(showNext, 1500); // ⏱ Ganti setiap 1.5 detik
  });

  onDestroy(() => {
    clearInterval(interval);
  });

  // Fix for missing activeClass
  let activeClass: string | null = null;

  const classes = [
    {
      id: "golang",
      name: "Kelas Golang",
      img: golang,
      desc: "Pelajari bahasa pemrograman Go dari dasar hingga mahir, dengan proyek nyata dan praktik industri."
    },
    {
      id: "java",
      name: "Kelas Java",
      img: java,
      desc: "Kuasai Java untuk pengembangan aplikasi modern, OOP, dan framework populer seperti Spring Boot."
    },
    {
      id: "nodejs",
      name: "Kelas Node.js",
      img: nodejs,
      desc: "Bangun aplikasi backend cepat dan scalable menggunakan Node.js dan Express dengan praktik terbaik."
    }
  ];

  const toggleClass = (id: string) => {
    activeClass = activeClass === id ? null : id;
  };

  const categories = [
    {
      name: "Web Development",
      image: app,
      title: "Siap Membangun Karier sebagai Web Developer Profesional?",
      description:
        "Kuasai HTML, CSS, JavaScript, dan framework populer seperti React serta Svelte. Program ini dirancang untuk membawamu dari pemula menjadi developer siap kerja."
    },
    {
      name: "Mobile Apps",
      image: mobile,
      title: "Jadilah Mobile App Developer Andal!",
      description:
        "Pelajari cara membuat aplikasi Android dan iOS menggunakan Flutter atau Kotlin. Cocok untuk kamu yang ingin fokus di dunia mobile development."
    },
    {
      name: "UI/UX Design",
      image: uiux,
      title: "Bangun Desain Antarmuka yang Memukau",
      description:
        "Pelajari prinsip desain, wireframing, prototyping, dan tools seperti Figma. Cocok untuk calon desainer yang ingin menciptakan pengalaman pengguna terbaik."
    }
  ];

  let selected = categories[0];
</script>

<!--  HERO SECTION -->
<section class="relative bg-gray-950 overflow-hidden py-24 text-white">
  <div class="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
    
    <!--  KIRI: TEKS -->
    <div class="space-y-6 text-center lg:text-left">
      <span class="inline-block text-sm font-semibold text-gray-900 bg-white px-4 py-2 rounded-full">
        Ngoding Dulu, Jadi Sultan Nanti!
      </span>

      <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
        Waktunya Bawa Karier IT Anda ke Level Dunia
      </h1>

      <p class="text-lg text-gray-200 max-w-xl mx-auto lg:mx-0">
        Programmer Zaman Now membantu Anda mengembangkan skill terdepan,
        teknologi terbaru, dan kemampuan praktis.
      </p>

      <!-- Tombol CTA -->
      <div class="pt-4">
        <a
          href="{base}/kelas"
          class="inline-flex items-center gap-2 px-4 py-2 bg-white text-gray-900 font-semibold rounded-xl shadow-lg hover:bg-gray-200 transition-all"
        >
          Mulai Sekarang
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
      </div>
    </div>

    <!--  KANAN: GAMBAR -->
    <div class="relative w-full aspect-video overflow-hidden rounded-3xl shadow-2xl">  
      <img
        src={currentImage}
        alt="Hero Slideshow"
        class="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out"
        class:opacity-0={isFading}
      />
    </div>
  </div>
</section>

<!--  FITUR UTAMA -->
<section class="py-20 sm:py-16 bg-black text-white">
  <div class="mx-auto max-w-7xl px-6 lg:px-24">
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-3xl font-bold sm:text-4xl">Mengapa Pilih Programmer Zaman Now?</h2>
      <p class="mt-6 text-lg text-gray-200">
        Platform belajar programming terbaik dengan metode pembelajaran yang
        efektif dan mentor berpengalaman.
      </p>
    </div>

    <!-- GRID FITUR -->
    <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none grid gap-24 lg:grid-cols-3">
      {#each [
        {
          src: "https://cdn-icons-png.flaticon.com/512/906/906175.png",
          title: "Materi Kekinian",
          desc: "Materi selalu up to date sesuai perkembangan teknologi terkini, diperbarui secara berkala."
        },
        {
          src: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
          title: "Instruktur Berpengalaman",
          desc: "Instruktur adalah praktisi industri yang siap membagikan best practice dan pengalaman nyata."
        },
        {
          src: roadmap,
          title: "Roadmap Jelas",
          desc: "Setiap kelas disusun berdasarkan roadmap terstruktur, dari dasar hingga mahir."
        }
      ] as fitur (fitur.title)}
        <div class="flex flex-col items-center text-center">
          <img src={fitur.src} alt={fitur.title} class="h-64 w-64 mb-6 rounded-xl transition-transform duration-300 hover:scale-110 object-cover" />
          <h3 class="text-xl font-semibold">{fitur.title}</h3>
          <p class="mt-4 text-base text-gray-400">{fitur.desc}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!--  OVERLAY LOGO -->
<section class="bg-gray-900 py-4 overflow-hidden">
  <div class="mx-auto max-w-5xl">
    <div class="relative flex overflow-hidden">
      <div class="flex items-center gap-4 animate-marquee">
        {#each Array(14) as _}
          <div class="flex items-center gap-2 flex-shrink-0">
            <img src="{pznLogo}" alt="PZN Logo" class="w-7 h-7 object-contain" />
            <h2 class="text-base font-semibold text-white whitespace-nowrap leading-none">
              Programmer Zaman Now
            </h2>
          </div>
        {/each}
      </div>
      <div class="flex items-center gap-4 animate-marquee" aria-hidden="true">
        {#each Array(14) as _}
          <div class="flex items-center gap-2 flex-shrink-0">
            <img src="{pznLogo}" alt="PZN Logo" class="w-7 h-7 object-contain" />
            <h2 class="text-base font-semibold text-white whitespace-nowrap leading-none">
              Programmer Zaman Now
            </h2>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<!--  PILIHAN KATEGORI -->
<section class="bg-black py-20 text-white">
  <div class="mx-auto max-w-7xl px-6 lg:px-8 text-center">
    <h2 class="text-3xl font-bold mb-4">Pilihan Program Belajar</h2>
    <p class="text-gray-400 mb-10">
      Dengan kurikulum terstruktur dan pengajar berpengalaman, kamu bisa belajar lebih fokus dan cepat mahir.
    </p>

    <div class="flex flex-wrap justify-center gap-3 mb-10">
      {#each categories as cat}
        <button
          on:click={() => (selected = cat)}
          class={`px-5 py-2 rounded-full transition shadow-md ${
            selected.name === cat.name
              ? 'bg-white text-gray-900 hover:bg-gray-200'
              : 'bg-gray-900 text-gray-200 hover:bg-gray-700'
          }`}
        >
          {cat.name}
        </button>
      {/each}
    </div>

    <div
  class="bg-gray-800 rounded-2xl p-6 sm:p-8 flex flex-row items-center justify-center gap-6 sm:gap-10 shadow-xl border border-gray-800">
  
  <!--  Gambar kiri -->
  <div class="flex-shrink-0 w-1/3 sm:w-1/2 flex justify-center">
    <img
      src={selected.image}
      alt={selected.name}
      class="w-full sm:w-4/5 h-auto object-cover transition-transform duration-500 hover:scale-105"
    />
  </div>

  <!--  Deskripsi kanan -->
  <div class="w-2/3 sm:w-1/2 space-y-4 text-left">
    <h3 class="text-xl sm:text-2xl text-white font-bold">{selected.title}</h3>
    <p class="text-gray-300 text-sm sm:text-base leading-relaxed">{selected.description}</p>
    <a
      href={base + "/kelas"}
      class="inline-block mt-3 px-5 py-2 bg-blue-500 hover:bg-blue-400 text-white font-semibold rounded-full shadow-md transition"
    >
      Daftar Sekarang →
    </a>
  </div>
</div>

  </div>
</section>

  <!-- FOOTER -->
  <footer class="bg-gray-950 text-gray-400 border-t border-gray-800">
    <div class="mx-auto max-w-7xl px-6 py-16 lg:px-8 grid gap-12 md:grid-cols-3 items-start">
      <!-- Kolom 1 -->
      <div class="space-y-5">
      <div class="flex items-center gap-3">
        <img src="https://www.programmerzamannow.com/img/pzn.png" alt="PZN Logo"
        class="h-10 w-auto transition-transform hover:scale-105 duration-300" />
        <span class="text-lg font-semibold text-white">Programmer Zaman Now</span>
      </div>
      <p class="text-sm leading-relaxed max-w-sm">
        Belajar programming dari dasar hingga mahir bersama mentor berpengalaman.
        Temukan cara modern untuk menguasai dunia teknologi dengan pembelajaran praktis dan relevan industri.
      </p>
      </div>
    
      <!-- Kolom 2 -->
      <div class="space-y-5">
      <h4 class="text-base font-semibold text-white">Navigasi</h4>
      <ul class="grid grid-cols-2 sm:grid-cols-1 gap-2">
        {#each [
        { name: "Beranda", href: "/" },
        { name: "Kelas", href: "/kelas" },
        { name: "Promo", href: "/promo" },
        { name: "Sosial Media", href: "/sosial-media" }
        ] as link}
        <li>
          <a href={base + link.href} class="text-sm text-gray-400 hover:text-white transition-colors duration-200">
          {link.name}
          </a>
        </li>
        {/each}
      </ul>
      </div>
    
      <!-- Kolom 3 -->
      <div class="space-y-5">
      <h4 class="text-base font-semibold text-white">Ikuti Kami</h4>
      <div class="flex gap-5">
        {#each [
        { href: "https://youtube.com", icon: "https://cdn-icons-png.flaticon.com/512/1384/1384060.png", label: "YouTube" },
        { href: "https://instagram.com", icon: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png", label: "Instagram" },
        { href: "https://t.me", icon: "https://cdn-icons-png.flaticon.com/512/2111/2111646.png", label: "Telegram" },
        { href: "https://facebook.com", icon: "https://cdn-icons-png.flaticon.com/512/733/733547.png", label: "Facebook" }
        ] as social}
        <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} class="group">
          <img src={social.icon} alt={social.label}
          class="h-6 w-6 opacity-80 group-hover:opacity-100 transform group-hover:scale-110 transition-all duration-300" />
        </a>
        {/each}
      </div>
      </div>
    </div>
    <div class="border-t border-gray-800 py-6 text-center">
      <p class="text-sm text-gray-500">
      © {new Date().getFullYear()} <span class="font-medium text-white">Programmer Zaman Now</span>.
      </p>
    </div>
    </footer>



<style>
  @keyframes marquee {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  .animate-marquee {
    display: flex;
    white-space: nowrap;
    animation: marquee 25s linear infinite;
  }
</style>


