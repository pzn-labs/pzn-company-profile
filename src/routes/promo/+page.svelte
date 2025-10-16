<script lang="ts">
	import "../../app.css"
</script>

<svelte:head>
	<title>Promo & Penawaran Khusus - Programmer Zaman Now</title>
	<meta name="description" content="Dapatkan diskon menarik untuk kelas programming di PZN. Promo terbatas dengan harga terbaik!" />
</svelte:head>

<!-- Hero Section -->
<section class="bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900">
	<div class="mx-auto max-w-7xl px-6 py-24 sm:py-24 lg:px-8">
		<div class="mx-auto max-w-2xl text-center">
			<h1 class="text-4xl font-bold tracking-tight sm:text-6xl">
				Promo Spesial PZN
			</h1>
			<p class="mt-6 text-lg leading-8 text-gray-300 dark:text-gray-600">
				Dapatkan diskon hingga 70% untuk semua kelas programming. Penawaran terbatas, jangan sampai kehabisan!
			</p>
		</div>
	</div>
</section>


<!-- Paket Promo -->
<section class="py-24 sm:py-24">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl text-center">
			<h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
				Pilih Paket yang Tepat untuk Anda
			</h2>
			<p class="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
				Semua paket sudah termasuk akses lifetime, sertifikat, dan support mentor.
			</p>
		</div>
		
		<div class="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
			<!-- Paket Basic -->
			<div class="flex flex-col justify-between rounded-3xl bg-white dark:bg-gray-800 p-8 ring-1 ring-gray-200 dark:ring-gray-700 xl:p-10">
				<div class="flex items-center justify-between gap-x-4">
					<h3 class="text-lg font-semibold leading-8 text-gray-900 dark:text-gray-900">Basic</h3>
					<span class="inline-flex items-center rounded-full bg-gray-50 px-2.5 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 dark:bg-gray-800 dark:text-gray-400 dark:ring-gray-500/20">
						Populer
					</span>
				</div>
				<p class="mt-4 text-sm leading-6 text-gray-600 dark:text-gray-300">
					Cocok untuk pemula yang ingin belajar programming dari dasar.
				</p>
				<p class="mt-6 flex items-baseline gap-x-1">
					<span class="text-4xl font-bold tracking-tight text-gray-900 dark:text-white ">Rp 199K</span>
					<span class="text-sm font-semibold leading-6 text-gray-600 dark:text-gray-300 line-through">Rp 599K</span>
				</p>
				<a
					href="/"
					class="mt-8 block rounded-md bg-gray-900 dark:bg-white px-3 py-2 text-center text-sm font-semibold leading-6 text-white dark:text-gray-900 shadow-sm hover:bg-gray-800 dark:hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 dark:focus-visible:outline-white"
				>
					Daftar Sekarang
				</a>
				<ul role="list" class="mt-8 space-y-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
					<li class="flex gap-x-3">
						<svg class="h-6 w-5 flex-none text-gray-900 dark:text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
							<path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
						</svg>
						1 Kelas Pilihan
					</li>
					<li class="flex gap-x-3">
						<svg class="h-6 w-5 flex-none text-gray-900 dark:text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
							<path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
						</svg>
						Akses Lifetime
					</li>
					<li class="flex gap-x-3">
						<svg class="h-6 w-5 flex-none text-gray-900 dark:text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
							<path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
						</svg>
						Sertifikat
					</li>
					<li class="flex gap-x-3">
						<svg class="h-6 w-5 flex-none text-gray-900 dark:text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
							<path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
						</svg>
						Support 30 Hari
					</li>
				</ul>
			</div>

			<!-- Paket Pro -->
			<div class="flex flex-col justify-between rounded-3xl bg-white dark:bg-gray-800 p-8 ring-2 ring-indigo-600 xl:p-10 relative">
				<div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
					<span class="inline-flex items-center rounded-full bg-gray-900 dark:bg-white px-4 py-1 text-sm font-medium text-white dark:text-gray-900">
						Terpopuler
					</span>
				</div>
				<div class="flex items-center justify-between gap-x-4">
					<h3 class="text-lg font-semibold leading-8 text-gray-900 dark:text-white ">Pro</h3>
					<span class="inline-flex items-center rounded-full bg-gray-100 dark:bg-gray-700 px-2.5 py-1 text-xs font-medium text-gray-700 dark:text-gray-300 ring-1 ring-inset ring-gray-300 dark:ring-gray-600">
						Best Value
					</span>
				</div>
				<p class="mt-4 text-sm leading-6 text-gray-600 dark:text-gray-300">
					Paket lengkap untuk developer yang serius ingin menguasai full stack development.
				</p>
				<p class="mt-6 flex items-baseline gap-x-1">
					<span class="text-4xl font-bold tracking-tight text-gray-900 dark:text-white ">Rp 499K</span>
					<span class="text-sm font-semibold leading-6 text-gray-600 dark:text-gray-300 line-through">Rp 1.999K</span>
				</p>
				<a
					href="/"
					class="mt-8 block rounded-md bg-gray-900 dark:bg-white px-3 py-2 text-center text-sm font-semibold leading-6 text-white dark:text-gray-900 shadow-sm hover:bg-gray-800 dark:hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 dark:focus-visible:outline-white"
				>
					Daftar Sekarang
				</a>
				<ul role="list" class="mt-8 space-y-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
					<li class="flex gap-x-3">
						<svg class="h-6 w-5 flex-none text-gray-900 dark:text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
							<path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
						</svg>
						5 Kelas Pilihan
					</li>
					<li class="flex gap-x-3">
						<svg class="h-6 w-5 flex-none text-gray-900 dark:text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
							<path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
						</svg>
						Akses Lifetime
					</li>
					<li class="flex gap-x-3">
						<svg class="h-6 w-5 flex-none text-gray-900 dark:text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
							<path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
						</svg>
						Sertifikat + Portfolio
					</li>
					<li class="flex gap-x-3">
						<svg class="h-6 w-5 flex-none text-gray-900 dark:text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
							<path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
						</svg>
						Support 90 Hari
					</li>
					<li class="flex gap-x-3">
						<svg class="h-6 w-5 flex-none text-gray-900 dark:text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
							<path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
						</svg>
						Live Mentoring
					</li>
				</ul>
			</div>

			<!-- Paket Enterprise -->
			<div class="flex flex-col justify-between rounded-3xl bg-white dark:bg-gray-800 p-8 ring-1 ring-gray-200 dark:ring-gray-700 xl:p-10">
				<div class="flex items-center justify-between gap-x-4">
					<h3 class="text-lg font-semibold leading-8 text-gray-900 dark:text-white ">Enterprise</h3>
					<span class="inline-flex items-center rounded-full bg-gray-100 dark:bg-gray-700 px-2.5 py-1 text-xs font-medium text-gray-700 dark:text-gray-300 ring-1 ring-inset ring-gray-300 dark:ring-gray-600">
						Premium
					</span>
				</div>
				<p class="mt-4 text-sm leading-6 text-gray-600 dark:text-gray-300">
					Paket terbaik untuk tim atau perusahaan yang ingin upskill karyawan secara menyeluruh.
				</p>
				<p class="mt-6 flex items-baseline gap-x-1">
					<span class="text-4xl font-bold tracking-tight text-gray-900 dark:text-white ">Rp 999K</span>
					<span class="text-sm font-semibold leading-6 text-gray-600 dark:text-gray-300 line-through">Rp 4.999K</span>
				</p>
				<a
					href="/"
					class="mt-8 block rounded-md bg-gray-900 dark:bg-white px-3 py-2 text-center text-sm font-semibold leading-6 text-white dark:text-gray-900 shadow-sm hover:bg-gray-800 dark:hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 dark:focus-visible:outline-white"
				>
					Daftar Sekarang
				</a>
				<ul role="list" class="mt-8 space-y-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
					<li class="flex gap-x-3">
						<svg class="h-6 w-5 flex-none text-gray-900 dark:text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
							<path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
						</svg>
						Semua Kelas (20+)
					</li>
					<li class="flex gap-x-3">
						<svg class="h-6 w-5 flex-none text-gray-900 dark:text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
							<path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
						</svg>
						Akses Lifetime
					</li>
					<li class="flex gap-x-3">
						<svg class="h-6 w-5 flex-none text-gray-900 dark:text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
							<path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
						</svg>
						Sertifikat + Portfolio
					</li>
					<li class="flex gap-x-3">
						<svg class="h-6 w-5 flex-none text-gray-900 dark:text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
							<path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
						</svg>
						Support 1 Tahun
					</li>
					<li class="flex gap-x-3">
						<svg class="h-6 w-5 flex-none text-gray-900 dark:text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
							<path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
						</svg>
						Private Mentoring
					</li>
					<li class="flex gap-x-3">
						<svg class="h-6 w-5 flex-none text-gray-900 dark:text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
							<path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
						</svg>
						Job Placement Support
					</li>
				</ul>
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
              Promo ini terbatas dan akan berakhir segera. Daftar sekarang dan dapatkan diskon hingga 70%!
            </p>
            <div class="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-4">
              <a
                href="/"
                class="rounded-md bg-gray-900 px-8 py-4 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 transition"
              >
                Daftar Sekarang - Diskon 70%
              </a>
              <a
                href="/sosial-media"
                class="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-900 hover:underline"
              >
                Butuh Bantuan? <span aria-hidden="true">→</span>
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
							href={link.href}
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
  
