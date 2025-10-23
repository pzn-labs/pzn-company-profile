<script lang="ts">
	import { base } from "$app/paths";
	import "../../app.css";
	import pznLogo from "$lib/assets/logo-pzn.png"
  </script>
  
  <svelte:head>
	  <title>Sosial Media - Programmer Zaman Now</title>
	  <meta name="description" content="Ikuti Programmer Zaman Now di berbagai platform sosial media untuk update terbaru, tips programming, dan konten edukatif." />
  </svelte:head>

<!-- Hero Section -->
<section class="relative bg-gray-950 text-white overflow-hidden">
	<div class="mx-auto max-w-7xl px-6 lg:px-12 py-24 grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
	  
	 <!--  Gambar  -->
	 <div class="flex justify-center lg:justify-end relative order-1 lg:order-2">
		<div class="relative w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-[28rem] lg:h-[28rem] rounded-full overflow-hidden border-4 border-gray-800 shadow-2xl">
		  <img
			src="https://i.pinimg.com/1200x/9b/6d/c4/9b6dc43703035493a95061b1d695f682.jpg"
			alt="Promo Programmer Zaman Now"
			class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
		  />
		</div>
	  </div>
  
	  <!--  Teks di bawah saat mobile, di kiri saat desktop -->
	  <div class="flex-1 text-center lg:text-left space-y-6 order-2 lg:order-1">
		<h1 class="text-5xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
		  Ikuti Kami di Sosial Media
		</h1>
		<p class="text-lg leading-relaxed text-gray-200 max-w-xl mx-auto lg:mx-0">
		  Dapatkan update terbaru, tips programming, dan konten edukatif dari 
		  <span class="font-semibold text-blue-400">Programmer Zaman Now</span> di berbagai platform sosial media kami.
		</p>
		<div class="pt-4">
		  <a href="{base}/sosial-media" class="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-blue-500/30">
			Lihat Platform Kami
		  </a>
		</div>
	  </div>
  
	</div>
  </section>
  
  <!-- Platform Sosial Media -->
  <section class="py-16 sm:py-16 bg-black">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
	  <div class="mx-auto max-w-2xl text-center">
		<h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
		  Temukan Kami di Platform Favorit Anda
		</h2>
		<p class="mt-6 text-lg leading-8 text-gray-200">
		  Bergabunglah dengan komunitas developer terbesar di Indonesia dan dapatkan insight berharga setiap hari.
		</p>
	  </div>
  
	  <!--  Grid Sosial Media -->
	  <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
		{#each [
		  {
			name: "YouTube",
			icon: `<path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.5 15.6V8.4L15.8 12l-6.3 3.6z"/>`,
			bg: "bg-red-600",
			subs: "500K+ Subscribers",
			url: "https://youtube.com/@programmerzamannow",
			desc: "Tutorial programming lengkap, tips karir, dan review teknologi terbaru. Subscribe untuk tidak ketinggalan video baru setiap minggu!"
		  },
		  {
			name: "Instagram",
			icon: `<path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h10zM12 7a5 5 0 1 0 0 10a5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6a3 3 0 0 1 0-6zm5.5-2.5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3z"/>`,
			bg: "bg-pink-600",
			subs: "200K+ Followers",
			url: "https://instagram.com/programmerzamannow",
			desc: "Tips coding harian, behind the scenes, dan konten visual menarik tentang dunia programming. Follow untuk daily inspiration!"
		  },
		  {
			name: "TikTok",
			icon: `<path d="M12.5 2h2.9a5.7 5.7 0 0 0 4.2 4v2.7a8.4 8.4 0 0 1-4.2-1.2v7a6.3 6.3 0 1 1-6.3-6.3 5.9 5.9 0 0 1 1 .1v2.9a2.9 2.9 0 1 0 2.4 2.8z"/>`,
			bg: "bg-black",
			subs: "300K+ Followers",
			url: "https://tiktok.com/@programmerzamannow",
			desc: "Konten programming singkat dan engaging! Tips coding, life hacks developer, dan trend teknologi dalam format video pendek."
		  },
		  {
			name: "Facebook",
			icon: `<path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.406.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24h-1.918c-1.505 0-1.797.716-1.797 1.767v2.318h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.406 24 22.676V1.325C24 .593 23.406 0 22.675 0z"/>`,
			bg: "bg-blue-600",
			subs: "120K+ Followers",
			url: "https://facebook.com/programmerzamannow",
			desc: "Ikuti update terbaru, live event, dan konten edukatif setiap hari di halaman Facebook Programmer Zaman Now."
		}


		] as socmed}
		  <div class="group relative bg-gray-900 rounded-2xl shadow-lg ring-1 ring-gray-600 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
			<div class="p-8">
			  <div class="flex items-center gap-4 mb-6">
				<div class="flex h-16 w-16 items-center justify-center rounded-full {socmed.bg}">
				  <svg class="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
					{@html socmed.icon}
				  </svg>
				</div>
				<div>
				  <h3 class="text-xl font-semibold text-white">{socmed.name}</h3>
				  <p class="text-sm text-gray-400">{socmed.subs}</p>
				</div>
			  </div>
			  <p class="text-gray-200 mb-6">{socmed.desc}</p>
			  <a href={socmed.url} target="_blank"
				class="inline-flex items-center gap-2 rounded-md {socmed.bg} px-4 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-90">
				Kunjungi {socmed.name}
			  </a>
			</div>
		  </div>
		{/each}
	  </div>
	</div>
  </section>
  
  <!-- CTA Section -->
  <section class="relative overflow-hidden py-16 bg-black">
	<div class="absolute inset-0 opacity-10 bg-[url('https://www.toptal.com/designers/subtlepatterns/patterns/dots.png')]"></div>
	<div class="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
	  <div class="max-w-3xl mx-auto bg-black border border-gray-600 rounded-3xl p-12 shadow-2xl">
		<div class="flex justify-center mb-3">
		  <img src="{pznLogo}" alt="Logo Programmer Zaman Now" class="h-16 w-auto drop-shadow-xl" />
		</div>
		<h2 class="text-3xl font-bold tracking-tight text-white sm:text-3xl">
		  Siap Tingkatkan Skill Anda?
		</h2>
		<p class="mt-3 text-lg leading-8 text-gray-300">
		  Mulailah perjalanan belajar Anda hari ini dan kuasai teknologi terkini bersama mentor profesional dari
		  <span class="font-semibold text-white">Programmer Zaman Now</span>.
		</p>
		<div class="mt-5">
		  <a href="{base}/kelas"
			class="inline-flex items-center justify-center gap-2 rounded-xl bg-gray-100 text-gray-900 font-semibold px-8 py-4 shadow-lg hover:bg-gray-200 transition-all duration-300">
			<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24"
			  stroke="currentColor">
			  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
			</svg>
			Lihat Semua Kelas
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
  