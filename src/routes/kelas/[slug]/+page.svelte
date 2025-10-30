<script lang="ts">
	import "../../../app.css";
	import { page } from '$app/stores';
	import { slide } from 'svelte/transition';
	import { onMount } from 'svelte';
    import { base } from '$app/paths';


	// === IMPORT GAMBAR ===
	import golang from "$lib/assets/golang.jpg";
	import html from "$lib/assets/html.jpg";
	import java from "$lib/assets/java.jpg";
	import laravel from "$lib/assets/laravel.jpg";
	import nodejs from "$lib/assets/nodejs.jpg";
	import mysql from "$lib/assets/mysql.jpg";
	import vue from "$lib/assets/vuejs.jpg";
	import php from "$lib/assets/php.jpg";
	import docker from "$lib/assets/docker.jpg";
	import spring from "$lib/assets/spring.jpg";
	import react from "$lib/assets/reactjs.jpg";
	import mongo from "$lib/assets/mongodb.jpg";
	import kotlin from "$lib/assets/kotlin.jpg";
	import git from "$lib/assets/git.jpg";
	import postgre from "$lib/assets/postgre.jpg";
	import redis from "$lib/assets/redis.jpg";
	import dart from "$lib/assets/dart.jpg";
	import typescript from "$lib/assets/typescript.jpg";
	import elastic from "$lib/assets/elasticsearch.jpg";
	import jenkins from "$lib/assets/jenkins.jpg";
	import android from "$lib/assets/android.jpg";
	import openapi from "$lib/assets/openapi.jpg";
	import restfull from "$lib/assets/restfulapi.jpg";
	import http from "$lib/assets/http.jpg";
	import python from "$lib/assets/python.jpg";
	import svelte from "$lib/assets/svelte.jpg";
	import bootstrap from "$lib/assets/bootstrap.jpg";
	import rust from "$lib/assets/rust.png";
	import bun from "$lib/assets/bun.png";
	import k6 from "$lib/assets/k6.jpg";
	import nestjs from "$lib/assets/nestjs.jpg";
	import rabbit from "$lib/assets/rabbitmq.jpg";
	import kafka from "$lib/assets/kafka.jpg";
  	import { get } from 'svelte/store';

	// === SEMUA DATA KURSUS ===
	const courses = [
		{
			slug: 'golang',
			name: 'Pemrograman Go-Lang: Pemula sampai Mahir',
			image: golang,
			instructor: 'Eko Kurniawan Khannedy',
			rating: 4.8,
			reviews: 1200,
			students: 872,
			lastUpdated: 'Oktober 2025',
			language: 'Bahasa Indonesia',
			price: 129000,
			originalPrice: 149000,
			whatYouWillLearn: [
				'Dasar bahasa pemrograman Go',
				'Membuat aplikasi backend dengan Go',
				'Menggunakan Goroutine dan Channel',
				'Belajar REST API dengan Go Fiber'
			],
			requirements: [
				'Mengerti dasar pemrograman',
				'Memiliki komputer/laptop dengan koneksi internet',
				'Semangat belajar tinggi '
			],
			description: `Belajar Go-lang dari dasar hingga mahir, dipandu oleh mentor profesional dengan studi kasus nyata.`,
			shortDescription: [
				"Selamat datang di course Belajar Golang (Go) untuk Pemula. Di kelas ini, kamu akan mempelajari bahasa pemrograman Go dari dasar hingga mampu membangun aplikasi backend yang cepat, efisien, dan mudah dipelihara.",
				"Pengenalan Go: memahami sejarah dan filosofi Go, alasan mengapa Go dikembangkan oleh Google, serta keunggulannya dibandingkan bahasa lain seperti Java atau Python.",
				"Instalasi & Setup Lingkungan: belajar cara menginstal Go, mengatur GOPATH dan workspace, serta membuat program pertama menggunakan perintah go run dan go build.",
				"Dasar Bahasa Go: mempelajari variabel, tipe data, konstanta, operator, percabangan, perulangan, dan fungsi dalam Go.",
				"Struktur Data & Array: memahami penggunaan array, slice, map, dan struktur data lain yang sering digunakan dalam pemrograman Go.",
				"Fungsi & Struct: belajar membuat fungsi, method, dan struct untuk membangun program modular dan terstruktur.",
				"Concurrency dengan Goroutine & Channel: mempelajari konsep concurrency di Go dan cara menggunakan goroutine serta channel untuk menjalankan proses secara paralel.",
				"Error Handling & Package: memahami cara menangani error, membuat package sendiri, dan mengatur struktur proyek Go dengan baik.",
				"Project Akhir: Membangun RESTful API dengan Go — menerapkan seluruh konsep Go dalam proyek backend nyata menggunakan net/http.",
				"Bonus: Tips optimasi performa aplikasi Go, pengenalan ke framework populer seperti Fiber dan Gin, serta praktik terbaik dalam deployment aplikasi Go di server produksi."
				],

			courseContent: [
				{ title: 'Pengenalan Go', lectures: 8, duration: '2 jam 30 menit' },
				{ title: 'Tipe Data dan Variabel', lectures: 10, duration: '3 jam' },
				{ title: 'Fungsi dan Struct', lectures: 7, duration: '2 jam' },
				{ title: 'Project Akhir: REST API dengan Go Fiber', lectures: 5, duration: '2 jam 45 menit' }
			],
			forWho: [
				'Pemula yang ingin belajar backend',
				'Programmer yang ingin menambah skill Go',
				'Mahasiswa atau profesional IT'
			],
			comments: [
					{
						name: "Andi Pratama",
						date: "2025-10-10",
						rating: 5,
						comment: "Materinya sangat jelas dan mudah dipahami, cocok untuk pemula. Mentor responsif dan banyak studi kasus nyata!"
					},
					{
						name: "Siti Nurhaliza",
						date: "2025-10-15",
						rating: 4,
						comment: "Penjelasan tentang Goroutine sangat membantu. Saran: tambahkan lebih banyak latihan soal."
					},
					{
						name: "Budi Santoso",
						date: "2025-10-20",
						rating: 5,
						comment: "Setelah ikut kelas ini, saya jadi lebih percaya diri membangun backend dengan Go. Terima kasih PZN!"
					},
					{
						name: "Rina Oktaviani",
						date: "2025-10-22",
						rating: 5,
						comment: "Materi sangat lengkap, penjelasan mudah diikuti. Cocok untuk yang baru mulai belajar Go!"
					},
					{
						name: "Dewi Lestari",
						date: "2025-10-23",
						rating: 4,
						comment: "Kelasnya interaktif, banyak contoh real project. Terima kasih untuk tips deployment-nya!"
					},
					{
						name: "Agus Saputra",
						date: "2025-10-24",
						rating: 5,
						comment: "Sangat membantu untuk persiapan kerja sebagai backend developer. Penjelasan REST API sangat detail."
					},
					{
						name: "Fajar Nugroho",
						date: "2025-10-25",
						rating: 4,
						comment: "Mentor ramah dan responsif di forum diskusi. Saran: tambahkan quiz di setiap modul."
					},
					{
						name: "Linda Permata",
						date: "2025-10-26",
						rating: 5,
						comment: "Setelah ikut kelas ini, saya berhasil membuat project backend sendiri. Recommended banget!"
					}
			]
		},
		{
			slug: 'java-dasar',
			name: 'Belajar JavaScript dari Nol hingga Mahir',
			image: java,
			instructor: 'Eko Kurniawan Khannedy',
			rating: 4.7,
			reviews: 980,
			students: 931,
			lastUpdated: 'September 2025',
			language: 'Bahasa Indonesia',
			price: 129000,
			originalPrice: 149000,
			whatYouWillLearn: [
				'Dasar sintaks JavaScript',
				'DOM Manipulation',
				'Asynchronous Programming (Promise & Async/Await)',
				'Membangun project frontend interaktif'
			],
			requirements: [
				'Tidak perlu pengalaman pemrograman sebelumnya',
				'Browser modern terinstal',
				'Semangat belajar'
			],
			description: 'Pelajari JavaScript modern dari nol sampai bisa membuat website interaktif.',
			shortDescription: [
				"Selamat datang di course Belajar Java untuk Pemula. Di kelas ini, kamu akan mempelajari dasar-dasar bahasa pemrograman Java hingga mampu membangun aplikasi desktop, web, maupun backend dengan struktur yang rapi dan efisien.",
				"Pengenalan Java: memahami sejarah, filosofi, dan alasan mengapa Java tetap menjadi salah satu bahasa pemrograman paling populer di dunia hingga saat ini.",
				"Instalasi & Setup Lingkungan: belajar cara menginstal JDK (Java Development Kit), mengatur PATH environment, dan menggunakan IDE seperti IntelliJ IDEA atau Eclipse.",
				"Dasar Bahasa Java: mempelajari tipe data, variabel, operator, percabangan, perulangan, dan fungsi untuk membangun logika program yang kuat.",
				"Pemrograman Berorientasi Objek (OOP): memahami konsep class, object, inheritance, polymorphism, encapsulation, dan interface di Java.",
				"Collection & Exception Handling: belajar menggunakan ArrayList, HashMap, dan cara menangani error dengan try-catch-finally secara efektif.",
				"Input/Output & File Handling: mempelajari cara membaca dan menulis file, serta mengelola stream data di Java.",
				"Database & JDBC: memahami cara menghubungkan Java dengan database menggunakan JDBC untuk melakukan operasi CRUD.",
				"Project Akhir: Membangun Aplikasi Manajemen Data Mahasiswa — menerapkan seluruh konsep Java yang telah dipelajari dalam proyek nyata.",
				"Bonus: Tips menulis kode Java yang bersih dan efisien, pengenalan ke Spring Framework, serta praktik terbaik dalam pengembangan aplikasi berbasis Java modern."
				],

			courseContent: [
				{ title: 'Pengenalan JavaScript', lectures: 6, duration: '1 jam 40 menit' },
				{ title: 'Fungsi dan Array', lectures: 9, duration: '2 jam' },
				{ title: 'DOM Manipulation', lectures: 10, duration: '2 jam 30 menit' },
				{ title: 'Project Akhir: Website Dinamis', lectures: 5, duration: '3 jam' }
			],
			forWho: [
				'Pemula dalam dunia web development',
				'Frontend developer pemula',
				'Mahasiswa atau pelajar TI'
			]
		},
		{
			slug: 'laravel',
			name: 'Belajar Laravel untuk Pemula dari Nol sampai Mahir',
			image: laravel,
			instructor: 'Eko Kurniawan Khannedy',
			rating: 4.9,
			reviews: 860,
			students: 678,
			lastUpdated: 'Agustus 2025',
			language: 'Bahasa Indonesia',
			price: 129000,
			originalPrice: 149000,
			whatYouWillLearn: [
				'Membuat aplikasi web dengan Laravel',
				'Routing, Controller, dan Blade Template',
				'Database Migration dan Eloquent ORM',
				'Autentikasi dan Authorization'
			],
			requirements: ['Dasar PHP dan HTML', 'XAMPP atau Laravel Sail terinstal'],
			description: 'Bangun aplikasi web modern dengan framework Laravel versi terbaru.',
			shortDescription: [
				"Selamat datang di course Belajar Laravel untuk Pemula. Di kelas ini, kamu akan mempelajari bagaimana cara membangun aplikasi web modern dengan framework PHP paling populer — Laravel.",
				"Pengenalan Laravel: memahami apa itu Laravel, sejarahnya, serta mengapa framework ini menjadi pilihan utama untuk pengembangan aplikasi web berbasis PHP.",
				"Instalasi & Setup Lingkungan: belajar cara menginstal Laravel menggunakan Composer, mengatur environment (.env), dan menjalankan server lokal dengan Artisan.",
				"Struktur Dasar Laravel: memahami struktur folder Laravel, cara kerja MVC (Model-View-Controller), dan alur request-response aplikasi.",
				"Routing & Controller: mempelajari cara membuat route, menghubungkannya ke controller, serta menangani request dan response dengan efisien.",
				"Blade Template Engine: belajar membangun tampilan dinamis menggunakan Blade, termasuk layouting, komponen, dan directive seperti @if, @foreach, dan @include.",
				"Database & Eloquent ORM: memahami cara mengelola database, membuat migration, dan menggunakan Eloquent ORM untuk operasi CRUD dengan mudah.",
				"Validasi & Middleware: mempelajari cara memvalidasi input pengguna dan mengamankan aplikasi dengan middleware seperti auth dan csrf.",
				"Project Akhir: Membangun Aplikasi Manajemen Kursus Online — menerapkan seluruh konsep yang telah dipelajari untuk membuat aplikasi web nyata menggunakan Laravel.",
				"Bonus: Tips deployment Laravel ke server produksi, optimasi performa, serta integrasi dengan API dan frontend modern seperti React atau Svelte."
				],

			courseContent: [
				{ title: 'Instalasi & Konfigurasi', lectures: 5, duration: '1 jam' },
				{ title: 'Routing dan Controller', lectures: 7, duration: '2 jam' },
				{ title: 'Blade dan Eloquent ORM', lectures: 10, duration: '3 jam' },
				{ title: 'Project Akhir: Website Blog', lectures: 6, duration: '3 jam 30 menit' }
			],
			forWho: ['PHP Developer', 'Web Developer pemula', 'Mahasiswa dan profesional IT']
		},
		{
			slug: 'reactjs',
			name: 'Belajar ReactJS Modern dari Nol sampai Mahir',
			image: react,
			instructor: 'Eko Kurniawan Khannedy',
			rating: 4.8,
			reviews: 1100,
			students: 956,
			lastUpdated: 'November 2025',
			language: 'Bahasa Indonesia',
			price: 129000,
			originalPrice: 149000,
			whatYouWillLearn: [
				'Dasar ReactJS (Hooks & State)',
				'Komponen dan Props',
				'Integrasi API',
				'Routing dengan React Router'
			],
			requirements: ['Dasar JavaScript dan HTML', 'Node.js terinstal di komputer'],
			description: 'Pelajari ReactJS dengan pendekatan praktis untuk membuat aplikasi modern.',
			shortDescription: [
				"Selamat datang di course Belajar React.js untuk Pemula. Di kelas ini, kamu akan mempelajari cara membangun antarmuka web interaktif dan modern menggunakan library JavaScript paling populer saat ini — React.js.",
				"Pengenalan React.js: memahami apa itu React, sejarahnya, serta alasan mengapa React menjadi pilihan utama dalam pengembangan aplikasi web modern.",
				"Instalasi & Setup Lingkungan: belajar cara menginstal Node.js, menggunakan create-react-app atau Vite untuk memulai project React dari nol.",
				"Dasar-Dasar React: memahami konsep komponen, JSX, props, dan state untuk membangun tampilan yang dinamis dan reaktif.",
				"Event Handling & Conditional Rendering: belajar cara menangani interaksi pengguna dan menampilkan elemen berdasarkan kondisi tertentu.",
				"Hooks Dasar: mempelajari useState, useEffect, dan cara mengelola state serta efek samping di dalam komponen React.",
				"Routing dengan React Router: belajar cara menambahkan navigasi antar halaman menggunakan React Router dan konsep Single Page Application (SPA).",
				"Mengambil Data dari API: memahami cara fetch data dari API eksternal dan menampilkannya secara dinamis di antarmuka aplikasi.",
				"Project Akhir: Membangun Aplikasi Web Lengkap dengan React.js — menerapkan semua konsep yang telah dipelajari untuk membuat proyek nyata yang responsif dan fungsional.",
				"Bonus: Tips optimasi performa React, penggunaan Context API untuk manajemen state global, serta integrasi dengan Tailwind CSS untuk tampilan profesional."
				],

			courseContent: [
				{ title: 'Pengenalan React', lectures: 6, duration: '1 jam 30 menit' },
				{ title: 'Hooks & State', lectures: 10, duration: '3 jam' },
				{ title: 'Integrasi API', lectures: 7, duration: '2 jam' },
				{ title: 'Project Akhir: Todo App', lectures: 5, duration: '2 jam 15 menit' }
			],
			forWho: [
				'Frontend Developer',
				'Mahasiswa IT',
				'Siapa saja yang ingin membangun SPA modern'
			]
		},
		{
			slug: 'Python',
			name: 'Belajar Python untuk pemula Hingga Mahir',
			image: python,
			instructor: 'Eko Kurniawan Khannedy',
			rating: 4.8,
			reviews: 1450,
			students: 998,
			lastUpdated: 'Juli 2025',
			language: 'Bahasa Indonesia',
			price: 129000,
			originalPrice: 149000,
			whatYouWillLearn: [
				'Dasar sintaks Python',
				'Pemrograman berorientasi objek',
				'Manipulasi data dan file',
				'Membuat project mini dengan Flask'
			],
			requirements: ['Tidak perlu pengalaman sebelumnya', 'Laptop & semangat belajar tinggi'],
			description: 'Belajar Python dari nol dengan studi kasus praktis dan mudah dipahami.',
			shortDescription: [
				"Selamat datang di course Belajar Python untuk Pemula. Di kelas ini, kamu akan mempelajari dasar-dasar pemrograman menggunakan Python — bahasa yang populer, mudah dipelajari, dan banyak digunakan di berbagai bidang seperti web, data, dan AI.",
				"Pengenalan Python: memahami apa itu Python, sejarahnya, serta alasan mengapa Python menjadi bahasa yang paling banyak digunakan di dunia pemrograman modern.",
				"Instalasi & Setup Lingkungan: belajar cara menginstal Python, menggunakan terminal dan IDE seperti VS Code atau PyCharm, serta membuat project pertama dari nol.",
				"Dasar-Dasar Python: memahami variabel, tipe data, operator, struktur kontrol (if, for, while), dan fungsi dasar untuk membangun logika program.",
				"Struktur Data Python: mempelajari list, tuple, set, dan dictionary — serta bagaimana cara menggunakannya dalam pemrosesan data.",
				"Pemrograman Modular: belajar membuat dan mengimpor modul, menggunakan pustaka standar Python, serta menulis kode yang bersih dan terorganisir.",
				"Manipulasi File & Input/Output: memahami cara membaca dan menulis file, serta mengelola data dari berbagai sumber eksternal.",
				"Pengenalan OOP di Python: belajar konsep Object-Oriented Programming seperti class, object, inheritance, dan encapsulation.",
				"Project Akhir: Membangun Aplikasi CLI untuk Manajemen Data — menerapkan seluruh konsep yang telah dipelajari dalam proyek nyata berbasis Python.",
				"Bonus: Tips belajar lanjutan ke topik seperti web development dengan Flask/Django, analisis data dengan Pandas, dan dasar-dasar machine learning."
				],

			courseContent: [
				{ title: 'Pengenalan Python', lectures: 6, duration: '1 jam 45 menit' },
				{ title: 'Tipe Data & Struktur Kontrol', lectures: 8, duration: '2 jam' },
				{ title: 'OOP di Python', lectures: 6, duration: '2 jam' },
				{ title: 'Project Akhir: Aplikasi Flask', lectures: 5, duration: '2 jam 15 menit' }
			],
			forWho: ['Pemula pemrograman', 'Mahasiswa IT', 'Siapa saja yang ingin belajar AI/Data Science']
		},
		{
			slug: 'svelte',
			name: 'Belajar Svelte & SvelteKit dari Nol sampai Mahir',
			image: svelte,
			instructor: 'Eko Kurniawan Khannedy',
			rating: 4.9,
			reviews: 920,
			students: 886,
			lastUpdated: 'Oktober 2025',
			language: 'Bahasa Indonesia',
			price: 129000,
			originalPrice: 149000,
			whatYouWillLearn: [
				'Dasar framework Svelte',
				'Membangun project dengan SvelteKit',
				'Integrasi API dan routing',
				'Deploy project statis ke GitHub Pages'
			],
			requirements: ['Dasar HTML, CSS, dan JavaScript', 'Node.js & npm terinstal'],
			description:
				'Belajar framework modern Svelte dan SvelteKit untuk membangun website cepat dan ringan.',
			shortDescription: [
				"Selamat datang di course Belajar Svelte untuk Pemula. Di kelas ini, kamu akan mempelajari bagaimana cara membangun aplikasi web modern yang cepat dan reaktif menggunakan framework Svelte.",
				"Pengenalan Svelte: memahami apa itu Svelte, sejarahnya, serta alasan mengapa Svelte menjadi pilihan populer dibanding framework lain seperti React atau Vue.",
				"Instalasi & Setup Lingkungan: belajar cara menginstal Svelte, menggunakan Vite atau SvelteKit untuk memulai project pertama dari nol.",
				"Dasar-Dasar Svelte: memahami konsep reaktivitas, binding data, props, dan event handling di dalam komponen Svelte.",
				"Membuat Komponen UI: belajar membangun dan mengelola komponen yang reusable dengan struktur yang rapi dan efisien.",
				"Routing & Layout: mempelajari penggunaan SvelteKit untuk navigasi antar halaman dan pembuatan layout dinamis.",
				"Integrasi API & Data Dinamis: belajar mengambil data dari API eksternal dan menampilkannya secara reaktif di halaman Svelte.",
				"State Management & Store: memahami cara menggunakan store (writable, readable, derived) untuk mengelola state aplikasi dengan mudah.",
				"Project Akhir: Membangun Aplikasi Web Lengkap menggunakan SvelteKit — menerapkan seluruh konsep dalam proyek nyata dengan desain modern.",
				"Bonus: Tips deployment aplikasi Svelte ke server produksi, optimasi performa, serta integrasi dengan Tailwind CSS untuk tampilan profesional."
				],

			courseContent: [
				{ title: 'Pengenalan Svelte', lectures: 6, duration: '1 jam 20 menit' },
				{ title: 'Reactivity & Props', lectures: 8, duration: '2 jam' },
				{ title: 'Routing & API Integration', lectures: 7, duration: '2 jam 15 menit' },
				{ title: 'Project Akhir: Company Profile', lectures: 5, duration: '2 jam 30 menit' }
			],
			forWho: [
				'Frontend Developer',
				'Svelte enthusiast',
				'Siapa saja yang ingin belajar web modern'
			]
		},
        		{
			slug: 'node.js',
			name: 'Belajar Backend Node.js dari Nol sampai Mahir',
			image: nodejs,
			instructor: 'Eko Kurniawan Khannedy',
			rating: 4.8,
			reviews: 1050,
			students: 678,
			lastUpdated: 'Oktober 2025',
			language: 'Bahasa Indonesia',
			price: 129000,
			originalPrice: 149000,
			whatYouWillLearn: [
				'Dasar Node.js dan NPM',
				'Membangun REST API dengan Express.js',
				'Menggunakan Middleware & Routing',
				'Koneksi ke database MySQL & MongoDB'
			],
			requirements: ['Dasar JavaScript', 'Node.js terinstal di komputer'],
			description: 'Bangun backend server modern dengan Node.js dan Express.js.',
			shortDescription: [
				"Selamat datang di course Belajar Node.js untuk Pemula. Di kelas ini, kamu akan mempelajari bagaimana cara membangun aplikasi backend modern menggunakan JavaScript di lingkungan server dengan Node.js.",
				"Pengenalan Node.js: memahami apa itu Node.js, sejarahnya, serta alasan mengapa Node.js menjadi pilihan populer untuk pengembangan aplikasi backend dan real-time.",
				"Instalasi & Setup Lingkungan: belajar cara menginstal Node.js, menggunakan npm atau bun untuk manajemen package, serta membuat project pertama dari nol.",
				"Dasar-Dasar Node.js: memahami konsep event-driven, non-blocking I/O, dan cara kerja asynchronous pada runtime Node.js.",
				"Membuat Server HTTP: belajar membangun server web sederhana tanpa framework, memahami request dan response, serta cara menangani routing manual.",
				"Menggunakan Express.js: mempelajari framework Express untuk membuat RESTful API dengan routing, middleware, dan response handling yang efisien.",
				"Mengelola Data: belajar menghubungkan Node.js dengan database seperti MongoDB atau MySQL untuk operasi CRUD.",
				"Error Handling & Middleware: memahami cara menangani error, membuat middleware kustom, dan menjaga struktur aplikasi tetap modular.",
				"Project Akhir: Membangun RESTful API untuk Sistem Kursus Online — menerapkan seluruh konsep untuk membuat backend lengkap menggunakan Node.js dan Express.",
				"Bonus: Tips deployment Node.js ke server produksi, praktik terbaik dalam struktur folder, serta pengenalan ke TypeScript di lingkungan Node.js modern."
				],

			courseContent: [
				{ title: 'Pengenalan Node.js', lectures: 5, duration: '1 jam 15 menit' },
				{ title: 'Express Framework', lectures: 8, duration: '2 jam' },
				{ title: 'Database Connection', lectures: 6, duration: '2 jam' },
				{ title: 'Project Akhir: REST API CRUD', lectures: 5, duration: '2 jam 20 menit' }
			],
			forWho: ['Backend Developer', 'Mahasiswa IT', 'Fullstack Developer']
		},
		{
			slug: 'vuejs',
			name: 'Belajar Vue.js dari Dasar sampai Mahir',
			image: vue,
			instructor: 'Eko Kurniawan Khannedy',
			rating: 4.7,
			reviews: 870,
			students: 792,
			lastUpdated: 'September 2025',
			language: 'Bahasa Indonesia',
			price: 129000,
			originalPrice: 149000,
			whatYouWillLearn: [
				'Dasar framework Vue.js',
				'Component & Props',
				'Routing dengan Vue Router',
				'State management dengan Pinia/Vuex'
			],
			requirements: ['Dasar HTML, CSS, JavaScript'],
			description: 'Pelajari Vue.js dengan pendekatan interaktif untuk membangun SPA modern.',
			shortDescription: [
				"Selamat datang di course Belajar Vue.js untuk Pemula. Di kelas ini, kamu akan mempelajari cara membangun antarmuka pengguna (UI) modern dan interaktif menggunakan framework JavaScript progresif — Vue.js.",
				"Pengenalan Vue.js: memahami apa itu Vue.js, sejarahnya, dan mengapa framework ini populer untuk membangun aplikasi frontend yang ringan dan efisien.",
				"Instalasi & Setup Lingkungan: belajar cara menyiapkan proyek Vue.js menggunakan CDN, Vite, atau Vue CLI, serta mengenal struktur folder dan file utama.",
				"Dasar-Dasar Vue: memahami konsep reaktifitas, data binding, directives (v-if, v-for, v-bind, v-model), dan event handling untuk membangun UI dinamis.",
				"Komponen di Vue: mempelajari cara membuat, mengelola, dan berkomunikasi antar komponen menggunakan props dan event emit.",
				"Computed & Watchers: memahami bagaimana cara mengelola data turunan dan memantau perubahan data dalam aplikasi Vue.",
				"Routing & Navigasi: belajar menggunakan Vue Router untuk membuat navigasi antar halaman secara SPA (Single Page Application).",
				"State Management: mengenal Pinia atau Vuex untuk mengelola state global pada aplikasi berskala besar.",
				"Project Akhir: Membangun Aplikasi To-Do List Interaktif — menerapkan semua konsep yang telah dipelajari untuk membuat aplikasi Vue.js nyata dari awal.",
				"Bonus: Tips menulis kode Vue yang efisien, penggunaan Composition API, serta integrasi dengan backend seperti Node.js atau Firebase."
				],

			courseContent: [
				{ title: 'Dasar Vue', lectures: 6, duration: '1 jam 30 menit' },
				{ title: 'Komponen & Props', lectures: 8, duration: '2 jam' },
				{ title: 'Routing & State', lectures: 7, duration: '2 jam' },
				{ title: 'Project Akhir: Dashboard App', lectures: 5, duration: '2 jam 30 menit' }
			],
			forWho: ['Frontend Developer', 'Web Developer', 'Mahasiswa IT']
		},
		{
			slug: 'php',
			name: 'Belajar PHP Modern dari Nol sampai Mahir',
			image: php,
			instructor: 'Eko Kurniawan Khannedy',
			rating: 4.6,
			reviews: 930,
			students: 889,
			lastUpdated: 'Juli 2025',
			language: 'Bahasa Indonesia',
			price: 139000,
			originalPrice: 149000,
			whatYouWillLearn: [
				'Dasar pemrograman PHP',
				'Manipulasi database dengan MySQL',
				'Membuat website dinamis',
				'Pengenalan OOP di PHP'
			],
			requirements: ['Dasar HTML & CSS', 'XAMPP terinstal'],
			description: 'Pelajari PHP modern untuk membangun website dinamis dan cepat.',
			shortDescription: [
				"Selamat datang di course Belajar PHP untuk Pemula. Di kelas ini, kamu akan mempelajari dasar-dasar pemrograman web menggunakan PHP, dari konsep fundamental hingga membangun aplikasi web dinamis yang terhubung dengan database.",
				"Pengenalan PHP: memahami sejarah dan fungsi PHP dalam pengembangan web, serta bagaimana PHP bekerja di sisi server untuk menghasilkan halaman dinamis.",
				"Instalasi & Setup Lingkungan: belajar cara menginstal PHP, web server (XAMPP atau Laragon), dan text editor untuk menulis kode PHP.",
				"Sintaks Dasar PHP: mempelajari struktur dasar program PHP, variabel, tipe data, operator, dan kontrol alur seperti if, for, dan while.",
				"Fungsi & Array: memahami cara membuat dan menggunakan fungsi, serta cara mengelola data menggunakan array (indexed, associative, dan multidimensional).",
				"Form & Input Data: belajar cara menangani input dari pengguna melalui form HTML menggunakan metode GET dan POST, serta melakukan validasi data.",
				"Koneksi ke Database: mempelajari cara menghubungkan PHP dengan MySQL menggunakan ekstensi MySQLi atau PDO, serta melakukan operasi CRUD (Create, Read, Update, Delete).",
				"Session & Cookie: memahami konsep penyimpanan data sementara dan autentikasi pengguna menggunakan session dan cookie.",
				"Project Akhir: Membangun Aplikasi CRUD Sederhana — menggabungkan semua konsep untuk membuat aplikasi manajemen data dengan PHP dan MySQL.",
				"Bonus: Tips menulis kode PHP yang aman, efisien, serta pengenalan ke framework populer seperti Laravel untuk pengembangan lanjutan."
				],

			courseContent: [
				{ title: 'Dasar PHP', lectures: 6, duration: '1 jam 30 menit' },
				{ title: 'Database MySQL', lectures: 8, duration: '2 jam' },
				{ title: 'OOP di PHP', lectures: 7, duration: '2 jam' },
				{ title: 'Project Akhir: Sistem Login', lectures: 5, duration: '2 jam' }
			],
			forWho: ['Pemula', 'Web Developer', 'Mahasiswa IT']
		},
		{
			slug: 'mysql',
			name: 'Belajar MySQL untuk Developer',
			image: mysql,
			instructor: 'Eko Kurniawan Khannedy',
			rating: 4.7,
			reviews: 800,
			students: 823,
			lastUpdated: 'Agustus 2025',
			language: 'Bahasa Indonesia',
			price: 129000,
			originalPrice: 149000,
			whatYouWillLearn: [
				'Dasar database MySQL',
				'Membuat tabel dan relasi',
				'Menulis query SQL kompleks',
				'Optimasi performa database'
			],
			requirements: ['Dasar logika pemrograman'],
			description: 'Pelajari database MySQL dari dasar hingga query kompleks.',
			shortDescription: [
				"Selamat datang di course Belajar MySQL untuk Pemula. Di kelas ini, kamu akan mempelajari dasar-dasar sistem manajemen basis data relasional (RDBMS) menggunakan MySQL, dari instalasi hingga membuat query yang kompleks.",
				"Pengenalan MySQL: memahami konsep database relasional, fungsi MySQL dalam aplikasi modern, serta perbedaan antara MySQL dan sistem database lainnya seperti PostgreSQL atau SQLite.",
				"Instalasi & Setup Lingkungan: belajar cara menginstal MySQL di Windows, macOS, atau Linux, serta menggunakan MySQL Workbench dan command line client.",
				"Dasar SQL: mempelajari perintah dasar seperti CREATE, INSERT, SELECT, UPDATE, dan DELETE untuk mengelola data dalam tabel.",
				"Struktur Database: memahami cara mendesain tabel, menentukan primary key dan foreign key, serta membuat relasi antar tabel (one-to-many, many-to-many).",
				"Query Lanjutan: belajar menggunakan klausa WHERE, JOIN, GROUP BY, HAVING, dan ORDER BY untuk mengambil data yang lebih kompleks dan efisien.",
				"Index & Optimasi: memahami cara kerja index untuk meningkatkan performa query, serta teknik optimasi query menggunakan EXPLAIN.",
				"Backup & Restore Data: belajar membuat backup database menggunakan perintah mysqldump dan cara melakukan restore data dengan aman.",
				"Keamanan Database: mempelajari cara mengatur user, role, dan hak akses (privileges) untuk menjaga keamanan data.",
				"Project Akhir: Membangun Sistem Manajemen Data Mahasiswa — menerapkan seluruh konsep yang telah dipelajari untuk membuat aplikasi CRUD lengkap dengan MySQL.",
				"Bonus: Tips desain database yang efisien, normalisasi data, serta praktik terbaik dalam penggunaan MySQL untuk proyek skala kecil hingga besar."
				],

			courseContent: [
				{ title: 'Pengenalan Database', lectures: 5, duration: '1 jam' },
				{ title: 'Query Dasar', lectures: 8, duration: '2 jam' },
				{ title: 'Join & Subquery', lectures: 7, duration: '2 jam' },
				{ title: 'Project Akhir: Database Toko Online', lectures: 4, duration: '1 jam 45 menit' }
			],
			forWho: ['Backend Developer', 'Mahasiswa IT', 'Data Analyst pemula']
		},
		{
			slug: 'docker-basics',
			name: 'Belajar Docker untuk Developer',
			image: docker,
			instructor: 'Eko Kurniawan Khannedy',
			rating: 4.9,
			reviews: 780,
			students: 714,
			lastUpdated: 'Oktober 2025',
			language: 'Bahasa Indonesia',
			price: 129000,
			originalPrice: 149000,
			whatYouWillLearn: [
				'Konsep containerization',
				'Membuat dan mengelola container',
				'Membuat Dockerfile & Compose',
				'Deploy aplikasi menggunakan Docker'
			],
			requirements: ['Dasar terminal/command line'],
			description: 'Pelajari Docker dari dasar untuk efisiensi pengembangan dan deployment.',
			shortDescription: [
				"Selamat datang di course Belajar Docker untuk Pemula. Di kelas ini, kamu akan mempelajari cara mengemas, mendistribusikan, dan menjalankan aplikasi menggunakan container dengan Docker secara efisien dan terstandarisasi.",
				"Pengenalan Docker: memahami apa itu containerization, perbedaan antara container dan virtual machine, serta manfaat Docker dalam pengembangan dan deployment aplikasi modern.",
				"Instalasi & Setup Lingkungan: belajar cara menginstal Docker di berbagai sistem operasi (Windows, macOS, Linux) dan memahami komponen utama seperti Docker Engine dan Docker CLI.",
				"Image & Container: mempelajari konsep dasar image, cara membuat dan menjalankan container, serta memahami perintah dasar seperti docker run, docker ps, dan docker stop.",
				"Dockerfile & Build Image: belajar cara menulis Dockerfile untuk membuat custom image aplikasi, mengoptimalkan layer build, dan menggunakan tag versi dengan benar.",
				"Docker Compose: memahami cara mengelola beberapa container sekaligus menggunakan docker-compose.yml untuk membangun lingkungan pengembangan yang kompleks.",
				"Volume & Network: mempelajari cara mengatur penyimpanan data dengan volume dan menghubungkan container melalui jaringan Docker.",
				"Deployment & Registry: belajar cara push/pull image ke Docker Hub atau private registry, serta menerapkan container di server produksi.",
				"Project Akhir: Membangun Aplikasi Multi-Container — membuat aplikasi web lengkap dengan backend, frontend, dan database menggunakan Docker Compose.",
				"Bonus: Tips optimasi ukuran image, keamanan Docker, serta praktik terbaik dalam workflow DevOps modern menggunakan container."
				],

			courseContent: [
				{ title: 'Pengenalan Docker', lectures: 5, duration: '1 jam 10 menit' },
				{ title: 'Docker Image & Container', lectures: 7, duration: '2 jam' },
				{ title: 'Docker Compose', lectures: 6, duration: '2 jam' },
				{ title: 'Project Akhir: Deploy Node.js App', lectures: 4, duration: '2 jam' }
			],
			forWho: ['DevOps Engineer', 'Fullstack Developer', 'Software Engineer']
		},
		{
			slug: 'nestjs',
			name: 'Belajar Backend dengan NestJS',
			image: nestjs,
			instructor: 'Eko Kurniawan Khannedy',
			rating: 4.9,
			reviews: 860,
			students: 955,
			lastUpdated: 'November 2025',
			language: 'Bahasa Indonesia',
			price: 129000,
			originalPrice: 149000,
			whatYouWillLearn: [
				'Dasar framework NestJS',
				'Membangun REST API modular',
				'Integrasi database dan autentikasi',
				'Best practice backend modern'
			],
			requirements: ['Dasar TypeScript dan Node.js'],
			description: 'Framework backend berbasis TypeScript yang powerful dan scalable.',
			shortDescription: [
				"Selamat datang di course Belajar NestJS untuk Pemula. Di kelas ini, kamu akan mempelajari cara membangun aplikasi backend yang scalable, modular, dan efisien menggunakan framework NestJS berbasis Node.js dan TypeScript.",
				"Pengenalan NestJS: memahami apa itu NestJS, arsitektur modularnya, serta mengapa framework ini menjadi pilihan populer untuk membangun aplikasi backend modern.",
				"Instalasi & Setup Lingkungan: belajar cara menginstal Nest CLI, membuat proyek baru, dan memahami struktur folder default yang digunakan oleh NestJS.",
				"Dasar Controller & Routing: mempelajari cara membuat controller, mendefinisikan endpoint RESTful API, dan mengatur route menggunakan decorator @Controller dan @Get/@Post.",
				"Service & Dependency Injection: memahami konsep service, provider, dan dependency injection untuk memisahkan logika bisnis dari controller.",
				"Module & Arsitektur Aplikasi: belajar membangun aplikasi modular dengan module, serta mengatur struktur proyek besar agar tetap bersih dan mudah dikelola.",
				"Database & ORM: mempelajari cara mengintegrasikan NestJS dengan database menggunakan TypeORM atau Prisma untuk operasi CRUD yang efisien.",
				"Middleware, Guard, & Interceptor: memahami cara menambahkan autentikasi, validasi, logging, dan error handling dengan cara idiomatik di NestJS.",
				"Project Akhir: Membangun RESTful API Lengkap — membuat API CRUD dengan autentikasi JWT, validasi, dan dokumentasi menggunakan Swagger.",
				"Bonus: Tips deployment aplikasi NestJS ke server production, optimasi performa, serta praktik terbaik dalam pengembangan backend berbasis TypeScript."
				],

			courseContent: [
				{ title: 'Dasar NestJS', lectures: 6, duration: '1 jam 30 menit' },
				{ title: 'Controller & Service', lectures: 8, duration: '2 jam' },
				{ title: 'Database Integration', lectures: 6, duration: '2 jam' },
				{ title: 'Project Akhir: RESTful API', lectures: 4, duration: '2 jam 15 menit' }
			],
			forWho: ['Backend Developer', 'Fullstack Developer', 'Mahasiswa IT']
		},
		{
			slug: 'bun',
			name: 'Belajar Bun untuk Backend Developer',
			image: bun,
			instructor: 'Eko Kurniawan Khannedy',
			rating: 4.8,
			reviews: 720,
			students: 881,
			lastUpdated: 'Oktober 2025',
			language: 'Bahasa Indonesia',
			price: 129000,
			originalPrice: 149000,
			whatYouWillLearn: [
				'Dasar Bun runtime modern',
				'Membuat REST API dengan Bun',
				'Integrasi database SQLite/MySQL',
				'Optimasi performa server'
			],
			requirements: ['Dasar JavaScript dan Node.js'],
			description: 'Pelajari runtime Bun yang super cepat untuk membangun backend modern.',
			shortDescription: [
				"Selamat datang di course Belajar Bun untuk Pemula. Di kelas ini, kamu akan mempelajari cara menggunakan Bun — runtime JavaScript modern yang super cepat untuk membangun aplikasi web, API, dan tools dengan performa tinggi.",
				"Pengenalan Bun: memahami apa itu Bun, perbedaannya dengan Node.js dan Deno, serta mengapa Bun menjadi pilihan populer untuk pengembangan JavaScript modern.",
				"Instalasi & Setup Lingkungan: belajar cara menginstal Bun di berbagai sistem operasi, menjalankan perintah dasar, dan membuat proyek pertama menggunakan Bun init.",
				"Dasar Penggunaan Bun: mempelajari cara menjalankan file JavaScript/TypeScript, menggunakan modul bawaan, dan memahami arsitektur Bun yang terintegrasi dengan bundler, transpiler, dan package manager.",
				"Package Manager Bun: memahami cara kerja bun install, bun add, dan bun remove sebagai pengganti npm/yarn/pnpm dengan kecepatan yang jauh lebih tinggi.",
				"Membangun REST API: belajar membuat server HTTP sederhana menggunakan Bun, mengatur routing, dan mengelola request/response dengan performa optimal.",
				"Integrasi dengan Database: mempelajari cara menghubungkan Bun dengan database seperti SQLite, MySQL, atau PostgreSQL menggunakan ORM seperti Drizzle atau Prisma.",
				"Testing & Benchmarking: memahami cara melakukan pengujian otomatis dengan Bun test serta membandingkan performa dengan Node.js.",
				"Project Akhir: Membangun RESTful API Sederhana — menerapkan semua konsep yang telah dipelajari untuk membuat API CRUD dengan Bun dan TypeScript.",
				"Bonus: Tips optimasi performa, deployment ke production, serta praktik terbaik dalam pengembangan backend modern menggunakan Bun."
				],

			courseContent: [
				{ title: 'Pengenalan Bun', lectures: 5, duration: '1 jam' },
				{ title: 'Routing & API', lectures: 7, duration: '2 jam' },
				{ title: 'Database Integration', lectures: 6, duration: '2 jam' },
				{ title: 'Project Akhir: REST API', lectures: 5, duration: '2 jam' }
			],
			forWho: ['Backend Developer', 'Fullstack Developer', 'Mahasiswa IT']
		},
		{
			slug: 'rust',
			name: 'Pemrograman Rust untuk Pemula',
			image: rust,
			instructor: 'Eko Kurniawan Khannedy',
			rating: 4.9,
			reviews: 640,
			students: 934,
			lastUpdated: 'September 2025',
			language: 'Bahasa Indonesia',
			price: 129000,
			originalPrice: 149000,
			whatYouWillLearn: [
				'Dasar bahasa Rust',
				'Mengelola memory secara aman',
				'Membangun CLI App dengan Rust',
				'Async programming di Rust'
			],
			requirements: ['Mengerti dasar pemrograman'],
			description: 'Pelajari Rust, bahasa modern yang cepat dan aman untuk sistem performa tinggi.',
			shortDescription: [
				"Selamat datang di course Belajar Rust untuk Pemula. Di kelas ini, kamu akan mempelajari bahasa pemrograman Rust dari dasar hingga mampu membuat aplikasi yang cepat, aman, dan efisien untuk kebutuhan modern.",
				"Pengenalan Rust: memahami sejarah, filosofi, dan tujuan utama Rust sebagai bahasa pemrograman sistem yang berfokus pada kecepatan dan keamanan memori.",
				"Instalasi & Setup Lingkungan: belajar cara menginstal Rust menggunakan rustup, mengonfigurasi cargo, serta menjalankan proyek pertama dengan perintah build dan run.",
				"Dasar Bahasa Rust: mempelajari variabel, tipe data, fungsi, kontrol alur, dan modul dasar untuk memahami struktur program Rust.",
				"Ownership & Borrowing: memahami konsep inti Rust yang memastikan keamanan memori tanpa garbage collector, termasuk aturan ownership, borrowing, dan lifetime.",
				"Struct, Enum, & Pattern Matching: belajar membangun tipe data kompleks dan menggunakan pattern matching untuk menulis kode yang bersih dan ekspresif.",
				"Error Handling: mempelajari cara menangani error dengan Result dan Option, serta perbedaan antara panic dan error yang dapat ditangani.",
				"Collection & Iterator: memahami cara kerja vector, string, hashmap, serta memanfaatkan iterator dan closure untuk pemrosesan data yang efisien.",
				"Concurrency di Rust: belajar membuat program paralel menggunakan thread, channel, dan async/await dengan keamanan data yang terjamin oleh compiler.",
				"Project Akhir: Membangun CLI To-Do App — menerapkan seluruh konsep yang telah dipelajari untuk membuat aplikasi baris perintah sederhana menggunakan Rust.",
				"Bonus: Tips menulis kode Rust yang idiomatik, performa tinggi, serta pengenalan ekosistem crates.io dan praktik terbaik dalam proyek nyata."
				],

			courseContent: [
				{ title: 'Pengenalan Rust', lectures: 5, duration: '1 jam' },
				{ title: 'Ownership & Borrowing', lectures: 7, duration: '2 jam' },
				{ title: 'Struct & Enum', lectures: 6, duration: '2 jam' },
				{ title: 'Project Akhir: CLI App', lectures: 5, duration: '2 jam' }
			],
			forWho: ['System Developer', 'Programmer berpengalaman', 'Mahasiswa TI']
		},
        		{
			slug: 'redis',
			name: 'Belajar Redis untuk Developer',
			image: redis,
			instructor: 'Eko Kurniawan Khannedy',
			rating: 4.8,
			reviews: 620,
			students: 734,
			lastUpdated: 'Oktober 2025',
			language: 'Bahasa Indonesia',
			price: 129000,
			originalPrice: 149000,
			whatYouWillLearn: [
				'Dasar Redis dan konsep in-memory database',
				'Key, Hash, List, Set, Sorted Set',
				'Menggunakan Redis untuk caching dan session',
				'Implementasi Redis di Node.js dan Laravel'
			],
			requirements: ['Dasar backend development'],
			description: 'Pelajari Redis, database super cepat untuk caching dan queue system.',
			shortDescription: [
				"Selamat datang di course Belajar Redis untuk Pemula. Di kelas ini, kamu akan mempelajari dasar-dasar penggunaan Redis sebagai in-memory data store untuk caching, message broker, dan database berkecepatan tinggi.",
				"Pengenalan Redis: memahami apa itu Redis, sejarah dan konsep in-memory database, serta keunggulannya dibandingkan database tradisional seperti MySQL atau PostgreSQL.",
				"Instalasi & Setup Lingkungan: belajar cara menginstal Redis di berbagai sistem operasi, menjalankan server Redis, dan menggunakan Redis CLI untuk interaksi dasar.",
				"Struktur Data Redis: mempelajari berbagai tipe data seperti String, List, Set, Sorted Set, dan Hash beserta cara penggunaannya dalam berbagai kasus nyata.",
				"Operasi Dasar Redis: memahami perintah penting seperti GET, SET, DEL, EXPIRE, dan INCR untuk mengelola data dengan cepat dan efisien.",
				"Caching dengan Redis: belajar cara menggunakan Redis untuk caching hasil query database atau API agar aplikasi berjalan lebih cepat dan responsif.",
				"Pub/Sub dan Messaging: mempelajari fitur Publish/Subscribe Redis untuk komunikasi antar layanan dan implementasi message queue sederhana.",
				"Persistence & Backup: memahami mekanisme penyimpanan data di Redis menggunakan RDB dan AOF, serta strategi backup dan recovery.",
				"Monitoring & Optimasi: belajar cara memantau performa Redis, mengatur konfigurasi memory limit, eviction policy, serta teknik optimasi untuk skala besar.",
				"Project Akhir: Membangun Sistem Caching Aplikasi Web — menerapkan semua konsep yang telah dipelajari untuk meningkatkan performa aplikasi dengan Redis.",
				"Bonus: Tips dan praktik terbaik dalam desain arsitektur caching, keamanan Redis, serta integrasi dengan framework populer seperti Node.js dan Laravel."
				],

			courseContent: [
				{ title: 'Pengenalan Redis', lectures: 5, duration: '1 jam' },
				{ title: 'Struktur Data Redis', lectures: 7, duration: '2 jam' },
				{ title: 'Integrasi ke Aplikasi', lectures: 6, duration: '2 jam' },
				{ title: 'Project Akhir: Redis Cache API', lectures: 4, duration: '1 jam 45 menit' }
			],
			forWho: ['Backend Developer', 'DevOps', 'Fullstack Developer']
		},
		{
			slug: 'apache-kafka',
			name: 'Belajar Apache Kafka untuk Pemula',
			image: kafka,
			instructor: 'Eko Kurniawan Khannedy',
			rating: 4.9,
			reviews: 580,
			students: 967,
			lastUpdated: 'Oktober 2025',
			language: 'Bahasa Indonesia',
			price: 129000,
			originalPrice: 149000,
			whatYouWillLearn: [
				'Konsep event streaming dan pub-sub',
				'Membuat producer dan consumer',
				'Integrasi Kafka dengan Node.js dan Java',
				'Monitoring & scaling Kafka cluster'
			],
			requirements: ['Dasar backend programming', 'Pemahaman konsep message queue'],
			description: 'Pelajari Apache Kafka, sistem event streaming yang powerful dan scalable.',
			shortDescription: [
				"Selamat datang di course Belajar Apache Kafka untuk Pemula. Di kelas ini, kamu akan mempelajari konsep dasar dan implementasi Apache Kafka untuk membangun sistem pemrosesan data real-time yang scalable dan andal.",
				"Pengenalan Apache Kafka: memahami apa itu Kafka, sejarah dan arsitekturnya, serta bagaimana Kafka digunakan dalam sistem event streaming modern.",
				"Instalasi & Setup Lingkungan: belajar cara menginstal dan menjalankan Kafka serta Zookeeper di lokal, memahami broker, topic, dan partition.",
				"Dasar Producing & Consuming Data: mempelajari cara mengirim (produce) dan menerima (consume) pesan menggunakan Kafka CLI maupun kode program sederhana.",
				"Arsitektur Internal Kafka: memahami cara kerja log-based storage, offset, replication, dan mekanisme fault-tolerance untuk menjaga data tetap aman.",
				"Kafka Topics & Partitions: belajar membuat, mengonfigurasi, dan mengelola topic serta memahami strategi partitioning untuk performa optimal.",
				"Integrasi Kafka dengan Aplikasi: mempelajari cara mengintegrasikan Kafka dengan Node.js, Python, atau Java untuk mengalirkan data antar layanan.",
				"Monitoring & Optimasi: memahami cara memantau performa cluster Kafka, mengatur throughput, dan menangani error atau bottleneck.",
				"Project Akhir: Membangun Sistem Streaming Data Real-Time — menerapkan semua konsep yang telah dipelajari dalam proyek nyata menggunakan Apache Kafka.",
				"Bonus: Tips dan praktik terbaik dalam desain arsitektur event-driven, pengelolaan topic, serta menjaga performa dan reliabilitas Kafka di lingkungan produksi."
				],

			courseContent: [
				{ title: 'Dasar Kafka', lectures: 5, duration: '1 jam 15 menit' },
				{ title: 'Producer & Consumer', lectures: 7, duration: '2 jam' },
				{ title: 'Integrasi Aplikasi', lectures: 6, duration: '2 jam' },
				{ title: 'Project Akhir: Event Streaming App', lectures: 4, duration: '2 jam' }
			],
			forWho: ['Backend Engineer', 'System Architect', 'DevOps Engineer']
		},
		{
			slug: 'postgre',
			name: 'Belajar PostgreSQL untuk Developer',
			image: postgre,
			instructor: 'Eko Kurniawan Khannedy',
			rating: 4.8,
			reviews: 740,
			students: 876,
			lastUpdated: 'Agustus 2025',
			language: 'Bahasa Indonesia',
			price: 129000,
			originalPrice: 149000,
			whatYouWillLearn: [
				'Dasar PostgreSQL dan query SQL',
				'Membuat relasi tabel kompleks',
				'View, Trigger, dan Function',
				'Optimasi performa query'
			],
			requirements: ['Dasar SQL'],
			description: 'Pelajari PostgreSQL, database open-source yang powerful dan stabil.',
			shortDescription: [
				"Selamat datang di course Belajar PostgreSQL untuk Pemula. Di kelas ini, kamu akan mempelajari cara kerja dan penggunaan PostgreSQL dari dasar hingga mampu membangun dan mengelola database relasional yang kuat, aman, dan efisien.",
				"Pengenalan PostgreSQL: memahami sejarah, arsitektur, dan keunggulan PostgreSQL dibanding sistem database lain seperti MySQL atau SQLite.",
				"Instalasi & Setup Lingkungan: belajar cara menginstal PostgreSQL di berbagai sistem operasi serta menggunakan psql dan pgAdmin sebagai alat administrasi.",
				"Dasar SQL & Database: mempelajari konsep database, schema, tabel, kolom, dan tipe data yang digunakan dalam PostgreSQL.",
				"Manipulasi Data (CRUD): belajar membuat, membaca, memperbarui, dan menghapus data menggunakan perintah SQL dasar seperti SELECT, INSERT, UPDATE, dan DELETE.",
				"Relasi & Constraint: memahami konsep primary key, foreign key, dan constraint untuk menjaga integritas data dalam relasi antar tabel.",
				"Fitur Lanjutan PostgreSQL: belajar tentang indexing, view, trigger, stored procedure, dan transaction untuk meningkatkan performa dan keandalan data.",
				"Optimasi & Keamanan: memahami strategi indexing, query optimization, serta cara mengatur role, privilege, dan keamanan akses data.",
				"Project Akhir: Membangun Sistem Manajemen Data — menerapkan seluruh konsep yang telah dipelajari dalam satu proyek nyata berbasis PostgreSQL.",
				"Bonus: Tips dan praktik terbaik dalam desain database, normalisasi data, dan penggunaan fitur-fitur modern PostgreSQL untuk aplikasi produksi."
				],

			courseContent: [
				{ title: 'Pengenalan PostgreSQL', lectures: 5, duration: '1 jam' },
				{ title: 'Relasi & Query Lanjut', lectures: 8, duration: '2 jam' },
				{ title: 'Trigger & Function', lectures: 6, duration: '2 jam' },
				{ title: 'Project Akhir: Sistem Database', lectures: 4, duration: '1 jam 45 menit' }
			],
			forWho: ['Backend Developer', 'Database Administrator', 'Mahasiswa IT']
		},
		{
			slug: 'elasticsearch',
			name: 'Belajar Elasticsearch dari Dasar',
			image: elastic,
			instructor: 'Eko Kurniawan Khannedy',
			rating: 4.9,
			reviews: 540,
			students: 812,
			lastUpdated: 'September 2025',
			language: 'Bahasa Indonesia',
			price: 129000,
			originalPrice: 149000,
			whatYouWillLearn: [
				'Dasar Elasticsearch dan konsep indexing',
				'Membuat search engine sederhana',
				'Query DSL dan Aggregation',
				'Integrasi dengan Node.js dan Laravel'
			],
			requirements: ['Dasar REST API dan database'],
			description: 'Pelajari Elasticsearch untuk membangun fitur pencarian super cepat.',
			shortDescription: [
				"Selamat datang di course Belajar Elasticsearch untuk Pemula. Di kelas ini, kamu akan mempelajari cara kerja dan penggunaan Elasticsearch dari dasar hingga mampu membangun sistem pencarian yang cepat, efisien, dan scalable.",
				"Pengenalan Elasticsearch: memahami konsep dasar search engine, arsitektur Elasticsearch, serta perbedaan dengan database relasional.",
				"Instalasi & Setup Lingkungan: belajar cara menginstal Elasticsearch, Kibana, dan Logstash (ELK Stack) di lokal maupun server.",
				"Dasar Query dan Index: mempelajari cara membuat index, menambahkan dokumen, serta melakukan pencarian dasar menggunakan Query DSL.",
				"Mapping & Analisis Data: memahami cara kerja mapping, analyzer, tokenizer, dan bagaimana data teks diproses di Elasticsearch.",
				"Aggregation & Filtering: belajar melakukan analisis data menggunakan agregasi, filter, dan pipeline untuk menghasilkan insight dari data besar.",
				"Integrasi & API: mempelajari cara mengakses Elasticsearch melalui REST API, serta mengintegrasikannya dengan aplikasi Node.js atau Python.",
				"Monitoring & Optimasi: memahami cara memantau performa cluster, mengelola shard & replica, serta mengoptimalkan pencarian untuk efisiensi tinggi.",
				"Project Akhir: Membangun Sistem Pencarian Produk — menerapkan seluruh konsep yang telah dipelajari dalam satu proyek nyata berbasis Elasticsearch.",
				"Bonus: Tips dan praktik terbaik dalam mendesain index, struktur data, dan query agar sistem pencarian tetap cepat dan scalable."
				],

			courseContent: [
				{ title: 'Dasar Elasticsearch', lectures: 5, duration: '1 jam 10 menit' },
				{ title: 'Index & Document', lectures: 7, duration: '2 jam' },
				{ title: 'Query DSL & Aggregation', lectures: 6, duration: '2 jam' },
				{ title: 'Project Akhir: Search API', lectures: 4, duration: '2 jam' }
			],
			forWho: ['Backend Developer', 'Data Engineer', 'Fullstack Developer']
		},
		{
			slug: 'kotlin',
			name: 'Belajar Kotlin untuk Pemula',
			image: kotlin,
			instructor: 'Eko Kurniawan Khannedy',
			rating: 4.8,
			reviews: 710,
			students: 932,
			lastUpdated: 'Juli 2025',
			language: 'Bahasa Indonesia',
			price: 129000,
			originalPrice: 149000,
			whatYouWillLearn: [
				'Dasar bahasa Kotlin',
				'Fungsi dan class',
				'Null Safety dan Extension Function',
				'Membuat aplikasi Android sederhana'
			],
			requirements: ['Dasar Java atau pemrograman OOP'],
			description: 'Pelajari bahasa Kotlin untuk pengembangan Android modern.',
			shortDescription: [
				"Selamat datang di course Belajar Kotlin untuk Pemula. Di kelas ini, kamu akan mempelajari bahasa pemrograman Kotlin dari dasar hingga mampu membuat aplikasi modern dengan kode yang bersih, efisien, dan aman.",
				"Pengenalan Kotlin: memahami sejarah dan filosofi Kotlin, keunggulannya dibanding Java, serta mengapa Kotlin menjadi bahasa resmi untuk pengembangan Android.",
				"Instalasi & Setup Lingkungan: belajar cara menginstal Kotlin, menggunakan Kotlin Playground, IntelliJ IDEA, atau Android Studio sebagai lingkungan pengembangan.",
				"Dasar Bahasa Kotlin: mempelajari variabel, tipe data, operator, kondisi, perulangan, dan fungsi untuk membangun logika dasar aplikasi.",
				"Pemrograman Berorientasi Objek: memahami konsep class, object, inheritance, interface, dan encapsulation dalam konteks Kotlin.",
				"Fitur Modern Kotlin: belajar tentang null safety, lambda expression, extension function, collection, dan coroutine untuk pemrograman asynchronous.",
				"Error Handling & Testing: mempelajari cara menangani error menggunakan try-catch dan menulis unit test dasar untuk memastikan kualitas kode.",
				"Project Akhir: Membangun Aplikasi Konsol dengan Kotlin — menerapkan seluruh konsep yang telah dipelajari dalam satu proyek nyata.",
				"Bonus: Tips menulis kode Kotlin yang idiomatik, efisien, dan mudah dipelihara sesuai praktik terbaik industri modern."
				],

			courseContent: [
				{ title: 'Pengenalan Kotlin', lectures: 5, duration: '1 jam' },
				{ title: 'OOP di Kotlin', lectures: 8, duration: '2 jam' },
				{ title: 'Android Studio Setup', lectures: 6, duration: '2 jam' },
				{ title: 'Project Akhir: App To-Do List', lectures: 4, duration: '2 jam' }
			],
			forWho: ['Android Developer', 'Mahasiswa IT', 'Pemula OOP']
		},
		{
			slug: 'android',
			name: 'Belajar Android Studio untuk Pemula',
			image: android,
			instructor: 'Eko Kurniawan Khannedy',
			rating: 4.7,
			reviews: 760,
			students: 921,
			lastUpdated: 'September 2025',
			language: 'Bahasa Indonesia',
			price: 129000,
			originalPrice: 149000,
			whatYouWillLearn: [
				'Dasar Android Development',
				'Menggunakan Activity & Fragment',
				'Mengelola layout dan resource',
				'Membangun project Android sederhana'
			],
			requirements: ['Kotlin atau Java dasar', 'Android Studio terinstal'],
			description: 'Pelajari dasar pembuatan aplikasi Android dari nol hingga jadi.',
			shortDescription: [
				"Selamat datang di course Belajar Android untuk Pemula. Di kelas ini, kamu akan mempelajari dasar-dasar pengembangan aplikasi Android dari nol hingga mampu membuat aplikasi mobile sederhana menggunakan Android Studio.",
				"Pengenalan Android: memahami apa itu sistem operasi Android, sejarah perkembangannya, serta arsitektur dasar yang digunakan pada perangkat mobile.",
				"Instalasi & Setup Lingkungan: belajar cara menginstal Android Studio, mengonfigurasi emulator, dan memahami struktur proyek Android.",
				"Dasar Bahasa Pemrograman: mempelajari penggunaan Kotlin atau Java dalam pengembangan Android, termasuk variabel, fungsi, dan class.",
				"UI & Layout: memahami cara membuat tampilan aplikasi menggunakan XML, serta mengenal komponen seperti TextView, Button, ImageView, dan RecyclerView.",
				"Activity & Intent: belajar cara berpindah antar halaman, mengirim data antar activity, serta memahami lifecycle dari sebuah activity.",
				"Data & Storage: mempelajari cara menyimpan data menggunakan SharedPreferences, SQLite, dan Room Database.",
				"Project Akhir: Membangun Aplikasi Catatan Sederhana — menerapkan semua konsep yang telah dipelajari dalam satu proyek nyata.",
				"Bonus: Tips membuat aplikasi yang responsif, ringan, dan siap dipublikasikan ke Google Play Store."
				],

			courseContent: [
				{ title: 'Pengenalan Android', lectures: 5, duration: '1 jam' },
				{ title: 'UI & Layout', lectures: 8, duration: '2 jam' },
				{ title: 'Activity & Fragment', lectures: 7, duration: '2 jam' },
				{ title: 'Project Akhir: Notes App', lectures: 4, duration: '2 jam' }
			],
			forWho: ['Android Developer pemula', 'Mahasiswa IT', 'Mobile Developer']
		},
		{
			slug: 'git',
			name: 'Belajar Git & GitHub',
			image: git,
			instructor: 'Eko Kurniawan Khannedy',
			rating: 4.9,
			reviews: 1300,
			students: 684,
			lastUpdated: 'Oktober 2025',
			language: 'Bahasa Indonesia',
			price: 129000,
			originalPrice: 149000,
			whatYouWillLearn: [
				'Dasar version control system',
				'Perintah Git yang penting',
				'Branching dan merging',
				'Kolaborasi dengan GitHub'
			],
			requirements: ['Tidak perlu pengalaman sebelumnya'],
			description: 'Pelajari Git dan GitHub untuk manajemen kode dan kolaborasi tim.',
			shortDescription: [
				"Selamat datang di course Belajar Git untuk Pemula. Di kelas ini, kamu akan mempelajari dasar-dasar version control system menggunakan Git untuk mengelola kode, berkolaborasi dengan tim, dan melacak perubahan proyek dengan efisien.",
				"Pengenalan Git: memahami apa itu sistem kontrol versi, manfaat Git dalam pengembangan perangkat lunak, serta perbedaan antara Git dan platform seperti GitHub atau GitLab.",
				"Instalasi & Konfigurasi Awal: belajar cara menginstal Git di berbagai sistem operasi, melakukan konfigurasi username dan email, serta memahami konsep repository lokal.",
				"Dasar Perintah Git: mempelajari command penting seperti git init, add, commit, log, diff, dan reset untuk mengelola versi kode.",
				"Branching & Merging: memahami cara membuat branch, berpindah antar branch, dan menggabungkan kode menggunakan merge atau rebase dengan aman.",
				"Kolaborasi dengan GitHub: belajar cara membuat repository remote, push dan pull kode, serta berkolaborasi melalui pull request dan code review.",
				"Mengatasi Konflik: memahami cara mendeteksi dan menyelesaikan konflik merge yang sering terjadi dalam proyek tim.",
				"Project Akhir: Membangun Workflow Kolaboratif — menerapkan branching strategy (feature, develop, main) dan pull request dalam proyek nyata.",
				"Bonus: Tips menulis commit message yang baik, strategi branching populer (Git Flow & Trunk-Based Development), serta cara menggunakan Git secara efisien di tim profesional."
				],

			courseContent: [
				{ title: 'Pengenalan Git', lectures: 5, duration: '1 jam' },
				{ title: 'Branch & Merge', lectures: 7, duration: '2 jam' },
				{ title: 'Kolaborasi di GitHub', lectures: 6, duration: '2 jam' },
				{ title: 'Project Akhir: Simulasi Workflow Tim', lectures: 4, duration: '2 jam' }
			],
			forWho: ['Semua developer', 'Mahasiswa IT', 'Software Engineer']
		},
		{
			slug: 'jenkins',
			name: 'Belajar CI/CD dengan Jenkins',
			image: jenkins,
			instructor: 'Eko Kurniawan Khannedy',
			rating: 4.8,
			reviews: 580,
			students: 765,
			lastUpdated: 'September 2025',
			language: 'Bahasa Indonesia',
			price: 129000,
			originalPrice: 149000,
			whatYouWillLearn: [
				'Konsep CI/CD',
				'Instalasi dan konfigurasi Jenkins',
				'Membuat pipeline otomatis',
				'Integrasi dengan Git dan Docker'
			],
			requirements: ['Dasar DevOps atau backend'],
			description: 'Pelajari cara otomatisasi build dan deploy aplikasi dengan Jenkins.',
			shortDescription: [
				"Selamat datang di course Belajar Jenkins untuk Pemula. Di kelas ini, kamu akan mempelajari cara mengotomatisasi proses build, test, dan deployment aplikasi menggunakan Jenkins, salah satu tools CI/CD paling populer di dunia.",
				"Pengenalan Jenkins: memahami apa itu Continuous Integration dan Continuous Deployment (CI/CD), manfaat otomatisasi pipeline, serta peran Jenkins dalam workflow pengembangan modern.",
				"Instalasi & Setup Awal: belajar cara menginstal Jenkins di lokal atau server, mengonfigurasi plugin penting, dan memahami antarmuka dashboard Jenkins.",
				"Membuat Project Pertama: mempelajari cara membuat job pertama, menjalankan build otomatis, dan melihat hasil build serta log output di Jenkins.",
				"Pipeline As Code: memahami konsep Jenkinsfile, menulis pipeline deklaratif dengan tahap build, test, dan deploy, serta memanfaatkan Groovy script untuk otomasi lanjutan.",
				"Integrasi dengan Git & Tools Lain: belajar cara menghubungkan Jenkins dengan GitHub, GitLab, Docker, dan layanan cloud untuk workflow modern.",
				"Notifikasi & Monitoring: mengatur notifikasi build melalui email atau Slack, serta memonitor kesehatan sistem Jenkins.",
				"Project Akhir: Membangun CI/CD Pipeline Lengkap — membuat pipeline otomatis untuk membangun dan mendeploy aplikasi Node.js atau Java ke server produksi.",
				"Bonus: Tips mengoptimalkan performa Jenkins, mengelola agent build, serta praktik terbaik dalam keamanan pipeline CI/CD."
				],

			courseContent: [
				{ title: 'Pengenalan CI/CD', lectures: 5, duration: '1 jam' },
				{ title: 'Konfigurasi Jenkins', lectures: 7, duration: '2 jam' },
				{ title: 'Membuat Pipeline', lectures: 6, duration: '2 jam' },
				{ title: 'Project Akhir: Deploy Otomatis', lectures: 4, duration: '2 jam' }
			],
			forWho: ['DevOps', 'Backend Engineer', 'Software Developer']
		},
		{
			slug: 'http',
			name: 'Belajar HTTP',
			image: http,
			instructor: 'Eko Kurniawan Khannedy',
			rating: 4.9,
			reviews: 870,
			students: 741,
			lastUpdated: 'Oktober 2025',
			language: 'Bahasa Indonesia',
			price: 129000,
			originalPrice: 399000,
			whatYouWillLearn: [
				'Dasar protokol HTTP',
				'Request & Response',
				'Membuat REST API manual',
				'Autentikasi dan status code'
			],
			requirements: ['Dasar pemrograman web'],
			description: 'Pelajari dasar komunikasi HTTP dan cara membangun RESTful API.',
			shortDescription: [
				"Selamat datang di course Belajar HTTP untuk Pemula. Di kelas ini, kamu akan mempelajari dasar-dasar komunikasi antara client dan server melalui protokol HTTP yang menjadi fondasi utama dari web modern.",
				"Pengenalan HTTP: memahami apa itu HyperText Transfer Protocol, bagaimana cara kerja request dan response, serta peran penting HTTP dalam pengembangan web dan API.",
				"Struktur Request & Response: belajar tentang komponen utama seperti URL, method, header, body, dan status code yang digunakan dalam komunikasi web.",
				"HTTP Method: mempelajari perbedaan dan penggunaan method seperti GET, POST, PUT, PATCH, dan DELETE dalam berbagai skenario pengembangan aplikasi.",
				"Status Code: memahami arti dari berbagai kode status HTTP seperti 200 OK, 404 Not Found, dan 500 Internal Server Error, serta kapan menggunakannya.",
				"Header & Cookies: mengenal fungsi header dalam mengirim metadata, serta bagaimana cookies digunakan untuk sesi, autentikasi, dan pelacakan pengguna.",
				"HTTPS & Keamanan: belajar tentang perbedaan antara HTTP dan HTTPS, cara kerja SSL/TLS, serta pentingnya enkripsi dalam menjaga keamanan data.",
				"Project Akhir: Menganalisis dan Membangun Client HTTP — membuat dan menguji berbagai request menggunakan Postman serta menerapkannya dalam aplikasi sederhana.",
				"Bonus: Tips debugging request HTTP dan praktik terbaik dalam merancang komunikasi client-server yang efisien dan aman."
				],

			courseContent: [
				{ title: 'Pengenalan HTTP', lectures: 5, duration: '1 jam' },
				{ title: 'Method dan Status Code', lectures: 7, duration: '2 jam' },
				{ title: 'REST API', lectures: 6, duration: '2 jam' },
				{ title: 'Project Akhir: REST API CRUD', lectures: 4, duration: '2 jam' }
			],
			forWho: ['Backend Developer', 'Mahasiswa IT', 'Fullstack Developer']
		},
		{
			slug: 'openapi',
			name: 'Belajar OpenAPI',
			image: openapi,
			instructor: 'Eko Kurniawan Khannedy',
			rating: 4.8,
			reviews: 620,
			students: 601,
			lastUpdated: 'September 2025',
			language: 'Bahasa Indonesia',
			price: 129000,
			originalPrice: 149000,
			whatYouWillLearn: [
				'Dasar OpenAPI Specification',
				'Membuat dokumentasi API otomatis',
				'Integrasi dengan Node.js dan Laravel',
				'Validasi request menggunakan schema'
			],
			requirements: ['Dasar REST API'],
			description: 'Pelajari cara mendokumentasikan API profesional menggunakan OpenAPI & Swagger.',
			shortDescription: [
				"Selamat datang di course Belajar OpenAPI untuk Pemula. Di kelas ini, kamu akan mempelajari cara mendesain, mendokumentasikan, dan mengimplementasikan RESTful API secara profesional menggunakan standar OpenAPI (Swagger).",
				"Pengenalan OpenAPI: memahami apa itu OpenAPI Specification, manfaatnya dalam pengembangan API modern, serta bagaimana ia membantu komunikasi antara tim backend dan frontend.",
				"Dasar Dokumentasi API: belajar menulis definisi endpoint, parameter, dan response menggunakan format YAML atau JSON dengan struktur yang benar.",
				"Swagger Editor & Swagger UI: memahami cara menggunakan Swagger Editor untuk membuat dokumentasi interaktif dan Swagger UI untuk menguji API secara langsung di browser.",
				"Menulis Spesifikasi Lengkap: membuat definisi API lengkap dengan path, request body, schema, dan status response menggunakan komponen reusable.",
				"Autogenerate Code & Validasi: mempelajari cara menghasilkan kode otomatis (server & client) dari file OpenAPI dan melakukan validasi terhadap implementasi API yang sudah dibuat.",
				"Integrasi dengan Framework: belajar menggunakan OpenAPI bersama framework populer seperti Express.js, Fastify, atau Spring Boot untuk dokumentasi otomatis.",
				"Project Akhir: Mendesain dan Mendokumentasikan Sistem Manajemen Kursus — membangun spesifikasi API lengkap beserta dokumentasi Swagger yang interaktif.",
				"Bonus: Tips membuat dokumentasi API yang rapi, mudah dibaca, dan selalu sinkron dengan implementasi backend sebenarnya."
				],

			courseContent: [
				{ title: 'Pengenalan OpenAPI', lectures: 5, duration: '1 jam' },
				{ title: 'Menulis Spec YAML/JSON', lectures: 7, duration: '2 jam' },
				{ title: 'Integrasi Swagger UI', lectures: 6, duration: '2 jam' },
				{ title: 'Project Akhir: Dokumentasi API Lengkap', lectures: 4, duration: '2 jam' }
			],
			forWho: ['Backend Developer', 'QA Engineer', 'API Designer']
		},
		{
			slug: 'dart',
			name: 'Belajar Dart untuk Flutter Developer',
			image: dart,
			instructor: 'Eko Kurniawan Khannedy',
			rating: 4.7,
			reviews: 710,
			students: 668,
			lastUpdated: 'Agustus 2025',
			language: 'Bahasa Indonesia',
			price: 129000,
			originalPrice: 129000,
			whatYouWillLearn: [
				'Dasar bahasa Dart',
				'Fungsi dan class',
				'Null safety dan collection',
				'Membuat aplikasi sederhana dengan Flutter'
			],
			requirements: ['Dasar pemrograman'],
			description: 'Pelajari bahasa Dart yang digunakan untuk pengembangan Flutter.',
			shortDescription: [
				"Selamat datang di course Belajar Dart untuk Pemula. Di kelas ini, kamu akan mempelajari bahasa pemrograman Dart dari dasar hingga siap digunakan untuk pengembangan aplikasi modern, terutama dengan Flutter.",
				"Pengenalan Dart: memahami apa itu Dart, mengapa digunakan dalam pengembangan Flutter, serta keunggulannya dibanding bahasa pemrograman lain seperti JavaScript atau Kotlin.",
				"Instalasi & Setup: belajar cara menginstal Dart SDK, menggunakan DartPad untuk latihan cepat, dan menyiapkan environment pengembangan di komputer kamu.",
				"Dasar Bahasa Dart: mempelajari variabel, tipe data, operator, kontrol alur (if, for, while), dan cara menulis fungsi yang efisien.",
				"Pemrograman Berorientasi Objek: memahami konsep class, object, inheritance, polymorphism, dan interface dalam konteks Dart.",
				"Fitur Lanjutan: belajar tentang null safety, async/await, future, stream, dan error handling untuk membangun aplikasi yang stabil dan efisien.",
				"Integrasi dengan Flutter: memahami bagaimana Dart digunakan dalam membangun UI dan logika aplikasi Flutter secara menyeluruh.",
				"Project Akhir: Membangun Aplikasi To-Do List dengan Dart — mengimplementasikan semua konsep yang telah dipelajari dalam satu proyek nyata.",
				"Bonus: Tips menulis kode Dart yang bersih, efisien, serta praktik terbaik untuk pengembangan aplikasi modern dengan Flutter."
				],

			courseContent: [
				{ title: 'Pengenalan Dart', lectures: 5, duration: '1 jam' },
				{ title: 'Class & Function', lectures: 7, duration: '2 jam' },
				{ title: 'Null Safety & Collection', lectures: 6, duration: '2 jam' },
				{ title: 'Project Akhir: App Flutter Dasar', lectures: 4, duration: '2 jam' }
			],
			forWho: ['Flutter Developer', 'Mobile Developer', 'Mahasiswa IT']
		},
		{
			slug: 'bootstrap',
			name: 'Belajar Bootstrap 5',
			image: bootstrap,
			instructor: 'Eko Kurniawan Khannedy',
			rating: 4.8,
			reviews: 960,
			students: 764,
			lastUpdated: 'Oktober 2025',
			language: 'Bahasa Indonesia',
			price: 129000,
			originalPrice: 399000,
			whatYouWillLearn: [
				'Dasar CSS framework Bootstrap',
				'Grid system dan komponen UI',
				'Responsif design modern',
				'Membangun halaman website profesional'
			],
			requirements: ['Dasar HTML dan CSS'],
			description: 'Pelajari Bootstrap 5 untuk membangun website responsif dengan cepat.',
			shortDescription: [
				"Selamat datang di course Belajar Bootstrap untuk Pemula. Di kelas ini, kamu akan mempelajari cara membuat website modern dengan cepat menggunakan framework CSS populer, Bootstrap.",
				"Pengenalan Bootstrap: memahami apa itu Bootstrap, keunggulannya dibanding menulis CSS manual, serta cara kerja sistem grid yang menjadi dasar layout responsif.",
				"Instalasi & Struktur Dasar: belajar cara menyiapkan proyek dengan Bootstrap, baik menggunakan CDN maupun instalasi lokal, serta memahami struktur file dan komponen dasarnya.",
				"Komponen UI: mengenal berbagai komponen siap pakai seperti navbar, card, carousel, alert, modal, dan tombol interaktif untuk mempercepat proses desain website.",
				"Sistem Grid & Layout: memahami konsep 12 kolom pada Bootstrap untuk membuat tampilan responsif di berbagai ukuran layar dengan mudah.",
				"Kustomisasi & Utility Class: belajar menggunakan utility class untuk pengaturan cepat seperti margin, padding, warna, dan tipografi tanpa menulis CSS tambahan.",
				"Project Akhir: Membangun Landing Page Modern dengan Bootstrap — menggabungkan semua komponen dan teknik untuk membuat tampilan profesional dan menarik.",
				"Bonus: Tips dan trik dalam mengoptimalkan performa, serta cara mengintegrasikan Bootstrap dengan framework frontend seperti React atau Svelte."
				],

			courseContent: [
				{ title: 'Dasar Bootstrap', lectures: 5, duration: '1 jam' },
				{ title: 'Grid & Layout', lectures: 7, duration: '2 jam' },
				{ title: 'Komponen UI', lectures: 6, duration: '2 jam' },
				{ title: 'Project Akhir: Landing Page', lectures: 4, duration: '2 jam' }
			],
			forWho: ['Frontend Developer', 'UI Designer', 'Mahasiswa IT']
		},
		{
			slug: 'typescript',
			name: 'Belajar TypeScript Modern',
			image: typescript,
			instructor: 'Eko Kurniawan Khannedy',
			rating: 4.9,
			reviews: 850,
			students: 789,
			lastUpdated: 'November 2025',
			language: 'Bahasa Indonesia',
			price: 129000,
			originalPrice: 149000,
			whatYouWillLearn: [
				'Dasar TypeScript dan tipe data',
				'Interface & Generic',
				'Type narrowing dan utility types',
				'Integrasi TypeScript di Node.js & React'
			],
			requirements: ['Dasar JavaScript'],
			description: 'Pelajari TypeScript untuk meningkatkan kualitas dan keamanan kode JavaScript-mu.',
			shortDescription: [
				"Selamat datang di course Belajar TypeScript untuk Pemula. Di kelas ini, kamu akan mempelajari cara menulis kode JavaScript yang lebih aman, terstruktur, dan mudah dikelola menggunakan TypeScript.",
				"Pengenalan TypeScript: memahami mengapa TypeScript dibuat, perbedaan utama antara JavaScript dan TypeScript, serta bagaimana TypeScript membantu mengurangi bug dalam proyek besar.",
				"Dasar TypeScript: belajar tentang tipe data, interface, class, enum, union, dan generic yang membuat kode lebih konsisten dan dapat diprediksi.",
				"Fitur Lanjutan: memahami konsep seperti type inference, utility types, dan modul agar bisa menulis kode yang lebih efisien dan scalable.",
				"Integrasi TypeScript: mempelajari cara menggunakan TypeScript dalam proyek Node.js, React, dan Svelte, serta cara mengonfigurasi compiler (tsconfig.json).",
				"Error Handling & Debugging: belajar teknik menemukan dan memperbaiki error dengan efektif menggunakan fitur bawaan TypeScript dan editor seperti VS Code.",
				"Project Akhir: Membangun Aplikasi Todo List dengan TypeScript — menerapkan semua konsep yang telah dipelajari untuk membuat aplikasi yang modular dan maintainable.",
				"Bonus: Tips menulis kode TypeScript profesional dan praktik terbaik dalam kolaborasi proyek tim modern."
				],

			courseContent: [
				{ title: 'Pengenalan TypeScript', lectures: 5, duration: '1 jam' },
				{ title: 'Type & Interface', lectures: 7, duration: '2 jam' },
				{ title: 'Generic & Utility Types', lectures: 6, duration: '2 jam' },
				{ title: 'Project Akhir: API Typed', lectures: 4, duration: '2 jam' }
			],
			forWho: ['Frontend Developer', 'Backend Developer', 'Fullstack Developer']
		},
		{
			slug: 'k6-performance-testing',
			name: 'Belajar Load Testing dengan K6',
			image: k6,
			instructor: 'Eko Kurniawan Khannedy',
			rating: 4.8,
			reviews: 540,
			students: 719,
			lastUpdated: 'September 2025',
			language: 'Bahasa Indonesia',
			price: 129000,
			originalPrice: 149000,
			whatYouWillLearn: [
				'Dasar load testing',
				'Membuat skrip K6 dengan JavaScript',
				'Menganalisis hasil testing',
				'Integrasi K6 dengan CI/CD pipeline'
			],
			requirements: ['Dasar REST API'],
			description: 'Pelajari cara melakukan load testing untuk API menggunakan K6.',
			shortDescription: [
				"Selamat datang di course Belajar Load Testing dengan k6 untuk Pemula. Di kelas ini, kamu akan mempelajari cara menguji performa aplikasi menggunakan k6, mulai dari dasar hingga penerapan dalam proyek nyata.",
				"Pengenalan Load Testing: memahami konsep dasar load testing, stress testing, dan mengapa pengujian performa penting untuk aplikasi modern.",
				"Instalasi dan Dasar k6: belajar cara menginstal k6 di berbagai platform, memahami struktur skrip, dan menjalankan pengujian sederhana.",
				"Membuat Skrip k6 dengan JavaScript: menulis skrip k6 menggunakan JavaScript untuk menguji endpoint RESTful API, serta memahami konsep VU (Virtual Users) dan duration.",
				"Analisis Hasil Testing: membahas cara membaca hasil pengujian k6, metrik penting seperti response time, throughput, dan error rate.",
				"Integrasi k6 dengan CI/CD: belajar bagaimana mengintegrasikan k6 ke dalam pipeline CI/CD menggunakan GitHub Actions atau Jenkins untuk pengujian otomatis.",
				"Project Akhir: Membangun dan Menguji API — membuat proyek kecil dengan backend sederhana, lalu mengujinya menggunakan k6 untuk memastikan performa optimal.",
				"Materi akan terus diperbarui agar kamu selalu mengikuti perkembangan terbaru dalam dunia performance testing dan DevOps modern."
				],

			courseContent: [
				{ title: 'Pengenalan K6', lectures: 5, duration: '1 jam' },
				{ title: 'Menulis Script K6', lectures: 7, duration: '2 jam' },
				{ title: 'Analisis Hasil Testing', lectures: 6, duration: '2 jam' },
				{ title: 'Project Akhir: Stress Test API', lectures: 4, duration: '2 jam' }
			],
			forWho: ['QA Engineer', 'Backend Developer', 'DevOps']
		},
        {
			slug: 'html,-css-dan-javascript',
			name: 'Belajar HTML, CSS, dan JavaScript Dasar',
			image: html,
			instructor: 'Eko Kurniawan Khannedy',
			rating: 4.8,
			reviews: 540,
			students: 988,
			lastUpdated: 'September 2025',
			language: 'Bahasa Indonesia',
			price: 129000,
			originalPrice: 149000,
			whatYouWillLearn: [
				'Dasar load Pengenalan dasar HTML dan struktur dokumen web',
				'Membuat skrip K6 dengan Menggunakan tag, elemen, dan atribut HTML dengan benar',
				'Membuat layout sederhana dengan elemen semantik',
				'Menambahkan gambar, tautan, dan tabel ke halaman web'
			],
			requirements: ['Dasar HTML'],
            description: 'Pelajari cara membuat struktur halaman web menggunakan HTML.',
			shortDescription: [
				"Selamat datang di course Belajar HTML, CSS, dan JavaScript untuk Pemula. Di kelas ini, kamu akan mempelajari dasar-dasar pembuatan website dari nol hingga menjadi tampilan interaktif yang menarik dan responsif.",
				"Pengenalan Web Development: memahami bagaimana website bekerja, hubungan antara frontend dan backend, serta peran HTML, CSS, dan JavaScript dalam membangun halaman web.",
				"HTML Dasar: belajar membuat struktur halaman menggunakan elemen-elemen penting seperti heading, paragraf, gambar, link, tabel, dan form.",
				"CSS Dasar: memahami cara mempercantik tampilan dengan warna, font, layout, dan penggunaan Flexbox serta Grid untuk membuat desain yang responsif.",
				"JavaScript Dasar: mempelajari konsep variabel, fungsi, event, dan manipulasi DOM untuk membuat website menjadi interaktif dan dinamis.",
				"Project Akhir: Membangun Website Portfolio Pribadi — menerapkan semua konsep HTML, CSS, dan JavaScript untuk membuat website profesional yang bisa digunakan sebagai showcase kemampuanmu.",
				"Bonus: Tips dan praktik terbaik dalam menulis kode bersih, efisien, dan mudah dikelola.",
				"Materi akan terus diperbarui agar kamu selalu mengikuti tren terbaru dalam pengembangan web modern."
				],

            courseContent: [
                { title: 'Pengenalan HTML', lectures: 5, duration: '1 jam' },
                { title: 'Tag dan Elemen HTML', lectures: 7, duration: '2 jam' },
                { title: 'Membuat Form dan Tabel', lectures: 6, duration: '2 jam' },
                { title: 'Project Akhir: Membuat Halaman Web Sederhana', lectures: 4, duration: '2 jam' }
            ],
            forWho: ['Web Developer Pemula', 'Desainer Web', 'Siapa saja yang ingin belajar web']
		},
        {
			slug: 'spring-boot',
			name: 'Belajar Framework SpringBoot untuk Pemula',
			image: spring,
			instructor: 'Eko Kurniawan Khannedy',
			rating: 4.8,
			reviews: 540,
			students: 734,
			lastUpdated: 'September 2025',
			language: 'Bahasa Indonesia',
			price: 129000,
			originalPrice: 149000,
			whatYouWillLearn: [
                'Pengenalan dasar Spring Boot dan arsitektur aplikasi Java',
                'Membuat REST API dengan Spring Boot menggunakan controller dan service',
                'Membuat aplikasi CRUD sederhana dengan database menggunakan Spring Data JPA',
                'Menambahkan keamanan dan konfigurasi dasar pada aplikasi Spring Boot'
            ],
			requirements: ['Dasar Java'],
            description: 'Pelajari cara membuat aplikasi backend menggunakan Spring Boot.',
			shortDescription: [
				"Selamat datang di course Belajar Spring Boot untuk Pemula. Di kelas ini, kamu akan mempelajari cara membangun aplikasi backend modern menggunakan Spring Boot, mulai dari dasar hingga penerapan di proyek nyata.",
				"Pengenalan Spring Framework: memahami konsep dasar Spring, arsitektur, dan mengapa Spring Boot menjadi pilihan utama untuk pengembangan aplikasi Java modern.",
				"Instalasi dan Konfigurasi: belajar cara menginstal Java, Maven, dan membuat project pertama menggunakan Spring Initializr, serta memahami struktur folder pada aplikasi Spring Boot.",
				"Membuat RESTful API: membahas cara membuat endpoint RESTful menggunakan Spring Web, melakukan mapping request dengan controller, dan mengembalikan response JSON.",
				"Database dan JPA: belajar cara menghubungkan Spring Boot dengan database menggunakan Spring Data JPA, membuat entity, repository, dan melakukan operasi CRUD.",
				"Autentikasi dan Keamanan: memahami dasar Spring Security, cara membuat login berbasis JWT, serta mengamankan endpoint API.",
				"Project Akhir: Membangun Aplikasi Manajemen Kursus — mengimplementasikan semua konsep dengan membangun sistem backend lengkap menggunakan Spring Boot.",
				"Materi akan terus diperbarui mengikuti perkembangan Spring Boot versi terbaru agar kamu selalu up to date dengan teknologi Java backend modern."
				],

            courseContent: [
                { title: 'Pengenalan Spring Boot', lectures: 5, duration: '1 jam' },
                { title: 'Membuat REST API dengan Spring Boot', lectures: 7, duration: '2 jam' },
                { title: 'CRUD dengan Database menggunakan Spring Data JPA', lectures: 6, duration: '2 jam' },
                { title: 'Project Akhir: Aplikasi Web Sederhana dengan Spring Boot', lectures: 4, duration: '2 jam' }
            ],
            forWho: ['Backend Developer Pemula', 'Java Developer', 'Siapa saja yang ingin belajar backend web']
		},
        {
            slug: 'mongodb',
            name: 'Belajar Database MongoDB untuk Pemula',
            image: mongo,
            instructor: 'Eko Kurniawan Khannedy',
            rating: 4.7,
            reviews: 320,
            students: 847,
            lastUpdated: 'Oktober 2025',
            language: 'Bahasa Indonesia',
            price: 129000,
            originalPrice: 399000,
            whatYouWillLearn: [
                'Pengenalan MongoDB dan konsep NoSQL',
                'Membuat dan mengelola database serta collection',
                'CRUD operation di MongoDB menggunakan Mongo Shell dan Compass',
                'Mengintegrasikan MongoDB dengan aplikasi backend'
            ],
            requirements: ['Dasar Database', 'Dasar JavaScript atau Java'],
            description: 'Pelajari cara menggunakan MongoDB untuk membangun aplikasi backend yang scalable.',
			shortDescription: [
				"Selamat datang di course Belajar MongoDB untuk Pemula. Di kelas ini, kamu akan mempelajari dasar-dasar MongoDB hingga penerapan di proyek nyata, termasuk cara mengelola data secara efisien menggunakan NoSQL database.",
				"Pengenalan MongoDB: memahami konsep dasar NoSQL, perbedaan antara database relasional dan non-relasional, serta keunggulan MongoDB dalam skala besar.",
				"Instalasi dan Dasar Query: belajar cara menginstal MongoDB, menggunakan MongoDB Compass, serta menulis query dasar seperti insert, find, update, dan delete.",
				"Struktur Data dan Relasi: membahas cara menyimpan data dalam bentuk dokumen (BSON), membuat relasi antar koleksi menggunakan referensi atau embedding, serta praktik desain skema yang efisien.",
				"Aggregation dan Indexing: memahami pipeline agregasi untuk analisis data kompleks, serta cara meningkatkan performa query menggunakan indeks.",
				"Integrasi dengan Node.js: menerapkan MongoDB dalam aplikasi backend menggunakan Mongoose ORM atau driver resmi MongoDB.",
				"Project Akhir: Membangun Aplikasi Manajemen Data — mengimplementasikan CRUD, relasi, dan agregasi dalam satu proyek nyata berbasis MongoDB.",
				"Materi akan terus diperbarui seiring perkembangan fitur MongoDB agar kamu selalu mengikuti teknologi database modern."
				],

            courseContent: [
                { title: 'Pengenalan MongoDB', lectures: 5, duration: '1 jam' },
                { title: 'CRUD Operation di MongoDB', lectures: 7, duration: '2 jam' },
                { title: 'Index, Aggregation, dan Query Lanjutan', lectures: 6, duration: '2 jam' },
                { title: 'Project Akhir: Aplikasi CRUD dengan MongoDB', lectures: 4, duration: '2 jam' }
            ],
            forWho: ['Backend Developer Pemula', 'Fullstack Developer', 'Siapa saja yang ingin belajar database NoSQL']
        },
        {
            slug: 'restfullapi',
            name: 'Belajar RESTful API untuk Pemula',
            image: restfull, 
            instructor: 'Eko Kurniawan Khannedy',
            rating: 4.8,
            reviews: 410,
            students: 972,
            lastUpdated: 'Oktober 2025',
            language: 'Bahasa Indonesia',
            price: 129000,
            originalPrice: 449000,
            whatYouWillLearn: [
                'Pengenalan konsep RESTful API',
                'Membuat endpoint GET, POST, PUT, DELETE',
                'Menghubungkan API dengan database',
                'Mengamankan API dan menambahkan validasi request'
            ],
            requirements: ['Dasar HTTP', 'Dasar Backend Development'],
            description: 'Pelajari cara membuat dan mengelola RESTful API untuk aplikasi web dan mobile.',
			shortDescription: [
				"Selamat datang di course Belajar RESTful API untuk Pemula. Di kelas ini, kamu akan mempelajari cara membangun RESTful API dari dasar hingga siap digunakan di proyek nyata dengan pendekatan modern dan praktik terbaik.",
				"Pengenalan RESTful API: memahami konsep dasar REST, arsitektur client-server, dan perbedaan antara REST, SOAP, dan GraphQL.",
				"HTTP Method dan Status Code: membahas penggunaan method seperti GET, POST, PUT, dan DELETE, serta makna dari berbagai status code HTTP yang digunakan dalam API.",
				"Membuat Endpoint CRUD: belajar membuat endpoint Create, Read, Update, dan Delete menggunakan framework backend modern seperti Express atau Bun.",
				"Autentikasi dan Middleware: memahami bagaimana cara mengamankan API menggunakan token (JWT), serta cara membuat middleware untuk validasi dan logging.",
				"Project Akhir: Membangun RESTful API untuk Aplikasi Kursus Online — menerapkan semua konsep dengan membangun API lengkap untuk sistem manajemen user, course, dan enrollment.",
				"Materi akan terus diperbarui mengikuti tren industri backend terbaru agar kamu selalu up to date dengan teknologi API modern."
				],

            courseContent: [
                { title: 'Pengenalan RESTful API', lectures: 5, duration: '1 jam' },
                { title: 'Membuat Endpoint CRUD', lectures: 7, duration: '2 jam' },
                { title: 'Integrasi API dengan Database', lectures: 6, duration: '2 jam' },
                { title: 'Project Akhir: API untuk Aplikasi Sederhana', lectures: 4, duration: '2 jam' }
            ],
            forWho: ['Backend Developer Pemula', 'Fullstack Developer', 'Siapa saja yang ingin belajar API']
        },
		{
			slug: 'rabbitmq',
			name: 'Belajar RabbitMQ untuk Pemula',
			image: rabbit,
			instructor: 'Eko Kurniawan Khannedy',
			rating: 4.7,
			reviews: 280,
			students: 879,
			lastUpdated: 'Oktober 2025',
			language: 'Bahasa Indonesia',
			price: 129000,
			originalPrice: 429000,
			whatYouWillLearn: [
				'Pengenalan message broker dan RabbitMQ',
				'Membuat queue dan exchange',
				'Mengirim dan menerima pesan menggunakan producer dan consumer',
				'Mengintegrasikan RabbitMQ dengan aplikasi backend'
			],
			requirements: ['Dasar Backend Development', 'Dasar Java atau Node.js'],
			description: 'Pelajari cara menggunakan RabbitMQ untuk komunikasi asinkron antar aplikasi.',
			shortDescription: [
				"Selamat datang di course Belajar RabbitMQ untuk Pemula. Di sini kita akan belajar RabbitMQ dari dasar hingga penerapan praktis, disertai dengan contoh studi kasus.",
				"Pengenalan Message Broker: membahas konsep dasar message broker, fungsi queue dan exchange, serta keuntungan menggunakan RabbitMQ.",
				"Queue, Exchange, dan Binding: membahas cara membuat queue dan exchange, cara binding antar queue dan exchange, serta konsep routing pesan.",
				"Producer dan Consumer: membahas cara mengirim dan menerima pesan menggunakan producer dan consumer, serta praktik integrasi dalam aplikasi backend.",
				"Project Akhir: Sistem Messaging Sederhana: membuat proyek akhir berupa sistem messaging sederhana untuk menerapkan seluruh materi yang telah dipelajari.",
				"Materi akan selalu diperbarui secara berkala, dan ketika materi diupdate, pastikan untuk segera mengikuti course ini agar Anda bisa langsung mempraktikkan fitur-fitur terbaru RabbitMQ."
				],
				courseContent: [
					{ title: 'Pengenalan RabbitMQ', lectures: 5, duration: '1 jam' },
					{ title: 'Queue, Exchange, dan Binding', lectures: 7, duration: '2 jam' },
					{ title: 'Producer dan Consumer', lectures: 6, duration: '2 jam' },
					{ title: 'Project Akhir: Sistem Messaging Sederhana', lectures: 4, duration: '2 jam' }
				],
			forWho: ['Backend Developer', 'DevOps', 'Siapa saja yang ingin belajar message broker']
		}


	];

	


 // SLUG DARI URL DAN KURSUS AKTIF 
  let course: typeof courses[number] | undefined;

  $: {
    const slug = get(page).params.slug;
    course = courses.find((c) => c.slug === slug);
  }

  onMount(() => {
    window.scrollTo({ top: 0 });
  });

  //  Tambahkan ini
  let showMore = false; // digunakan untuk tombol "Lihat Lebih Banyak" di bagian rekomendasi kelas

  //  State terpisah untuk bagian lain (jika kamu sudah pakai sebelumnya)
  let showAllSectionsMap: Record<string, boolean> = {}; // untuk Kurikulum
  let showDescriptionMap: Record<string, boolean> = {}; // untuk Deskripsi Kelas

  function toggleAll() {
    const slug = course?.slug ?? "";
    const newState = !showAllSectionsMap[slug];
    showAllSectionsMap[slug] = newState;

    const detailsElements = document.querySelectorAll("details");
    detailsElements.forEach((el) => {
      if (newState) el.setAttribute("open", "");
      else el.removeAttribute("open");
    });
  }

  function toggleDescription() {
    const key = course?.slug ?? "";
    if (!key) return;
    showDescriptionMap = {
      ...showDescriptionMap,
      [key]: !showDescriptionMap[key],
    };
  }

  let timeLeft = 0;
	let days = 0, hours = 0, minutes = 0, seconds = 0;

	const endDate = new Date("2025-11-01T23:59:59").getTime();

	onMount(() => {
		const timer = setInterval(() => {
			const now = new Date().getTime();
			timeLeft = endDate - now;

			if (timeLeft <= 0) {
				clearInterval(timer);
				timeLeft = 0;
				days = hours = minutes = seconds = 0;
			} else {
				days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
				hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
				minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
				seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
			}
		}, 1000);
	});

	const MAX_COMMENTS = 3;

	let showAllComments = false;
	

