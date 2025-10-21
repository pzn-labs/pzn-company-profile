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
  	import { base } from "$app/paths";
	import { slide, fade } from "svelte/transition";

  
  const allClasses = [
  { 
    name: "Golang", 
    category: ["Pemrogramman", "Go-Lang"],
    image: golang, 
    description: "Pelajari bahasa Go untuk membangun aplikasi backend yang cepat dan efisien. Cocok untuk microservices dan sistem berskala besar.",
    price: 129000,
    originalPrice: 599000
  },
  { 
    name: "Java Dasar", 
    category: ["Pemrogramman", "Java"], 
    image: java, 
    description: "Dasar-dasar Java untuk pemula hingga menengah. Termasuk pemrograman berorientasi objek dan praktik membuat aplikasi sederhana.",
    price: 149000,
    originalPrice: 699000
  },
  { 
    name: "Node.js", 
    category: ["Backend", "Node.js"], 
    image: nodejs, 
    description: "Bangun server dan API menggunakan Node.js. Pelajari juga ekosistem NPM dan praktik asynchronous programming.",
    price: 139000,
    originalPrice: 599000
  },
  { 
    name: "Laravel", 
    category: ["Backend", "PHP"],
	image: laravel, 
    description: "Framework PHP populer untuk membangun web aplikasi. Termasuk routing, middleware, dan integrasi database MySQL.",
    price: 159000,
    originalPrice: 699000
  },
  { 
    name: "MySQL", 
    category: ["Database", "MySQL"],
    image: mysql, 
    description: "Pelajari database relasional MySQL dari dasar hingga mahir. Termasuk query, indexing, dan optimisasi performa database.",
    price: 119000,
    originalPrice: 499000
  },
  { 
    name: "Docker Basics", 
    category: ["DevOps", "Docker"], 
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
  { 
    name: "Kotlin", 
    category: "Pemogramman", 
    image: kotlin, 
    description: "Belajar pemrograman Kotlin dari pemula sampai mahir disertai studi kasus. Materi akan selalu di-update secara berkala",
    price: 129000,
    originalPrice: 499000
  },
  { 
    name: "Git", 
    category: "Web", 
    image: git, 
    description: "Belajar Git mulai dari pemula sampai mahir disertai studi kasus. Materi akan selalu di-update secara berkala.",
    price: 129000,
    originalPrice: 499000
  },
  { 
    name: "Postgre", 
    category: "Database", 
    image: postgre, 
    description: "Belajar database postgre dari pemula sampai mahir disertai studi kasus. Materi akan selalu di-update secara berkala.",
    price: 129000,
    originalPrice: 499000
  },
  { 
    name: "Redis", 
    category: "Database", 
    image: redis, 
    description: "Belajar database redis dari pemula sampai mahir disertai studi kasus. Materi akan selalu di-update secara berkala.",
    price: 129000,
    originalPrice: 499000
  },
  { 
    name: "Dart", 
    category: "Pemrogramman", 
    image: dart, 
    description: "Belajar pemrogramman dart dari pemula sampai mahir disertai studi kasus. Materi akan selalu di-update secara berkala.",
    price: 129000,
    originalPrice: 499000
  },
  { 
    name: "Typescript", 
    category: "Pemrogramman", 
    image: typescript, 
    description: "Belajar pemrogramman typescript dari pemula sampai mahir disertai studi kasus. Materi akan selalu di-update secara berkala.",
    price: 129000,
    originalPrice: 499000
  },
  { 
    name: "Elasticsearch", 
    category: "Database", 
    image: elastic, 
    description: "Belajar database elasticseacrh dari pemula sampai mahir disertai studi kasus. Materi akan selalu di-update secara berkala.",
    price: 129000,
    originalPrice: 499000
  },
  { 
    name: "Jenkins", 
    category: "DevOps", 
    image: jenkins, 
    description: "Belajar jenkins mulai dari pemula sampai mahir disertai studi kasus. Materi akan selalu di-update secara berkala.",
    price: 129000,
    originalPrice: 499000
  },
  { 
    name: "Android", 
    category: ["Mobile", "Android"],
    image: android, 
    description: "Belajar android mulai dari pemula sampai mahir disertai studi kasus. Materi akan selalu di-update secara berkala.",
    price: 129000,
    originalPrice: 499000
  },
  { 
    name: "OpenApi",
    category: "API", 
    image: openapi, 
    description: "Belajar OpenAPI mulai dari pemula sampai mahir disertai studi kasus. Materi akan selalu di-update secara berkala.",
    price: 129000,
    originalPrice: 499000
  },
  { 
    name: "RestFullAPI",
    category: "API", 
    image: restfull, 
    description: "Belajar RestFull API mulai dari pemula sampai mahir disertai studi kasus. Materi akan selalu di-update secara berkala.",
    price: 129000,
    originalPrice: 499000
  },
  { 
    name: "HTTP",
    category: ["API", "HTTP"],
    image: http, 
    description: "Belajar http mulai dari pemula sampai mahir disertai studi kasus. Materi akan selalu di-update secara berkala.",
    price: 129000,
    originalPrice: 499000
  },
  { 
    name: "Phyton",
    category: ["Database", "Phyton"],
    image: phyton, 
    description: "Belajar pemrogramman phyton mulai dari pemula sampai mahir disertai studi kasus. Materi akan selalu di-update secara berkala.",
    price: 129000,
    originalPrice: 499000
  },
  { 
    name: "Svelte",
    category: "Framework", 
    image: svelte, 
    description: "Belajar framework svelte mulai dari pemula sampai mahir disertai studi kasus. Materi akan selalu di-update secara berkala.",
    price: 129000,
    originalPrice: 499000
  },
  { 
    name: "Bootstrap",
    category: "Framework", 
    image: bootstrap, 
    description: "Belajar framework bootstrap mulai dari pemula sampai mahir disertai studi kasus. Materi akan selalu di-update secara berkala.",
    price: 129000,
    originalPrice: 499000
  },
  { 
    name: "Rust",
    category: "Pemrogramman", 
    image: rust, 
    description: "Belajar pemrogramman rust mulai dari pemula sampai mahir disertai studi kasus. Materi akan selalu di-update secara berkala.",
    price: 129000,
    originalPrice: 499000
  },
  { 
    name: "Bun",
    category: "Web", 
    image: bun, 
    description: "Belajar pemrogramman bun mulai dari pemula sampai mahir disertai studi kasus. Materi akan selalu di-update secara berkala.",
    price: 129000,
    originalPrice: 499000
  },
  { 
    name: "K6 Performance Testing",
    category: "Web", 
    image: k6, 
    description: "Belajar K6 performance testing mulai dari pemula sampai mahir disertai studi kasus. Materi akan selalu di-update secara berkala.",
    price: 129000,
    originalPrice: 499000
  },
  { 
    name: "NestJS",
    category: "Web", 
    image: nestjs, 
    description: "Belajar nestjs mulai dari pemula sampai mahir disertai studi kasus. Materi akan selalu di-update secara berkala.",
    price: 129000,
    originalPrice: 499000
  },
  { 
    name: "RabbitMQ",
    category: "Database", 
    image: rabbit, 
    description: "Belajar rabbitMQ mulai dari pemula sampai mahir disertai studi kasus. Materi akan selalu di-update secara berkala.",
    price: 129000,
    originalPrice: 499000
  },
  { 
    name: "Apache Kafka",
    category: "Web", 
    image: kafka, 
    description: "Belajar Apache Kafka mulai dari pemula sampai mahir disertai studi kasus. Materi akan selalu di-update secara berkala.",
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
  "Android",
  "Database",
  "SQL",
  "Framework",
  "DevOps",
  "Docker",
  "Git",
  "Java",
  "Design Patterns",
  "Spring Boot",
  "JavaScript",
  "Go-Lang",
  "PHP",
  "Kotlin",
  "MySQL",
  "Dart",
  "Gratis",
  "PostgreSQL",
  "Jenkins",
  "Automation Server",
  "CI/CD",
  "HTML",
  "MongoDB",
  "Redis",
  "Elasticsearch",
  "CSS",
  "TypeScript",
  "Message Broker",
  "Kafka",
  "RabbitMQ",
  "NestJS",
  "Bun",
  "QA",
  "K6",
  "Performance Testing",
  "Rust",
  "React.js",
  "Vue.js",
];

  
let selectedCategory: string = "Semua";
	let showAll = false;
	let searchQuery = "";

	//  tombol “lihat semua”
	const visibleCount = 6;

	$: filteredClasses = allClasses.filter((kelas) => {
  const matchCategory =
    selectedCategory === "Semua" ||
    (kelas.category && kelas.category.includes(selectedCategory));
    
  const matchSearch = kelas.name
    .toLowerCase()
    .includes(searchQuery.toLowerCase());
    
  return matchCategory && matchSearch;
});

  </script>
  
  <svelte:head>
	<title>Kelas Online - Programmer Zaman Now</title>
	<meta name="description" content="Pilih kelas programming yang sesuai dengan kebutuhan Anda. Dari pemula hingga mahir, semua tersedia di PZN." />
  </svelte:head>


<!-- Hero Section -->
<section class="relative bg-gray-950 text-white overflow-hidden">
	<div class="mx-auto max-w-7xl px-6 lg:px-12 py-24 grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
  
	  <!--  Gambar -->
	  <div class="flex justify-center lg:justify-end relative order-1 lg:order-2">
		<div class="relative w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-[28rem] lg:h-[28rem] rounded-full overflow-hidden border-4 border-gray-800 shadow-2xl">
		  <img
			src="https://i.pinimg.com/1200x/c2/04/07/c20407664f8f8a5610dd33652626d250.jpg"
			alt="Programmer Zaman Now Class"
			class="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-700 ease-out"
		  />
		</div>
	  </div>
  
	  <!-- Teks -->
	  <div class="text-center lg:text-left space-y-6 order-2 lg:order-1">
		<h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
		  Kelas Programmer Zaman Now
		</h1>
		<p class="text-lg text-gray-200 max-w-xl mx-auto lg:mx-0">
		  Tingkatkan kemampuan coding Anda dengan kelas eksklusif, praktis, dan sesuai kebutuhan industri teknologi modern.
		</p>
		<div class="pt-4">
		  <a href="{base}/kelas" class="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-blue-500/30">
			Mulai Belajar
		  </a>
		</div>
	  </div>
  
	</div>
  </section>
  
  
<!-- Daftar Kelas -->
<section class="py-24 bg-black text-gray-100">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
	  <!-- Deskripsi -->
	  <div class="mx-auto max-w-3xl text-center mb-12">
		<h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Pilihan Kelas Terbaik</h2>
		<p class="mt-4 text-lg leading-8 text-gray-200">
		  Tingkatkan kemampuan programming dengan kelas pilihan dari <strong class="text-blue-400">Programmer Zaman Now</strong>.
		</p>
	  </div>
  
	  <!-- Menu Kategori -->
	  <div class="text-center mb-8">
		<!-- Daftar Kategori -->
		<div
		  class="flex flex-wrap justify-center gap-3 mb-6 transition-all duration-500 overflow-hidden"
		  style="max-height: {showAll ? '1000px' : '120px'}"
		>
		  {#each (showAll ? categories : categories.slice(0, 8)) as category (category)}
			<div in:fade={{ duration: 200 }} out:fade={{ duration: 150 }}>
			  <button
				class="px-5 py-2.5 rounded-full text-sm font-medium border transition-all duration-300
				{selectedCategory === category 
				  ? 'bg-white text-gray-900' 
				  : 'bg-gray-900 text-gray-300 border-gray-700 hover:bg-gray-700'}"
				on:click={() => selectedCategory = category}
			  >
				{category}
			  </button>
			</div>
		  {/each}
		</div>
	  
		<!-- Tombol Lihat Semua -->
		{#if categories.length > 8}
		  <button
			class="group inline-flex items-center gap-2 mt-2 px-4 py-2 rounded-full text-sm font-semibold text-gray-900 
				   bg-white hover:bg-gray-200 transition-all duration-300"
			on:click={() => showAll = !showAll}
		  >
			<span>{showAll ? "Sembunyikan Kategori" : "Lihat Semua Kategori"}</span>
			<svg
			  class="w-4 h-4 transform transition-transform duration-300 {showAll ? 'rotate-180' : ''}"
			  fill="none"
			  stroke="currentColor"
			  stroke-width="2"
			  viewBox="0 0 24 24"
			>
			  <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
			</svg>
		  </button>
		{/if}
	  </div>
  
	  <!-- Search Input -->
	  <div class="relative mb-12 w-full max-w-md mx-auto">
		<input
		  type="text"
		  placeholder="Cari kelas..."
		  bind:value={searchQuery}
		  class="w-full rounded-2xl border border-gray-600 bg-gray-900 px-5 py-3 pl-12 text-white focus:outline-none focus:ring-2 focus:ring-gray-200 shadow-sm"
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
		  <div class="group relative bg-gray-900 rounded-2xl shadow-lg ring-1 ring-gray-400 hover:shadow-xl transition-shadow">
			<div class="aspect-[16/9] overflow-hidden rounded-t-2xl bg-gray-700">
			  <img
				src={kelas.image}
				alt={kelas.name}
				class="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
			  />
			</div>
			<div class="p-6">
			  <h3 class="text-lg font-semibold text-white mb-2">{kelas.name}</h3>
			  <p class="text-gray-200 text-sm mb-4">{kelas.description}</p>
			  <div class="flex items-center justify-between mt-4">
				<div class="flex items-center gap-2">
				  <div class="flex -space-x-2">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 rounded-full bg-gray-700 p-1 text-gray-300 ring-2 ring-gray-800" fill="currentColor" viewBox="0 0 24 24">
					  <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v1.2h19.2v-1.2c0-3.2-6.4-4.8-9.6-4.8z"/>
					</svg>
				  </div>
				  <span class="text-sm text-gray-400">1,234 siswa</span>
				</div>
				<div class="text-right">
				  <div class="text-lg font-bold text-white">Rp {kelas.price.toLocaleString('id-ID')}</div>
				  {#if kelas.originalPrice && kelas.originalPrice > kelas.price}
					<div class="text-sm text-gray-500 line-through">Rp {kelas.originalPrice.toLocaleString('id-ID')}</div>
				  {/if}
				</div>
			  </div>
			  <button class="w-full mt-4 rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
				Lihat Detail
			  </button>
			</div>
		  </div>
		{/each}
  
		{#if filteredClasses.length === 0}
		  <p class="col-span-full text-center text-gray-500 mt-8">Tidak ada kelas yang sesuai.</p>
		{/if}
	  </div>
	</div>
</section>


<!-- FOOTER -->
<footer class="bg-gray-950 text-gray-400 border-t border-gray-800">
	<div class="mx-auto max-w-7xl px-6 py-16 lg:px-8 grid gap-12 md:grid-cols-3 items-start">
		<div class="space-y-5">
			<div class="flex items-center gap-3">
				<a href={base + '/'}>
					<img src="https://www.programmerzamannow.com/img/pzn.png" alt="PZN Logo" class="h-10 w-auto transition-transform hover:scale-105 duration-300" />
				</a>
				<span class="text-lg font-semibold text-white tracking-tight">Programmer Zaman Now</span>
			</div>
			<p class="text-sm text-gray-400 leading-relaxed max-w-sm">
				Belajar programming dari dasar hingga mahir bersama mentor berpengalaman.
				Temukan cara modern untuk menguasai dunia teknologi dengan pembelajaran praktis dan relevan industri.
			</p>
		</div>

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
						<a href={base + link.href} class="text-sm text-gray-400 hover:text-white transition-colors duration-200">{link.name}</a>
					</li>
				{/each}
			</ul>
		</div>

		<div class="space-y-5">
			<h4 class="text-base font-semibold text-white">Ikuti Kami</h4>
			<div class="flex gap-5">
				{#each [
					{ href: "https://youtube.com", icon: "https://cdn-icons-png.flaticon.com/512/1384/1384060.png" },
					{ href: "https://instagram.com", icon: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png" },
					{ href: "https://t.me", icon: "https://cdn-icons-png.flaticon.com/512/2111/2111646.png" },
					{ href: "https://facebook.com", icon: "https://cdn-icons-png.flaticon.com/512/733/733547.png" }
				] as social}
					<a href={social.href} target="_blank" rel="noopener noreferrer" class="group">
						<img src={social.icon} alt="social" class="h-6 w-6 opacity-80 group-hover:opacity-100 transform group-hover:scale-110 transition-all duration-300" />
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


