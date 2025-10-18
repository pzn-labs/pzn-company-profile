<script lang="ts">
	import "../../app.css"
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
  import { base } from "$app/paths";
  
  const allClasses = [
  { 
    name: "Golang", 
    category: "Pemrograman", 
    image: golang, 
    description: "Pelajari bahasa Go untuk membangun aplikasi backend yang cepat dan efisien. Cocok untuk microservices dan sistem berskala besar.",
    price: 129000,
    originalPrice: 599000
  },
  { 
    name: "Java Dasar", 
    category: "Pemrograman", 
    image: java, 
    description: "Dasar-dasar Java untuk pemula hingga menengah. Termasuk pemrograman berorientasi objek dan praktik membuat aplikasi sederhana.",
    price: 149000,
    originalPrice: 699000
  },
  { 
    name: "Node.js", 
    category: "Web", 
    image: nodejs, 
    description: "Bangun server dan API menggunakan Node.js. Pelajari juga ekosistem NPM dan praktik asynchronous programming.",
    price: 139000,
    originalPrice: 599000
  },
  { 
    name: "Laravel", 
    category: "Framework", 
    image: laravel, 
    description: "Framework PHP populer untuk membangun web aplikasi. Termasuk routing, middleware, dan integrasi database MySQL.",
    price: 159000,
    originalPrice: 699000
  },
  { 
    name: "MySQL", 
    category: "Database", 
    image: mysql, 
    description: "Pelajari database relasional MySQL dari dasar hingga mahir. Termasuk query, indexing, dan optimisasi performa database.",
    price: 119000,
    originalPrice: 499000
  },
  { 
    name: "Docker Basics", 
    category: "DevOps", 
    image: docker, 
    description: "Dasar-dasar Docker untuk containerization aplikasi. Pelajari pembuatan Dockerfile, image, dan deployment di container.",
    price: 129000,
    originalPrice: 599000
  },
  { 
    name: "HTML, CSS dan JavaScript", 
    category: "Web", 
    image: html, 
    description: "Dasar-dasar web development front-end. Pelajari struktur HTML, styling dengan CSS, dan interaktivitas menggunakan JS.",
    price: 109000,
    originalPrice: 499000
  },
  { 
    name: "VueJS", 
    category: "Framework", 
    image: vue, 
    description: "Framework JavaScript progresif untuk membangun UI interaktif. Termasuk komponen, directive, dan state management.",
    price: 149000,
    originalPrice: 599000
  },
  { 
    name: "PHP", 
    category: "Pemrograman", 
    image: php, 
    description: "Bahasa server-side populer untuk web development. Pelajari sintaks dasar, form handling, dan integrasi database.",
    price: 119000,
    originalPrice: 499000
  },
  { 
    name: "Spring Boot", 
    category: "Framework", 
    image: spring, 
    description: "Framework Java untuk membangun aplikasi backend enterprise. Termasuk REST API, dependency injection, dan keamanan aplikasi.",
    price: 179000,
    originalPrice: 699000
  },
  { 
    name: "ReactJS", 
    category: "Framework", 
    image: react, 
    description: "Library JavaScript untuk membangun antarmuka pengguna interaktif. Pelajari JSX, state management, dan hooks.",
    price: 149000,
    originalPrice: 599000
  },
  { 
    name: "MongoDB", 
    category: "Database", 
    image: mongo, 
    description: "Database NoSQL populer untuk menyimpan data fleksibel. Termasuk CRUD operations, indexing, dan query aggregations.",
    price: 129000,
    originalPrice: 499000
  },
];


  
	const categories = [
	  "Semua",
	  "Pemrograman",
	  "Web",
	  "API",
	  "Mobile",
	  "Framework",
	  "Database",
	  "DevOps",
	]
  
	let selectedCategory: string = "Semua";
	let searchQuery = "";
  
	$: filteredClasses = allClasses.filter((kelas) => {
	  const matchCategory = selectedCategory === "Semua" || kelas.category === selectedCategory;
	  const matchSearch = kelas.name.toLowerCase().includes(searchQuery.toLowerCase());
	  return matchCategory && matchSearch;
	});
  </script>
  
  <svelte:head>
	<title>Kelas Online - Programmer Zaman Now</title>
	<meta name="description" content="Pilih kelas programming yang sesuai dengan kebutuhan Anda. Dari pemula hingga mahir, semua tersedia di PZN." />
  </svelte:head>
  
