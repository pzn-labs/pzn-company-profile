<script lang="ts">
    import { onMount, onDestroy } from "svelte";
    import "../app.css";
    import { writable } from 'svelte/store';

    
  
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
    import pznLogo from "$lib/assets/logo-pzn.png";

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

  let scrollContainer: HTMLDivElement | null = null;

  const scroll = (direction: 'left' | 'right') => {
    const amount = 320;
    scrollContainer?.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth'
    });
  };

  const steps = [
    {
      id: 1,
      title: 'Dasar Pemrograman',
      desc: 'Kuasai logika, algoritma, dan dasar bahasa pemrograman seperti JavaScript atau Python sebelum masuk ke tahap lanjut.',
      img: 'https://i.pinimg.com/736x/97/f3/2d/97f32dd3dec3221cca5a193bc352c8f3.jpg'
    },
    {
      id: 2,
      title: 'Web Development',
      desc: 'Bangun website modern dengan HTML, CSS, JavaScript, dan framework seperti Svelte, React, atau Vue.',
      img: 'https://i.pinimg.com/736x/c8/23/2e/c8232e214cc8e4ce311949db592fb103.jpg'
    },
    {
      id: 3,
      title: 'Backend & Database',
      desc: 'Pelajari cara membangun REST API, autentikasi, dan manajemen data menggunakan Node.js, Bun, MySQL, atau MongoDB.',
      img: 'https://i.pinimg.com/736x/0a/ac/f7/0aacf7f15eb464b8a53dacdaa46b00ae.jpg'
    },
    {
      id: 4,
      title: 'Deployment & Karier',
      desc: 'Pelajari cara deploy project ke Vercel, GitHub Pages, dan bangun portofolio profesional untuk karier software engineer.',
      img: 'https://i.pinimg.com/736x/bc/5d/b7/bc5db7c3dbd17856fe0366afda42e871.jpg'
    }
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
    interval = setInterval(showNext, 1000); // ⏱ Ganti setiap 1.5 detik
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

<!-- HERO SECTION -->
<section class="relative bg-gray-950 overflow-hidden py-16 text-white">
  <div class="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
    
    <!--  KANAN: GAMBAR HERO -->
    <div class="relative w-full aspect-video overflow-hidden rounded-3xl shadow-2xl">
      <img
        src={currentImage}
        alt="Hero Slideshow"
        class="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out"
      />
    </div>

    <!--  KIRI: TEKS -->
    <div class="space-y-6 text-center lg:text-left">
      <!-- Tagline -->
      <span class="inline-block text-sm font-semibold text-gray-900 bg-white px-4 py-2 rounded-full">
        Ngoding Dulu, Jadi Sultan Nanti!
      </span>

      <!-- Judul Hero -->
      <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-extrabold leading-tight tracking-tight">
        Programmer Zaman Now
      </h1>

      <!-- Deskripsi -->
      <p class="text-lg sm:text-xl text-gray-200 max-w-xl mx-auto lg:mx-0">
        Tempat Belajar untuk Menjadi Software Development Expert yang Zaman Now Banget!.
      </p>

      <!-- Tombol CTA -->
      <div class="pt-6">
        <a
          href="{base}/kelas"
          class="inline-flex items-center gap-3 px-6 py-3 bg-white text-gray-900 font-semibold rounded-xl shadow-lg hover:bg-gray-200 transition-all"
        >
          Mulai Sekarang
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</section>

<!-- FITUR UTAMA -->
<section class="py-20 sm:py-24 bg-black text-white">
  <div class="mx-auto max-w-7xl px-6 lg:px-24">
    
    <!-- Judul Section -->
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-3xl sm:text-4xl font-bold tracking-tight">
        Mengapa Pilih Programmer Zaman Now?
      </h2>
      <p class="mt-6 text-lg sm:text-xl text-gray-200">
        Platform belajar programming terbaik dengan metode pembelajaran efektif dan mentor berpengalaman.
      </p>
    </div>

    <!-- GRID FITUR -->
    <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none grid gap-16 lg:grid-cols-3">
      {#each [
        {
          src: "https://cdn-icons-png.flaticon.com/512/906/906175.png",
          title: "Materi Kekinian",
          desc: "Materi di sini selalu up to date sesuai dengan perkembangan teknologi saat ini. Sehingga peserta akan mendapatkan materi yang pasti selalu terbaru. Selain itu semua materi akan selalu di update secara berkala."
        },
        {
          src: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
          title: "Instruktur Berpengalaman",
          desc: "Di sini, instruktur belajar nya adalah praktisi yang sangat berpengalaman di dunia industri. Sehingga peserta tidak hanya bisa belajar teknologi saja, namun bisa belajar best practice dan pengalaman dari instrukturnya."
        },
        {
          src: roadmap,
          title: "Roadmap Jelas",
          desc: "Di sini, semua diajarkan dari awal sampai akhir. Setiap kelas sudah di susun sesuai dengan Roadmap nya. Sehingga peserta tidak akan tersesat ketika belajar, cukup ikuti kelas yang diinginkan."
        }
      ] as fitur (fitur.title)}
        <div class="flex flex-col items-center text-center">
          <img
            src={fitur.src}
            alt={fitur.title}
            class="h-32 w-32 sm:h-40 sm:w-40 lg:h-48 lg:w-48 mb-6 rounded-xl transition-transform duration-300 hover:scale-110 object-cover"
          />
          <h3 class="text-xl sm:text-2xl font-semibold">{fitur.title}</h3>
          <p class="mt-4 text-base sm:text-lg text-gray-200 leading-relaxed">
            {fitur.desc}
          </p>
        </div>
      {/each}
    </div>
  </div>
