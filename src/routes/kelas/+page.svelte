<script lang="ts">
	import "../../app.css"
    import golang from "$lib/assets/golang.jpg"
    import html from "$lib/assets/html.jpg"
    import java from "$lib/assets/java.jpg"
    import laravel from "$lib/assets/laravel.jpg"
    import nodejs from "$lib/assets/nodejs.jpg"
    import mysql from "$lib/assets/mysql.jpg"
</script>

<svelte:head>
	<title>Kelas Online - Programmer Zaman Now</title>
	<meta name="description" content="Pilih kelas programming yang sesuai dengan kebutuhan Anda. Dari pemula hingga mahir, semua tersedia di PZN." />
</svelte:head>

<!-- Hero Section -->
<section class="bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-b-4xl">
	<div class="mx-auto max-w-7xl px-6 py-24 sm:py-14 lg:px-8">
		<div class="mx-auto max-w-2xl text-center">
			<h1 class="text-4xl font-bold tracking-tight sm:text-6xl">
				Kelas Programmer Zaman Now
			</h1>
			<p class="mt-6 text-lg leading-8 text-gray-300 dark:text-gray-600">
				Tingkatkan skill programming Anda dengan kelas-kelas berkualitas tinggi yang dirancang khusus untuk kebutuhan industri.
			</p>
		</div>
	</div>
</section>