<!-- Hero Section -->
<section class="relative bg-gray-900 text-gray-100 rounded-b-4xl overflow-hidden py-24">
	<div class="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
	  
	  <!-- 🔹 Kiri: Teks -->
	  <div class="space-y-6 text-center lg:text-left">
		<h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white">
		  Kelas <span class="text-white">Programmer Zaman Now</span>
		</h1>
		<p class="text-lg text-gray-400 max-w-xl mx-auto lg:mx-0">
		  Tingkatkan kemampuan coding Anda dengan kelas eksklusif, praktis, dan sesuai kebutuhan industri teknologi modern.
		</p>
	  </div>
  
	  <!-- 🔹 Kanan: Gambar Lingkaran -->
	  <div class="relative flex justify-center">
		<div class="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-gray-800">
		  <img
			src="https://i.pinimg.com/1200x/c2/04/07/c20407664f8f8a5610dd33652626d250.jpg"
			alt="Programmer Zaman Now Class"
			class="w-full h-full object-cover"
		  />
		</div>
	  </div>
	</div>
  </section>
  
  
  <!-- Daftar Kelas -->
  <section class="py-24 sm:py-24">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
	  <!-- Deskripsi -->
	  <div class="mx-auto max-w-3xl text-center mb-12">
		<h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Pilihan Kelas Terbaik</h2>
		<p class="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
		  Tingkatkan kemampuan programming dengan kelas pilihan dari <strong>Programmer Zaman Now</strong>.
		</p>
	  </div>
  
	  <!-- Menu Kategori -->
	  <div class="flex flex-wrap justify-center gap-4 mb-8">
		{#each categories as category}
		  <button
			class="px-5 py-2 rounded-full text-sm font-semibold transition
			{selectedCategory === category 
			  ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900' 
			  : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'}"
			on:click={() => selectedCategory = category}
		  >
			{category}
		  </button>
		{/each}
	  </div>
  
	  <!-- Search Input -->
	  <div class="relative mb-12 w-full max-w-md mx-auto">
		<input
		  type="text"
		  placeholder="Cari kelas..."
		  bind:value={searchQuery}
		  class="w-full rounded-2xl border border-gray-300 dark:border-gray-100 bg-gray-50 dark:bg-gray-800 px-5 py-3 pl-12 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-600 shadow-sm"
		/>
		<svg
		  xmlns="http://www.w3.org/2000/svg"
		  class="absolute left-4 top-3.5 h-5 w-5 text-gray-400"
		  fill="none"
		  viewBox="0 0 24 24"
		  stroke="currentColor"
		>
		  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103.5 10.5a7.5 7.5 0 0013.15 6.15z" />
		</svg>
	  </div>
  
	  <!-- Grid Kelas -->
	  <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
		{#each filteredClasses as kelas}
		  <div class="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg ring-1 ring-gray-900/5 hover:shadow-xl transition-shadow">
			<div class="aspect-[16/9] overflow-hidden rounded-t-2xl bg-gray-100 dark:bg-gray-700">
			  <img
				src={kelas.image}
				alt={kelas.name}
				class="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
			  />
			</div>
			<div class="p-6">
			  <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">{kelas.name}</h3>
			  <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">{kelas.description}</p>
			  <div class="flex items-center justify-between mt-4">
				<div class="flex items-center gap-2">
					<div class="flex -space-x-2">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 rounded-full bg-gray-300 dark:bg-gray-700 p-1 text-gray-600 dark:text-gray-300 ring-2 ring-white dark:ring-gray-800" fill="currentColor" viewBox="0 0 24 24">
						  <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v1.2h19.2v-1.2c0-3.2-6.4-4.8-9.6-4.8z"/>
						</svg>
						<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 rounded-full bg-gray-300 dark:bg-gray-700 p-1 text-gray-600 dark:text-gray-300 ring-2 ring-white dark:ring-gray-800" fill="currentColor" viewBox="0 0 24 24">
						  <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v1.2h19.2v-1.2c0-3.2-6.4-4.8-9.6-4.8z"/>
						</svg>
					  </div>
				  <span class="text-sm text-gray-500 dark:text-gray-400">1,234 siswa</span>
				</div>
				<div class="text-right">
					<div class="text-lg font-bold text-gray-900 dark:text-white">Rp {kelas.price.toLocaleString('id-ID')}</div>
					{#if kelas.originalPrice && kelas.originalPrice > kelas.price}
					  <div class="text-sm text-gray-500 dark:text-gray-400 line-through">Rp {kelas.originalPrice.toLocaleString('id-ID')}</div>
					{/if}
				  </div>
				  
			  </div>
			  <button class="w-full mt-4 rounded-md bg-gray-900 dark:bg-white px-4 py-2 text-sm font-semibold text-white dark:text-gray-900 shadow-sm hover:bg-gray-800 dark:hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 dark:focus-visible:outline-white">
				Lihat Detail
			  </button>
			</div>
		  </div>
		{/each}
  
		{#if filteredClasses.length === 0}
		  <p class="col-span-full text-center text-gray-500 dark:text-gray-400 mt-8">Tidak ada kelas yang sesuai.</p>
		{/if}
	  </div>
	</div>
  </section>
  
<!-- CTA Section -->
<section class="bg-white dark:bg-gray-900">
	<div class="px-6 py-24 sm:px-6 sm:py-16 lg:px-8">
		<div
			class="mx-auto max-w-3xl text-center border border-gray-200 dark:border-gray-700 rounded-3xl p-12 shadow-xl bg-white dark:bg-gray-800"
		>
			<h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
				Tidak Menemukan Kelas yang Cocok?
			</h2>

			<p class="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-700 dark:text-gray-300">
				Hubungi tim kami untuk konsultasi kelas yang sesuai dengan kebutuhan dan level skill Anda.
			</p>

			<div class="mt-10 flex flex-wrap justify-center gap-6">
				<a
					href={base + '/promo'}
					class="rounded-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:from-gray-800 hover:via-gray-700 hover:to-gray-600 transition"
				>
					Lihat Promo
				</a>
				<a
					href={base + '/sosial-media'}
					class="rounded-full px-8 py-4 text-lg font-semibold text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
				>
					Konsultasi Gratis <span aria-hidden="true">→</span>
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
				<a href={base + '/'}>
					<img
						src="https://www.programmerzamannow.com/img/pzn.png"
						alt="PZN Logo"
						class="h-10 w-auto transition-transform hover:scale-105 duration-300"
					/>
				</a>
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
