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
    mongo
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
<section class="relative bg-gray-900 overflow-hidden py-24 rounded-b-4xl">
  <div class="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
    
    <!-- 🩶 KIRI: TEKS (monokrom) -->
    <div class="space-y-6 text-center lg:text-left">
      <span class="inline-block text-sm font-semibold text-gray-900 bg-gray-100 px-4 py-2 rounded-full">
        Ngoding Dulu, Jadi Sultan Nanti!
      </span>

      <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white">
        Waktunya Bawa Karier IT Anda ke Level Dunia <br class="hidden sm:block" />
      </h1>

      <p class="text-lg text-gray-400 dark:text-gray-400 max-w-xl mx-auto lg:mx-0">
        Programmer Zaman Now membantu Anda mengembangkan skill terdepan,
        teknologi terbaru, dan kemampuan praktis.
      </p>

      <!--  Tombol CTA (monokrom elegan) -->
      <div class="pt-4">
        <a
          href="{base}/kelas"
          class="inline-flex items-center gap-2 px-4 py-2 bg-white text-gray-900 font-semibold rounded-xl shadow-lg hover:bg-gray-200 transition-all"
        >
          Mulai Sekarang
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </a>
      </div>
    </div>

    <!-- 🎨 KANAN: GAMBAR SLIDESHOW (tetap berwarna penuh) -->
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





<!-- Fitur Utama -->
<section class="py-20 sm:py-16 bg-white dark:bg-gray-900">
	<div class="mx-auto max-w-7xl px-6 lg:px-24">
		<div class="mx-auto max-w-2xl text-center">
			<h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
				Mengapa Pilih Programmer Zaman Now?
			</h2>
			<p class="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
				Platform belajar programming terbaik dengan metode pembelajaran yang
				efektif dan mentor berpengalaman.
			</p>
		</div>

		<!-- GRID FITUR -->
    <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none grid gap-24 lg:grid-cols-3">
      <!-- Fitur 1 -->
      <div class="flex flex-col items-center lg:items-start text-center lg:text-left">
        <img
          src="https://cdn-icons-png.flaticon.com/512/906/906175.png"
          alt="Materi Kekinian"
          class="h-64 w-64 mb-6 transition-transform duration-300 hover:scale-110"
        />
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
          Materi Kekinian
        </h3>
        <p class="mt-4 text-base leading-7 text-gray-600 dark:text-gray-300">
          Materi di sini selalu up to date sesuai dengan perkembangan teknologi saat ini. Sehingga peserta akan mendapatkan materi yang pasti selalu terbaru. Selain itu semua materi akan selalu di update secara berkala.
        </p>
      </div>
    
      <!-- Fitur 2 -->
      <div class="flex flex-col items-center lg:items-start text-center lg:text-left">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="Instruktur Berpengalaman"
          class="h-64 w-64 mb-6 transition-transform duration-300 hover:scale-110"
        />
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
          Instruktur Berpengalaman
        </h3>
        <p class="mt-4 text-base leading-7 text-gray-600 dark:text-gray-300">
          Di sini, instruktur belajar nya adalah praktisi yang sangat berpengalaman di dunia industri. Sehingga peserta tidak hanya bisa belajar teknologi saja, namun bisa belajar best practice dan pengalaman dari instrukturnya.
        </p>
      </div>
    
      <!-- Fitur 3 -->
      <div class="flex flex-col items-center lg:items-start text-center lg:text-left">
        <img
          src="{roadmap}"
          alt="Roadmap Jelas"
          class="h-64 w-64 mb-6 rounded-xl transition-transform duration-300 hover:scale-110 object-cover"
        />
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
          Roadmap Jelas
        </h3>
        <p class="mt-4 text-base leading-7 text-gray-600 dark:text-gray-300">
          Di sini, semua diajarkan dari awal sampai akhir. Setiap kelas sudah disusun sesuai dengan Roadmap-nya. Sehingga peserta tidak akan tersesat ketika belajar, cukup ikuti kelas yang diinginkan.
        </p>
      </div>
    </div>
    
	</div>