<!-- Daftar Kelas -->
<section class="py-24 sm:py-24">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
        <!-- Deskripsi di atas daftar kelas -->
		<div class="mx-auto max-w-3xl text-center mb-16">
			<h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
				Pilihan Kelas Terbaik
			</h2>
			<p class="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
				Tingkatkan kemampuan programming dengan kelas pilihan dari
				<strong>Programmer Zaman Now</strong>.
			</p>
		</div>

		<div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
			<!-- Kelas 1 -->
			<div class="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg ring-1 ring-gray-900/5 hover:shadow-xl transition-shadow">
				<div class="aspect-[16/9] overflow-hidden rounded-t-2xl bg-gray-100 dark:bg-gray-700">
					<img
						src="{golang}"
						alt="React.js Complete Course"
						class="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
					/>
				</div>
				<div class="p-6">
					<div class="flex items-center gap-2 mb-2">
						<span class="inline-flex items-center rounded-md bg-gray-100 dark:bg-gray-700 px-2 py-1 text-xs font-medium text-gray-700 dark:text-gray-300 ring-1 ring-inset ring-gray-300 dark:ring-gray-600">
							Pemula
						</span>
						<span class="inline-flex items-center rounded-md bg-gray-900 dark:bg-white px-2 py-1 text-xs font-medium text-white dark:text-gray-900 ring-1 ring-inset ring-gray-900 dark:ring-white">
							Terlaris
						</span>
					</div>
					<h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
						Pemogramman Golang : Pemula Sampai Mahir
					</h3>
					<p class="text-sm text-gray-600 dark:text-gray-300 mb-4">
						Belajar pemrograman Go-Lang dari pemula sampai mahir disertai studi kasus. Materi akan selalu di-update secara berkala.
					</p>
					<div class="flex items-center justify-between">
						<div class="flex items-center gap-1">
							<div class="flex -space-x-1">
								<img class="h-6 w-6 rounded-full ring-2 ring-white dark:ring-gray-800" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
								<img class="h-6 w-6 rounded-full ring-2 ring-white dark:ring-gray-800" src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
							</div>
							<span class="text-sm text-gray-500 dark:text-gray-400">1,234 siswa</span>
						</div>
						<div class="text-right">
							<div class="text-lg font-bold text-gray-900 dark:text-white">Rp 129.000</div>
							<div class="text-sm text-gray-500 dark:text-gray-400 line-through">Rp 599.000</div>
						</div>
					</div>
					<button class="w-full mt-4 rounded-md bg-gray-900 dark:bg-white px-4 py-2 text-sm font-semibold text-white dark:text-gray-900 shadow-sm hover:bg-gray-800 dark:hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 dark:focus-visible:outline-white">
						Lihat Detail
					</button>
				</div>
			</div>

			<!-- Kelas 2 -->
			<div class="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg ring-1 ring-gray-900/5 hover:shadow-xl transition-shadow">
				<div class="aspect-[16/9] overflow-hidden rounded-t-2xl bg-gray-100 dark:bg-gray-700">
					<img
						src="{html}"
						alt="Node.js & Express.js"
						class="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
					/>
				</div>
				<div class="p-6">
					<div class="flex items-center gap-2 mb-2">
						<span class="inline-flex items-center rounded-md bg-gray-100 dark:bg-gray-700 px-2 py-1 text-xs font-medium text-gray-700 dark:text-gray-300 ring-1 ring-inset ring-gray-300 dark:ring-gray-600">
							Pemula
						</span>
						<span class="inline-flex items-center rounded-md bg-gray-900 dark:bg-white px-2 py-1 text-xs font-medium text-white dark:text-gray-900 ring-1 ring-inset ring-gray-900 dark:ring-white">
							Terlaris
						</span>
					</div>
					<h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
						HTML, CSS dan JavaScript : Pemula sampai Mahir
					</h3>
					<p class="text-sm text-gray-600 dark:text-gray-300 mb-4">
						Belajar pemrograman HTML, CSS dan JavaScript dari pemula sampai mahir disertai studi kasus yang update secara berkala.
					</p>
					<div class="flex items-center justify-between">
						<div class="flex items-center gap-1">
							<div class="flex -space-x-1">
								<img class="h-6 w-6 rounded-full ring-2 ring-white dark:ring-gray-800" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
								<img class="h-6 w-6 rounded-full ring-2 ring-white dark:ring-gray-800" src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
							</div>
							<span class="text-sm text-gray-500 dark:text-gray-400">856 siswa</span>
						</div>
						<div class="text-right">
							<div class="text-lg font-bold text-gray-900 dark:text-white">Rp 129.000</div>
							<div class="text-sm text-gray-500 dark:text-gray-400 line-through">Rp 799.000</div>
						</div>
					</div>
					<button class="w-full mt-4 rounded-md bg-gray-900 dark:bg-white px-4 py-2 text-sm font-semibold text-white dark:text-gray-900 shadow-sm hover:bg-gray-800 dark:hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 dark:focus-visible:outline-white">
						Lihat Detail
					</button>
				</div>
			</div>

			<!-- Kelas 3 -->
			<div class="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg ring-1 ring-gray-900/5 hover:shadow-xl transition-shadow">
				<div class="aspect-[16/9] overflow-hidden rounded-t-2xl bg-gray-100 dark:bg-gray-700">
					<img
						src="{java}"
						alt="Flutter Mobile Development"
						class="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
					/>
				</div>
				<div class="p-6">
					<div class="flex items-center gap-2 mb-2">
						<span class="inline-flex items-center rounded-md bg-gray-100 dark:bg-gray-700 px-2 py-1 text-xs font-medium text-gray-700 dark:text-gray-300 ring-1 ring-inset ring-gray-300 dark:ring-gray-600">
							Terlaris
						</span>
						<span class="inline-flex items-center rounded-md bg-gray-900 dark:bg-white px-2 py-1 text-xs font-medium text-white dark:text-gray-900 ring-1 ring-inset ring-gray-900 dark:ring-white">
							Pemula
						</span>
					</div>
					<h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
						Pemrograman Java : Pemula sampai Mahir
					</h3>
					<p class="text-sm text-gray-600 dark:text-gray-300 mb-4">
						Belajar pemrograman Java dari pemula sampai mahir disertai studi kasus. Materi akan selalu di-update secara berkala
					</p>
					<div class="flex items-center justify-between">
						<div class="flex items-center gap-1">
							<div class="flex -space-x-1">
								<img class="h-6 w-6 rounded-full ring-2 ring-white dark:ring-gray-800" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
								<img class="h-6 w-6 rounded-full ring-2 ring-white dark:ring-gray-800" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
							</div>
							<span class="text-sm text-gray-500 dark:text-gray-400">2,145 siswa</span>
						</div>
						<div class="text-right">
							<div class="text-lg font-bold text-gray-900 dark:text-white">Rp 129.000</div>
							<div class="text-sm text-gray-500 dark:text-gray-400 line-through">Rp 999.000</div>
						</div>
					</div>
					<button class="w-full mt-4 rounded-md bg-gray-900 dark:bg-white px-4 py-2 text-sm font-semibold text-white dark:text-gray-900 shadow-sm hover:bg-gray-800 dark:hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 dark:focus-visible:outline-white">
						Lihat Detail
					</button>
				</div>
			</div>

			<!-- Kelas 4 -->
			<div class="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg ring-1 ring-gray-900/5 hover:shadow-xl transition-shadow">
				<div class="aspect-[16/9] overflow-hidden rounded-t-2xl bg-gray-100 dark:bg-gray-700">
					<img
						src="{laravel}"
						alt="Python Data Science"
						class="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
					/>
				</div>
				<div class="p-6">
					<div class="flex items-center gap-2 mb-2">
						<span class="inline-flex items-center rounded-md bg-gray-100 dark:bg-gray-700 px-2 py-1 text-xs font-medium text-gray-700 dark:text-gray-300 ring-1 ring-inset ring-gray-300 dark:ring-gray-600">
							Pemula
						</span>
						<span class="inline-flex items-center rounded-md bg-gray-900 dark:bg-white px-2 py-1 text-xs font-medium text-white dark:text-gray-900 ring-1 ring-inset ring-gray-900 dark:ring-white">
							Terlaris
						</span>
					</div>
					<h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
						Laravel : Pemula sampai Mahir
					</h3>
					<p class="text-sm text-gray-600 dark:text-gray-300 mb-4">
						Belajar Laravel Framework terlengkap dari pemula sampai mahir disertai studi kasus.
					</p>
					<div class="flex items-center justify-between">
						<div class="flex items-center gap-1">
							<div class="flex -space-x-1">
								<img class="h-6 w-6 rounded-full ring-2 ring-white dark:ring-gray-800" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
								<img class="h-6 w-6 rounded-full ring-2 ring-white dark:ring-gray-800" src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
							</div>
							<span class="text-sm text-gray-500 dark:text-gray-400">1,567 siswa</span>
						</div>
						<div class="text-right">
							<div class="text-lg font-bold text-gray-900 dark:text-white">Rp 129.000</div>
							<div class="text-sm text-gray-500 dark:text-gray-400 line-through">Rp 1.199.000</div>
						</div>
					</div>
					<button class="w-full mt-4 rounded-md bg-gray-900 dark:bg-white px-4 py-2 text-sm font-semibold text-white dark:text-gray-900 shadow-sm hover:bg-gray-800 dark:hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 dark:focus-visible:outline-white">
						Lihat Detail
                    </button>
				</div>
			</div>

			<!-- Kelas 5 -->
			<div class="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg ring-1 ring-gray-900/5 hover:shadow-xl transition-shadow">
				<div class="aspect-[16/9] overflow-hidden rounded-t-2xl bg-gray-100 dark:bg-gray-700">
					<img
						src="{nodejs}"
						alt="Full Stack Laravel & Vue.js"
						class="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
					/>
				</div>
				<div class="p-6">
					<div class="flex items-center gap-2 mb-2">
						<span class="inline-flex items-center rounded-md bg-gray-100 dark:bg-gray-700 px-2 py-1 text-xs font-medium text-gray-700 dark:text-gray-300 ring-1 ring-inset ring-gray-300 dark:ring-gray-600">
							Pemula
						</span>
						<span class="inline-flex items-center rounded-md bg-gray-900 dark:bg-white px-2 py-1 text-xs font-medium text-white dark:text-gray-900 ring-1 ring-inset ring-gray-900 dark:ring-white">
							Terlaris
						</span>
					</div>
					<h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
						NodeJS : Pemula sampai Mahir
					</h3>
					<p class="text-sm text-gray-600 dark:text-gray-300 mb-4">
						Belajar NodeJS dari pemula sampai mahir disertai studi kasus yang update secara berkala.
					</p>
					<div class="flex items-center justify-between">
						<div class="flex items-center gap-1">
							<div class="flex -space-x-1">
								<img class="h-6 w-6 rounded-full ring-2 ring-white dark:ring-gray-800" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
								<img class="h-6 w-6 rounded-full ring-2 ring-white dark:ring-gray-800" src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
							</div>
							<span class="text-sm text-gray-500 dark:text-gray-400">987 siswa</span>
						</div>
						<div class="text-right">
							<div class="text-lg font-bold text-gray-900 dark:text-white">Rp 129.000</div>
							<div class="text-sm text-gray-500 dark:text-gray-400 line-through">Rp 1.599.000</div>
						</div>
					</div>
					<button class="w-full mt-4 rounded-md bg-gray-900 dark:bg-white px-4 py-2 text-sm font-semibold text-white dark:text-gray-900 shadow-sm hover:bg-gray-800 dark:hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 dark:focus-visible:outline-white">
						Lihat Detail
					</button>
				</div>
			</div>

			<!-- Kelas 6 -->
			<div class="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg ring-1 ring-gray-900/5 hover:shadow-xl transition-shadow">
				<div class="aspect-[16/9] overflow-hidden rounded-t-2xl bg-gray-100 dark:bg-gray-700">
					<img
						src="{mysql}"
						alt="DevOps & Docker"
						class="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
					/>
				</div>
				<div class="p-6">
					<div class="flex items-center gap-2 mb-2">
						<span class="inline-flex items-center rounded-md bg-gray-100 dark:bg-gray-700 px-2 py-1 text-xs font-medium text-gray-700 dark:text-gray-300 ring-1 ring-inset ring-gray-300 dark:ring-gray-600">
							Pemula
						</span>
						<span class="inline-flex items-center rounded-md bg-gray-900 dark:bg-white px-2 py-1 text-xs font-medium text-white dark:text-gray-900 ring-1 ring-inset ring-gray-900 dark:ring-white">
							Terlaris
						</span>
					</div>
					<h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
						Database MySQL : Pemula sampai Mahir
					</h3>
					<p class="text-sm text-gray-600 dark:text-gray-300 mb-4">
						Belajar database MySQL dari pemula sampai mahir. Materi akan selalu di-update secara berkala
					</p>
					<div class="flex items-center justify-between">
						<div class="flex items-center gap-1">
							<div class="flex -space-x-1">
								<img class="h-6 w-6 rounded-full ring-2 ring-white dark:ring-gray-800" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
								<img class="h-6 w-6 rounded-full ring-2 ring-white dark:ring-gray-800" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
							</div>
							<span class="text-sm text-gray-500 dark:text-gray-400">654 siswa</span>
						</div>
						<div class="text-right">
							<div class="text-lg font-bold text-gray-900 dark:text-white">Rp 699.000</div>
							<div class="text-sm text-gray-500 dark:text-gray-400 line-through">Rp 1.399.000</div>
						</div>
					</div>
					<button class="w-full mt-4 rounded-md bg-gray-900 dark:bg-white px-4 py-2 text-sm font-semibold text-white dark:text-gray-900 shadow-sm hover:bg-gray-800 dark:hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 dark:focus-visible:outline-white">
						Lihat Detail
					</button>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="bg-white dark:bg-gray-900">
    <div class="px-6 py-24 sm:px-6 sm:py-16 lg:px-8">
        <div class="mx-auto max-w-3xl text-center border dark:border-white rounded-2xl p-8">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Tidak Menemukan Kelas yang Cocok?
          </h2>
          <p class="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-700 dark:text-gray-300">
            Hubungi tim kami untuk konsultasi kelas yang sesuai dengan kebutuhan dan level skill Anda.
          </p>
          <div class="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="/promo"
              class="rounded-md bg-gray-900 dark:bg-gray-900 px-6 py-3 text-sm font-semibold text-white dark:text-white shadow-sm hover:bg-gray-800 dark:hover:bg-gray-700 transition"
            >
              Lihat Promo
            </a>
            <a
              href="/sosial-media"
              class="rounded-md px-6 py-3 text-sm font-semibold text-gray-900 dark:text-white border border-transparent hover:border-gray-300 dark:hover:border-gray-600 transition"
            >
              Konsultasi Gratis <span aria-hidden="true">→</span>
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
