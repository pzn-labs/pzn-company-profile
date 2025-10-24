<script lang="ts">
	import { page } from '$app/stores';
	import { fade, fly } from 'svelte/transition';
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

	// === SEMUA DATA KURSUS ===
	const courses = [
		{
			slug: 'golang',
			name: 'Pemrograman Go-Lang: Pemula sampai Mahir',
			image: golang,
			instructor: 'Eko Kurniawan Khannedy',
			rating: 4.8,
			reviews: 1200,
			students: 5200,
			lastUpdated: 'Oktober 2025',
			language: 'Bahasa Indonesia',
			price: 159000,
			originalPrice: 499000,
			whatYouWillLearn: [
				'Dasar bahasa pemrograman Go',
				'Membuat aplikasi backend dengan Go',
				'Menggunakan Goroutine dan Channel',
				'Belajar REST API dengan Go Fiber'
			],
			requirements: [
				'Mengerti dasar pemrograman',
				'Memiliki komputer/laptop dengan koneksi internet',
				'Semangat belajar tinggi 😎'
			],
			description: `Belajar Go-lang dari dasar hingga mahir, dipandu oleh mentor profesional dengan studi kasus nyata.`,
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
			]
		},
		{
			slug: 'java-dasar',
			name: 'Belajar JavaScript dari Nol hingga Mahir',
			image: java,
			instructor: 'Eko Kurniawan Khannedy',
			rating: 4.7,
			reviews: 980,
			students: 4800,
			lastUpdated: 'September 2025',
			language: 'Bahasa Indonesia',
			price: 149000,
			originalPrice: 399000,
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
			students: 3100,
			lastUpdated: 'Agustus 2025',
			language: 'Bahasa Indonesia',
			price: 179000,
			originalPrice: 499000,
			whatYouWillLearn: [
				'Membuat aplikasi web dengan Laravel',
				'Routing, Controller, dan Blade Template',
				'Database Migration dan Eloquent ORM',
				'Autentikasi dan Authorization'
			],
			requirements: ['Dasar PHP dan HTML', 'XAMPP atau Laravel Sail terinstal'],
			description: 'Bangun aplikasi web modern dengan framework Laravel versi terbaru.',
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
			students: 4800,
			lastUpdated: 'November 2025',
			language: 'Bahasa Indonesia',
			price: 169000,
			originalPrice: 459000,
			whatYouWillLearn: [
				'Dasar ReactJS (Hooks & State)',
				'Komponen dan Props',
				'Integrasi API',
				'Routing dengan React Router'
			],
			requirements: ['Dasar JavaScript dan HTML', 'Node.js terinstal di komputer'],
			description: 'Pelajari ReactJS dengan pendekatan praktis untuk membuat aplikasi modern.',
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
			slug: 'python',
			name: 'Belajar Python dari Dasar Hingga Mahir',
			image: python,
			instructor: 'Eko Kurniawan Khannedy',
			rating: 4.8,
			reviews: 1450,
			students: 6500,
			lastUpdated: 'Juli 2025',
			language: 'Bahasa Indonesia',
			price: 149000,
			originalPrice: 499000,
			whatYouWillLearn: [
				'Dasar sintaks Python',
				'Pemrograman berorientasi objek',
				'Manipulasi data dan file',
				'Membuat project mini dengan Flask'
			],
			requirements: ['Tidak perlu pengalaman sebelumnya', 'Laptop & semangat belajar tinggi'],
			description: 'Belajar Python dari nol dengan studi kasus praktis dan mudah dipahami.',
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
			students: 2900,
			lastUpdated: 'Oktober 2025',
			language: 'Bahasa Indonesia',
			price: 179000,
			originalPrice: 499000,
			whatYouWillLearn: [
				'Dasar framework Svelte',
				'Membangun project dengan SvelteKit',
				'Integrasi API dan routing',
				'Deploy project statis ke GitHub Pages'
			],
			requirements: ['Dasar HTML, CSS, dan JavaScript', 'Node.js & npm terinstal'],
			description:
				'Belajar framework modern Svelte dan SvelteKit untuk membangun website cepat dan ringan.',
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
			slug: 'nodejs',
			name: 'Belajar Backend Node.js dari Nol sampai Mahir',
			image: nodejs,
			instructor: 'Eko Kurniawan Khannedy',
			rating: 4.8,
			reviews: 1050,
			students: 4600,
			lastUpdated: 'Oktober 2025',
			language: 'Bahasa Indonesia',
			price: 179000,
			originalPrice: 499000,
			whatYouWillLearn: [
				'Dasar Node.js dan NPM',
				'Membangun REST API dengan Express.js',
				'Menggunakan Middleware & Routing',
				'Koneksi ke database MySQL & MongoDB'
			],
			requirements: ['Dasar JavaScript', 'Node.js terinstal di komputer'],
			description: 'Bangun backend server modern dengan Node.js dan Express.js.',
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
			students: 3400,
			lastUpdated: 'September 2025',
			language: 'Bahasa Indonesia',
			price: 159000,
			originalPrice: 499000,
			whatYouWillLearn: [
				'Dasar framework Vue.js',
				'Component & Props',
				'Routing dengan Vue Router',
				'State management dengan Pinia/Vuex'
			],
			requirements: ['Dasar HTML, CSS, JavaScript'],
			description: 'Pelajari Vue.js dengan pendekatan interaktif untuk membangun SPA modern.',
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
			students: 3900,
			lastUpdated: 'Juli 2025',
			language: 'Bahasa Indonesia',
			price: 139000,
			originalPrice: 399000,
			whatYouWillLearn: [
				'Dasar pemrograman PHP',
				'Manipulasi database dengan MySQL',
				'Membuat website dinamis',
				'Pengenalan OOP di PHP'
			],
			requirements: ['Dasar HTML & CSS', 'XAMPP terinstal'],
			description: 'Pelajari PHP modern untuk membangun website dinamis dan cepat.',
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
			students: 3200,
			lastUpdated: 'Agustus 2025',
			language: 'Bahasa Indonesia',
			price: 129000,
			originalPrice: 399000,
			whatYouWillLearn: [
				'Dasar database MySQL',
				'Membuat tabel dan relasi',
				'Menulis query SQL kompleks',
				'Optimasi performa database'
			],
			requirements: ['Dasar logika pemrograman'],
			description: 'Pelajari database MySQL dari dasar hingga query kompleks.',
			courseContent: [
				{ title: 'Pengenalan Database', lectures: 5, duration: '1 jam' },
				{ title: 'Query Dasar', lectures: 8, duration: '2 jam' },
				{ title: 'Join & Subquery', lectures: 7, duration: '2 jam' },
				{ title: 'Project Akhir: Database Toko Online', lectures: 4, duration: '1 jam 45 menit' }
			],
			forWho: ['Backend Developer', 'Mahasiswa IT', 'Data Analyst pemula']
		},
		{
			slug: 'docker',
			name: 'Belajar Docker untuk Developer',
			image: docker,
			instructor: 'Eko Kurniawan Khannedy',
			rating: 4.9,
			reviews: 780,
			students: 2700,
			lastUpdated: 'Oktober 2025',
			language: 'Bahasa Indonesia',
			price: 189000,
			originalPrice: 499000,
			whatYouWillLearn: [
				'Konsep containerization',
				'Membuat dan mengelola container',
				'Membuat Dockerfile & Compose',
				'Deploy aplikasi menggunakan Docker'
			],
			requirements: ['Dasar terminal/command line'],
			description: 'Pelajari Docker dari dasar untuk efisiensi pengembangan dan deployment.',
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
			students: 3300,
			lastUpdated: 'November 2025',
			language: 'Bahasa Indonesia',
			price: 189000,
			originalPrice: 499000,
			whatYouWillLearn: [
				'Dasar framework NestJS',
				'Membangun REST API modular',
				'Integrasi database dan autentikasi',
				'Best practice backend modern'
			],
			requirements: ['Dasar TypeScript dan Node.js'],
			description: 'Framework backend berbasis TypeScript yang powerful dan scalable.',
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
			students: 2500,
			lastUpdated: 'Oktober 2025',
			language: 'Bahasa Indonesia',
			price: 179000,
			originalPrice: 499000,
			whatYouWillLearn: [
				'Dasar Bun runtime modern',
				'Membuat REST API dengan Bun',
				'Integrasi database SQLite/MySQL',
				'Optimasi performa server'
			],
			requirements: ['Dasar JavaScript dan Node.js'],
			description: 'Pelajari runtime Bun yang super cepat untuk membangun backend modern.',
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
			students: 1800,
			lastUpdated: 'September 2025',
			language: 'Bahasa Indonesia',
			price: 199000,
			originalPrice: 599000,
			whatYouWillLearn: [
				'Dasar bahasa Rust',
				'Mengelola memory secara aman',
				'Membangun CLI App dengan Rust',
				'Async programming di Rust'
			],
			requirements: ['Mengerti dasar pemrograman'],
			description: 'Pelajari Rust, bahasa modern yang cepat dan aman untuk sistem performa tinggi.',
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
			students: 2400,
			lastUpdated: 'Oktober 2025',
			language: 'Bahasa Indonesia',
			price: 159000,
			originalPrice: 499000,
			whatYouWillLearn: [
				'Dasar Redis dan konsep in-memory database',
				'Key, Hash, List, Set, Sorted Set',
				'Menggunakan Redis untuk caching dan session',
				'Implementasi Redis di Node.js dan Laravel'
			],
			requirements: ['Dasar backend development'],
			description: 'Pelajari Redis, database super cepat untuk caching dan queue system.',
			courseContent: [
				{ title: 'Pengenalan Redis', lectures: 5, duration: '1 jam' },
				{ title: 'Struktur Data Redis', lectures: 7, duration: '2 jam' },
				{ title: 'Integrasi ke Aplikasi', lectures: 6, duration: '2 jam' },
				{ title: 'Project Akhir: Redis Cache API', lectures: 4, duration: '1 jam 45 menit' }
			],
			forWho: ['Backend Developer', 'DevOps', 'Fullstack Developer']
		},
		{
			slug: 'kafka',
			name: 'Belajar Apache Kafka untuk Pemula',
			image: kafka,
			instructor: 'Eko Kurniawan Khannedy',
			rating: 4.9,
			reviews: 580,
			students: 2100,
			lastUpdated: 'Oktober 2025',
			language: 'Bahasa Indonesia',
			price: 189000,
			originalPrice: 499000,
			whatYouWillLearn: [
				'Konsep event streaming dan pub-sub',
				'Membuat producer dan consumer',
				'Integrasi Kafka dengan Node.js dan Java',
				'Monitoring & scaling Kafka cluster'
			],
			requirements: ['Dasar backend programming', 'Pemahaman konsep message queue'],
			description: 'Pelajari Apache Kafka, sistem event streaming yang powerful dan scalable.',
			courseContent: [
				{ title: 'Dasar Kafka', lectures: 5, duration: '1 jam 15 menit' },
				{ title: 'Producer & Consumer', lectures: 7, duration: '2 jam' },
				{ title: 'Integrasi Aplikasi', lectures: 6, duration: '2 jam' },
				{ title: 'Project Akhir: Event Streaming App', lectures: 4, duration: '2 jam' }
			],
			forWho: ['Backend Engineer', 'System Architect', 'DevOps Engineer']
		},
		{
			slug: 'postgresql',
			name: 'Belajar PostgreSQL untuk Developer',
			image: postgre,
			instructor: 'Eko Kurniawan Khannedy',
			rating: 4.8,
			reviews: 740,
			students: 2800,
			lastUpdated: 'Agustus 2025',
			language: 'Bahasa Indonesia',
			price: 149000,
			originalPrice: 399000,
			whatYouWillLearn: [
				'Dasar PostgreSQL dan query SQL',
				'Membuat relasi tabel kompleks',
				'View, Trigger, dan Function',
				'Optimasi performa query'
			],
			requirements: ['Dasar SQL'],
			description: 'Pelajari PostgreSQL, database open-source yang powerful dan stabil.',
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
			students: 2000,
			lastUpdated: 'September 2025',
			language: 'Bahasa Indonesia',
			price: 199000,
			originalPrice: 499000,
			whatYouWillLearn: [
				'Dasar Elasticsearch dan konsep indexing',
				'Membuat search engine sederhana',
				'Query DSL dan Aggregation',
				'Integrasi dengan Node.js dan Laravel'
			],
			requirements: ['Dasar REST API dan database'],
			description: 'Pelajari Elasticsearch untuk membangun fitur pencarian super cepat.',
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
			students: 3000,
			lastUpdated: 'Juli 2025',
			language: 'Bahasa Indonesia',
			price: 159000,
			originalPrice: 499000,
			whatYouWillLearn: [
				'Dasar bahasa Kotlin',
				'Fungsi dan class',
				'Null Safety dan Extension Function',
				'Membuat aplikasi Android sederhana'
			],
			requirements: ['Dasar Java atau pemrograman OOP'],
			description: 'Pelajari bahasa Kotlin untuk pengembangan Android modern.',
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
			students: 3100,
			lastUpdated: 'September 2025',
			language: 'Bahasa Indonesia',
			price: 169000,
			originalPrice: 499000,
			whatYouWillLearn: [
				'Dasar Android Development',
				'Menggunakan Activity & Fragment',
				'Mengelola layout dan resource',
				'Membangun project Android sederhana'
			],
			requirements: ['Kotlin atau Java dasar', 'Android Studio terinstal'],
			description: 'Pelajari dasar pembuatan aplikasi Android dari nol hingga jadi.',
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
			students: 8200,
			lastUpdated: 'Oktober 2025',
			language: 'Bahasa Indonesia',
			price: 129000,
			originalPrice: 399000,
			whatYouWillLearn: [
				'Dasar version control system',
				'Perintah Git yang penting',
				'Branching dan merging',
				'Kolaborasi dengan GitHub'
			],
			requirements: ['Tidak perlu pengalaman sebelumnya'],
			description: 'Pelajari Git dan GitHub untuk manajemen kode dan kolaborasi tim.',
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
			students: 2100,
			lastUpdated: 'September 2025',
			language: 'Bahasa Indonesia',
			price: 189000,
			originalPrice: 499000,
			whatYouWillLearn: [
				'Konsep CI/CD',
				'Instalasi dan konfigurasi Jenkins',
				'Membuat pipeline otomatis',
				'Integrasi dengan Git dan Docker'
			],
			requirements: ['Dasar DevOps atau backend'],
			description: 'Pelajari cara otomatisasi build dan deploy aplikasi dengan Jenkins.',
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
			name: 'Belajar HTTP dan RESTful API',
			image: http,
			instructor: 'Eko Kurniawan Khannedy',
			rating: 4.9,
			reviews: 870,
			students: 4100,
			lastUpdated: 'Oktober 2025',
			language: 'Bahasa Indonesia',
			price: 149000,
			originalPrice: 399000,
			whatYouWillLearn: [
				'Dasar protokol HTTP',
				'Request & Response',
				'Membuat REST API manual',
				'Autentikasi dan status code'
			],
			requirements: ['Dasar pemrograman web'],
			description: 'Pelajari dasar komunikasi HTTP dan cara membangun RESTful API.',
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
			name: 'Belajar OpenAPI & Swagger',
			image: openapi,
			instructor: 'Eko Kurniawan Khannedy',
			rating: 4.8,
			reviews: 620,
			students: 2300,
			lastUpdated: 'September 2025',
			language: 'Bahasa Indonesia',
			price: 159000,
			originalPrice: 499000,
			whatYouWillLearn: [
				'Dasar OpenAPI Specification',
				'Membuat dokumentasi API otomatis',
				'Integrasi dengan Node.js dan Laravel',
				'Validasi request menggunakan schema'
			],
			requirements: ['Dasar REST API'],
			description: 'Pelajari cara mendokumentasikan API profesional menggunakan OpenAPI & Swagger.',
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
			students: 2900,
			lastUpdated: 'Agustus 2025',
			language: 'Bahasa Indonesia',
			price: 149000,
			originalPrice: 499000,
			whatYouWillLearn: [
				'Dasar bahasa Dart',
				'Fungsi dan class',
				'Null safety dan collection',
				'Membuat aplikasi sederhana dengan Flutter'
			],
			requirements: ['Dasar pemrograman'],
			description: 'Pelajari bahasa Dart yang digunakan untuk pengembangan Flutter.',
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
			students: 3500,
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
			students: 3200,
			lastUpdated: 'November 2025',
			language: 'Bahasa Indonesia',
			price: 169000,
			originalPrice: 499000,
			whatYouWillLearn: [
				'Dasar TypeScript dan tipe data',
				'Interface & Generic',
				'Type narrowing dan utility types',
				'Integrasi TypeScript di Node.js & React'
			],
			requirements: ['Dasar JavaScript'],
			description: 'Pelajari TypeScript untuk meningkatkan kualitas dan keamanan kode JavaScript-mu.',
			courseContent: [
				{ title: 'Pengenalan TypeScript', lectures: 5, duration: '1 jam' },
				{ title: 'Type & Interface', lectures: 7, duration: '2 jam' },
				{ title: 'Generic & Utility Types', lectures: 6, duration: '2 jam' },
				{ title: 'Project Akhir: API Typed', lectures: 4, duration: '2 jam' }
			],
			forWho: ['Frontend Developer', 'Backend Developer', 'Fullstack Developer']
		},
		{
			slug: 'k6',
			name: 'Belajar Load Testing dengan K6',
			image: k6,
			instructor: 'Eko Kurniawan Khannedy',
			rating: 4.8,
			reviews: 540,
			students: 1900,
			lastUpdated: 'September 2025',
			language: 'Bahasa Indonesia',
			price: 179000,
			originalPrice: 499000,
			whatYouWillLearn: [
				'Dasar load testing',
				'Membuat skrip K6 dengan JavaScript',
				'Menganalisis hasil testing',
				'Integrasi K6 dengan CI/CD pipeline'
			],
			requirements: ['Dasar REST API'],
			description: 'Pelajari cara melakukan load testing untuk API menggunakan K6.',
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
			students: 1900,
			lastUpdated: 'September 2025',
			language: 'Bahasa Indonesia',
			price: 179000,
			originalPrice: 499000,
			whatYouWillLearn: [
				'Dasar load Pengenalan dasar HTML dan struktur dokumen web',
				'Membuat skrip K6 dengan Menggunakan tag, elemen, dan atribut HTML dengan benar',
				'Membuat layout sederhana dengan elemen semantik',
				'Menambahkan gambar, tautan, dan tabel ke halaman web'
			],
			requirements: ['Dasar HTML'],
            description: 'Pelajari cara membuat struktur halaman web menggunakan HTML.',
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
			students: 1900,
			lastUpdated: 'September 2025',
			language: 'Bahasa Indonesia',
			price: 179000,
			originalPrice: 499000,
			whatYouWillLearn: [
                'Pengenalan dasar Spring Boot dan arsitektur aplikasi Java',
                'Membuat REST API dengan Spring Boot menggunakan controller dan service',
                'Membuat aplikasi CRUD sederhana dengan database menggunakan Spring Data JPA',
                'Menambahkan keamanan dan konfigurasi dasar pada aplikasi Spring Boot'
            ],
			requirements: ['Dasar Java'],
            description: 'Pelajari cara membuat aplikasi backend menggunakan Spring Boot.',
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
            students: 1500,
            lastUpdated: 'Oktober 2025',
            language: 'Bahasa Indonesia',
            price: 149000,
            originalPrice: 399000,
            whatYouWillLearn: [
                'Pengenalan MongoDB dan konsep NoSQL',
                'Membuat dan mengelola database serta collection',
                'CRUD operation di MongoDB menggunakan Mongo Shell dan Compass',
                'Mengintegrasikan MongoDB dengan aplikasi backend'
            ],
            requirements: ['Dasar Database', 'Dasar JavaScript atau Java'],
            description: 'Pelajari cara menggunakan MongoDB untuk membangun aplikasi backend yang scalable.',
            courseContent: [
                { title: 'Pengenalan MongoDB', lectures: 5, duration: '1 jam' },
                { title: 'CRUD Operation di MongoDB', lectures: 7, duration: '2 jam' },
                { title: 'Index, Aggregation, dan Query Lanjutan', lectures: 6, duration: '2 jam' },
                { title: 'Project Akhir: Aplikasi CRUD dengan MongoDB', lectures: 4, duration: '2 jam' }
            ],
            forWho: ['Backend Developer Pemula', 'Fullstack Developer', 'Siapa saja yang ingin belajar database NoSQL']
        },
        {
            slug: 'restfull-api',
            name: 'Belajar RESTful API untuk Pemula',
            image: restfull, 
            instructor: 'Eko Kurniawan Khannedy',
            rating: 4.8,
            reviews: 410,
            students: 1800,
            lastUpdated: 'Oktober 2025',
            language: 'Bahasa Indonesia',
            price: 159000,
            originalPrice: 449000,
            whatYouWillLearn: [
                'Pengenalan konsep RESTful API',
                'Membuat endpoint GET, POST, PUT, DELETE',
                'Menghubungkan API dengan database',
                'Mengamankan API dan menambahkan validasi request'
            ],
            requirements: ['Dasar HTTP', 'Dasar Backend Development'],
            description: 'Pelajari cara membuat dan mengelola RESTful API untuk aplikasi web dan mobile.',
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
            students: 1300,
            lastUpdated: 'Oktober 2025',
            language: 'Bahasa Indonesia',
            price: 169000,
            originalPrice: 429000,
            whatYouWillLearn: [
                'Pengenalan message broker dan RabbitMQ',
                'Membuat queue dan exchange',
                'Mengirim dan menerima pesan menggunakan producer dan consumer',
                'Mengintegrasikan RabbitMQ dengan aplikasi backend'
            ],
            requirements: ['Dasar Backend Development', 'Dasar Java atau Node.js'],
            description: 'Pelajari cara menggunakan RabbitMQ untuk komunikasi asinkron antar aplikasi.',
            courseContent: [
                { title: 'Pengenalan RabbitMQ', lectures: 5, duration: '1 jam' },
                { title: 'Queue, Exchange, dan Binding', lectures: 7, duration: '2 jam' },
                { title: 'Producer dan Consumer', lectures: 6, duration: '2 jam' },
                { title: 'Project Akhir: Sistem Messaging Sederhana', lectures: 4, duration: '2 jam' }
            ],
            forWho: ['Backend Developer', 'DevOps', 'Siapa saja yang ingin belajar message broker']
        }
	];


	// === SLUG DARI URL DAN KURSUS AKTIF ===
	let course: typeof courses[number] | undefined;

	$: {
		const slug = $page.params.slug;
		course = courses.find((c) => c.slug === slug);
	}

	onMount(() => {
		window.scrollTo({ top: 0 });
	});

      let openAll = false;

    let carouselContainer: HTMLDivElement;
    let showMore = false;

    // Ambil slug saat ini
    let currentSlug = $page.params.slug;

    // Reset showMore otomatis saat route berubah
    $: if ($page.url) {
        currentSlug = $page.params.slug;
        showMore = false;
    }


    function lihatDetail(slug: string) {
        // arahkan ke halaman detail kelas
        window.location.href = `/kelas/${slug}`;
    }

    $: reviews = Array.isArray(course?.reviews) ? course.reviews : [];