</script>


<svelte:head>
  <title>{course ? `${course.name} - Programmer Zaman Now` : 'Kelas - Programmer Zaman Now'}</title>
  <meta
    name="description"
	content={course
	  ? `Pelajari ${course.name} di Programmer Zaman Now. ${course.description?.slice(0, 150)}...`
	  : 'Panduan lengkap kelas di Programmer Zaman Now.'}
  />

</svelte:head>

{#if !course}
<section
  class="relative flex flex-col items-center justify-center min-h-screen text-center space-y-6 bg-gray-950 text-white px-6 animate-fadeIn"
>
  <!-- Logo -->
  <div class="relative flex justify-center">
    <img
      src="https://img-c.udemycdn.com/user/200_H/15481646_a97d_6.jpg"
      alt="Logo Programmer Zaman Now"
      class="w-28 h-28 object-contain rounded-full transition-transform duration-500 hover:scale-105 shadow-lg"
    />
  </div>

  <!-- Teks -->
  <div>
    <h2 class="text-3xl sm:text-4xl font-bold text-white mb-3 tracking-tight">
      Oops! Kelas Tidak Ditemukan
    </h2>
    <p class="text-gray-400 max-w-md mx-auto leading-relaxed">
      Sepertinya kelas yang kamu cari belum tersedia, sudah dihapus, atau sedang dalam perbaikan.
      Coba temukan kursus menarik lainnya yang sedang trending di Programmer Zaman Now!
    </p>
  </div>

  <!-- Tombol -->
  <div class="flex flex-col sm:flex-row gap-3 mt-2">
    <a
      href="{base}/kelas"
      class="px-6 py-3 border border-gray-600 hover:border-blue-400 text-gray-300 hover:text-blue-400 rounded-lg font-medium transition duration-300"
    >
    Jelajahi Kelas Lain
    </a>
  </div>
</section>

{:else}

<!-- DETAIL KELAS PAGE -->
<section class="bg-black text-white px-4 sm:px-6 py-10 font-extralight">
  <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
    
<!-- SIDEBAR -->
<aside
  class="order-1 lg:order-2 sticky lg:top-24 h-fit bg-white text-gray-900 rounded-2xl shadow-2xl p-5 sm:p-6 space-y-6 w-full font-light transition-all duration-300"
>
  <!-- Gambar Kursus -->
  <div class="w-full aspect-[16/9] overflow-hidden rounded-xl shadow-md">
    <img
      src={course?.image}
      alt={course?.name ?? ''}
      class="w-full h-full object-cover"
    />
  </div>

<!-- Harga -->
<div class="space-y-2">
  <!-- Harga & Harga Asli -->
  <div class="flex flex-wrap items-baseline gap-2">
    <h3 class="text-2xl sm:text-2xl font-semibold text-gray-900">
      Rp {course?.price?.toLocaleString('id-ID')}
    </h3>

    {#if course?.originalPrice}
      <p class="text-sm sm:text-sm text-gray-500 line-through">
        Rp {course?.originalPrice?.toLocaleString('id-ID')}
      </p>
    {/if}
  </div>

  <!-- Keterangan Promo -->
{#if timeLeft > 0}
  <p class="text-sm text-red-400 flex items-center gap-1">
    <!-- SVG Jam -->
    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2" fill="none"/>
      <path stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M12 7v5l3 3"/>
    </svg>
    Promo berakhir dalam
    <span class="text-red-400">
      {days} hari
    </span>
  </p>
{/if}
</div>


  <!-- Tombol Aksi -->
  <div class="flex flex-col sm:flex-row lg:flex-col gap-3">
    <button
      class="bg-gray-900 hover:bg-transparent hover:text-blue-400 border border-gray-200 hover:border-blue-400 text-white font-semibold py-3 rounded-lg transition w-full"
    >
      Tambahkan ke keranjang
    </button>
	<a
		href="{base}/cara-pembayaran"
		class="block border border-gray-900 text-gray-900 font-semibold py-3 rounded-lg hover:border-blue-400 hover:text-blue-400 transition w-full text-center"
	>
		Daftar sekarang
	</a>
  </div>

  <!-- Input Kode Promo -->
  <div class="space-y-2">
    <label for="promo" class="text-sm font-medium text-gray-700">
      Punya kode promo?
    </label>
    <div class="flex flex-col sm:flex-row gap-2">
      <input
        id="promo"
        type="text"
        placeholder="Masukkan kode"
        class="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        class="bg-gray-900 hover:bg-transparent hover:text-blue-400 border border-gray-200 hover:border-blue-400 text-white font-semibold px-4 py-2 rounded-lg text-sm transition w-full sm:w-auto"
      >
        Terapkan
      </button>
    </div>
  </div>

  <hr class="border-gray-200" />
  <p class="text-xs text-gray-500 text-center">
    Jaminan uang kembali 30 hari
  </p>

  <!-- Fitur Kursus -->
  <ul class="text-sm text-gray-700 space-y-3 mb-6">
    <li class="flex items-center gap-3">
      <img
        src="https://images.icon-icons.com/934/PNG/512/movie-symbol-of-video-camera_icon-icons.com_72981.png"
        class="w-5 h-5"
        alt="Video"
      />
      43 jam video
    </li>
    <li class="flex items-center gap-3">
      <img
        src="https://images.icon-icons.com/2724/PNG/512/newspaper_news_daily_business_media_article_icon_175626.png"
        class="w-5 h-5"
        alt="Artikel"
      />
      10 artikel
    </li>
    <li class="flex items-center gap-3">
      <img
        src="https://images.icon-icons.com/1946/PNG/96/1904669-call-chat-device-message-mobile-phone-smartphone_122519.png"
        class="w-5 h-5"
        alt="Akses HP"
      />
      Akses di HP & TV
    </li>
    <li class="flex items-center gap-3">
      <img
        src="https://images.icon-icons.com/3832/PNG/96/infinite_icon_234518.png"
        class="w-5 h-5"
        alt="Seumur hidup"
      />
      Akses seumur hidup
    </li>
    <li class="flex items-center gap-3">
      <img
        src="https://images.icon-icons.com/1919/PNG/96/licensedocument_121962.png"
        class="w-5 h-5"
        alt="Sertifikat"
      />
      Sertifikat penyelesaian
    </li>
  </ul>

  <hr class="border-gray-200" />

  <!-- Tombol Tambahan -->
  <div class="flex flex-col gap-3 text-sm">
    <button
      class="border border-gray-900 hover:border-blue-400 hover:text-blue-400 rounded-lg py-2.5 flex items-center justify-center gap-2 text-gray-700 font-medium hover:shadow-md hover:bg-gray-50 transition"
    >
      Bagikan
    </button>
    <button
      class="border border-gray-900 hover:border-blue-400 hover:text-blue-400 rounded-lg py-2.5 flex items-center justify-center gap-2 text-gray-700 font-medium hover:shadow-md hover:bg-gray-50 transition"
    >
      Hadiahkan
    </button>
  </div>
</aside>


    <!-- KONTEN UTAMA -->
    <div class="order-2 lg:order-1 lg:col-span-2 space-y-10">
      
<!-- 🧭 Hero & Info Kursus -->
<div class="space-y-5">
  <!-- Judul & Deskripsi -->
  <h1 class="text-2xl sm:text-3xl font-bold leading-tight text-white">
    {course?.name ?? ''}
  </h1>
  <p class="text-gray-300 text-sm sm:text-base">
    {course?.description ?? ''}
  </p>

  <!-- Info Utama -->
  <div class="flex flex-wrap items-center gap-2 sm:gap-3 text-sm text-gray-400">
    <span>⭐ {course?.rating ?? '4.8'}</span>
    <span>·</span>
    <span>{course?.students?.toLocaleString('id-ID') ?? '12,345'} peserta</span>
    <span>·</span>
    <span>
      Dibuat oleh
      <span class="text-blue-400 font-normal">
        {course?.instructor ?? 'Nama Instructor'}
      </span>
    </span>
  </div>

  <!-- Info Tambahan -->
  <div class="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
    <span>Bahasa : <span class="text-gray-300 dark:text-gray-200">{course?.language ?? 'Indonesia'}</span></span>
    <span>·</span>
    <span>Terakhir diperbarui : <span class="text-gray-300 dark:text-gray-200">{course?.lastUpdated ?? 'Oktober 2025'}</span></span>
  </div>
</div>


      <!-- Yang Akan Anda Pelajari -->
      <div class="bg-gray-950 rounded-2xl p-5 sm:p-6 border border-gray-700">
        <h2 class="text-lg sm:text-xl font-semibold mb-3">Yang akan Anda pelajari</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-300 text-sm">
          {#each course?.whatYouWillLearn ?? [] as item}
            <div class="flex items-start gap-2">
              <span class="text-green-400">✔</span>
              <span>{item}</span>
            </div>
          {/each}
        </div>
      </div>

<!-- Kurikulum -->
<div class="bg-gray-950 rounded-2xl p-5 border border-gray-700 space-y-4">
  <div class="flex justify-between items-center mb-3">
    <h2 class="text-lg sm:text-xl font-semibold">Kurikulum Kursus</h2>
    <button
      on:click={toggleAll}
      class="px-4 py-2 text-xs sm:text-sm font-medium text-gray-200 border border-gray-400 hover:border-blue-400 rounded-lg hover:text-blue-400 transition-all"
    >
      {showAllSectionsMap[course?.slug ?? ''] ? 'Tutup Semua' : 'Lihat Semua'}
    </button>
  </div>

  <div class="divide-y divide-gray-700">
    {#each course?.courseContent ?? [] as section, i}
      <details class="py-3 group rounded-lg hover:bg-gray-900/40 transition">
        <summary class="flex flex-col sm:flex-row justify-between items-start sm:items-center cursor-pointer text-white px-2">
          <span class="flex items-center gap-2 w-full sm:w-auto">
            <span class="text-base sm:text-lg">{section.title}</span>
            <svg
              class="w-4 h-4 transition-transform duration-300 group-open:rotate-180 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </span>
          <span class="text-gray-400 text-xs sm:text-sm mt-1 sm:mt-0 italic">
            {section.lectures} Lectures • {section.duration}
          </span>
        </summary>
        <ul class="mt-2 pl-6 list-disc text-gray-300 text-sm space-y-1">
          {#each Array(section.lectures) as _, index}
            <li class="hover:text-blue-400 transition">{`Lecture ${index + 1}`}</li>
          {/each}
        </ul>
      </details>
    {/each}
  </div>

  <!-- Tombol Lihat Kursus (Ukuran & gaya disamakan) -->
	<div class="pt-0 text-right">
	<a
		href={`${base}/kelas/${course?.slug ?? ''}/lesson/1`}
		class="inline-block px-4 py-2 text-xs sm:text-sm font-medium text-gray-200 border border-gray-400 hover:border-blue-400 rounded-lg hover:text-blue-400 transition-all"
	>
		Lihat Kursus
	</a>

	</div>
	</div>



      <!-- Deskripsi Kelas -->
      <div class="bg-gray-950 rounded-2xl p-5 border border-gray-700 space-y-4">
        <h2 class="text-lg sm:text-xl font-semibold">Deskripsi Kelas</h2>

        {#if course?.shortDescription?.length}
          <p class="text-gray-200 text-sm sm:text-base">{course.shortDescription[0]}</p>

          {#if !!showDescriptionMap?.[course.slug]}
            <div transition:slide={{ duration: 300 }}>
              {#if course.shortDescription.length > 1}
                <ul class="list-disc list-inside text-gray-400 space-y-1 pl-5 mt-2 text-sm">
                  {#each course.shortDescription.slice(1) as point}
                    <li>{point}</li>
                  {/each}
                </ul>
              {/if}

              {#if course?.forWho?.length}
                <div class="mt-3">
                  <h3 class="text-base sm:text-lg font-semibold text-gray-200 mb-2">
                    Untuk siapa kursus ini?
                  </h3>
                  <ul class="list-disc list-inside text-gray-400 space-y-1 pl-5 text-sm">
                    {#each course.forWho as person}
                      <li>{person}</li>
                    {/each}
                  </ul>
                </div>
              {/if}
            </div>
          {/if}

          {#if (course?.shortDescription?.length ?? 0) > 1 || (course?.forWho?.length ?? 0) > 0}
            <button
              on:click={toggleDescription}
              class="mt-4 w-full px-5 py-3 border border-gray-400 text-white hover:text-blue-400 rounded-lg hover:border-blue-400 transition font-semibold text-center text-sm sm:text-base"
            >
              {showDescriptionMap[course?.slug ?? ''] ? 'Tutup' : 'Lihat Lebih Banyak'}
            </button>
          {/if}
        {/if}
      </div>

      <!-- Instruktur -->
      <div class="space-y-4">
        <h2 class="text-lg sm:text-xl font-semibold text-white">Instruktur</h2>
        <div class="flex flex-row items-center gap-4">
          <img
            src="https://img-c.udemycdn.com/user/200_H/15481646_a97d_6.jpg"
            alt="Instructor"
            class="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border border-gray-700 flex-shrink-0"
          />
          <div class="flex-1">
            <h3 class="font-semibold text-base sm:text-lg text-white mb-1">
              {course?.instructor ?? 'Nama Instructor'}
            </h3>
            <p class="text-gray-400 text-sm leading-relaxed">
              Programmer Zaman Now membuat berbagai kursus seputar pemrograman mencakup Backend, Frontend, DevOps, dan Mobile.
            </p>
          </div>
        </div>
      </div>

		<!-- Komentar / Ulasan -->
				{#if course.comments && course.comments.length > 0}
		<section class="mt-10 border-t border-gray-800 pt-6">
			<h3 class="text-lg sm:text-xl font-bold mb-4 text-white">Ulasan Peserta</h3>
			<div class="space-y-4">
			{#each (showAllComments ? course.comments : course.comments.slice(0, MAX_COMMENTS)) as comment (comment.name + comment.date)}
				<div
				class="border border-gray-700 bg-gray-950 rounded-xl p-4 hover:bg-gray-850 transition"
				transition:slide={{ duration: 300 }}
				>
				<div class="flex flex-wrap items-center justify-between mb-2">
					<div class="flex items-center gap-2">
					<span class="font-semibold text-white">{comment.name}</span>
					<span class="text-xs text-gray-400">{comment.date}</span>
					</div>
					<div class="text-yellow-400 text-sm">
					{Array(comment.rating).fill('★').join('')}
					{Array(5 - comment.rating).fill('☆').join('')}
					</div>
				</div>
				<p class="text-gray-300 text-sm leading-relaxed italic">"{comment.comment}"</p>
				</div>
			{/each}
			</div>
			{#if course.comments.length > MAX_COMMENTS}
			<div class="mt-6 flex flex-col justify-center">
				{#if !showAllComments}
				<button
					class="w-full sm:w-auto px-6 py-3 rounded-lg bg-transparent text-white font-semibold hover:text-blue-400 hover:border-blue-400 border border-gray-400 transition"
					on:click={() => showAllComments = true}
				>
					Lihat Semua Ulasan
				</button>
				{:else}
				<button
					class="w-full sm:w-auto px-6 py-3 rounded-lg bg-transparent text-white font-semibold border hover:text-blue-400 hover:border-blue-400 border-gray-400 transition"
					on:click={() => showAllComments = false}
				>
					Sembunyikan Ulasan
				</button>
				{/if}
			</div>
			{/if}
		</section>
		{:else}
		<section class="mt-10 border-t border-gray-800 pt-6">
			<h3 class="text-lg sm:text-xl font-bold mb-4 text-white">Ulasan Peserta</h3>
			<div class="text-gray-400 italic text-sm text-center py-8" transition:slide={{ duration: 300 }}>
			Belum ada ulasan untuk kelas ini.
			</div>
		</section>
		{/if}


      <!-- Rekomendasi Kelas -->
      <div class="mt-12">
        <h2 class="text-lg sm:text-2xl font-semibold mb-4 text-white">Rekomendasi Kelas Lainnya</h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {#each courses.filter(c => c.slug !== $page.params.slug).slice(0, 4) as rec}
            <div class="bg-gray-950 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 hover:-translate-y-1 border border-gray-600">
              
              <!-- Gambar -->
              <div class="w-full">
                <img
                  src={rec.image}
                  alt={rec.name}
                  class="w-full h-auto rounded-t-xl transition-transform duration-500 hover:scale-105 object-contain"
                />
              </div>

              <!-- Konten -->
              <div class="p-4">
                <h3 class="font-semibold text-base sm:text-lg text-white line-clamp-2">
                  {rec.name}
                </h3>
                <p class="text-gray-400 text-xs sm:text-sm mt-1">Oleh {rec.instructor}</p>
                <p class="text-white font-semibold mt-2 text-sm sm:text-base">
                  Rp {rec.price?.toLocaleString('id-ID')}
                </p>

                <a
                  href="{base}/kelas/{rec.slug.toLowerCase().replace(/\s+/g, '-')}"
                  rel="external"
                  class="block w-full mt-3 rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 hover:text-blue-400 border border-gray-200 hover:border-blue-400 shadow-sm hover:bg-transparent text-center transition"
                >
                  Lihat Detail
                </a>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>

<!-- Tombol Beli Sekarang (Mobile Sticky) -->
<div class="fixed bottom-0 left-0 right-0 bg-white text-gray-900 py-2 px-4 flex justify-between items-center lg:hidden z-50 shadow-lg border-t border-gray-200">
  <!-- Harga + Link -->
  <div class="flex flex-col">
    <a
      href="{base}/cara-pembayaran"
      class="text-[10px] text-blue-600 font-semibold hover:text-blue-500 transition"
    >
      Daftar Sekarang
    </a>

    <div class="flex items-baseline gap-1">
      <p class="text-sm font-bold text-gray-900">
        Rp {course?.price?.toLocaleString('id-ID')}
      </p>

      {#if course?.originalPrice}
        <p class="text-[10px] text-gray-500 line-through">
          Rp {course?.originalPrice?.toLocaleString('id-ID')}
        </p>
      {/if}
    </div>
  </div>

  <!-- Tombol Beli Sekarang -->
  <a
    href="{base}/cara-pembayaran"
    class="bg-gray-900 text-white font-medium px-4 py-2 rounded-lg text-xs hover:bg-transparent border border-gray-900 hover:text-blue-400 hover:border-blue-400 transition"
  >
    Daftar Sekarang
  </a>
</div>


</section>

{/if}




<style>
  /* 🔹 Fade-in + slide-up animasi */
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(12px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .animate-fadeIn {
    animation: fadeIn 0.4s ease-out both;
  }

</style>