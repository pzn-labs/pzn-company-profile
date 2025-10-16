<script lang="ts">
	import "../../app.css"
</script>

<svelte:head>
	<title>Sosial Media - Programmer Zaman Now</title>
	<meta name="description" content="Ikuti Programmer Zaman Now di berbagai platform sosial media untuk update terbaru, tips programming, dan konten edukatif." />
</svelte:head>

<!-- Hero Section -->
<section class="bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-b-4xl">
	<div class="mx-auto max-w-7xl px-6 py-24 sm:py-24 lg:px-8">
		<div class="mx-auto max-w-2xl text-center">
			<h1 class="text-4xl font-bold tracking-tight sm:text-6xl">
				Ikuti Kami di Sosial Media
			</h1>
			<p class="mt-6 text-lg leading-8 text-gray-300 dark:text-gray-600">
				Dapatkan update terbaru, tips programming, dan konten edukatif dari Programmer Zaman Now di berbagai platform.
			</p>
		</div>
	</div>
</section>

<!-- Platform Sosial Media -->
<section class="py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl text-center">
			<h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
				Temukan Kami di Platform Favorit Anda
			</h2>
			<p class="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
				Bergabunglah dengan komunitas developer terbesar di Indonesia dan dapatkan insight berharga setiap hari.
			</p>
		</div>
		
		<div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
			<!-- YouTube -->
			<div class="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg ring-1 ring-gray-900/5 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
				<div class="p-8">
					<div class="flex items-center gap-4 mb-6">
						<div class="flex h-16 w-16 items-center justify-center rounded-full bg-gray-900 dark:bg-white">
							<svg class="h-8 w-8 text-white dark:text-gray-900" fill="currentColor" viewBox="0 0 24 24">
								<path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
							</svg>
						</div>
						<div>
							<h3 class="text-xl font-semibold text-gray-900 dark:text-white">YouTube</h3>
							<p class="text-sm text-gray-600 dark:text-gray-400">500K+ Subscribers</p>
						</div>
					</div>
					<p class="text-gray-600 dark:text-gray-300 mb-6">
						Tutorial programming lengkap, tips karir, dan review teknologi terbaru. Subscribe untuk tidak ketinggalan video baru setiap minggu!
					</p>
					<div class="flex items-center justify-between">
						<a
							href="https://youtube.com/@programmerzamannow"
							target="_blank"
							rel="noopener noreferrer"
							class="inline-flex items-center gap-2 rounded-md bg-gray-900 dark:bg-white px-4 py-2 text-sm font-semibold text-white dark:text-gray-900 shadow-sm hover:bg-gray-800 dark:hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 dark:focus-visible:outline-white"
						>
							<svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
								<path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
							</svg>
							Subscribe Channel
						</a>
						<span class="text-sm text-gray-500 dark:text-gray-400">500K+ subscribers</span>
					</div>
				</div>
			</div>

			<!-- Instagram -->
            <div class="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg ring-1 ring-gray-900/5 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div class="p-8">
                    <div class="flex items-center gap-4 mb-6">
                        <div class="flex h-16 w-16 items-center justify-center rounded-full bg-black dark:bg-white">
                            <!-- Modern Instagram Outline Icon -->
                            <svg class="h-8 w-8 text-white dark:text-gray-900" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                            </svg>
                        </div>
                        <div>
                            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Instagram</h3>
                            <p class="text-sm text-gray-600 dark:text-gray-400">200K+ Followers</p>
                        </div>
                    </div>
                    <p class="text-gray-600 dark:text-gray-300 mb-6">
                        Tips coding harian, behind the scenes, dan konten visual menarik tentang dunia programming. Follow untuk daily inspiration!
                    </p>
                    <div class="flex items-center justify-between">
                        <a
                            href="https://instagram.com/programmerzamannow"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="inline-flex items-center gap-2 rounded-md bg-black dark:bg-white px-4 py-2 text-sm font-semibold text-white dark:text-gray-900 shadow-sm hover:bg-gray-800 dark:hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black dark:focus-visible:outline-white"
                        >
                            <svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                            </svg>
                            Follow Instagram
                        </a>
                        <span class="text-sm text-gray-500 dark:text-gray-400">200K+ followers</span>
                    </div>
                </div>
            </div>

			<!-- TikTok -->
			<div class="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg ring-1 ring-gray-900/5 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
				<div class="p-8">
					<div class="flex items-center gap-4 mb-6">
						<div class="flex h-16 w-16 items-center justify-center rounded-full bg-black">
							<svg class="h-8 w-8 text-white dark:text-gray-900" fill="currentColor" viewBox="0 0 24 24">
								<path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
							</svg>
						</div>
						<div>
							<h3 class="text-xl font-semibold text-gray-900 dark:text-white">TikTok</h3>
							<p class="text-sm text-gray-600 dark:text-gray-400">300K+ Followers</p>
						</div>
					</div>
					<p class="text-gray-600 dark:text-gray-300 mb-6">
						Konten programming singkat dan engaging! Tips coding, life hacks developer, dan trend teknologi dalam format video pendek.
					</p>
					<div class="flex items-center justify-between">
						<a
							href="https://tiktok.com/@programmerzamannow"
							target="_blank"
							rel="noopener noreferrer"
							class="inline-flex items-center gap-2 rounded-md bg-black px-4 py-2 text-sm font-semibold text-white dark:text-gray-900 shadow-sm hover:bg-gray-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
						>
							<svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
								<path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
							</svg>
							Follow TikTok
						</a>
						<span class="text-sm text-gray-500 dark:text-gray-400">300K+ followers</span>
					</div>
				</div>
			</div>

			<!-- Discord -->
			<div class="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg ring-1 ring-gray-900/5 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
				<div class="p-8">
					<div class="flex items-center gap-4 mb-6">
						<div class="flex h-16 w-16 items-center justify-center rounded-full bg-gray-900 dark:bg-white">
							<svg class="h-8 w-8 text-white dark:text-gray-900" fill="currentColor" viewBox="0 0 24 24">
								<path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
							</svg>
						</div>
						<div>
							<h3 class="text-xl font-semibold text-gray-900 dark:text-white ">Discord</h3>
							<p class="text-sm text-gray-600 dark:text-gray-400">50K+ Members</p>
						</div>
					</div>
					<p class="text-gray-600 dark:text-gray-300 mb-6">
						Komunitas developer Indonesia terbesar! Diskusi real-time, sharing project, dan networking dengan sesama developer.
					</p>
					<div class="flex items-center justify-between">
						<a
							href="https://discord.gg/programmerzamannow"
							target="_blank"
							rel="noopener noreferrer"
							class="inline-flex items-center gap-2 rounded-md bg-gray-900 dark:bg-white px-4 py-2 text-sm font-semibold text-white dark:text-gray-900 shadow-sm hover:bg-gray-800 dark:hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 dark:focus-visible:outline-white"
						>
							<svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
								<path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
							</svg>
							Join Discord
						</a>
						<span class="text-sm text-gray-500 dark:text-gray-400">50K+ members</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Contact Info -->
<section class="py-16 sm:py-8  bg-white">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-3xl text-center border dark:border-white rounded-2xl p-8">
			<h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
				Butuh Bantuan?
			</h2>
			<p class="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
				Tim support kami siap membantu Anda 24/7. Hubungi kami melalui platform yang paling nyaman untuk Anda.
			</p>
		</div>          
	</div>
</section>

<footer class="bg-gray-900 text-gray-300 border-t border-gray-800 rounded-t-4xl mt-16">
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