</section>


<!--  OVERLAY LOGO -->
<section class="bg-black py-10 overflow-hidden relative">
  <!-- Efek Gradasi Kiri -->
  <div class="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-black via-black/60 to-transparent z-10 pointer-events-none"></div>

  <!-- Efek Gradasi Kanan -->
  <div class="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-black via-black/60 to-transparent z-10 pointer-events-none"></div>

  <!-- Isi -->
  <div class="mx-auto max-w-6xl relative">
    <div class="relative flex overflow-hidden">
      <!-- Marquee 1 -->
      <div class="flex items-center gap-10 animate-marquee">
        {#each Array(14) as _}
          <div class="flex items-center gap-4 flex-shrink-0">
            <img src="{pznLogo}" alt="PZN Logo" class="w-12 h-12 sm:w-14 sm:h-14 object-contain drop-shadow-lg" />
            <h2 class="text-2xl sm:text-3xl font-bold text-white whitespace-nowrap tracking-wide">
              Programmer Zaman Now
            </h2>
          </div>
        {/each}
      </div>

      <!-- Marquee 2 (duplikat untuk looping) -->
      <div class="flex items-center gap-10 animate-marquee" aria-hidden="true">
        {#each Array(14) as _}
          <div class="flex items-center gap-4 flex-shrink-0">
            <img src="{pznLogo}" alt="PZN Logo" class="w-12 h-12 sm:w-14 sm:h-14 object-contain drop-shadow-lg" />
            <h2 class="text-2xl sm:text-3xl font-bold text-white whitespace-nowrap tracking-wide">
              Programmer Zaman Now
            </h2>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<!-- ROADMAP SECTION -->
<section class="relative bg-black text-white py-16 overflow-hidden">
  <div class="max-w-6xl mx-auto px-6 text-center mb-12">
    <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">
      Roadmap Belajar Programmer Zaman Now
    </h2>
    <p class="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
      Jalur lengkap dari pemula hingga mahir. Pelajari langkah demi langkah dan jadilah programmer profesional.
    </p>
  </div>

  <!-- WRAPPER -->
  <div class="relative max-w-7xl mx-auto px-4 sm:px-8">

    <!-- Scroll area (mobile scroll, desktop grid) -->
    <div
      bind:this={scrollContainer}
      class="flex md:grid md:grid-cols-4 md:gap-4 overflow-x-auto md:overflow-visible space-x-4 sm:space-x-6 md:space-x-0 snap-x snap-mandatory md:snap-none scroll-smooth scrollbar-hide py-4"
      style="padding-inline: 1rem;"
    >
      {#each steps as step}
        <div
          class="flex-shrink-0 md:flex-shrink md:w-auto snap-center md:snap-none w-72 sm:w-80 bg-gradient-to-b from-gray-900 to-gray-950 border border-gray-800 rounded-2xl p-5 sm:p-6
                 transition-transform duration-300 hover:-translate-y-1 shadow-lg"
        >
          <div class="overflow-hidden rounded-xl mb-4">
            <img src={step.img} alt={step.title} class="w-full h-40 sm:h-48 object-cover rounded-lg transition-transform duration-500 hover:scale-105" />
          </div>
          <h3 class="text-lg sm:text-xl font-semibold mb-2">{step.id}. {step.title}</h3>
          <p class="text-gray-300 text-sm sm:text-sm leading-relaxed">{step.desc}</p>
        </div>
      {/each}
    </div>
  </div>
</section>


<!-- MARQUEE SECTION -->
<section class="relative bg-black py-16 text-center text-white overflow-hidden">
  <!-- Gradien pinggir kiri & kanan -->
  <div class="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent z-20"></div>
  <div class="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent z-20"></div>

  <!-- Judul & Deskripsi -->
  <div class="mb-12 px-6 relative z-10">
    <h2 class="text-3xl sm:text-4xl font-bold mb-3">Kelas Programmer Zaman Now</h2>
    <p class="text-gray-200 max-w-2xl mx-auto text-base sm:text-lg mb-6">
      Tingkatkan skill coding kamu bersama Programmer Zaman Now!  
      Belajar pemrograman modern dari dasar hingga mahir dengan mentor berpengalaman dan materi yang selalu up-to-date.
    </p>

    <!-- Tombol Lihat Kelas -->
    <a
      href="{base}/kelas"
      class="inline-block bg-white text-gray-900 font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
    >
      Lihat Kelas
    </a>
  </div>

  <!-- Baris Atas ➡️ -->
  <div class="overflow-hidden w-full mb-10 group relative z-10">
    <div
      class="scroll-right flex items-center gap-8 sm:gap-10 lg:gap-14 px-4 sm:px-6 lg:px-10 group-hover:[animation-play-state:paused]"
    >
      {#each [...images, ...images] as img, i (i)}
        <img
          src={img}
          alt="logo"
          class="h-20 sm:h-24 md:h-32 lg:h-44 w-auto object-contain hover:scale-110 transition-transform duration-300 cursor-pointer"
        />
      {/each}
    </div>
  </div>

  <!-- Baris Bawah ⬅️ -->
  <div class="overflow-hidden w-full group relative z-10">
    <div
      class="scroll-left flex items-center gap-8 sm:gap-10 lg:gap-14 px-4 sm:px-6 lg:px-10 group-hover:[animation-play-state:paused]"
    >
      {#each [...images.reverse(), ...images.reverse()] as img, i (i)}
        <img
          src={img}
          alt="logo"
          class="h-20 sm:h-24 md:h-32 lg:h-44 w-auto object-contain hover:scale-110 transition-transform duration-300 cursor-pointer"
        />
      {/each}
    </div>
  </div>
</section>


<!-- PILIHAN KATEGORI -->
<section class="bg-black py-20 text-white">
  <div class="mx-auto max-w-3xl px-6 text-center">

    <!-- Judul & Deskripsi -->
    <h2 class="text-3xl sm:text-4xl font-bold mb-4">
      Pilihan Program Belajar
    </h2>
    <p class="text-gray-300 text-base sm:text-lg mb-12 max-w-2xl mx-auto">
      Dengan kurikulum terstruktur dan pengajar berpengalaman, kamu bisa belajar lebih fokus dan cepat mahir.
    </p>

    <!-- Tombol Kategori -->
    <div
      class="flex flex-wrap justify-center gap-2 sm:gap-3 mb-4 sticky top-0 bg-black py-2 z-10 backdrop-blur-md">
      {#each categories as cat}
        <button
          on:click={() => (selected = cat)}
          class={`px-3 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium shadow-md transition-all duration-300 ${
            selected.name === cat.name
              ? 'bg-white text-gray-900 hover:bg-gray-200'
              : 'bg-black text-gray-200 hover:border-blue-600 border border-gray-600'
          }`}>
          {cat.name}
        </button>
      {/each}
    </div>

    <!-- Card Kategori Terpilih -->
    <div
      class="bg-gray-black rounded-2xl p-2 sm:p-10 shadow-2xl border border-gray-700 backdrop-blur-md transition-all duration-500">
      <div class="space-y-5">
        <h3 class="text-2xl sm:text-3xl font-semibold text-white">
          {selected.title}
        </h3>
        <p class="text-gray-300 text-base sm:text-lg leading-relaxed">
          {selected.description}
        </p>
        <a
          href={base + "/kelas"}
          class="inline-block mt-4 px-6 py-3 bg-blue-500 hover:bg-blue-400 text-white font-semibold rounded-full shadow-lg transition-transform duration-300 hover:scale-105">
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
        { href: "https://www.tiktok.com/@programmerzamannow", icon: "https://cdn-icons-png.flaticon.com/512/3046/3046121.png", label: "TikTok" },
        { href: "https://facebook.com", icon: "https://cdn-icons-png.flaticon.com/512/733/733547.png", label: "Facebook" }
        ] as social}
        <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} class="group">
          <img
          src={social.icon}
          alt={social.label}
          class="h-6 w-6 opacity-80 group-hover:opacity-100 transform group-hover:scale-110 transition-all duration-300"
          />
        </a>
        {/each}
      </div>
      </div>
      
    </div>
    <div class="border-t border-gray-800 py-6 text-center">
      <p class="text-sm text-gray-400">
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

  /* Animasi scroll kanan */
  .scroll-right {
    animation: scrollRight 15s linear infinite;
    animation-play-state: running;
  }

  /* Animasi scroll kiri */
  .scroll-left {
    animation: scrollLeft 15s linear infinite;
    animation-play-state: running;
  }

  @keyframes scrollRight {
    0% {
      transform: translateX(-50%);
    }
    100% {
      transform: translateX(0%);
    }
  }

  @keyframes scrollLeft {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-50%);
    }
  }


  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
</style>


