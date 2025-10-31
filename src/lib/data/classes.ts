export type Course = {
  recommendations: never[];
  filter(arg0: (c: any) => boolean): unknown;
  slug: string;
  name: string;
  description?: string;
  shortDescription?: string[];
  forWho?: string[];
  instructor?: string;
  image?: string;
  price?: number;
  originalPrice?: number;
  rating?: number;
  students?: number;
  language?: string;
  lastUpdated?: string;
  whatYouWillLearn?: string[];
  courseContent?: { title: string; lectures: number; duration: string }[];
  comments?: { name: string; date: string; comment: string; rating: number }[];
};



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
export const allClasses = [
	
    {
	slug: "golang",
	name: "Go-Lang untuk Pemula sampai Mahir",
	category: ["Pemrograman", "Go-Lang"],
	image: golang,
	instructor: "Eko Kurniawan Khannedy" as any,
	rating: 4.8,
	reviews: 1200,
	students: 872,
	lastUpdated: "Oktober 2025",
	language: "Bahasa Indonesia",
	price: 129000,
	originalPrice: 149000,
	recommended: true,

	description:
		"Pelajari bahasa Go untuk membangun aplikasi backend yang cepat dan efisien. Cocok untuk microservices dan sistem berskala besar.",

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

	whatYouWillLearn: [
		"Dasar bahasa pemrograman Go",
		"Membuat aplikasi backend dengan Go",
		"Menggunakan Goroutine dan Channel",
		"Belajar REST API dengan Go Fiber"
	],

	requirements: [
		"Mengerti dasar pemrograman",
		"Memiliki komputer/laptop dengan koneksi internet",
		"Semangat belajar tinggi"
	],

	courseContent: [
		{ title: "Pengenalan Go", lectures: 8, duration: "2 jam 30 menit" },
		{ title: "Tipe Data dan Variabel", lectures: 10, duration: "3 jam" },
		{ title: "Fungsi dan Struct", lectures: 7, duration: "2 jam" },
		{
			title: "Project Akhir: REST API dengan Go Fiber",
			lectures: 5,
			duration: "2 jam 45 menit"
		}
	],

	forWho: [
		"Pemula yang ingin belajar backend",
		"Programmer yang ingin menambah skill Go",
		"Mahasiswa atau profesional IT"
	],

	comments: [
		{
			name: "Andi Pratama",
			date: "2025-10-10",
			rating: 5,
			comment:
				"Materinya sangat jelas dan mudah dipahami, cocok untuk pemula. Mentor responsif dan banyak studi kasus nyata!"
		},
		{
			name: "Siti Nurhaliza",
			date: "2025-10-15",
			rating: 4,
			comment:
				"Penjelasan tentang Goroutine sangat membantu. Saran: tambahkan lebih banyak latihan soal."
		},
		{
			name: "Budi Santoso",
			date: "2025-10-20",
			rating: 5,
			comment:
				"Setelah ikut kelas ini, saya jadi lebih percaya diri membangun backend dengan Go. Terima kasih PZN!"
		},
		{
			name: "Rina Oktaviani",
			date: "2025-10-22",
			rating: 5,
			comment:
				"Materi sangat lengkap, penjelasan mudah diikuti. Cocok untuk yang baru mulai belajar Go!"
		},
		{
			name: "Dewi Lestari",
			date: "2025-10-23",
			rating: 4,
			comment:
				"Kelasnya interaktif, banyak contoh real project. Terima kasih untuk tips deployment-nya!"
		},
		{
			name: "Agus Saputra",
			date: "2025-10-24",
			rating: 5,
			comment:
				"Sangat membantu untuk persiapan kerja sebagai backend developer. Penjelasan REST API sangat detail."
		},
		{
			name: "Fajar Nugroho",
			date: "2025-10-25",
			rating: 4,
			comment:
				"Mentor ramah dan responsif di forum diskusi. Saran: tambahkan quiz di setiap modul."
		},
		{
			name: "Linda Permata",
			date: "2025-10-26",
			rating: 5,
			comment:
				"Setelah ikut kelas ini, saya berhasil membuat project backend sendiri. Recommended banget!"
		}
	]
	},

    {
	slug: "java-dasar",
	name: "Java Dasar untuk Pemula sampai Mahir",
	category: ["Pemrograman", "Java"],
	image: java,
	instructor: "Eko Kurniawan Khannedy" as any,
	rating: 4.9,
	reviews: 1350,
	students: 1024,
	lastUpdated: "Oktober 2025",
	language: "Bahasa Indonesia",
	price: 119000,
	originalPrice: 139000,
	recommended: true,

	description:
		"Pelajari dasar-dasar bahasa Java untuk membangun aplikasi desktop, backend, dan Android. Kelas ini cocok bagi pemula yang ingin memahami OOP dan fondasi kuat dalam pemrograman Java.",

	shortDescription: [
		"Selamat datang di kelas Belajar Java Dasar! Di sini kamu akan belajar dari nol hingga bisa membuat aplikasi sederhana menggunakan Java.",
		"Pengenalan Java: memahami sejarah Java, mengapa Java masih relevan, dan keunggulannya di dunia enterprise.",
		"Instalasi & Setup: belajar cara menginstal JDK, mengatur environment variable, dan menggunakan IntelliJ IDEA atau VS Code untuk coding.",
		"Struktur Program Java: mengenal class, method, dan cara kerja JVM (Java Virtual Machine).",
		"Dasar Sintaks: variabel, tipe data, operator, percabangan, dan perulangan.",
		"Konsep OOP (Object-Oriented Programming): belajar class, object, inheritance, polymorphism, dan encapsulation.",
		"Exception Handling: cara menangani error dan membuat custom exception di Java.",
		"Collection Framework: memahami List, Set, Map, dan cara mengelola data kompleks.",
		"Project Akhir: Membangun aplikasi CLI (Command Line Interface) berbasis OOP untuk manajemen data mahasiswa.",
		"Bonus: pengenalan ke Spring Framework dan langkah pertama menjadi Java Developer profesional."
	],

	whatYouWillLearn: [
		"Dasar bahasa pemrograman Java",
		"Struktur data dan OOP di Java",
		"Membangun aplikasi sederhana berbasis console",
		"Menangani error dengan Exception Handling",
		"Mengelola data menggunakan Collection Framework"
	],

	requirements: [
		"Tidak perlu pengalaman sebelumnya",
		"Memiliki komputer/laptop dengan JDK terinstal",
		"Semangat tinggi untuk belajar dan berlatih"
	],

	courseContent: [
		{ title: "Pengenalan Java & Instalasi", lectures: 6, duration: "2 jam" },
		{ title: "Dasar Pemrograman Java", lectures: 10, duration: "3 jam" },
		{ title: "Object-Oriented Programming", lectures: 9, duration: "3 jam 30 menit" },
		{ title: "Project Akhir: Aplikasi Manajemen Mahasiswa", lectures: 5, duration: "2 jam 15 menit" }
	],

	forWho: [
		"Pemula yang ingin belajar Java dari dasar",
		"Mahasiswa jurusan IT atau non-IT yang ingin mempelajari bahasa Java",
		"Developer yang ingin memperkuat pemahaman OOP dan Java modern"
	],

	comments: [
		{
			name: "Andi Pratama",
			date: "2025-10-10",
			rating: 5,
			comment:
				"Kelas yang sangat bagus untuk pemula. Penjelasan konsep OOP-nya mudah dipahami banget!"
		},
		{
			name: "Siti Nurhaliza",
			date: "2025-10-14",
			rating: 4,
			comment:
				"Materinya lengkap dan sistematis. Saran: tambahkan lebih banyak contoh kasus di dunia nyata."
		},
		{
			name: "Budi Santoso",
			date: "2025-10-18",
			rating: 5,
			comment:
				"Instruktur sangat jelas dan sabar menjelaskan. Saya akhirnya paham inheritance dan polymorphism!"
		},
		{
			name: "Rina Oktaviani",
			date: "2025-10-20",
			rating: 5,
			comment:
				"Materinya komprehensif dan mudah diikuti. Cocok banget buat yang baru mulai belajar Java."
		},
		{
			name: "Dewi Lestari",
			date: "2025-10-22",
			rating: 4,
			comment:
				"Project akhirnya seru banget, bisa langsung praktek bikin aplikasi OOP sederhana."
		},
		{
			name: "Agus Saputra",
			date: "2025-10-23",
			rating: 5,
			comment:
				"Penjelasan exception handling-nya sangat detail. Sekarang saya paham bagaimana menghindari error di Java."
		},
		{
			name: "Fajar Nugroho",
			date: "2025-10-25",
			rating: 4,
			comment:
				"Materi collection framework-nya bagus, tapi butuh contoh tambahan untuk Map."
		},
		{
			name: "Linda Permata",
			date: "2025-10-26",
			rating: 5,
			comment:
				"Setelah ikut kelas ini, saya berhasil membuat aplikasi data mahasiswa sendiri. Recommended!"
		}
	]
	},

    {
	slug: "nodejs",
	name: "Node.js untuk Pemula sampai Mahir",
	category: ["Backend", "Node.js"],
	image: nodejs,
	instructor: "Eko Kurniawan Khannedy" as any,
	rating: 4.9,
	reviews: 1350,
	students: 678,
	lastUpdated: "Oktober 2025",
	language: "Bahasa Indonesia",
	price: 129000,
	originalPrice: 149000,
	recommended: true,

	description:
		"Bangun server dan API menggunakan Node.js. Pelajari juga ekosistem NPM, Express.js, serta praktik asynchronous programming untuk backend modern.",

	shortDescription: [
		"Kelas ini akan membimbing kamu memahami dasar-dasar Node.js, dari konsep event-driven architecture hingga membuat RESTful API dengan Express.js.",
		"Pengenalan Node.js: memahami cara kerja JavaScript di sisi server, perbedaan dengan bahasa backend lain, dan alasan Node.js sangat populer.",
		"Modul NPM: belajar mengelola dependensi, membuat package.json, serta menggunakan library populer di dunia Node.js.",
		"Asynchronous Programming: memahami callback, promise, dan async/await untuk menangani operasi non-blocking.",
		"RESTful API dengan Express.js: membangun API lengkap dengan routing, middleware, dan error handling.",
		"Database Integration: koneksi Node.js dengan MongoDB atau MySQL menggunakan ORM atau query builder.",
		"Deployment: belajar cara menjalankan server Node.js di VPS, serta praktik terbaik untuk menjaga performa dan keamanan aplikasi."
	],

	whatYouWillLearn: [
		"Dasar Node.js dan arsitektur event-driven",
		"Mengelola dependensi menggunakan NPM",
		"Membangun RESTful API dengan Express.js",
		"Menghubungkan Node.js dengan database",
		"Menerapkan asynchronous programming"
	],

	requirements: [
		"Memahami dasar JavaScript",
		"Memiliki komputer/laptop dengan Node.js terinstal",
		"Semangat belajar backend modern"
	],

	courseContent: [
		{ title: "Pengenalan Node.js", lectures: 6, duration: "2 jam" },
		{ title: "Asynchronous Programming", lectures: 8, duration: "3 jam" },
		{ title: "REST API dengan Express.js", lectures: 10, duration: "3 jam 30 menit" },
		{ title: "Database & Deployment", lectures: 6, duration: "2 jam 15 menit" }
	],

	forWho: [
		"Pemula yang ingin belajar backend",
		"Web developer yang ingin memperluas skill ke Node.js",
		"Mahasiswa atau profesional IT"
	],

	comments: [
		{
			name: "Andika Saputra",
			date: "2025-10-12",
			rating: 5,
			comment:
				"Kelasnya sangat bagus untuk memahami dasar backend. Penjelasan Express.js-nya mudah dipahami banget!"
		},
		{
			name: "Sari Dewi",
			date: "2025-10-18",
			rating: 5,
			comment:
				"Belajar konsep async/await di sini jadi lebih jelas. Materinya lengkap dan up to date!"
		},
		{
			name: "Rizky Ahmad",
			date: "2025-10-20",
			rating: 4,
			comment:
				"Saya suka bagian project API-nya, tapi semoga ke depan ada tambahan materi deployment dengan Docker."
		},
		{
			name: "Lina Kusuma",
			date: "2025-10-23",
			rating: 5,
			comment:
				"Instruktur menjelaskan dengan sangat baik. Cocok buat pemula yang baru masuk ke dunia backend!"
		},
		{
			name: "Yoga Pratama",
			date: "2025-10-25",
			rating: 5,
			comment:
				"Setelah ikut kelas ini saya bisa bikin server API sendiri. Worth it banget!"
		}
	]
	},

    {
	slug: "laravel",
	name: "Laravel untuk Pemula sampai Mahir",
	category: ["Backend", "Laravel"],
	image: laravel,
	instructor: "Eko Kurniawan Khannedy" as any,
	rating: 4.9,
	reviews: 1570,
	students: 954,
	lastUpdated: "Oktober 2025",
	language: "Bahasa Indonesia",
	price: 139000,
	originalPrice: 169000,
	recommended: true,

	description:
		"Pelajari Laravel, framework PHP paling populer untuk membangun aplikasi web modern. Kuasai MVC, routing, migration, Eloquent ORM, dan authentication dari dasar hingga mahir.",

	shortDescription: [
		"Kelas ini dirancang untuk membantu kamu memahami dan menguasai Laravel — framework PHP yang efisien, elegan, dan powerful untuk membangun aplikasi web modern.",
		"Pengenalan Laravel: memahami konsep MVC, struktur folder, dan cara kerja Laravel di balik layar.",
		"Routing & Controller: belajar membuat route dinamis dan controller modular untuk memisahkan logika aplikasi.",
		"Database Migration & Seeder: memahami cara membuat, mengubah, dan mengisi database menggunakan migration dan seeder Laravel.",
		"Eloquent ORM: belajar mengelola data dengan cara yang lebih mudah menggunakan model dan relasi antar tabel.",
		"Blade Template Engine: membangun tampilan web interaktif dengan sistem templating Laravel.",
		"Authentication & Authorization: membuat sistem login, register, dan proteksi halaman berbasis role.",
		"Project Akhir: membangun aplikasi manajemen data lengkap dengan CRUD, autentikasi, dan dashboard admin."
	],

	whatYouWillLearn: [
		"Dasar framework Laravel dan struktur MVC",
		"Membuat CRUD (Create, Read, Update, Delete)",
		"Mengelola database dengan Migration & Eloquent ORM",
		"Menerapkan sistem login dan register",
		"Membangun project web modern menggunakan Laravel"
	],

	requirements: [
		"Memahami dasar PHP dan database MySQL",
		"Memiliki komputer/laptop dengan XAMPP atau Laravel Valet",
		"Semangat belajar tinggi dan konsisten"
	],

	courseContent: [
		{ title: "Pengenalan Laravel", lectures: 6, duration: "2 jam" },
		{ title: "Routing, Controller & Blade", lectures: 8, duration: "3 jam" },
		{ title: "Eloquent ORM & Database", lectures: 9, duration: "3 jam 15 menit" },
		{ title: "Authentication & Middleware", lectures: 7, duration: "2 jam 45 menit" },
		{ title: "Project Akhir: CRUD Aplikasi Manajemen Data", lectures: 5, duration: "2 jam 30 menit" }
	],

	forWho: [
		"Developer PHP yang ingin upgrade skill ke framework modern",
		"Pemula yang ingin membangun aplikasi web profesional",
		"Mahasiswa atau profesional IT yang ingin memahami Laravel"
	],

	comments: [
		{
			name: "Rizal Pratama",
			date: "2025-10-12",
			rating: 5,
			comment:
				"Kelas ini luar biasa! Penjelasan Eloquent dan migration sangat detail. Sekarang saya bisa bikin CRUD sendiri!"
		},
		{
			name: "Sinta Marlina",
			date: "2025-10-15",
			rating: 5,
			comment:
				"Materinya mudah diikuti dan sangat lengkap. Bagian authentication-nya membantu banget!"
		},
		{
			name: "Andi Nugraha",
			date: "2025-10-18",
			rating: 4,
			comment:
				"Saya suka cara pengajar menjelaskan konsep MVC. Mungkin bisa ditambah contoh proyek yang lebih kompleks."
		},
		{
			name: "Dewi Anggraini",
			date: "2025-10-22",
			rating: 5,
			comment:
				"Laravel jadi lebih mudah dipahami berkat kursus ini. Template Blade-nya keren banget!"
		},
		{
			name: "Yuda Firmansyah",
			date: "2025-10-25",
			rating: 5,
			comment:
				"Sangat bermanfaat untuk saya yang baru belajar Laravel. Penjelasannya jelas dan langsung praktik!"
		}
	]
	},

	{
		slug: "mysql",
		name: "MySQL untuk Pemula sampai Mahir",
		category: ["Database", "MySQL", "SQL"],
		image: mysql,
		instructor: "Eko Kurniawan Khannedy" as any,
		rating: 4.8,
		reviews: 1130,
		students: 823,
		lastUpdated: "Oktober 2025",
		language: "Bahasa Indonesia",
		price: 129000,
		originalPrice: 149000,
		recommended: true,

		description:
			"Pelajari MySQL — sistem manajemen database relasional (RDBMS) paling populer di dunia. Kuasai cara membuat, mengelola, dan mengoptimalkan database untuk aplikasi web dan backend.",

		shortDescription: [
			"Kelas ini mengajarkan dasar hingga tingkat lanjut dalam menggunakan MySQL. Kamu akan mempelajari cara membuat database, tabel, relasi, serta melakukan query kompleks menggunakan SQL.",
			"Pengenalan Database & SQL: memahami konsep database relasional, tabel, dan hubungan antar data.",
			"Manipulasi Data: belajar membuat, membaca, memperbarui, dan menghapus data menggunakan perintah SQL (CRUD).",
			"Relasi Tabel: memahami primary key, foreign key, dan normalisasi data untuk desain database yang efisien.",
			"Indexing & Optimisasi Query: meningkatkan performa database dengan teknik indexing dan analisis query.",
			"Backup & Restore: menjaga keamanan data dengan backup otomatis dan pemulihan database.",
			"Project Akhir: merancang dan mengimplementasikan database untuk aplikasi manajemen data nyata."
		],

		whatYouWillLearn: [
			"Dasar-dasar SQL dan perintah CRUD",
			"Membuat dan mengelola database serta tabel",
			"Membangun relasi antar tabel dengan foreign key",
			"Mengoptimalkan performa query dengan indexing",
			"Menerapkan backup dan restore data di MySQL"
		],

		requirements: [
			"Memahami dasar logika pemrograman",
			"Memiliki komputer dengan XAMPP atau MySQL Server",
			"Semangat belajar konsep database relasional"
		],

		courseContent: [
			{ title: "Pengenalan Database & SQL", lectures: 6, duration: "2 jam 15 menit" },
			{ title: "Manipulasi Data (CRUD)", lectures: 8, duration: "3 jam" },
			{ title: "Relasi Antar Tabel & Normalisasi", lectures: 7, duration: "2 jam 45 menit" },
			{ title: "Indexing & Optimisasi Query", lectures: 6, duration: "2 jam" },
			{ title: "Project Akhir: Database Manajemen Aplikasi", lectures: 5, duration: "2 jam 30 menit" }
		],

		forWho: [
			"Pemula yang ingin memahami dasar database",
			"Developer backend dan web yang ingin memperkuat skill SQL",
			"Mahasiswa atau profesional IT yang ingin menguasai MySQL"
		],

		comments: [
			{
				name: "Bima Saputra",
				date: "2025-10-11",
				rating: 5,
				comment:
					"Penjelasan konsep relasi tabel sangat membantu! Sekarang saya bisa bikin database untuk proyek Laravel saya sendiri."
			},
			{
				name: "Rina Puspita",
				date: "2025-10-14",
				rating: 5,
				comment:
					"Kelasnya jelas dan praktis, terutama bagian query JOIN dan indexing. Materi sangat aplikatif!"
			},
			{
				name: "Agung Ramadhan",
				date: "2025-10-19",
				rating: 4,
				comment:
					"Sangat bagus untuk pemula. Tapi akan lebih keren kalau ditambah contoh integrasi dengan Node.js atau PHP."
			},
			{
				name: "Tia Wulandari",
				date: "2025-10-23",
				rating: 5,
				comment:
					"Instruktur menjelaskan dengan detail dan mudah dipahami. Sekarang saya mengerti bagaimana optimasi query bekerja."
			},
			{
				name: "Dedi Kurniawan",
				date: "2025-10-26",
				rating: 5,
				comment:
					"Materinya mantap, dari dasar sampai indexing. Cocok banget buat mahasiswa dan developer backend!"
			}
		]
	},

	{
		slug: "docker",
		name: "Docker untuk Pemula sampai Mahir",
		category: ["DevOps", "Docker"],
		image: docker,
		instructor: "Eko Kurniawan Khannedy" as any,
		rating: 4.8,
		reviews: 980,
		students: 912,
		lastUpdated: "Oktober 2025",
		language: "Bahasa Indonesia",
		price: 139000,
		originalPrice: 159000,
		recommended: true,

		description:
			"Pelajari cara menggunakan Docker untuk membuat, mengelola, dan menjalankan container aplikasi dengan mudah. Cocok untuk developer backend dan DevOps.",

		shortDescription: [
			"Pelajari konsep dasar container dan cara Docker bekerja di berbagai platform.",
			"Instalasi dan konfigurasi Docker di Windows, macOS, dan Linux.",
			"Membuat image, menjalankan container, serta memahami Dockerfile.",
			"Belajar networking, volume, dan best practices untuk deployment aplikasi menggunakan Docker.",
			"Project Akhir: Membuat aplikasi web containerized dengan Docker Compose."
		],

		whatYouWillLearn: [
			"Dasar containerization dengan Docker",
			"Membuat dan mengelola Docker image",
			"Konfigurasi Docker Compose untuk deployment",
			"Optimisasi workflow development"
		],

		requirements: [
			"Mengetahui dasar pemrograman",
			"Memiliki komputer dengan Docker terinstal",
			"Semangat belajar DevOps"
		],

		courseContent: [
			{ title: "Pengenalan Docker", lectures: 8, duration: "2 jam" },
			{ title: "Docker Image & Container", lectures: 10, duration: "3 jam" },
			{ title: "Docker Networking & Volume", lectures: 7, duration: "2 jam 30 menit" },
			{ title: "Project Akhir: Docker Compose", lectures: 5, duration: "2 jam" }
		],

		forWho: [
			"Backend Developer",
			"DevOps Engineer",
			"Programmer yang ingin memahami containerization"
		],

		comments: [
			{
				name: "Rizky Aditya",
				date: "2025-10-12",
				rating: 5,
				comment: "Penjelasan sangat rinci dan banyak demo praktik. Recommended banget!"
			},
			{
				name: "Sari Lestari",
				date: "2025-10-15",
				rating: 4,
				comment: "Materinya lengkap, tapi ada bagian yang agak cepat saat networking."
			}
		]
	},

	{
		slug: "html-css-js",
		name: "HTML untuk Pemula sampai Mahir",
		category: ["Frontend", "Web Development"],
		image: html,
		instructor: "Eko Kurniawan Khannedy" as any,
		rating: 4.7,
		reviews: 1150,
		students: 1540,
		lastUpdated: "September 2025",
		language: "Bahasa Indonesia",
		price: 119000,
		originalPrice: 139000,
		recommended: true,

		description:
			"Pelajari dasar pengembangan web dengan HTML, CSS, dan JavaScript. Cocok untuk pemula yang ingin mulai menjadi Frontend Developer.",

		shortDescription: [
			"Belajar struktur HTML5 untuk membangun halaman web modern.",
			"Gunakan CSS3 untuk styling dan layout responsif.",
			"Pelajari dasar JavaScript seperti variabel, fungsi, dan DOM manipulation.",
			"Bangun project website portofolio dari nol."
		],

		whatYouWillLearn: [
			"Struktur halaman dengan HTML5",
			"Desain responsif dengan CSS",
			"Interaktivitas dengan JavaScript",
			"Proyek web portofolio lengkap"
		],

		requirements: [
			"Tidak perlu pengalaman coding sebelumnya",
			"Browser modern (Chrome/Edge)",
			"Koneksi internet stabil"
		],

		courseContent: [
			{ title: "Dasar HTML", lectures: 6, duration: "1 jam 30 menit" },
			{ title: "Styling dengan CSS", lectures: 8, duration: "2 jam 15 menit" },
			{ title: "Logika Dasar JavaScript", lectures: 10, duration: "3 jam" },
			{ title: "Mini Project: Website Portofolio", lectures: 4, duration: "2 jam" }
		],

		forWho: [
			"Pemula yang ingin belajar web development",
			"Mahasiswa IT",
			"Desainer yang ingin memahami HTML dan CSS"
		],

		comments: [
			{
				name: "Andi Putra",
				date: "2025-10-10",
				rating: 5,
				comment: "Sangat cocok buat pemula, penjelasannya mudah dipahami!"
			},
			{
				name: "Maya Ayu",
				date: "2025-10-16",
				rating: 4,
				comment: "Kelas bagus, tapi bagian JavaScript bisa dibuat lebih dalam lagi."
			}
		]
	},

	{
		slug: "vuejs",
		name: "Vue.js untuk Pemula sampai Mahir",
		category: ["Frontend", "Vue.js"],
		image: vue,
		instructor: "Eko Kurniawan Khannedy" as any,
		rating: 4.8,
		reviews: 870,
		students: 760,
		lastUpdated: "Oktober 2025",
		language: "Bahasa Indonesia",
		price: 139000,
		originalPrice: 159000,
		recommended: true,

		description:
			"Pelajari framework Vue.js untuk membangun aplikasi web interaktif dengan arsitektur modern dan reactive data binding.",

		shortDescription: [
			"Pengenalan Vue.js dan konsep reactivity.",
			"Belajar komponen, props, dan event handling.",
			"Membuat aplikasi SPA (Single Page Application) dengan Vue Router.",
			"Integrasi API dan state management menggunakan Pinia/Vuex."
		],

		whatYouWillLearn: [
			"Dasar framework Vue.js",
			"State management dengan Vuex",
			"Routing dan komponen dinamis",
			"Integrasi REST API"
		],

		requirements: [
			"Pengetahuan dasar HTML, CSS, dan JavaScript",
			"Editor kode seperti VS Code",
			"Koneksi internet"
		],

		courseContent: [
			{ title: "Pengenalan Vue", lectures: 6, duration: "2 jam" },
			{ title: "Komponen dan Props", lectures: 8, duration: "3 jam" },
			{ title: "Routing dan SPA", lectures: 5, duration: "2 jam" },
			{ title: "Project Akhir", lectures: 6, duration: "3 jam" }
		],

		forWho: [
			"Frontend Developer",
			"Mahasiswa IT",
			"Programmer yang ingin mempelajari framework modern"
		],

		comments: [
			{
				name: "Yusuf Maulana",
				date: "2025-10-17",
				rating: 5,
				comment: "Vue jadi terasa mudah setelah ikut kelas ini. Penjelasan clear banget!"
			},
			{
				name: "Dina Permata",
				date: "2025-10-19",
				rating: 4,
				comment: "Bagian tentang state management sangat bermanfaat."
			}
		]
	},

	{
		slug: "php",
		name: "PHP untuk Pemula sampai Mahir",
		category: ["Backend", "PHP"],
		image: php,
		instructor: "Eko Kurniawan Khannedy" as any,
		rating: 4.6,
		reviews: 950,
		students: 1020,
		lastUpdated: "September 2025",
		language: "Bahasa Indonesia",
		price: 119000,
		originalPrice: 139000,
		recommended: false,

		description:
			"Pelajari PHP untuk membangun website dan aplikasi backend. Termasuk PDO, OOP, dan koneksi database MySQL.",

		shortDescription: [
			"Dasar PHP dan cara kerja server-side scripting.",
			"Manipulasi form, session, dan cookie.",
			"Konsep OOP di PHP dan koneksi database.",
			"Project: Website dengan sistem login dan CRUD."
		],

		whatYouWillLearn: [
			"Dasar syntax dan fungsi PHP",
			"Penggunaan OOP dan PDO",
			"Membangun CRUD dengan PHP dan MySQL",
			"Deployment aplikasi PHP"
		],

		requirements: [
			"Pengetahuan dasar HTML & CSS",
			"XAMPP atau server lokal lainnya",
			"Semangat belajar backend"
		],

		courseContent: [
			{ title: "Dasar PHP", lectures: 8, duration: "2 jam 30 menit" },
			{ title: "OOP dan PDO", lectures: 10, duration: "3 jam" },
			{ title: "Project CRUD", lectures: 7, duration: "2 jam" }
		],

		forWho: [
			"Pemula yang ingin belajar web backend",
			"Mahasiswa IT",
			"Developer yang ingin memperdalam PHP"
		],

		comments: [
			{
				name: "Agung Saputra",
				date: "2025-10-21",
				rating: 5,
				comment: "PHP jadi terasa modern! Penjelasan PDO dan OOP sangat bagus."
			},
			{
				name: "Sinta Dewi",
				date: "2025-10-23",
				rating: 4,
				comment: "Materinya padat tapi jelas. Cocok untuk pemula yang serius belajar backend."
			}
		]
	},

	{
		slug: "spring-boot",
		name: "Spring Boot untuk Pemula sampai Mahir",
		category: ["Backend", "Java", "Spring Boot"],
		image: spring,
		instructor: "Eko Kurniawan Khannedy" as any,
		rating: 4.9,
		reviews: 1320,
		students: 980,
		lastUpdated: "Oktober 2025",
		language: "Bahasa Indonesia",
		price: 149000,
		originalPrice: 169000,
		recommended: true,

		description:
			"Pelajari framework Spring Boot untuk membangun RESTful API yang scalable dan siap produksi menggunakan Java.",

		shortDescription: [
			"Instalasi dan konfigurasi Spring Boot Project.",
			"Belajar Dependency Injection, REST Controller, dan JPA.",
			"Implementasi autentikasi JWT.",
			"Project Akhir: REST API lengkap dengan dokumentasi OpenAPI."
		],

		whatYouWillLearn: [
			"Dasar framework Spring Boot",
			"CRUD API menggunakan JPA dan Hibernate",
			"Autentikasi JWT dan keamanan API",
			"Best practice deployment aplikasi Java"
		],

		requirements: [
			"Pengetahuan dasar Java",
			"IntelliJ IDEA atau VS Code",
			"Koneksi internet"
		],

		courseContent: [
			{ title: "Pengenalan Spring Boot", lectures: 6, duration: "2 jam" },
			{ title: "REST API & JPA", lectures: 10, duration: "3 jam 15 menit" },
			{ title: "Keamanan JWT", lectures: 8, duration: "2 jam" },
			{ title: "Project Akhir", lectures: 6, duration: "2 jam 30 menit" }
		],

		forWho: [
			"Java Developer",
			"Backend Engineer",
			"Mahasiswa IT tingkat lanjut"
		],

		comments: [
			{
				name: "Teguh Rahman",
				date: "2025-10-18",
				rating: 5,
				comment: "Materi sangat profesional, cocok untuk developer Java berpengalaman!"
			},
			{
				name: "Rina Sulastri",
				date: "2025-10-20",
				rating: 5,
				comment: "Penjelasan tentang JWT sangat membantu. Recommended!"
			}
		]
	},
{
	slug: "reactjs",
	name: "ReactJS untuk Pemula sampai Mahir",
	category: ["Frontend", "Framework", "Web"],
	image: react,
	instructor: "Eko Kurniawan Khannedy" as any,
	rating: 4.9,
	reviews: 1375,
	students: 956,
	lastUpdated: "Oktober 2025",
	language: "Bahasa Indonesia",
	price: 129000,
	originalPrice: 149000,
	recommended: true,

	description:
		"Pelajari ReactJS dari dasar hingga teknik lanjutan: komponen, hooks, state management, routing, dan optimisasi performa untuk aplikasi web modern.",

	shortDescription: [
		"Pahami dasar React dan arsitektur komponen.",
		"Gunakan hooks (useState, useEffect, useMemo) untuk state & lifecycle.",
		"Bangun SPA dengan React Router dan konsumsi API.",
		"Pelajari teknik optimisasi dan best practices."
	],

	whatYouWillLearn: [
		"Dasar React & JSX",
		"State management dengan hooks",
		"Routing dan lazy-loading",
		"Menghubungkan ke REST API & optimisasi performa"
	],

	requirements: [
		"Dasar HTML, CSS, dan JavaScript",
		"Node.js terinstal",
		"Editor seperti VS Code"
	],

	courseContent: [
		{ title: "Pengenalan React & JSX", lectures: 5, duration: "1 jam 45 menit" },
		{ title: "Hooks & State", lectures: 8, duration: "2 jam 30 menit" },
		{ title: "Routing & Data Fetching", lectures: 6, duration: "2 jam" },
		{ title: "Optimisasi & Project Akhir", lectures: 6, duration: "3 jam" }
	],

	forWho: [
		"Frontend developer pemula sampai menengah",
		"Developer yang mau migrasi ke React",
		"Mahasiswa IT yang ingin portfolio React"
	],

	comments: [
		{
			name: "Nadia Firdaus",
			date: "2025-10-14",
			rating: 5,
			comment: "Kelas React sangat praktis dan langsung ke poin. Project akhirnya bagus untuk portofolio."
		},
		{
			name: "Rafi Ahmad",
			date: "2025-10-19",
			rating: 4,
			comment: "Materi hooks jelas, saya cuma mau lebih banyak contoh testing."
		}
	]
},

{
	slug: "mongodb",
	name: "MongoDB untuk Pemula sampai Mahir",
	category: ["Database", "NoSQL", "MongoDB"],
	image: mongo,
	instructor: "Eko Kurniawan Khannedy" as any,
	rating: 4.8,
	reviews: 945,
	students: 847,
	lastUpdated: "Oktober 2025",
	language: "Bahasa Indonesia",
	price: 129000,
	originalPrice: 149000,
	recommended: true,

	description:
		"Pelajari MongoDB — database NoSQL populer untuk menyimpan data fleksibel. Mulai dari CRUD, indexing, aggregations, hingga integrasi dengan aplikasi Node.js.",

	shortDescription: [
		"Belajar model data NoSQL dan saat menggunakan MongoDB.",
		"Operasi CRUD, indexing, dan best practices skema.",
		"Aggregation framework untuk query kompleks.",
		"Integrasi MongoDB dengan Node.js dan deployment."
	],

	whatYouWillLearn: [
		"Dasar MongoDB & BSON",
		"Mengelola koleksi dan dokumen",
		"Indexing & agregasi (aggregation pipeline)",
		"Integrasi MongoDB dengan aplikasi backend"
	],

	requirements: [
		"Dasar pemrograman (lebih baik tahu JavaScript/Node.js)",
		"MongoDB Community atau Atlas account"
	],

	courseContent: [
		{ title: "Pengenalan MongoDB & NoSQL", lectures: 5, duration: "1 jam 30 menit" },
		{ title: "CRUD & Indexing", lectures: 7, duration: "2 jam" },
		{ title: "Aggregation Pipeline", lectures: 6, duration: "2 jam 15 menit" },
		{ title: "Integration & Deployment", lectures: 5, duration: "2 jam" }
	],

	forWho: [
		"Backend developer yang butuh database fleksibel",
		"Developer yang bekerja dengan data semi-terstruktur",
		"Mahasiswa yang ingin memahami NoSQL"
	],

	comments: [
		{
			name: "Farah Indah",
			date: "2025-10-13",
			rating: 5,
			comment: "Aggregation pipeline jelas dijelaskan, sangat membantu!"
		},
		{
			name: "Tono Prasetyo",
			date: "2025-10-18",
			rating: 4,
			comment: "Bagus, cuma ingin tambahan pratice kasus realtime."
		}
	]
},

{
	slug: "kotlin",
	name: "Kotlin untuk Pemula sampai Mahir",
	category: ["Pemrograman", "Kotlin", "Android"],
	image: kotlin,
	instructor: "Eko Kurniawan Khannedy" as any,
	rating: 4.8,
	reviews: 720,
	students: 932,
	lastUpdated: "Oktober 2025",
	language: "Bahasa Indonesia",
	price: 129000,
	originalPrice: 149000,
	recommended: true,

	description:
		"Pelajari Kotlin sebagai bahasa modern untuk pengembangan Android dan backend. Mulai dari sintaks dasar, OOP, hingga penerapan pada Android Studio.",

	shortDescription: [
		"Pengenalan Kotlin dan keunggulannya dibanding Java.",
		"Dasar sintaks, fungsi, dan konsep OOP di Kotlin.",
		"Membuat aplikasi Android sederhana dengan Kotlin.",
		"Best practices dan interoperabilitas dengan Java."
	],

	whatYouWillLearn: [
		"Syntax dasar Kotlin & struktur project",
		"OOP dan functional features Kotlin",
		"Pengembangan aplikasi Android sederhana",
		"Interop Kotlin-Java dan deployment"
	],

	requirements: [
		"Pengetahuan dasar pemrograman",
		"Android Studio terinstal jika ingin belajar Android",
		"Komputer/laptop dengan resource memadai"
	],

	courseContent: [
		{ title: "Pengenalan Kotlin", lectures: 6, duration: "2 jam" },
		{ title: "OOP & Functional Kotlin", lectures: 8, duration: "2 jam 45 menit" },
		{ title: "Android Basics dengan Kotlin", lectures: 10, duration: "3 jam" },
		{ title: "Project Akhir: Aplikasi Android Sederhana", lectures: 6, duration: "3 jam" }
	],

	forWho: [
		"Developer Android pemula",
		"Programmer yang ingin belajar Kotlin modern",
		"Mahasiswa yang mau praktik mobile development"
	],

	comments: [
		{
			name: "Wulan Ayu",
			date: "2025-10-16",
			rating: 5,
			comment: "Materinya enak dibuat step-by-step, cocok untuk pemula Android."
		},
		{
			name: "Iqbal Setiawan",
			date: "2025-10-21",
			rating: 4,
			comment: "Keren, tapi minta tambahan materi coroutines."
		}
	]
},

{
	slug: "git",
	name: "Git untuk Pemula sampai Mahir",
	category: ["DevOps", "Git", "Tools"],
	image: git,
	instructor: "Eko Kurniawan Khannedy" as any,
	rating: 4.7,
	reviews: 890,
	students: 684,
	lastUpdated: "September 2025",
	language: "Bahasa Indonesia",
	price: 99000,
	originalPrice: 119000,
	recommended: true,

	description:
		"Pelajari Git — sistem version control yang wajib dikuasai developer. Mulai dari workflow dasar, branching, merge, hingga kolaborasi dengan GitHub/GitLab.",

	shortDescription: [
		"Dasar perintah Git: init, add, commit, push, pull.",
		"Branching & merging untuk workflow tim.",
		"Resolusi konflik dan teknik rebase.",
		"Kolaborasi menggunakan GitHub/GitLab dan CI basics."
	],

	whatYouWillLearn: [
		"Dasar Git & repository",
		"Branching strategies (feature branch, gitflow)",
		"Resolving conflicts & rebasing",
		"Integrasi dengan remote (GitHub/GitLab)"
	],

	requirements: [
		"Komputer dengan Git terinstal",
		"Dasar command line (bantuannya ada di kursus)"
	],

	courseContent: [
		{ title: "Pengenalan Git", lectures: 4, duration: "1 jam 15 menit" },
		{ title: "Branching & Merging", lectures: 6, duration: "2 jam" },
		{ title: "Kolaborasi & Remote", lectures: 5, duration: "1 jam 45 menit" },
		{ title: "Project: Workflow Tim", lectures: 3, duration: "1 jam" }
	],

	forWho: [
		"Semua developer yang butuh version control",
		"Tim yang ingin standar workflow Git",
		"Pemula yang ingin belajar kolaborasi kode"
	],

	comments: [
		{
			name: "Hendra Setiawan",
			date: "2025-10-11",
			rating: 5,
			comment: "Sangat membantu. Sekarang kerja tim jadi lebih rapi."
		},
		{
			name: "Mella Rahma",
			date: "2025-10-17",
			rating: 4,
			comment: "Bagian rebase menjelaskan konsep yang sering bikin bingung."
		}
	]
},

{
	slug: "postgre",
	name: "PostgreSQL untuk Pemula sampai Mahir",
	category: ["Database", "PostgreSQL", "SQL"],
	image: postgre,
	instructor: "Eko Kurniawan Khannedy" as any,
	rating: 4.8,
	reviews: 780,
	students: 876,
	lastUpdated: "Oktober 2025",
	language: "Bahasa Indonesia",
	price: 129000,
	originalPrice: 149000,
	recommended: true,

	description:
		"Pelajari PostgreSQL — RDBMS canggih dengan fitur lengkap: indexing, JSON support, advanced queries, dan performa untuk aplikasi produksi.",

	shortDescription: [
		"Fitur canggih PostgreSQL: window functions, CTE, JSONB.",
		"Indexing dan query planning untuk optimisasi performa.",
		"Backup & restore, serta replikasi dasar.",
		"Project akhir: mendesain database production-ready."
	],

	whatYouWillLearn: [
		"Advanced SQL (CTE, window functions)",
		"Indexing & query optimization",
		"JSONB & dokumen semi-struktural di Postgres",
		"Backup, restore, dan replikasi dasar"
	],

	requirements: [
		"Dasar SQL",
		"Postgres terinstal atau akses ke instance (local/remote)"
	],

	courseContent: [
		{ title: "Advanced SQL & CTE", lectures: 6, duration: "2 jam" },
		{ title: "Indexing & Query Planner", lectures: 7, duration: "2 jam 15 menit" },
		{ title: "JSONB & Data Types", lectures: 5, duration: "1 jam 45 menit" },
		{ title: "Production Readiness", lectures: 5, duration: "2 jam" }
	],

	forWho: [
		"Database engineer",
		"Backend developer yang butuh performa DB",
		"Analis data yang bekerja dengan SQL"
	],

	comments: [
		{
			name: "Denny Kurniawan",
			date: "2025-10-12",
			rating: 5,
			comment: "Materi Advanced SQL sangat berguna untuk optimisasi query."
		},
		{
			name: "Rizka Amelia",
			date: "2025-10-18",
			rating: 4,
			comment: "Penjelasan JSONB membantu sekali untuk project saya."
		}
	]
},

    {
	slug: "redis",
	name: "Redis untuk Pemula sampai Mahir",
	category: ["Database", "Redis", "Backend"],
	image: redis,
	instructor: "Eko Kurniawan Khannedy" as any,
	rating: 4.8,
	reviews: 820,
	students: 765,
	lastUpdated: "Oktober 2025",
	language: "Bahasa Indonesia",
	price: 129000,
	originalPrice: 149000,
	recommended: true,

	description:
		"Pelajari Redis, database in-memory super cepat untuk caching, session storage, dan real-time analytics. Cocok untuk backend modern dan sistem berskala besar.",

	shortDescription: [
		"Pengenalan Redis dan arsitektur in-memory-nya.",
		"Gunakan Redis untuk caching, session, dan queue.",
		"Implementasi Pub/Sub dan Redis Streams.",
		"Integrasi Redis dengan Node.js dan Go."
	],

	whatYouWillLearn: [
		"Dasar Redis & command utama",
		"Menggunakan Redis untuk caching & session",
		"Pub/Sub & message queue",
		"Integrasi Redis dengan backend"
	],

	requirements: [
		"Dasar pemrograman backend",
		"Redis terinstal (local atau Docker)",
		"Pengetahuan dasar HTTP/API"
	],

	courseContent: [
		{ title: "Pengenalan Redis", lectures: 5, duration: "1 jam 30 menit" },
		{ title: "Caching & Session Management", lectures: 6, duration: "2 jam" },
		{ title: "Pub/Sub & Streams", lectures: 6, duration: "2 jam 15 menit" },
		{ title: "Integrasi & Project Akhir", lectures: 5, duration: "2 jam" }
	],

	forWho: [
		"Backend developer",
		"Engineer yang ingin optimalkan performa aplikasi",
		"Mahasiswa yang ingin memahami caching modern"
	],

	comments: [
		{
			name: "Adi Nugraha",
			date: "2025-10-14",
			rating: 5,
			comment: "Penjelasan caching dengan Redis sangat mudah dipahami. Mantap!"
		},
		{
			name: "Maya Lestari",
			date: "2025-10-20",
			rating: 4,
			comment: "Bagus banget! Tambahkan contoh penggunaan di Go juga."
		}
	]
},

{
	slug: "dart",
	name: "Dart untuk Pemula sampai Mahir",
	category: ["Pemrograman", "Dart", "Mobile"],
	image: dart,
	instructor: "Eko Kurniawan Khannedy" as any,
	rating: 4.9,
	reviews: 960,
	students: 1045,
	lastUpdated: "Oktober 2025",
	language: "Bahasa Indonesia",
	price: 129000,
	originalPrice: 149000,
	recommended: true,

	description:
		"Pelajari bahasa Dart dari dasar hingga mahir — pondasi utama untuk pengembangan aplikasi Flutter. Fokus pada syntax modern, OOP, dan asynchronous programming.",

	shortDescription: [
		"Memahami dasar syntax dan tipe data Dart.",
		"Object-Oriented Programming (OOP) di Dart.",
		"Asynchronous programming dengan Future dan Stream.",
		"Fundamental penting untuk Flutter development."
	],

	whatYouWillLearn: [
		"Dasar bahasa Dart",
		"Fungsi, class, dan async programming",
		"Null safety & modern Dart features",
		"Persiapan pengembangan Flutter"
	],

	requirements: [
		"Pengetahuan dasar logika pemrograman",
		"Instalasi Dart SDK atau Flutter SDK",
		"Editor seperti VS Code atau Android Studio"
	],

	courseContent: [
		{ title: "Pengenalan & Setup", lectures: 4, duration: "1 jam" },
		{ title: "Sintaks & Struktur Dasar", lectures: 6, duration: "2 jam" },
		{ title: "OOP & Null Safety", lectures: 7, duration: "2 jam 30 menit" },
		{ title: "Async & Stream", lectures: 5, duration: "2 jam" }
	],

	forWho: [
		"Developer yang ingin belajar Flutter",
		"Mahasiswa yang ingin belajar bahasa modern",
		"Programmer yang ingin memahami Dart"
	],

	comments: [
		{
			name: "Dwi Santoso",
			date: "2025-10-15",
			rating: 5,
			comment: "Materinya ringan dan jelas. Pas banget buat dasar Flutter."
		},
		{
			name: "Intan Maharani",
			date: "2025-10-21",
			rating: 4,
			comment: "Kelas bagus, tapi ingin tambahan materi null safety lebih detail."
		}
	]
},

{
	slug: "typescript",
	name: "TypeScript untuk Pemula sampai Mahir",
	category: ["Pemrograman", "TypeScript", "Frontend"],
	image: typescript,
	instructor: "Eko Kurniawan Khannedy" as any,
	rating: 4.8,
	reviews: 870,
	students: 912,
	lastUpdated: "Oktober 2025",
	language: "Bahasa Indonesia",
	price: 129000,
	originalPrice: 149000,
	recommended: true,

	description:
		"Pelajari TypeScript untuk menulis kode JavaScript yang aman dan terstruktur. Mulai dari tipe dasar, interface, class, hingga integrasi dengan React & Node.js.",

	shortDescription: [
		"Belajar static typing untuk JavaScript modern.",
		"Menggunakan interface, class, dan generic.",
		"Integrasi TypeScript di project React & Node.js.",
		"Best practices untuk maintainable code."
	],

	whatYouWillLearn: [
		"Dasar TypeScript & konfigurasi project",
		"Tipe data, interface, dan class",
		"Generic, module, dan namespace",
		"Integrasi dengan React & Node.js"
	],

	requirements: [
		"Pemahaman dasar JavaScript",
		"Node.js dan npm terinstal"
	],

	courseContent: [
		{ title: "Pengenalan TypeScript", lectures: 5, duration: "1 jam 30 menit" },
		{ title: "Type & Interface", lectures: 7, duration: "2 jam" },
		{ title: "Class & Generic", lectures: 6, duration: "2 jam" },
		{ title: "Integrasi Project Nyata", lectures: 5, duration: "2 jam" }
	],

	forWho: [
		"Frontend atau backend developer",
		"Developer JavaScript yang ingin upgrade skill",
		"Mahasiswa yang belajar framework modern"
	],

	comments: [
		{
			name: "Bagus Ramadhan",
			date: "2025-10-13",
			rating: 5,
			comment: "TypeScript dijelaskan dari dasar, jadi ngerti banget. Suka banget!"
		},
		{
			name: "Lina Agustin",
			date: "2025-10-18",
			rating: 4,
			comment: "Lengkap dan jelas, terutama bagian generic-nya."
		}
	]
},

{
	slug: "elasticsearch",
	name: "Elasticsearch untuk Pemula sampai Mahir",
	category: ["Database", "Search Engine", "Elasticsearch"],
	image: elastic,
	instructor: "Eko Kurniawan Khannedy",
	rating: 4.9,
	reviews: 760,
	students: 803,
	lastUpdated: "Oktober 2025",
	language: "Bahasa Indonesia",
	price: 149000,
	originalPrice: 169000,
	recommended: true,

	description:
		"Pelajari Elasticsearch untuk membangun fitur pencarian cepat, analisis data real-time, dan indexing teks yang kuat. Cocok untuk aplikasi berskala besar.",

	shortDescription: [
		"Pengenalan Elasticsearch & konsep indexing.",
		"Menggunakan Query DSL dan analisis data real-time.",
		"Integrasi Elasticsearch dengan Node.js.",
		"Monitoring dan tuning performa cluster."
	],

	whatYouWillLearn: [
		"Dasar Elasticsearch & cluster setup",
		"Query DSL dan full-text search",
		"Integrasi dengan backend modern",
		"Optimisasi performa dan scaling"
	],

	requirements: [
		"Dasar REST API & JSON",
		"Pengetahuan backend (Node.js/Java/Go)"
	],

	courseContent: [
		{ title: "Pengenalan & Instalasi", lectures: 4, duration: "1 jam" },
		{ title: "Indexing & Query DSL", lectures: 7, duration: "2 jam" },
		{ title: "Integrasi Aplikasi", lectures: 6, duration: "2 jam" },
		{ title: "Monitoring & Scaling", lectures: 5, duration: "2 jam 30 menit" }
	],

	forWho: [
		"Backend dan data engineer",
		"Developer yang ingin menambah fitur pencarian",
		"Mahasiswa yang belajar big data"
	],

	comments: [
		{
			name: "Rio Prasetyo",
			date: "2025-10-19",
			rating: 5,
			comment: "Materinya lengkap banget, terutama bagian query DSL. Keren!"
		},
		{
			name: "Alya Rahmah",
			date: "2025-10-24",
			rating: 4,
			comment: "Menarik dan sangat membantu, cuma ingin ada tambahan soal cluster tuning."
		}
	]
},

{
	slug: "jenkins",
	name: "Jenkin untuk Pemula sampai Mahir",
	category: ["DevOps", "Automation", "Jenkins"],
	image: jenkins,
	instructor: "Eko Kurniawan Khannedy",
	rating: 4.8,
	reviews: 910,
	students: 721,
	lastUpdated: "Oktober 2025",
	language: "Bahasa Indonesia",
	price: 149000,
	originalPrice: 169000,
	recommended: true,

	description:
		"Pelajari Jenkins untuk mengotomatisasi build, test, dan deployment aplikasi Anda. Fokus pada CI/CD pipeline modern dan integrasi dengan Git & Docker.",

	shortDescription: [
		"Pengenalan CI/CD dan Jenkins setup.",
		"Membuat pipeline otomatis untuk build & test.",
		"Integrasi dengan Git, Docker, dan server produksi.",
		"Monitoring dan optimisasi pipeline."
	],

	whatYouWillLearn: [
		"Konsep CI/CD modern",
		"Pipeline as Code di Jenkinsfile",
		"Integrasi dengan Docker & Git",
		"Deployment otomatis & notifikasi build"
	],

	requirements: [
		"Dasar DevOps & Docker",
		"Git dan akses ke repo project"
	],

	courseContent: [
		{ title: "Dasar CI/CD & Instalasi Jenkins", lectures: 4, duration: "1 jam 15 menit" },
		{ title: "Membangun Pipeline", lectures: 6, duration: "2 jam" },
		{ title: "Integrasi Docker & Git", lectures: 6, duration: "2 jam 15 menit" },
		{ title: "Monitoring & Deployment", lectures: 5, duration: "2 jam" }
	],

	forWho: [
		"DevOps engineer & backend developer",
		"Tim yang ingin otomatisasi proses build/deploy",
		"Mahasiswa yang ingin memahami CI/CD"
	],

	comments: [
		{
			name: "Bintang Arif",
			date: "2025-10-20",
			rating: 5,
			comment: "Langsung bisa bikin pipeline sendiri, mantap banget kursusnya!"
		},
		{
			name: "Tasya Nurul",
			date: "2025-10-23",
			rating: 4,
			comment: "Bagus dan jelas, tapi ingin ada bagian integrasi ke Kubernetes."
		}
	]
},

{
	slug: "android",
	name: "Android untuk Pemula sampai Mahir",
	category: ["Mobile", "Android", "Programming"],
	image: android,
	instructor: "Eko Kurniawan Khannedy",
	rating: 4.9,
	reviews: 1287,
	students: 921,
	lastUpdated: "Oktober 2025",
	language: "Bahasa Indonesia",
	price: 129000,
	originalPrice: 149000,
	recommended: true,

	description:
		"Belajar membuat aplikasi Android dari dasar hingga mahir menggunakan Kotlin dan Android Studio. Termasuk pembuatan UI modern, koneksi API, dan deployment ke Play Store.",

	shortDescription: [
		"Belajar dasar-dasar Android Studio dan Kotlin.",
		"Membangun UI modern dengan Material Design.",
		"Menghubungkan aplikasi dengan REST API.",
		"Mengelola data lokal menggunakan Room Database.",
		"Men-deploy aplikasi ke Google Play Store."
	],

	whatYouWillLearn: [
		"Pemrograman Kotlin untuk Android",
		"Desain UI/UX dengan Material Design",
		"Networking dan API handling (Retrofit)",
		"Database lokal dengan Room & SQLite",
		"Debugging dan optimisasi performa aplikasi",
		"Publikasi aplikasi ke Play Store"
	],

	requirements: [
		"Dasar logika pemrograman",
		"Laptop/PC dengan Android Studio terpasang",
		"Minat untuk membuat aplikasi mobile"
	],

	courseContent: [
		{ title: "Pengenalan Android & Setup Lingkungan", lectures: 4, duration: "1 jam 20 menit" },
		{ title: "Belajar Kotlin untuk Android", lectures: 6, duration: "2 jam 10 menit" },
		{ title: "Desain Tampilan dengan Material Design", lectures: 5, duration: "1 jam 45 menit" },
		{ title: "Koneksi API & Manajemen Data", lectures: 6, duration: "2 jam 30 menit" },
		{ title: "Testing & Deployment ke Play Store", lectures: 5, duration: "1 jam 50 menit" }
	],

	forWho: [
		"Mahasiswa dan pemula yang ingin menjadi Android Developer",
		"Developer web yang ingin masuk ke dunia mobile development",
		"Profesional yang ingin membuat aplikasi Android pribadi atau startup"
	],

	comments: [
		{
			name: "Rizky Ananda",
			date: "2025-10-22",
			rating: 5,
			comment: "Penjelasannya mudah dipahami, langsung bisa buat app sederhana!"
		},
		{
			name: "Dewi Rahmawati",
			date: "2025-10-25",
			rating: 5,
			comment: "Materinya lengkap banget, cocok buat pemula maupun yang udah pernah nyoba Android sebelumnya."
		}
	]
},
{
	slug: "openapi",
	name: "OpenAPI untuk Pemula sampai Mahir",
	category: ["API", "Documentation", "Backend"],
	image: openapi,
	instructor: "Eko Kurniawan Khannedy",
	rating: 4.8,
	reviews: 784,
	students: 601,
	lastUpdated: "Oktober 2025",
	language: "Bahasa Indonesia",
	price: 129000,
	originalPrice: 149000,
	recommended: true,

	description:
		"Pelajari OpenAPI Specification (Swagger) untuk mendesain, mendokumentasikan, dan menguji API secara efisien. Termasuk integrasi dengan Node.js, Express, dan Postman.",

	shortDescription: [
		"Memahami konsep dasar OpenAPI dan Swagger.",
		"Mendesain dokumentasi API yang profesional.",
		"Mengintegrasikan OpenAPI dengan project backend.",
		"Menguji endpoint menggunakan Swagger UI dan Postman."
	],

	whatYouWillLearn: [
		"Menulis dokumentasi API menggunakan OpenAPI 3.0",
		"Membangun Swagger UI untuk testing",
		"Integrasi dengan Node.js dan Express",
		"Best practice dalam dokumentasi API"
	],

	requirements: [
		"Dasar REST API dan HTTP",
		"Mengetahui dasar Node.js atau bahasa backend lainnya"
	],

	courseContent: [
		{ title: "Pengenalan OpenAPI & Swagger", lectures: 5, duration: "1 jam 30 menit" },
		{ title: "Menulis Spesifikasi API", lectures: 6, duration: "2 jam" },
		{ title: "Integrasi Swagger UI", lectures: 5, duration: "1 jam 45 menit" },
		{ title: "Testing & Dokumentasi Otomatis", lectures: 4, duration: "1 jam 15 menit" }
	],

	forWho: [
		"Backend developer dan API engineer",
		"Tim dokumentasi teknis",
		"Mahasiswa yang belajar REST API"
	],

	comments: [
		{
			name: "Bagus Pratama",
			date: "2025-10-18",
			rating: 5,
			comment: "Sekarang API project saya jauh lebih terstruktur dan profesional. Sangat bermanfaat!"
		},
		{
			name: "Citra Ayu",
			date: "2025-10-21",
			rating: 4,
			comment: "Materinya bagus, tapi butuh tambahan contoh untuk autentikasi JWT."
		}
	]
},

{
	slug: "restfullapi",
	name: "RESTful API untuk Pemula sampai Mahir",
	category: ["API", "Backend", "Web"],
	image: restfull,
	instructor: "Eko Kurniawan Khannedy",
	rating: 4.9,
	reviews: 1012,
	students: 972,
	lastUpdated: "Oktober 2025",
	language: "Bahasa Indonesia",
	price: 129000,
	originalPrice: 149000,
	recommended: true,

	description:
		"Pelajari konsep RESTful API dari dasar hingga mahir. Bangun API profesional menggunakan Node.js dan Express dengan praktik terbaik untuk keamanan dan performa.",

	shortDescription: [
		"Konsep dasar REST dan HTTP Method.",
		"Membangun REST API dengan Node.js & Express.",
		"Autentikasi JWT dan middleware keamanan.",
		"Testing & dokumentasi API secara otomatis."
	],

	whatYouWillLearn: [
		"HTTP Method, Route, dan Status Code",
		"CRUD API dengan Express",
		"Autentikasi & Autorisasi JWT",
		"Best practice RESTful API"
	],

	requirements: [
		"Dasar JavaScript dan Node.js",
		"Mengetahui cara kerja server dan HTTP"
	],

	courseContent: [
		{ title: "Pengenalan REST & HTTP", lectures: 5, duration: "1 jam 20 menit" },
		{ title: "Membangun CRUD API", lectures: 6, duration: "2 jam 15 menit" },
		{ title: "Autentikasi JWT", lectures: 5, duration: "2 jam" },
		{ title: "Testing & Deployment", lectures: 4, duration: "1 jam 30 menit" }
	],

	forWho: [
		"Backend developer",
		"Mahasiswa yang ingin memahami REST API",
		"Engineer yang ingin membangun layanan web modern"
	],

	comments: [
		{
			name: "Rangga Saputra",
			date: "2025-10-20",
			rating: 5,
			comment: "Materinya sangat jelas dan langsung bisa diterapkan untuk project real!"
		},
		{
			name: "Anisa Putri",
			date: "2025-10-23",
			rating: 5,
			comment: "Kelas ini sangat lengkap. Pembahasan tentang JWT sangat membantu."
		}
	]
},

{
	slug: "http",
	name: "HTTP untuk Pemula sampai Mahir",
	category: ["API", "HTTP", "Web"],
	image: http,
	instructor: "Eko Kurniawan Khannedy",
	rating: 4.7,
	reviews: 845,
	students: 741,
	lastUpdated: "Oktober 2025",
	language: "Bahasa Indonesia",
	price: 129000,
	originalPrice: 149000,

	description:
		"Pahami cara kerja protokol HTTP yang menjadi dasar komunikasi internet. Pelajari request, response, header, cookie, dan status code dengan contoh nyata.",

	shortDescription: [
		"Pengenalan HTTP dan peran pentingnya di web.",
		"Memahami request, response, dan header.",
		"Mengenal metode GET, POST, PUT, DELETE.",
		"Membuat server sederhana untuk simulasi HTTP."
	],

	whatYouWillLearn: [
		"Dasar protokol HTTP",
		"Struktur request dan response",
		"Status code dan header",
		"Implementasi HTTP di server Node.js"
	],

	requirements: [
		"Pemahaman dasar web dan browser",
		"Mengetahui dasar JavaScript"
	],

	courseContent: [
		{ title: "Konsep Dasar HTTP", lectures: 4, duration: "1 jam" },
		{ title: "Request & Response", lectures: 5, duration: "1 jam 40 menit" },
		{ title: "Header, Cookie & Status Code", lectures: 5, duration: "1 jam 30 menit" },
		{ title: "Implementasi di Node.js", lectures: 4, duration: "1 jam 20 menit" }
	],

	forWho: [
		"Mahasiswa dan developer pemula",
		"Engineer yang ingin memahami komunikasi API",
		"Orang yang ingin memperkuat dasar jaringan web"
	],

	comments: [
		{
			name: "Andi Wijaya",
			date: "2025-10-18",
			rating: 5,
			comment: "Kelasnya ringan tapi padat. Sekarang saya paham betul cara kerja API!"
		},
		{
			name: "Fadhil Ahmad",
			date: "2025-10-22",
			rating: 4,
			comment: "Menarik dan detail, semoga nanti ada lanjutannya ke HTTPS."
		}
	]
},

{
	slug: "python",
	name: "Python untuk Pemula sampai Mahir",
	category: ["Programming", "Python", "Backend"],
	image: python,
	instructor: "Eko Kurniawan Khannedy",
	rating: 4.9,
	reviews: 1560,
	students: 998,
	lastUpdated: "Oktober 2025",
	language: "Bahasa Indonesia",
	price: 129000,
	originalPrice: 149000,
	recommended: true,

	description:
		"Pelajari Python dari dasar hingga mahir. Fokus pada pemrograman modern, manipulasi data, dan otomasi menggunakan library populer seperti Pandas dan Flask.",

	shortDescription: [
		"Belajar sintaks dasar Python.",
		"Membuat program interaktif & modular.",
		"Mengelola data dan file.",
		"Membangun web API sederhana dengan Flask."
	],

	whatYouWillLearn: [
		"Dasar pemrograman Python",
		"Manipulasi data & file",
		"OOP di Python",
		"Automasi dan pembuatan API"
	],

	requirements: [
		"Komputer dengan Python terinstal",
		"Semangat belajar dan eksplorasi"
	],

	courseContent: [
		{ title: "Dasar Python", lectures: 6, duration: "2 jam" },
		{ title: "Struktur Data & Fungsi", lectures: 6, duration: "2 jam 30 menit" },
		{ title: "OOP & Modul", lectures: 5, duration: "2 jam" },
		{ title: "Mini Project: Web API dengan Flask", lectures: 5, duration: "2 jam 15 menit" }
	],

	forWho: [
		"Pemula yang ingin belajar coding",
		"Mahasiswa jurusan TI/Komputer",
		"Profesional yang ingin automasi kerja dengan Python"
	],

	comments: [
		{
			name: "Rani Dwi",
			date: "2025-10-24",
			rating: 5,
			comment: "Materi sangat lengkap, cocok banget untuk pemula!"
		},
		{
			name: "Fauzan Maulana",
			date: "2025-10-27",
			rating: 5,
			comment: "Mentor menjelaskan dengan sangat detail. Recommended!"
		}
	]
},

  {
	slug: "svelte",
	name: "Svelte untuk Pemula sampai Mahir",
	category: ["Framework", "Web", "Frontend"],
	image: svelte,
	instructor: "Eko Kurniawan Khannedy",
	rating: 4.9,
	reviews: 1423,
	students: 886,
	lastUpdated: "Oktober 2025",
	language: "Bahasa Indonesia",
	price: 129000,
	originalPrice: 149000,
	recommended: true,

	description:
		"Belajar framework Svelte mulai dari pemula sampai mahir dengan studi kasus nyata. Fokus pada pembuatan UI reaktif dan performa tinggi tanpa kompleksitas besar.",

	shortDescription: [
		"Belajar konsep dasar Svelte.",
		"Membangun UI reaktif tanpa framework besar.",
		"Mengelola state dan event.",
		"Membuat proyek web lengkap dengan SvelteKit."
	],

	whatYouWillLearn: [
		"Dasar Svelte dan reactive component",
		"Routing dan layout dengan SvelteKit",
		"Integrasi API dan state management",
		"Deployment aplikasi Svelte modern"
	],

	requirements: [
		"Pemahaman dasar HTML, CSS, dan JavaScript",
		"Komputer dengan Node.js terinstal"
	],

	courseContent: [
		{ title: "Pengenalan Svelte", lectures: 6, duration: "2 jam" },
		{ title: "Component dan Reactive State", lectures: 5, duration: "2 jam 15 menit" },
		{ title: "Routing & API Integration", lectures: 6, duration: "2 jam 30 menit" },
		{ title: "Mini Project: Portfolio Website", lectures: 5, duration: "2 jam" }
	],

	forWho: [
		"Frontend developer pemula",
		"Mahasiswa yang ingin belajar framework modern",
		"Profesional yang ingin upgrade skill ke SvelteKit"
	],

	comments: [
		{
			name: "Bagus Setiawan",
			date: "2025-10-25",
			rating: 5,
			comment: "Sangat informatif dan mudah diikuti!"
		},
		{
			name: "Mila Anggraeni",
			date: "2025-10-28",
			rating: 5,
			comment: "Materinya selalu update dan langsung bisa dipraktekkan."
		}
	]
},
{
	slug: "bootstrap",
	name: "Bootstrap untuk Pemula sampai Mahir",
	category: ["Framework", "Web", "Frontend", "CSS"],
	image: bootstrap,
	instructor: "Eko Kurniawan Khannedy",
	rating: 4.8,
	reviews: 1180,
	students: 764,
	lastUpdated: "Oktober 2025",
	language: "Bahasa Indonesia",
	price: 129000,
	originalPrice: 149000,
	recommended: false,

	description:
		"Pelajari framework Bootstrap mulai dari pemula sampai mahir dengan studi kasus nyata. Buat website modern dan responsif dengan cepat.",

	shortDescription: [
		"Belajar grid system Bootstrap.",
		"Menggunakan komponen siap pakai.",
		"Membuat desain responsif.",
		"Customisasi tema dan utilitas CSS."
	],

	whatYouWillLearn: [
		"Dasar struktur Bootstrap",
		"Responsive layout dan komponen",
		"Integrasi Bootstrap dengan proyek web",
		"Optimasi tampilan dan performa"
	],

	requirements: [
		"Pengetahuan dasar HTML dan CSS",
		"Browser modern dan text editor"
	],

	courseContent: [
		{ title: "Dasar Bootstrap", lectures: 5, duration: "2 jam" },
		{ title: "Grid & Layout", lectures: 6, duration: "2 jam 20 menit" },
		{ title: "Komponen & Utility", lectures: 6, duration: "2 jam 15 menit" },
		{ title: "Mini Project: Website Portfolio", lectures: 5, duration: "2 jam" }
	],

	forWho: [
		"Pemula di dunia web design",
		"Mahasiswa TI/Desain",
		"Developer yang ingin mempercepat workflow UI"
	],

	comments: [
		{
			name: "Rafi Saputra",
			date: "2025-10-25",
			rating: 5,
			comment: "Bootstrap mudah banget dipelajari, course ini sangat membantu!"
		}
	]
},
{
	slug: "rust",
	name: "Rust untuk Pemula sampai Mahir",
	category: ["Pemrograman", "System", "Backend"],
	image: rust,
	instructor: "Eko Kurniawan Khannedy",
	rating: 4.9,
	reviews: 1302,
	students: 934,
	lastUpdated: "Oktober 2025",
	language: "Bahasa Indonesia",
	price: 129000,
	originalPrice: 149000,
	recommended: true,

	description:
		"Belajar Rust dari dasar hingga mahir untuk membangun sistem backend, CLI, dan aplikasi performa tinggi. Fokus pada keamanan memori dan kecepatan eksekusi.",

	shortDescription: [
		"Belajar sintaks dasar Rust.",
		"Memahami konsep ownership dan borrowing.",
		"Membangun CLI sederhana.",
		"Menerapkan Rust untuk backend API."
	],

	whatYouWillLearn: [
		"Dasar bahasa Rust dan toolchain",
		"Ownership, lifetime, dan error handling",
		"Pembuatan aplikasi CLI",
		"Implementasi web service dengan Rocket"
	],

	requirements: [
		"Pemahaman dasar pemrograman",
		"Rust dan Cargo sudah terinstal"
	],

	courseContent: [
		{ title: "Dasar Rust", lectures: 6, duration: "2 jam" },
		{ title: "Ownership & Borrowing", lectures: 5, duration: "2 jam 10 menit" },
		{ title: "Error Handling & Struct", lectures: 6, duration: "2 jam 20 menit" },
		{ title: "Mini Project: CLI Tool", lectures: 5, duration: "2 jam" }
	],

	forWho: [
		"Programmer yang ingin belajar bahasa modern",
		"Backend developer yang ingin optimasi performa",
		"Mahasiswa yang ingin memahami sistem rendah"
	],

	comments: [
		{
			name: "Dio Ramadhan",
			date: "2025-10-26",
			rating: 5,
			comment: "Penjelasan ownership sangat jelas, course terbaik untuk Rust!"
		}
	]
},
{
	slug: "bun",
	name: "Bun untuk Pemula sampai Mahir",
	category: ["Web", "Backend", "JavaScript", "Runtime"],
	image: bun,
	instructor: "Eko Kurniawan Khannedy",
	rating: 4.8,
	reviews: 1014,
	students: 881,
	lastUpdated: "Oktober 2025",
	language: "Bahasa Indonesia",
	price: 129000,
	originalPrice: 149000,
	recommended: true,

	description:
		"Pelajari Bun sebagai runtime modern untuk JavaScript dan TypeScript. Fokus pada performa tinggi dan integrasi cepat dengan proyek backend.",

	shortDescription: [
		"Memahami konsep Bun dan kelebihannya.",
		"Mengelola paket dan modul dengan Bun.",
		"Menjalankan server HTTP menggunakan Bun.",
		"Membangun proyek backend sederhana."
	],

	whatYouWillLearn: [
		"Dasar penggunaan Bun CLI",
		"Integrasi TypeScript",
		"Performance benchmark dengan Node.js",
		"Deploy aplikasi menggunakan Bun"
	],

	requirements: [
		"Pemahaman dasar JavaScript/Node.js",
		"Instalasi Bun di sistem lokal"
	],

	courseContent: [
		{ title: "Pengenalan Bun", lectures: 5, duration: "2 jam" },
		{ title: "Project Setup & CLI", lectures: 6, duration: "2 jam 30 menit" },
		{ title: "HTTP Server & API", lectures: 6, duration: "2 jam 15 menit" },
		{ title: "Mini Project: REST API", lectures: 5, duration: "2 jam" }
	],

	forWho: [
		"Backend developer yang ingin performa cepat",
		"Pengguna Node.js yang ingin mencoba runtime baru",
		"Mahasiswa dan profesional IT"
	],

	comments: [
		{
			name: "Adit Nugraha",
			date: "2025-10-28",
			rating: 5,
			comment: "Mantap banget! Bun jauh lebih cepat dari Node, recommended!"
		}
	]
},
{
	slug: "k6-performance-testing",
	name: "K6 untuk Pemula sampai Mahir",
	category: ["Web", "DevOps", "QA", "Performance Testing"],
	image: k6,
	instructor: "Eko Kurniawan Khannedy",
	rating: 4.7,
	reviews: 875,
	students: 719,
	lastUpdated: "Oktober 2025",
	language: "Bahasa Indonesia",
	price: 129000,
	originalPrice: 149000,
	recommended: false,

	description:
		"Belajar K6 untuk pengujian performa aplikasi web dengan simulasi beban pengguna dan analisis hasil yang mendalam.",

	shortDescription: [
		"Instalasi dan setup K6.",
		"Membuat skrip pengujian performa.",
		"Menjalankan beban simulasi.",
		"Analisis hasil uji performa."
	],

	whatYouWillLearn: [
		"Dasar performance testing",
		"Menulis skrip uji dengan K6",
		"Analisis hasil load test",
		"Integrasi K6 dengan CI/CD pipeline"
	],

	requirements: [
		"Dasar pemahaman HTTP dan API",
		"K6 sudah terinstal di komputer"
	],

	courseContent: [
		{ title: "Pengenalan K6", lectures: 5, duration: "2 jam" },
		{ title: "Menulis Skrip Testing", lectures: 6, duration: "2 jam 30 menit" },
		{ title: "Analisis & Visualisasi Hasil", lectures: 6, duration: "2 jam" },
		{ title: "Mini Project: Load Test API", lectures: 5, duration: "2 jam" }
	],

	forWho: [
		"QA engineer dan DevOps",
		"Backend developer",
		"Mahasiswa yang ingin belajar performance testing"
	],

	comments: [
		{
			name: "Rizky Hadi",
			date: "2025-10-29",
			rating: 5,
			comment: "Course-nya praktikal banget, langsung bisa uji API kantor!"
		}
	]
},

   {
	slug: "nestjs",
	name: "NestJS untuk Pemula sampai Mahir",
	category: ["Web", "Backend", "Framework", "API"],
	image: nestjs,
	instructor: "Eko Kurniawan Khannedy",
	rating: 4.9,
	reviews: 1582,
	students: 955,
	lastUpdated: "Oktober 2025",
	language: "Bahasa Indonesia",
	price: 129000,
	originalPrice: 149000,
	recommended: true,

	description:
		"Belajar NestJS dari dasar hingga mahir. Bangun backend API yang scalable, modular, dan maintainable menggunakan TypeScript dengan arsitektur modern.",

	shortDescription: [
		"Memahami konsep dasar NestJS dan TypeScript.",
		"Membuat modular API dengan controller dan service.",
		"Menggunakan middleware dan guard untuk keamanan.",
		"Membangun REST API lengkap dengan autentikasi JWT."
	],

	whatYouWillLearn: [
		"Dasar framework NestJS",
		"Dependency Injection dan Modular Architecture",
		"Middleware, Pipe, dan Guard",
		"Autentikasi JWT & koneksi database"
	],

	requirements: [
		"Pemahaman dasar JavaScript/TypeScript",
		"Node.js terinstal di komputer"
	],

	courseContent: [
		{ title: "Dasar NestJS & Setup Project", lectures: 6, duration: "2 jam" },
		{ title: "Controller & Service", lectures: 6, duration: "2 jam 15 menit" },
		{ title: "Middleware, Guard, dan Pipe", lectures: 5, duration: "2 jam" },
		{ title: "Mini Project: REST API + JWT", lectures: 5, duration: "2 jam 30 menit" }
	],

	forWho: [
		"Backend developer yang ingin struktur proyek rapi",
		"Programmer yang ingin belajar TypeScript framework",
		"Mahasiswa yang ingin membuat REST API profesional"
	],

	comments: [
		{
			name: "Agus Pratama",
			date: "2025-10-28",
			rating: 5,
			comment: "Materinya terstruktur banget, cocok buat backend developer!"
		},
		{
			name: "Linda Rahma",
			date: "2025-10-30",
			rating: 5,
			comment: "Setelah ikut kelas ini, langsung bisa bikin API production-ready!"
		}
	]
},
{
	slug: "rabbitmq",
	name: "RabbitMQ untuk Pemula sampai Mahir",
	category: ["Database", "Message Broker", "Backend"],
	image: rabbit,
	instructor: "Eko Kurniawan Khannedy",
	rating: 4.8,
	reviews: 1129,
	students: 879,
	lastUpdated: "Oktober 2025",
	language: "Bahasa Indonesia",
	price: 129000,
	originalPrice: 149000,
	recommended: true,

	description:
		"Pelajari RabbitMQ dari pemula hingga mahir sebagai message broker untuk komunikasi antar layanan secara asynchronous di aplikasi backend modern.",

	shortDescription: [
		"Memahami konsep message broker dan queue.",
		"Setup RabbitMQ di lokal atau Docker.",
		"Mengirim dan menerima pesan antar layanan.",
		"Membangun microservice sederhana menggunakan RabbitMQ."
	],

	whatYouWillLearn: [
		"Dasar arsitektur message broker",
		"Exchange, Queue, dan Routing Key",
		"Integrasi Node.js/NestJS dengan RabbitMQ",
		"Monitoring dan debugging antrian pesan"
	],

	requirements: [
		"Pemahaman dasar backend dan API",
		"RabbitMQ terinstal atau Docker tersedia"
	],

	courseContent: [
		{ title: "Pengenalan RabbitMQ", lectures: 5, duration: "2 jam" },
		{ title: "Exchange & Queue", lectures: 6, duration: "2 jam 20 menit" },
		{ title: "Integrasi Node.js/NestJS", lectures: 6, duration: "2 jam 30 menit" },
		{ title: "Mini Project: Microservice Chat", lectures: 5, duration: "2 jam" }
	],

	forWho: [
		"Backend developer yang ingin belajar message queue",
		"DevOps yang mengelola sistem terdistribusi",
		"Mahasiswa yang ingin memahami sistem asynchronous"
	],

	comments: [
		{
			name: "Fikri Andrian",
			date: "2025-10-29",
			rating: 5,
			comment: "Penjelasan sangat mudah dipahami, cocok untuk pemula message broker!"
		}
	]
},
{
	slug: "apache-kafka",
	name: "Apache Kafka untuk Pemula sampai Mahir",
	category: ["Web", "Message Broker", "Streaming", "Backend"],
	image: kafka,
	instructor: "Eko Kurniawan Khannedy",
	rating: 4.9,
	reviews: 1354,
	students: 967,
	lastUpdated: "Oktober 2025",
	language: "Bahasa Indonesia",
	price: 129000,
	originalPrice: 149000,
	recommended: true,

	description:
		"Belajar Apache Kafka dari dasar hingga mahir untuk pemrosesan data streaming dan event-driven architecture berskala besar.",

	shortDescription: [
		"Belajar arsitektur Kafka dan topik.",
		"Membuat producer dan consumer sederhana.",
		"Memahami konsep partition dan offset.",
		"Menerapkan Kafka dalam proyek backend nyata."
	],

	whatYouWillLearn: [
		"Dasar Kafka dan konsep publish-subscribe",
		"Producer, Consumer, dan Topic",
		"Integrasi Kafka dengan Node.js & Python",
		"Monitoring cluster Kafka dan best practice"
	],

	requirements: [
		"Dasar pemrograman backend",
		"Java atau Node.js environment terinstal"
	],

	courseContent: [
		{ title: "Pengenalan Kafka", lectures: 5, duration: "2 jam" },
		{ title: "Producer & Consumer", lectures: 6, duration: "2 jam 15 menit" },
		{ title: "Streaming Data & Integration", lectures: 6, duration: "2 jam 30 menit" },
		{ title: "Mini Project: Event-driven System", lectures: 5, duration: "2 jam" }
	],

	forWho: [
		"Backend engineer yang ingin belajar sistem streaming",
		"Data engineer yang ingin memahami pipeline data",
		"Mahasiswa yang mempelajari sistem terdistribusi"
	],

	comments: [
		{
			name: "Yusuf Maulana",
			date: "2025-10-30",
			rating: 5,
			comment: "Topik berat jadi mudah! Penjelasan Kafka-nya jernih banget."
		},
		{
			name: "Putri Amelia",
			date: "2025-10-31",
			rating: 5,
			comment: "Kelas Kafka paling lengkap yang pernah saya ikuti!"
		}
	]
},

  ];

export const categories = [
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

	