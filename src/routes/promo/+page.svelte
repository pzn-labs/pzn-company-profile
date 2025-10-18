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
<section class="bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-b-4xl overflow-hidden">
	<div class="mx-auto max-w-7xl px-6 py-24 sm:py-24 lg:px-8 grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
	  
	  <!-- 🔹 Kiri: Teks -->
	  <div class="text-center lg:text-left space-y-6">
		<h1 class="text-4xl font-bold tracking-tight sm:text-6xl">
		  Promo Spesial <br class="hidden sm:block" /> Programmer Zaman Now
		</h1>
		<p class="mt-4 text-lg leading-8 text-gray-300 dark:text-gray-600 max-w-xl mx-auto lg:mx-0">
		  Dapatkan diskon hingga <span class="font-semibold text-indigo-400 dark:text-indigo-600">70%</span> untuk semua kelas programming.
		  Penawaran terbatas — buruan sebelum kehabisan!
		</p>
	  </div>
  
	  <!-- 🔹 Kanan: Gambar -->
	  <div class="flex justify-center">
		<div class="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-gray-800 dark:border-gray-200">
		  <img
			src="https://i.pinimg.com/736x/75/75/04/7575044bbe8c3b30ea177b4db889c7d6.jpg"
			alt="Promo Programmer Zaman Now"
			class="w-full h-full object-cover"
		  />
		</div>
	  </div>
	</div>
  </section>
  

<!-- Paket Promo -->
<section class="py-24 sm:py-24 bg-white dark:bg-gray-900">
	<div class="mx-auto max-w-7xl px-6 lg:px-8 text-center">
		<div class="max-w-2xl mx-auto">
			<h2 class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
				Pilih Paket yang Tepat untuk Anda
			</h2>
			<p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
				Semua paket sudah termasuk akses lifetime, sertifikat, dan support mentor.
			</p>
		</div>

		<div class="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
			<!-- Paket Basic -->
			<div
				class="flex flex-col justify-between rounded-3xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-8 hover:shadow-xl transition duration-300"
			>
				<div>
					<h3 class="text-xl font-semibold text-gray-900 dark:text-white">Basic</h3>
					<p class="mt-3 text-sm text-gray-600 dark:text-gray-300">
						Cocok untuk pemula yang ingin belajar programming dari dasar.
					</p>
					<div class="mt-6 flex items-baseline justify-center gap-x-2">
						<span class="text-4xl font-bold text-gray-900 dark:text-white">Rp 199K</span>
						<span class="text-sm text-gray-500 dark:text-gray-400 line-through">Rp 599K</span>
					</div>
				</div>
				<ul class="mt-8 space-y-3 text-sm text-gray-600 dark:text-gray-300 text-left">
					<li>✅ 1 Kelas Pilihan</li>
					<li>✅ Akses Lifetime</li>
					<li>✅ Sertifikat</li>
					<li>✅ Support 30 Hari</li>
				</ul>
				<a
					href={`${base}/promo`}
					class="mt-8 block rounded-xl bg-gray-900 dark:bg-white px-4 py-3 text-center text-sm font-semibold text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 transition"
				>
					Daftar Sekarang
				</a>
			</div>

			<!-- Paket Pro -->
			<div
				class="relative flex flex-col justify-between rounded-3xl border-2 border-gray-900 dark:border-white bg-white dark:bg-gray-800 p-8 shadow-lg scale-105"
			>
				<span
					class="absolute -top-4 left-1/2 -translate-x-1/2 inline-block rounded-full bg-gray-900 dark:bg-white px-4 py-1 text-xs font-semibold text-white dark:text-gray-900"
					>Terpopuler</span
				>
				<div>
					<h3 class="text-xl font-semibold text-gray-900 dark:text-white">Pro</h3>
					<p class="mt-3 text-sm text-gray-600 dark:text-gray-300">
						Paket lengkap untuk developer yang ingin menguasai full stack development.
					</p>
					<div class="mt-6 flex items-baseline justify-center gap-x-2">
						<span class="text-4xl font-bold text-gray-900 dark:text-white">Rp 499K</span>
						<span class="text-sm text-gray-500 dark:text-gray-400 line-through">Rp 1.999K</span>
					</div>
				</div>
				<ul class="mt-8 space-y-3 text-sm text-gray-600 dark:text-gray-300 text-left">
					<li>✅ 5 Kelas Pilihan</li>
					<li>✅ Akses Lifetime</li>
					<li>✅ Sertifikat + Portfolio</li>
					<li>✅ Support 90 Hari</li>
					<li>✅ Live Mentoring</li>
				</ul>
				<a
					href={`${base}/promo`}
					class="mt-8 block rounded-xl bg-gray-900 dark:bg-white px-4 py-3 text-center text-sm font-semibold text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 transition"
				>
					Daftar Sekarang
				</a>
			</div>

			<!-- Paket Enterprise -->
			<div
				class="flex flex-col justify-between rounded-3xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-8 hover:shadow-xl transition duration-300"
			>
				<div>
					<h3 class="text-xl font-semibold text-gray-900 dark:text-white">Enterprise</h3>
					<p class="mt-3 text-sm text-gray-600 dark:text-gray-300">
						Paket terbaik untuk tim atau perusahaan yang ingin upskill karyawan secara menyeluruh.
					</p>
					<div class="mt-6 flex items-baseline justify-center gap-x-2">
						<span class="text-4xl font-bold text-gray-900 dark:text-white">Rp 999K</span>
						<span class="text-sm text-gray-500 dark:text-gray-400 line-through">Rp 4.999K</span>
					</div>
				</div>
				<ul class="mt-8 space-y-3 text-sm text-gray-600 dark:text-gray-300 text-left">
					<li>✅ Semua Kelas (10+)</li>
					<li>✅ Akses Lifetime</li>
					<li>✅ Sertifikat + Portfolio</li>
					<li>✅ Support 1 Tahun</li>
					<li>✅ Private Mentoring</li>
					<li>✅ Job Placement Support</li>
				</ul>
				<a
					href={`${base}/promo`}
					class="mt-8 block rounded-xl bg-gray-900 dark:bg-white px-4 py-3 text-center text-sm font-semibold text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 transition"
				>
					Daftar Sekarang
				</a>
			</div>
		</div>
	</div>
</section>

<!-- CTA Final -->
<section class="bg-white dark:bg-gray-100">
	<div class="px-6 py-24 sm:px-6 sm:py-24 lg:px-8">
		<div class="mx-auto max-w-3xl text-center border dark:border-white rounded-2xl p-8">
			<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
				Jangan Sampai Kehabisan!
			</h2>
			<p class="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-700 dark:text-gray-600">
				Promo ini terbatas dan akan berakhir segera. Daftar sekarang dan dapatkan diskon hingga
				70%!
			</p>

			<div class="mt-10 flex flex-wrap justify-center items-center gap-x-6 gap-y-4">
				<a
					href={`${base}/promo`}
					class="inline-block rounded-xl bg-gray-900 text-white px-8 py-4 text-sm font-semibold shadow-md transition-all duration-300 hover:scale-105 hover:bg-gray-800"
					>Daftar Sekarang — Diskon 70%</a
				>
				<a
					href={`${base}/sosial-media`}
					class="inline-block text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
				>
					Butuh Bantuan? <span aria-hidden="true" class="ml-1">→</span>
				</a>
			</div>
		</div>
	</div>
</section>

<!-- FOOTER -->
<footer class="bg-gray-900 text-gray-300 border-t border-gray-800 rounded-t-4xl">
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
