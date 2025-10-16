<script lang="ts">
    import { onMount, onDestroy } from "svelte";
    import "../app.css";
  
    import html from "$lib/assets/html.jpg";
    import laravel from "$lib/assets/laravel.jpg";
    import mysql from "$lib/assets/mysql.jpg";
  
    let currentIndex = 0;
    let heroImage: HTMLImageElement;
  
    const images = [html, laravel, mysql];
  
    // Fungsi pindah gambar dengan fade
    const showNext = () => {
      if (!heroImage) return;
      heroImage.classList.add("opacity-0");
      setTimeout(() => {
        currentIndex = (currentIndex + 1) % images.length;
        heroImage.src = images[currentIndex];
        heroImage.classList.remove("opacity-0");
      }, 300);
    };
  
    let interval: NodeJS.Timer;
  
    onMount(() => {
      heroImage = document.getElementById("hero-image")! as HTMLImageElement;
  
      // Jalankan otomatis tiap 3 detik
      interval = setInterval(showNext, 3000);
    });
  
    onDestroy(() => {
      clearInterval(interval); // bersihkan interval saat komponen hilang
    });
  </script>

<svelte:head>
	<title>Programmer Zaman Now</title>
	<meta
		name="description"
		content="Ikuti Programmer Zaman Now di berbagai platform sosial media untuk update terbaru, tips programming, dan konten edukatif."
	/>
</svelte:head>

<!-- Hero Section -->
<section class="relative bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 py-24 sm:py-24 lg:py-24 rounded-b-4xl">
    <div class="mx-auto max-w-7xl px-6 sm:px-8 grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-8">
  
      <!-- KIRI: TEKS -->
      <div class="space-y-6 text-center lg:text-left order-2 lg:order-1">
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight max-w-2xl mx-auto lg:mx-0">
          Programmer Zaman Now
        </h1>
        <p class="mt-4 text-base sm:text-lg leading-relaxed text-gray-300 dark:text-gray-600 max-w-2xl mx-auto lg:mx-0">
          Belajar programming dari dasar hingga mahir bersama Programmer Zaman Now. 
          Dapatkan skill yang dibutuhkan industri dan siap berkarir di dunia teknologi.
        </p>
  
        <!-- Tombol -->
        <div class="mt-6 flex flex-wrap justify-center lg:justify-start gap-3">
          <a
            href="/kelas"
            class="px-6 py-3 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-semibold text-sm shadow-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            Lihat Kelas
          </a>
          <a
            href="/promo"
            class="px-6 py-3 rounded-md bg-transparent border border-white/30 dark:border-gray-700 text-white dark:text-gray-200 font-semibold text-sm hover:bg-white/10 dark:hover:bg-gray-800 transition"
          >
            Lihat Promo &rarr;
          </a>
        </div>
      </div>
  
      <!-- KANAN: HERO IMAGE OTOMATIS -->
      <div class="relative w-full overflow-hidden rounded-2xl shadow-2xl">
        <!-- svelte-ignore a11y_img_redundant_alt -->
        <img
            id="hero-image"
            src={images[currentIndex]}
            alt="Hero image Programmer Zaman Now"
            class="w-full h-auto object-contain transition-opacity duration-300 opacity-100"
        />
      </div>
  
    </div>
  </section>

<!-- Fitur Utama -->
<section class="py-20 sm:py-16 bg-white dark:bg-gray-900">
	<div class="mx-auto max-w-7xl px-6 lg:px-24">
		<div class="mx-auto max-w-2xl text-center">
			<h2
				class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
			>
				Mengapa Pilih Programmer Zaman Now?
			</h2>
			<p class="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
				Platform belajar programming terbaik dengan metode pembelajaran yang
				efektif dan mentor berpengalaman.
			</p>
		</div>

		<!-- GRID FITUR -->
		<div
			class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none grid gap-12 lg:grid-cols-3"
		>
			<!-- Fitur 1 -->
			<div class="flex flex-col items-center lg:items-start text-center lg:text-left">
				<img
					src="https://cdn-icons-png.flaticon.com/512/906/906175.png"
					alt="Materi Kekinian"
					class="h-16 w-16 mb-4"
				/>
				<h3 class="text-lg font-semibold text-gray-900 dark:text-white">
					Materi Kekinian
				</h3>
				<p class="mt-4 text-base leading-7 text-gray-600 dark:text-gray-300">
					Materi selalu up-to-date sesuai perkembangan teknologi terkini dan
					terus diperbarui secara berkala.
				</p>
			</div>

			<!-- Fitur 2 -->
			<div class="flex flex-col items-center lg:items-start text-center lg:text-left">
				<img
					src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
					alt="Instruktur Berpengalaman"
					class="h-16 w-16 mb-4"
				/>
				<h3 class="text-lg font-semibold text-gray-900 dark:text-white">
					Instruktur Berpengalaman
				</h3>
				<p class="mt-4 text-base leading-7 text-gray-600 dark:text-gray-300">
					Instruktur merupakan praktisi industri berpengalaman yang membagikan
					best practice dan wawasan dunia kerja nyata.
				</p>
			</div>

			<!-- Fitur 3 -->
			<div class="flex flex-col items-center lg:items-start text-center lg:text-left">
				<img
					src="https://i.pinimg.com/1200x/66/20/87/662087df1986b1e97b3bd46c57a89a2f.jpg"
					alt="Roadmap Jelas"
					class="h-16 w-16 mb-4"
				/>
				<h3 class="text-lg font-semibold text-gray-900 dark:text-white">
					Roadmap Jelas
				</h3>
				<p class="mt-4 text-base leading-7 text-gray-600 dark:text-gray-300">
					Setiap kelas disusun sesuai roadmap belajar terarah dari dasar hingga
					tahap lanjut — tanpa kebingungan.
				</p>
			</div>
		</div>
	</div>
</section>


<!-- CTA Section -->
<section class="bg-white dark:bg-gray-900">
	<div class="px-6 py-24 sm:px-6 sm:py-16 lg:px-8">
		<div class="bg-gray-50 mx-auto max-w-3xl text-center border rounded-2xl p-10">
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Siap Memulai Perjalanan Programming?
            </h2>
            <p class="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-300">
              Bergabunglah dengan ribuan developer yang sudah sukses berkarir di dunia teknologi.
            </p>
            <div class="mt-10 flex flex-wrap justify-center gap-4">
                <a
                  href="/kelas"
                  class="rounded-md bg-gray-900 dark:bg-white px-6 py-3 text-sm font-semibold text-white dark:text-gray-900 shadow-sm hover:bg-gray-800 dark:hover:bg-gray-100 transition"
                >
                  Daftar Sekarang
                </a>
                <a
                  href="/sosial-media"
                  class="rounded-md px-6 py-3 text-sm font-semibold text-gray-900 dark:text-white border border-transparent hover:border-gray-300 dark:hover:border-gray-700 transition"
                >
                  Ikuti Kami <span aria-hidden="true">→</span>
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
							href={link.href}
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


