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
  let interval: ReturnType<typeof setInterval>;

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

  const fiturList = [
		{
			src: "https://cdn-icons-png.flaticon.com/512/906/906175.png",
			title: "Materi Kekinian",
			desc: "Materi di sini selalu up to date sesuai dengan perkembangan teknologi saat ini. Sehingga peserta akan mendapatkan materi yang selalu terbaru. Semua materi diperbarui secara berkala."
		},
		{
			src: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
			title: "Instruktur Berpengalaman",
			desc: "Instruktur kami adalah praktisi industri berpengalaman. Peserta bisa belajar tidak hanya teori, tapi juga best practice dan pengalaman dunia nyata."
		},
		{
			src: roadmap,
			title: "Roadmap Jelas",
			desc: "Setiap kelas disusun berdasarkan roadmap yang jelas — dari dasar hingga mahir. Peserta tinggal mengikuti alur pembelajaran yang sudah dirancang dengan sistematis."
		}
	];

  let selected = categories[0];
</script>

<!--  HERO SECTION MODERN -->
<section
  class="relative bg-gray-950 text-white overflow-hidden"
>
  <div
    class="mx-auto max-w-7xl px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-2 items-center gap-16"
  >
    <!--  KANAN: GAMBAR -->
    <div
      class="relative w-full overflow-hidden rounded-3xl shadow-2xl order-1 lg:order-2"
    >
      <img
        src={currentImage}
        alt="Programmer Zaman Now"
        class="w-full h-full object-cover rounded-3xl transform hover:scale-105 transition-transform duration-700"
      />
    </div>

    <!--  KIRI: TEKS -->
    <div
      class="space-y-4 text-center lg:text-left relative z-20"
    >
      <!-- Tagline -->
      <span
        class="inline-block text-sm font-semibold text-white bg-clip-text uppercase tracking-wide"
      >
        Ngoding Dulu, Jadi Sultan Nanti!
      </span>

      <!-- Judul Hero -->
      <h1
        class="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight"
      >
        <span class="text-white">
          Programmer Zaman Now
        </span>
      </h1>

      <!-- Deskripsi -->
      <p
        class="text-base sm:text-lg text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed"
      >
        Tingkatkan skill coding kamu dan jadilah bagian dari komunitas developer
        terbaik di Indonesia! Belajar dengan mentor profesional dan kurikulum yang up-to-date.
      </p>

      <!-- CTA Buttons -->
      <div
        class="pt-6 flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4"
      >
        <a
          href="{base}/kelas"
          class="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white hover:bg-transparent text-gray-900 border border-gray-200 hover:border-blue-400 hover:text-blue-400 font-semibold rounded-full shadow-lg transition-transform duration-300 hover:scale-105 w-full sm:w-auto"
        >
          Mulai Sekarang
        </a>

        <a
          href="{base}/promo"
          class="inline-flex items-center justify-center gap-2 px-6 py-3 border border-gray-600 hover:border-blue-400 hover:text-blue-400 text-gray-300 font-semibold rounded-full transition-all duration-300 w-full sm:w-auto"
        >
          Lihat Promo
        </a>
      </div>
    </div>
  </div>
</section>


