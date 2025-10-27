<script lang="ts">
	import { base } from "$app/paths";
	import "../../app.css";
	import { onMount } from "svelte";


	const paketList = [
		{
			id: "basic",
			name: "Basic",
			price: "Rp 199K",
			discount: "Rp 599K",
			desc: "Cocok untuk pemula yang ingin belajar programming dari dasar.",
			benefits: [
				"✅ 1 Kelas Pilihan",
				"✅ Akses Lifetime",
				"✅ Sertifikat",
				"✅ Support 30 Hari"
			]
		},
		{
			id: "pro",
			name: "Pro",
			price: "Rp 499K",
			discount: "Rp 1.999K",
			desc: "Paket lengkap untuk developer yang ingin menguasai full stack development.",
			benefits: [
				"✅ 5 Kelas Pilihan",
				"✅ Akses Lifetime",
				"✅ Sertifikat + Portfolio",
				"✅ Support 90 Hari",
				"✅ Live Mentoring"
			],
			popular: true
		},
		{
			id: "enterprise",
			name: "Enterprise",
			price: "Rp 999K",
			discount: "Rp 4.999K",
			desc: "Paket terbaik untuk tim atau perusahaan yang ingin upskill karyawan secara menyeluruh.",
			benefits: [
				"✅ Semua Kelas (10+)",
				"✅ Akses Lifetime",
				"✅ Sertifikat + Portfolio",
				"✅ Support 1 Tahun",
				"✅ Private Mentoring",
				"✅ Job Placement Support"
			]
		}
	];
	
	let timeLeft = 0;
	let days = 0, hours = 0, minutes = 0, seconds = 0;

	//  Tentukan tanggal berakhir promo
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
</script>

<svelte:head>
	<title>Promo & Penawaran Khusus - Programmer Zaman Now</title>
	<meta
		name="description"
		content="Dapatkan diskon menarik untuk kelas programming di PZN. Promo terbatas dengan harga terbaik!"
	/>
</svelte:head>


<!-- 🔹 HERO PROMO SECTION -->
<section
  class="relative bg-cover bg-center bg-no-repeat text-white py-24 sm:py-24"
  style="background-image: url('https://i.pinimg.com/736x/83/5f/56/835f5645e50f7c8eaf41c7b31e5e3d3d.jpg');"
>
  <!-- Overlay Gelap -->
  <div class="absolute inset-0 bg-black bg-opacity-70"></div>

  <!-- Konten -->
  <div class="relative z-10 max-w-7xl mx-auto px-6 text-center">
    <!-- Judul -->
    <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
      Promo Spesial Oktober!
    </h1>
    <p class="text-base sm:text-lg text-gray-200 mb-10 max-w-2xl mx-auto">
      Dapatkan <span class="text-white font-semibold">diskon hingga 70%</span> sebelum waktu habis!
    </p>

    <!-- Countdown -->
    <div class="flex justify-center gap-5 sm:gap-10 md:gap-14 font-mono text-center mb-10">
      <div class="flex flex-col items-center">
        <p class="text-4xl sm:text-5xl font-extrabold text-white">{days}</p>
        <p class="text-xs uppercase tracking-wider text-gray-300">Hari</p>
      </div>
      <div class="flex flex-col items-center">
        <p class="text-4xl sm:text-5xl font-extrabold text-white">{hours}</p>
        <p class="text-xs uppercase tracking-wider text-gray-300">Jam</p>
      </div>
      <div class="flex flex-col items-center">
        <p class="text-4xl sm:text-5xl font-extrabold text-white">{minutes}</p>
        <p class="text-xs uppercase tracking-wider text-gray-300">Menit</p>
      </div>
      <div class="flex flex-col items-center">
        <p class="text-4xl sm:text-5xl font-extrabold text-red-400 animate-bounce">{seconds}</p>
        <p class="text-xs uppercase tracking-wider text-gray-300">Detik</p>
      </div>
    </div>

    <!-- Kode Promo -->
    <div class="mb-4">
      <p class="text-gray-300 text-sm mb-3">Gunakan kode promo di bawah ini:</p>
      <div
        class="inline-block bg-white text-gray-900 font-semibold px-8 py-3 rounded-full tracking-widest shadow-lg select-all text-sm sm:text-base"
      >
        KODE: <span class="text-black">PZN2025</span>
      </div>
    </div>
  </div>
</section>


<!-- Paket Belajar -->
<section class="relative bg-black text-white py-16 px-6">
	<div class="max-w-7xl mx-auto text-center mb-16">
	  <h2 class="text-4xl sm:text-5xl font-bold mb-4">Pilih Paket Belajar Anda</h2>
	  <p class="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
		Akses penuh seumur hidup, sertifikat resmi, dan bimbingan langsung dari mentor berpengalaman.
	  </p>
	</div>
  
	<!-- Grid Paket -->
	<div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
	  {#each paketList as paket}
		<div
		  class="group relative rounded-2xl border border-gray-800 bg-gradient-to-b from-gray-900 to-gray-950 p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-gray-600"
		>
		  <div class="text-left">
			<h3 class="text-2xl font-bold mb-2 group-hover:text-white transition">
			  {paket.name}
			</h3>
			<p class="text-gray-400 text-sm mb-6 leading-relaxed">{paket.desc}</p>
  
			<div class="flex items-end gap-2 mb-6">
			  <span class="text-3xl font-bold text-white">{paket.price}</span>
			  <span class="text-sm text-gray-500 line-through">{paket.discount}</span>
			</div>
  
			<ul class="space-y-2 mb-8 text-sm text-gray-300">
			  {#each paket.benefits as item}
				<li class="flex items-center gap-2">
				  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
				  </svg>
				  {item}
				</li>
			  {/each}
			</ul>
  
			<!-- Promo Code -->
			<div class="bg-gray-800/70 border border-gray-700 rounded-lg px-4 py-3 text-center mb-6">
			  <p class="text-xs text-gray-400 mb-1">Gunakan Kode Promo:</p>
			  <div class="flex justify-center items-center gap-2 bg-gray-900 border border-gray-700 rounded-lg px-3 py-1.5 font-semibold text-sm">
				<span>PZN2025</span>
			  </div>
			</div>
  
			<a
			  href={`${base}/promo`}
			  class="block w-full rounded-xl bg-white text-black text-center font-semibold py-3 hover:bg-gray-100 transition"
			>
			  Daftar Sekarang
			</a>
		  </div>
		</div>
	  {/each}
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

	@keyframes float {
		0%, 100% { transform: translateY(0); }
		50% { transform: translateY(-10px); }
	}
	:global(.animate-float) {
    animation: float 4s ease-in-out infinite;
  }
</style>