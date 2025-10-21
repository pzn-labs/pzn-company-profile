<script lang="ts">
	import { base } from "$app/paths";
	import "../../app.css";
	import { onMount } from "svelte";
	import { fade } from "svelte/transition";

	let openPaket: string | null = "Pro";

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

	// 🔹 Tentukan tanggal berakhir promo
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

<!-- Hero Section -->
<section class="relative bg-gray-950 text-white overflow-hidden">
	<div class="mx-auto max-w-7xl px-6 lg:px-12 py-24 grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
  
	  <!--  Gambar  -->
	  <div class="flex justify-center lg:justify-end relative order-1 lg:order-2">
		<div class="relative w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-[28rem] lg:h-[28rem] rounded-full overflow-hidden border-4 border-gray-800 shadow-2xl">
		  <img
			src="https://i.pinimg.com/736x/75/75/04/7575044bbe8c3b30ea177b4db889c7d6.jpg"
			alt="Promo Programmer Zaman Now"
			class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
		  />
		</div>
	  </div>
  
	  <!--  Teks -->
	  <div class="text-center lg:text-left space-y-6 order-2 lg:order-1">
		<h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
		  Promo Spesial<br class="hidden sm:block" />
		  Programmer Zaman Now
		</h1>
		<p class="text-lg text-gray-200 max-w-xl mx-auto lg:mx-0 leading-relaxed">
		  Dapatkan diskon hingga <span class="font-semibold text-blue-400">70%</span> untuk semua kelas programming.
		  Tingkatkan skill Anda dengan materi eksklusif dan update industri terkini.
		</p>
  
		<!-- Tombol CTA -->
		<div class="mt-6">
		  <a
			href="{base}/kelas"
			class="inline-block px-8 py-3 rounded-full text-base font-semibold bg-blue-500 hover:bg-blue-600 text-white transition-all duration-300 shadow-lg shadow-blue-500/30"
		  >
			Daftar Sekarang →
		  </a>
		</div>
	  </div>
	</div>
  </section>

<!-- Promo Section-->  

  <section class="relative overflow-hidden text-white">
	<div class="absolute inset-0 bg-black"></div>

	<div class="relative max-w-7xl mx-auto px-6 py-16 text-center">
		<h2 class="text-2xl sm:text-5xl font-bold mb-4 drop-shadow-xl">
			Promo Spesial Oktober!
		</h2>
		<p class="text-lg text-gray-200 mb-10">
			Dapatkan <span class="text-white font-semibold">diskon hingga 70%</span> sebelum waktu habis!
		</p>

		<!-- Countdown -->
		<div class="flex justify-center gap-6 md:gap-12 font-mono text-center mb-10">
			<div class="flex flex-col items-center">
				<p class="text-5xl font-extrabold text-white">{days}</p>
				<p class="text-xs uppercase tracking-wider text-gray-300">Hari</p>
			</div>
			<div class="flex flex-col items-center">
				<p class="text-5xl font-extrabold text-white">{hours}</p>
				<p class="text-xs uppercase tracking-wider text-gray-300">Jam</p>
			</div>
			<div class="flex flex-col items-center">
				<p class="text-5xl font-extrabold text-white">{minutes}</p>
				<p class="text-xs uppercase tracking-wider text-gray-300">Menit</p>
			</div>
			<div class="flex flex-col items-center">
				<p class="text-5xl font-extrabold text-red-400 animate-bounce">{seconds}</p>
				<p class="text-xs uppercase tracking-wider text-gray-300">Detik</p>
			</div>
		</div>

		<!-- 🧾 Kode Promo -->
		<div class="mb-0">
			<p class="text-gray-300 text-sm mb-6">Gunakan kode promo di bawah ini:</p>
			<div class="inline-block bg-white text-gray-900 font-semibold px-6 py-2 rounded-full tracking-widest shadow-md select-all">
				KODE: <span class="text-black">PZN2025</span>
			</div>
		</div>
	</div>
</section>