<!-- FITUR UTAMA -->
<section class="py-20 sm:py-24 bg-black text-white">
	<div class="mx-auto max-w-7xl px-6 lg:px-24">
		<!-- Judul -->
		<div class="mx-auto max-w-2xl text-center">
			<h2 class="text-3xl sm:text-4xl font-bold tracking-tight">
				Mengapa Pilih Programmer Zaman Now?
			</h2>
			<p class="mt-6 text-lg sm:text-xl text-gray-200">
				Platform belajar programming terbaik dengan metode pembelajaran efektif dan mentor berpengalaman.
			</p>
		</div>

		<!-- Grid Fitur -->
		<div class="mx-auto mt-16 grid gap-16 sm:gap-12 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl">
			{#each fiturList as fitur}
				<div class="flex flex-col items-center text-center group">
					<img
						src={fitur.src}
						alt={fitur.title}
						class="h-32 w-32 sm:h-40 sm:w-40 lg:h-44 lg:w-44 mb-4 rounded-2xl object-cover shadow-lg transition-transform duration-300 group-hover:scale-110"
					/>
					<h3 class="text-xl sm:text-2xl font-semibold mb-2">{fitur.title}</h3>
					<p class="text-sm sm:text-base text-gray-300 mt-2 max-w-xs leading-relaxed">
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
    <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
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
  <!-- Judul & Deskripsi (tanpa gradasi) -->
  <div class="mb-12 px-6 relative z-10">
    <h2 class="text-3xl sm:text-4xl font-bold mb-3">Kelas Programmer Zaman Now</h2>
    <p class="text-gray-200 max-w-2xl mx-auto text-base sm:text-lg mb-6">
      Tingkatkan skill coding kamu bersama Programmer Zaman Now!  
      Belajar pemrograman modern dari dasar hingga mahir dengan mentor berpengalaman dan materi yang selalu up-to-date.
    </p>

    <!-- Tombol Lihat Kelas -->
    <a
      href="{base}/kelas"
      class="inline-block bg-white text-gray-900 hover:text-blue-400 hover:bg-transparent border border-gray-200 hover:border-blue-400 font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
    >
      Lihat Kelas
    </a>
  </div>

  <!-- Baris Atas -->
  <div class="relative overflow-hidden w-full mb-10 group">
    <!-- Gradien pinggir kiri & kanan -->
    <div class="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent z-10"></div>
    <div class="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent z-10"></div>

    <!-- Isi marquee -->
    <div
      class="scroll-right flex items-center gap-6 sm:gap-10 lg:gap-14 px-4 sm:px-6 lg:px-10 group-hover:[animation-play-state:paused]"
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

  <!-- Baris Bawah -->
  <div class="relative overflow-hidden w-full group">
    <!-- Gradien pinggir kiri & kanan -->
    <div class="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent z-10"></div>
    <div class="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent z-10"></div>

    <!-- Isi marquee -->
    <div
      class="scroll-left flex items-center gap-6 sm:gap-10 lg:gap-14 px-4 sm:px-6 lg:px-10 group-hover:[animation-play-state:paused]"
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
<section class="relative bg-black py-24 text-white overflow-hidden">
  <!-- Elemen Dekoratif -->
  <div class="absolute inset-0">
    <div class="absolute top-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
    <div class="absolute bottom-0 right-0 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl"></div>
  </div>

  <div class="relative mx-auto max-w-6xl px-6 text-center">
    <!-- Judul -->
    <h2 class="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6">
      Pilihan Program Belajar
    </h2>
    <p class="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto mb-16">
      Pilih bidang yang ingin kamu kuasai — dari pemrograman, database, hingga cloud computing. 
      Belajar lebih cepat bersama mentor berpengalaman.
    </p>

    <!-- Tombol Kategori -->
    <div
      class="flex flex-wrap justify-center gap-3 mb-10 sticky top-0 bg-black/60 backdrop-blur-md py-3 rounded-xl z-10 shadow-inner">
      {#each categories as cat}
        <button
          on:click={() => (selected = cat)}
          class={`px-5 py-2 sm:py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
            selected.name === cat.name
              ? 'bg-white text-black shadow-lg scale-105'
              : 'bg-black border border-gray-400 text-gray-300 hover:border-blue-400 hover:text-blue-400'
          }`}>
          {cat.name}
        </button>
      {/each}
    </div>

    <!-- Card Kategori Terpilih -->
    <div
      class="relative bg-gradient-to-br from-gray-900 via-gray-950 to-black border border-gray-800 rounded-3xl p-10 shadow-2xl backdrop-blur-lg transition-transform duration-500 hover:scale-[1.01]">
      
      <!-- Animasi Transisi -->
      <div class="animate-fadeIn space-y-6">
        <h3 class="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          {selected.title}
        </h3>
        <p class="text-gray-300 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
          {selected.description}
        </p>

        <div class="mt-8">
          <a
            href={base + "/kelas"}
            class="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-transparent text-gray-900 hover:text-blue-400 border border-gray-200 hover:border-blue-400 font-semibold rounded-full shadow-lg transition-transform duration-300 hover:scale-105">
            Daftar Sekarang
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
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

  @keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(10px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
	.animate-fadeIn {
		animation: fadeIn 0.4s ease-out;
	}
</style>