</section>

<!-- overlay logo -->
<section class="bg-gray-100 dark:bg-gray-900 py-4 overflow-hidden">
  <div class="mx-auto max-w-5xl px-6">
    <!-- 🔹 Wrapper animasi -->
    <div class="relative flex overflow-hidden">
      <!-- 🔹 Konten bergerak -->
      <div class="flex items-center gap-4 animate-marquee">
        {#each Array(14) as _}
          <div class="flex items-center gap-2 flex-shrink-0">
            <img
              src="{pznLogo}"
              alt="PZN Logo"
              class="w-7 h-7 object-contain"
            />
            <h2 class="text-base font-semibold text-gray-900 dark:text-white whitespace-nowrap leading-none">
              Programmer Zaman Now
            </h2>
          </div>
        {/each}
      </div>

      <!-- 🔹 Duplikasi konten agar loop halus tanpa jeda -->
      <div class="flex items-center gap-4 animate-marquee" aria-hidden="true">
        {#each Array(14) as _}
          <div class="flex items-center gap-2 flex-shrink-0">
            <img
              src="{pznLogo}"
              alt="PZN Logo"
              class="w-12 h-12 object-contain"
            />
            <h2 class="text-2xl font-semibold text-gray-900 dark:text-white whitespace-nowrap leading-none">
              Programmer Zaman Now
            </h2>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<section class="py-20 sm:py-16 bg-white dark:bg-gray-900">
  <div class="mx-auto max-w-7xl px-6 lg:px-24">
    <!-- Judul -->
    <div class="max-w-2xl text-left mb-10">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
        Kelas Populer
      </h2>
      <p class="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
        Pilih kelas favorit dan lihat kontennya secara visual.
      </p>
    </div>

    <!-- Grid: 2 kiri, 1 kanan -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- 🔹 KIRI (2 gambar vertikal) -->
      <div class="flex flex-col gap-6 col-span-2 lg:col-span-1">
        {#each [
          { src: golang, title: 'Belajar Golang', desc: 'Kuasai backend modern dengan Golang dan praktik nyata.' },
          { src: java, title: 'Pemrograman Java', desc: 'Pelajari OOP dan framework Java untuk aplikasi enterprise.' }
        ] as kelas (kelas.title)}
          <div class="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg aspect-[16/9]">
            <img
              src={kelas.src}
              alt={kelas.title}
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            <!-- Overlay -->
            <div
              class="absolute inset-0 bg-black/60 transition-opacity duration-500 flex flex-col items-center justify-center text-center p-6 
                     opacity-100 sm:opacity-0 sm:group-hover:opacity-100"
            >
              <h3 class="text-white text-2xl font-bold mb-3">{kelas.title}</h3>
              <p class="text-gray-200 text-sm">{kelas.desc}</p>
            </div>
          </div>
        {/each}
      </div>

      <!-- 🔹 KANAN (1 gambar besar) -->
      <div class="col-span-2 lg:col-span-2">
        <div class="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg aspect-[16/9]">
          <img
            src={nodejs}
            alt="Belajar Node.js"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div
            class="absolute inset-0 bg-black/60 transition-opacity duration-500 flex flex-col items-center justify-center text-center p-6
                   opacity-100 sm:opacity-0 sm:group-hover:opacity-100"
          >
            <h3 class="text-white text-2xl font-bold mb-3">Belajar Node.js</h3>
            <p class="text-gray-200 text-sm">
              Bangun aplikasi web cepat dengan JavaScript di sisi server.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<!-- pilihan kategori-->
<section class="bg-white dark:bg-gray-900 py-20">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <!-- 🔹 Judul -->
    <div class="text-center mb-10">
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white">
        Pilihan Program Belajar di Programmer Zaman Now
      </h2>
      <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
        Dengan kurikulum terstruktur dan pengajar berpengalaman, kamu bisa belajar lebih fokus dan cepat mahir.
      </p>
    </div>

    <!-- 🔹 Tabs -->
    <div class="flex flex-wrap justify-center gap-4 mb-10">
      {#each categories as cat}
        <button
          on:click={() => (selected = cat)}
          class={`px-5 py-2 rounded-full transition shadow-md ${
            selected.name === cat.name
              ? 'bg-gray-800 text-white hover:bg-gray-700'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
          }`}
        >
          {cat.name}
        </button>
      {/each}
    </div>

    <!-- 🔹 Konten -->
    <div
      class="bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 lg:p-10 flex flex-col lg:flex-row items-center gap-10 text-gray-900 dark:text-gray-100 shadow-xl transition-all duration-500"
    >
      <!-- 🖼️ Gambar -->
      <div class="flex-shrink-0 w-full lg:w-1/2 flex justify-center">
        <img
          src={selected.image}
          alt={selected.name}
          class="rounded-2xl w-3/4 lg:w-4/5 h-auto object-cover"
        />
      </div>

      <!-- 🧾 Teks -->
      <div class="w-full lg:w-1/2 space-y-5 text-center lg:text-left transition-all duration-500">
        <h3 class="text-2xl lg:text-3xl font-bold leading-tight">{selected.title}</h3>
        <p class="text-gray-800 dark:text-gray-300 leading-relaxed">{selected.description}</p>
        <a
          href={base + "/kelas"}
          class="inline-block mt-4 px-6 py-3 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-700 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200 transition"
        >
          Daftar Sekarang →
        </a>
      </div>
    </div>
  </div>
</section>

<!-- FOOTER -->
<footer class="bg-gray-900 text-gray-300 border-t border-gray-800 rounded-t-4xl">
	<div class="mx-auto max-w-7xl px-6 py-16 lg:px-8 grid gap-12 md:grid-cols-3 items-start">
		<!-- 🟣 Kolom 1: Logo & Deskripsi -->
		<div class="space-y-5">
			<div class="flex items-center gap-3">
				<img
					src="https://www.programmerzamannow.com/img/pzn.png"
					alt="PZN Logo"
					class="h-10 w-auto transition-transform hover:scale-105 duration-300"
				/>
				<span class="text-lg font-semibold text-white tracking-tight">
					Programmer Zaman Now
				</span>
			</div>
			<p class="text-sm text-gray-400 leading-relaxed max-w-sm">
				Belajar programming dari dasar hingga mahir bersama mentor berpengalaman.
				Temukan cara modern untuk menguasai dunia teknologi dengan pembelajaran praktis dan relevan industri.
			</p>
		</div>

		<!-- 🟣 Kolom 2: Navigasi -->
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
						<a
							href={base + link.href}
							class="text-sm text-gray-400 hover:text-white transition-colors duration-200"
							>{link.name}</a
						>
					</li>
				{/each}
			</ul>
		</div>

		<!-- 🟣 Kolom 3: Sosial Media -->
		<div class="space-y-5">
			<h4 class="text-base font-semibold text-white">Ikuti Kami</h4>
			<div class="flex gap-5">
				{#each [
					{
						href: "https://youtube.com",
						icon: "https://cdn-icons-png.flaticon.com/512/1384/1384060.png",
						label: "YouTube"
					},
					{
						href: "https://instagram.com",
						icon: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png",
						label: "Instagram"
					},
					{
						href: "https://t.me",
						icon: "https://cdn-icons-png.flaticon.com/512/2111/2111646.png",
						label: "Telegram"
					},
					{
						href: "https://facebook.com",
						icon: "https://cdn-icons-png.flaticon.com/512/733/733547.png",
						label: "Facebook"
					}
				] as social}
					<a
						href={social.href}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={social.label}
						class="group"
					>
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

	<!-- 🟣 Garis Pemisah + Copyright -->
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