<!-- Paket Promo + CTA Final Horizontal -->
<section class="relative py-28 bg-black text-white overflow-hidden">
	<div class="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
		<!-- Judul -->
		<div class="max-w-2xl mx-auto mb-16">
			<h2 class="text-4xl sm:text-5xl font-bold text-white tracking-tight">
				Pilih Paket Belajar Anda
			</h2>
			<p class="mt-4 text-lg text-gray-400">
				Akses seumur hidup, sertifikat resmi, dan bimbingan langsung dari mentor berpengalaman.
			</p>
		</div>

		<!-- Accordion List -->
		<div class="space-y-6 max-w-3xl mx-auto">
			{#each paketList as paket}
				<div
					class="group rounded-2xl border border-gray-700 bg-gray-900/70 backdrop-blur-sm overflow-hidden shadow-md transition-all duration-300 hover:border-gray-600 hover:shadow-lg"
				>
					<!-- Header -->
					<button
						class="flex w-full justify-between items-center px-6 py-5 text-left"
						on:click={() => (openPaket = openPaket === paket.id ? null : paket.id)}
					>
						<div class="space-y-1">
							<h3 class="text-xl font-semibold tracking-tight">{paket.name}</h3>
							<p class="text-sm text-gray-400">{paket.desc}</p>
						</div>

						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6 transition-transform duration-300 text-gray-400 group-hover:text-white"
							class:rotate-180={openPaket === paket.id}
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
						</svg>
					</button>

					<!-- Content -->
					{#if openPaket === paket.id}
						<div
							in:fade={{ duration: 300 }}
							out:fade={{ duration: 250 }}
							class="px-6 pb-8 border-t border-gray-800 text-left space-y-4"
						>
							<p class="mt-2 text-sm text-gray-300 leading-relaxed">{paket.desc}</p>

							<div class="flex items-baseline gap-x-2">
								<span class="text-3xl font-bold text-white">{paket.price}</span>
								<span class="text-sm text-gray-500 line-through">{paket.discount}</span>
							</div>

							<ul class="mt-4 space-y-2 text-sm text-gray-300">
								{#each paket.benefits as item}
									<li>• {item}</li>
								{/each}
							</ul>

							<!--  Kode Promo -->
							<div class="mt-6 bg-gray-800/70 border border-gray-700 rounded-xl p-4 text-center">
								<p class="text-sm text-gray-300 mb-2">Gunakan Kode Promo:</p>
								<div class="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white font-semibold rounded-lg border border-gray-700 select-all">
									<span>PZN2025</span>
									<!-- svelte-ignore a11y_consider_explicit_label -->
									<button
										on:click={() => navigator.clipboard.writeText('PZN70OFF')}
										class="text-gray-400 hover:text-white transition"
									>
										<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16h8M8 12h8m-6 8h6a2 2 0 002-2V6a2 2 0 00-2-2h-6M6 8H5a2 2 0 00-2 2v10a2 2 0 002 2h6" />
										</svg>
									</button>
								</div>
							</div>

							<a
								href={`${base}/promo`}
								class="mt-6 inline-block rounded-xl bg-white text-gray-900 px-8 py-3 text-sm font-semibold hover:bg-gray-200 transition"
							>
								Daftar Sekarang
							</a>
						</div>
					{/if}
				</div>
			{/each}
		</div>

		<!-- CTA Horizontal di bawah daftar paket -->
		<div
			class="mt-24 bg-gray-900 border border-gray-800 rounded-2xl shadow-xl flex flex-col lg:flex-row items-center justify-between px-10 py-12 text-center lg:text-left gap-10 transition-all duration-300 hover:border-gray-700"
		>
			<!--  Bagian Kiri -->
			<div class="max-w-xl">
				<h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">
					Jangan Sampai Kehabisan!
				</h2>
				<p class="text-gray-400 text-base leading-relaxed">
					Promo ini terbatas dan akan berakhir segera. Gunakan kode promo
					<span class="text-white font-semibold">PZN2025</span> untuk nikmati potongan harga hingga
					<span class="text-white font-semibold">70%</span>.
				</p>
			</div>

			<!--  Bagian Kanan -->
			<div class="flex flex-col sm:flex-row items-center gap-4">
				<a
					href={`${base}/promo`}
					class="inline-block rounded-xl bg-white text-gray-900 px-8 py-4 text-sm font-semibold shadow-md transition-all duration-300 hover:scale-105 hover:bg-gray-200"
				>
					Daftar Sekarang — Diskon 70%
				</a>

				<a
					href={`${base}/sosial-media`}
					class="inline-block text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300"
				>
					Butuh Bantuan? <span aria-hidden="true" class="ml-1">→</span>
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
				Belajar programming dari dasar hingga mahir bersama mentor berpengalaman. Temukan cara
				modern untuk menguasai dunia teknologi dengan pembelajaran praktis dan relevan industri.
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
						<a
							href={`${base}${link.href}`}
							class="text-sm text-gray-400 hover:text-white transition-colors duration-200"
							>{link.name}</a
						>
					</li>
				{/each}
			</ul>
		</div>

		<!-- Kolom 3 -->
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

	<div class="border-t border-gray-800 py-6 text-center">
		<p class="text-sm text-gray-500">
			© {new Date().getFullYear()} <span class="font-medium text-white">Programmer Zaman Now</span>.
		</p>
	</div>
</footer>

<style>
	button:focus {
		outline: none;
	}

	@keyframes float {
		0%, 100% { transform: translateY(0); }
		50% { transform: translateY(-10px); }
	}
	:global(.animate-float) {
    animation: float 4s ease-in-out infinite;
  }
</style>