</script>


{#if !course}
  <p class="text-center text-gray-500 mt-20">Kelas tidak ditemukan.</p>
{:else}

<!-- HERO SECTION -->
<section class="bg-black text-white px-6 py-12">
  <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 relative">

    <!-- SIDEBAR KANAN (muncul paling atas di mobile) -->
    <aside class="order-1 lg:order-2 sticky lg:top-24 h-fit bg-white text-gray-900 rounded-xl shadow-2xl p-6 space-y-6 w-full lg:w-[380px]">
      <!-- Gambar kursus -->
      <img src={course?.image} alt={course?.name ?? ''} class="w-full h-52 object-cover rounded-lg shadow-sm" />

      <!-- Harga -->
      <h3 class="text-2xl font-bold">Rp {course?.price?.toLocaleString('id-ID')}</h3>

      <!-- Tombol aksi -->
      <div class="flex flex-col gap-3">
        <button class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition">
          Tambahkan ke keranjang
        </button>
        <button class="border border-blue-500 text-blue-500 font-semibold py-3 rounded-lg hover:bg-blue-50 transition">
          Beli sekarang
        </button>
      </div>

      <!-- Input kode promo -->
      <div class="space-y-2">
        <label for="promo" class="text-sm font-medium text-gray-700">Punya kode promo?</label>
        <div class="flex gap-2">
          <input id="promo" type="text" placeholder="Masukkan kode" class="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400" />
          <button class="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg text-sm transition">
            Terapkan
          </button>
        </div>
      </div>

      <hr class="border-gray-200" />
      <p class="text-xs text-gray-500 text-center">Jaminan uang kembali 30 hari</p>

      <!-- Fitur kursus -->
      <ul class="text-sm text-gray-700 space-y-3 mb-6">
        <li class="flex items-center gap-3"><img src="https://images.icon-icons.com/934/PNG/512/movie-symbol-of-video-camera_icon-icons.com_72981.png" class="w-5 h-5" alt="Video" /> 43 jam video</li>
        <li class="flex items-center gap-3"><img src="https://images.icon-icons.com/2724/PNG/512/newspaper_news_daily_business_media_article_icon_175626.png" class="w-5 h-5" alt="Artikel" /> 10 artikel</li>
        <li class="flex items-center gap-3"><img src="https://images.icon-icons.com/1946/PNG/96/1904669-call-chat-device-message-mobile-phone-smartphone_122519.png" class="w-5 h-5" alt="Akses HP" /> Akses di HP & TV</li>
        <li class="flex items-center gap-3"><img src="https://images.icon-icons.com/3832/PNG/96/infinite_icon_234518.png" class="w-5 h-5" alt="Seumur hidup" /> Akses seumur hidup</li>
        <li class="flex items-center gap-3"><img src="https://images.icon-icons.com/1919/PNG/96/licensedocument_121962.png" class="w-5 h-5" alt="Sertifikat" /> Sertifikat penyelesaian</li>
      </ul>

      <hr class="border-gray-200" />
      <!-- Tombol tambahan -->
      <div class="flex flex-col gap-3 text-sm">
        <button class="border border-gray-900 rounded-lg py-2.5 flex items-center justify-center gap-2 text-gray-700 font-medium hover:shadow-md hover:-translate-y-[1px] hover:bg-gray-50 transition duration-200">
          Bagikan
        </button>
        <button class="border border-gray-900 rounded-lg py-2.5 flex items-center justify-center gap-2 text-gray-700 font-medium hover:shadow-md hover:-translate-y-[1px] hover:bg-gray-50 transition duration-200">
          Hadiahkan
        </button>
      </div>
    </aside>

    <!-- KONTEN UTAMA -->
    <div class="order-2 lg:order-1 lg:col-span-2 space-y-16">

      <!-- Hero & Info Kursus -->
      <div class="space-y-5">
        <h1 class="text-3xl lg:text-4xl font-bold leading-tight">{course?.name ?? ''}</h1>
        <p class="text-gray-300 text-base">{course?.description ?? ''}</p>
        <div class="flex flex-wrap items-center gap-3 text-sm text-gray-400">
          <span>⭐ {course?.rating ?? '4.8'}</span>
          <span>·</span>
          <span>{course?.students?.toLocaleString() ?? '12,345'} peserta</span>
          <span>·</span>
          <span>Dibuat oleh <span class="text-blue-400">{course?.instructor ?? 'Nama Instructor'}</span></span>
        </div>
      </div>

      <!-- Yang Akan Anda Pelajari -->
      <div class="bg-gray-950 rounded-2xl p-6 border border-gray-700">
        <h2 class="text-xl font-semibold mb-4">Yang akan Anda pelajari</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-300">
          {#each course?.whatYouWillLearn ?? [] as item}
            <div class="flex items-start gap-2"><span class="text-green-400">✔</span><span>{item}</span></div>
          {/each}
        </div>
      </div>

      <!-- Kurikulum -->
    <div class="bg-gray-900 rounded-2xl p-4 sm:p-6 border border-gray-700 space-y-4">
    <div class="flex justify-between items-center mb-4">
        <h2 class="text-2xl font-semibold text-white">Kurikulum Kursus</h2>
    </div>
    <div class="divide-y divide-gray-700">
        {#each course?.courseContent ?? [] as section, i}
        <details class="py-4 group w-full">
            <summary class="flex flex-col sm:flex-row justify-between items-start sm:items-center cursor-pointer font-medium text-white hover:text-blue-400 transition-colors duration-200 px-2 py-2 sm:py-3 rounded-md">
            <span class="flex items-center gap-2 w-full sm:w-auto">
                {section.title}
                <svg class="w-4 h-4 transition-transform duration-200 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
            </span>
            <span class="text-gray-400 text-sm mt-1 sm:mt-0">{section.lectures} Lectures • {section.duration}</span>
            </summary>
            <ul class="mt-3 pl-5 list-disc text-white text-base space-y-2 transition-all duration-300 group-open:animate-fadeIn">
            {#each Array(section.lectures) as _, index}
                <li>Lecture {index + 1}</li>
            {/each}
            </ul>
        </details>
        {/each}
    </div>
    </div>


      <!-- Instruktur -->
      <div class="space-y-4">
        <h2 class="text-xl font-semibold">Instruktur</h2>
        <div class="flex items-center gap-4">
          <img src="https://images.icon-icons.com/1647/PNG/96/10147adultlightskintone_109937.png" alt="Instructor" class="w-16 h-16 rounded-full object-cover"/>
          <div>
            <h3 class="font-semibold text-lg">{course?.instructor ?? 'Nama Instructor'}</h3>
          </div>
        </div>
      </div>

      <!-- Rekomendasi Kelas -->
        <div class="mt-16">
    <h2 class="text-2xl font-semibold mb-6 text-white">Rekomendasi Kelas Lainnya</h2>
    <div class="relative">

        <!-- Carousel 4 Kelas -->
<!-- Carousel / Kelas Utama (sekarang gaya sama dengan tambahan) -->
<div class="flex flex-col md:flex-row gap-4">
    {#each courses.filter(c => c.slug !== currentSlug).slice(0, 4) as rec}
        <div class="bg-gray-950 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition w-full md:flex-1">
            <div class="w-full aspect-[4/3] relative">
                <img src={rec.image} alt={rec.name} class="w-full h-full object-contain"/>
            </div>
            <div class="p-4">
                <h3 class="font-semibold text-lg text-white">{rec.name}</h3>
                <p class="text-gray-400 text-sm mt-1">Oleh {rec.instructor}</p>
                <p class="text-blue-400 font-semibold mt-2">Rp {rec.price?.toLocaleString('id-ID')}</p>
                <div class="mt-4">
                    <a href={`/kelas/${rec.slug}`} 
                       class="block w-full mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 text-center">
                       Lihat Detail
                    </a>
                </div>
            </div>
        </div>
    {/each}
</div>

    

    <!-- Kelas Tambahan (Awalnya Tersembunyi) -->
    {#if showMore}
    <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {#each courses.filter(c => c.slug !== currentSlug).slice(4, 8) as rec}
            <div class="bg-gray-950 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition">
                <div class="w-full aspect-[4/3] relative">
                    <img src={rec.image} alt={rec.name} class="w-full h-full object-contain"/>
                </div>
                <div class="p-4">
                    <h3 class="font-semibold text-lg text-white">{rec.name}</h3>
                    <p class="text-gray-400 text-sm mt-1">Oleh {rec.instructor}</p>
                    <p class="text-blue-400 font-semibold mt-2">Rp {rec.price?.toLocaleString('id-ID')}</p>
                    <div class="mt-4">
                        <a href={`/kelas/${rec.slug}`} 
                           class="block w-full mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 text-center">
                           Lihat Detail
                        </a>
                    </div>
                </div>
            </div>
        {/each}
    </div>
{/if}

<!-- Tombol Lihat Lebih Banyak / Lihat Sedikit -->
<div class="mt-6 text-center">
    {#if !showMore && courses.length > 4}
        <button on:click={() => showMore = true} 
                class="w-full px-6 py-2 bg-black text-white rounded border border-gray-400 hover:border-blue-400">
            Lihat Lebih Banyak
        </button>
    {/if}

    {#if showMore}
        <button on:click={() => showMore = false} 
                class="w-full px-6 py-2 bg-black text-white rounded border border-gray-400 hover:border-blue-400">
            Lihat Sedikit
        </button>
    {/if}
</div>

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

{/if}



<style>
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-5px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .group-open\:animate-fadeIn {
    animation: fadeIn 0.3s ease forwards;
  }

  /* rotate panah saat details terbuka */
  details[open] summary svg {
    transform: rotate(180deg);
  }
</style>