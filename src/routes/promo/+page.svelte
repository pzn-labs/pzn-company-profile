<script lang="ts">
	import { base } from "$app/paths";
	import "../../app.css";
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
  
	  <!-- 🔹 Kiri: Teks -->
	  <div class="text-center lg:text-left space-y-6">
		<h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
		  Promo <span class="text-blue-400">Spesial</span><br class="hidden sm:block" />
		  Programmer Zaman Now
		</h1>
		<p class="text-lg text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
		  Dapatkan diskon hingga <span class="font-semibold text-blue-400">70%</span> untuk semua kelas programming.
		  Tingkatkan skill Anda dengan materi eksklusif dan update industri terkini.
		</p>
  
		<!-- 🔹 Tombol CTA -->
		<div class="mt-6">
		  <a
			href="{base}/kelas"
			class="inline-block px-8 py-3 rounded-full text-base font-semibold bg-blue-500 hover:bg-blue-600 text-white transition-all duration-300 shadow-lg shadow-blue-500/30"
		  >
			Daftar Sekarang →
		  </a>
		</div>
	  </div>
  
	  <!-- 🔹 Kanan: Gambar -->
	  <div class="flex justify-center lg:justify-end relative">
		<div class="relative w-72 h-72 sm:w-96 sm:h-96 md:w-[28rem] md:h-[28rem] rounded-full overflow-hidden border-4 border-gray-800">
		  <img
			src="https://i.pinimg.com/736x/75/75/04/7575044bbe8c3b30ea177b4db889c7d6.jpg"
			alt="Promo Programmer Zaman Now"
			class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
		  />
		</div>
  
		<!-- Efek cahaya lembut -->
		<div class="absolute -inset-10 blur-3xl opacity-30 bg-blue-500/30 rounded-full -z-10"></div>
	  </div>
	</div>
  </section>
  
  

<!-- Paket Promo -->
<section class="py-24 bg-black">
	<div class="mx-auto max-w-7xl px-6 lg:px-8 text-center">
		<div class="max-w-2xl mx-auto">
			<h2 class="text-3xl sm:text-4xl font-bold text-white">
				Pilih Paket yang Tepat untuk Anda
			</h2>
			<p class="mt-4 text-lg text-gray-400">
				Semua paket sudah termasuk akses lifetime, sertifikat, dan support mentor.
			</p>
		</div>

		<div class="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
			<!-- Paket Basic -->
			<div
				class="flex flex-col justify-between rounded-3xl border border-gray-700 bg-gray-800 p-8 hover:shadow-xl transition duration-300"
			>
				<div>
					<h3 class="text-xl font-semibold text-white">Basic</h3>
					<p class="mt-3 text-sm text-gray-400">
						Cocok untuk pemula yang ingin belajar programming dari dasar.
					</p>
					<div class="mt-6 flex items-baseline justify-center gap-x-2">
						<span class="text-4xl font-bold text-white">Rp 199K</span>
						<span class="text-sm text-gray-500 line-through">Rp 599K</span>
					</div>
				</div>
				<ul class="mt-8 space-y-3 text-sm text-gray-400 text-left">
					<li>✅ 1 Kelas Pilihan</li>
					<li>✅ Akses Lifetime</li>
					<li>✅ Sertifikat</li>
					<li>✅ Support 30 Hari</li>
				</ul>
				<a
					href={`${base}/promo`}
					class="mt-8 block rounded-xl bg-blue-600 px-4 py-3 text-center text-sm font-semibold text-white hover:bg-blue-500 transition"
				>
					Daftar Sekarang
				</a>
			</div>

			<!-- Paket Pro -->
			<div
				class="relative flex flex-col justify-between rounded-3xl border-2 border-blue-500 bg-gray-800 p-8 shadow-lg scale-105"
			>
				<span
					class="absolute -top-4 left-1/2 -translate-x-1/2 inline-block rounded-full bg-blue-600 px-4 py-1 text-xs font-semibold text-white"
					>Terpopuler</span
				>
				<div>
					<h3 class="text-xl font-semibold text-white">Pro</h3>
					<p class="mt-3 text-sm text-gray-400">
						Paket lengkap untuk developer yang ingin menguasai full stack development.
					</p>
					<div class="mt-6 flex items-baseline justify-center gap-x-2">
						<span class="text-4xl font-bold text-white">Rp 499K</span>
						<span class="text-sm text-gray-500 line-through">Rp 1.999K</span>
					</div>
				</div>
				<ul class="mt-8 space-y-3 text-sm text-gray-400 text-left">
					<li>✅ 5 Kelas Pilihan</li>
					<li>✅ Akses Lifetime</li>
					<li>✅ Sertifikat + Portfolio</li>
					<li>✅ Support 90 Hari</li>
					<li>✅ Live Mentoring</li>
				</ul>
				<a
					href={`${base}/promo`}
					class="mt-8 block rounded-xl bg-blue-600 px-4 py-3 text-center text-sm font-semibold text-white hover:bg-blue-500 transition"
				>
					Daftar Sekarang
				</a>
			</div>

			<!-- Paket Enterprise -->
			<div
				class="flex flex-col justify-between rounded-3xl border border-gray-700 bg-gray-800 p-8 hover:shadow-xl transition duration-300"
			>
				<div>
					<h3 class="text-xl font-semibold text-white">Enterprise</h3>
					<p class="mt-3 text-sm text-gray-400">
						Paket terbaik untuk tim atau perusahaan yang ingin upskill karyawan secara menyeluruh.
					</p>
					<div class="mt-6 flex items-baseline justify-center gap-x-2">
						<span class="text-4xl font-bold text-white">Rp 999K</span>
						<span class="text-sm text-gray-500 line-through">Rp 4.999K</span>
					</div>
				</div>
				<ul class="mt-8 space-y-3 text-sm text-gray-400 text-left">
					<li>✅ Semua Kelas (10+)</li>
					<li>✅ Akses Lifetime</li>
					<li>✅ Sertifikat + Portfolio</li>
					<li>✅ Support 1 Tahun</li>
					<li>✅ Private Mentoring</li>
					<li>✅ Job Placement Support</li>
				</ul>
				<a
					href={`${base}/promo`}
					class="mt-8 block rounded-xl bg-blue-600 px-4 py-3 text-center text-sm font-semibold text-white hover:bg-blue-500 transition"
				>
					Daftar Sekarang
				</a>
			</div>
		</div>
	</div>
</section>

<!-- CTA Final -->
<section class="bg-black">
	<div class="px-6 py-24 sm:px-6 sm:py-24 lg:px-8">
		<div class="bg-gray-900 mx-auto max-w-3xl text-center border border-gray-700 rounded-2xl p-8">
			<h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
				Jangan Sampai Kehabisan!
			</h2>
			<p class="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-400">
				Promo ini terbatas dan akan berakhir segera. Daftar sekarang dan dapatkan diskon hingga
				70%!
			</p>

			<div class="mt-10 flex flex-wrap justify-center items-center gap-x-6 gap-y-4">
				<a
					href={`${base}/promo`}
					class="inline-block rounded-xl bg-blue-600 text-white px-8 py-4 text-sm font-semibold shadow-md transition-all duration-300 hover:scale-105 hover:bg-blue-500"
					>Daftar Sekarang — Diskon 70%</a
				>
				<a
					href={`${base}/sosial-media`}
					class="inline-block text-sm font-medium text-gray-400 hover:text-white transition-colors duration-300"
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

