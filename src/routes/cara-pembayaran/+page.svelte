<script lang="ts">
	import { base } from "$app/paths";
	import { onMount } from "svelte";
	import "../../app.css";

	// ✅ Array daftar kelas
	let kelasList = [
		{ nama: "Golang", harga: "Rp 129.000", slug: "golang" },
		{ nama: "Java Dasar", harga: "Rp 129.000", slug: "java-dasar" },
		{ nama: "Node.js", harga: "Rp 129.000", slug: "nodejs" },
		{ nama: "Laravel", harga: "Rp 129.000", slug: "laravel" },
		{ nama: "MySQL", harga: "Rp 129.000", slug: "mysql" },
		{ nama: "Docker Basics", harga: "Rp 129.000", slug: "docker-basics" },
		{ nama: "HTML, CSS dan JavaScript", harga: "Rp 129.000", slug: "html-css-javascript" },
		{ nama: "VueJS", harga: "Rp 129.000", slug: "vuejs" },
		{ nama: "PHP", harga: "Rp 129.000", slug: "php" },
		{ nama: "Spring Boot", harga: "Rp 129.000", slug: "spring-boot" },
		{ nama: "ReactJS", harga: "Rp 129.000", slug: "reactjs" },
		{ nama: "MongoDB", harga: "Rp 129.000", slug: "mongodb" },
		{ nama: "Kotlin", harga: "Rp 129.000", slug: "kotlin" },
		{ nama: "Git", harga: "Rp 129.000", slug: "git" },
		{ nama: "Postgre", harga: "Rp 129.000", slug: "postgre" },
		{ nama: "Redis", harga: "Rp 129.000", slug: "redis" },
		{ nama: "Dart", harga: "Rp 129.000", slug: "dart" },
		{ nama: "Typescript", harga: "Rp 129.000", slug: "typescript" },
		{ nama: "Elasticsearch", harga: "Rp 129.000", slug: "elasticsearch" },
		{ nama: "Jenkins", harga: "Rp 129.000", slug: "jenkins" },
		{ nama: "Android", harga: "Rp 129.000", slug: "android" },
		{ nama: "OpenApi", harga: "Rp 129.000", slug: "openapi" },
		{ nama: "RestFullAPI", harga: "Rp 129.000", slug: "restfullapi" },
		{ nama: "HTTP", harga: "Rp 129.000", slug: "http" },
		{ nama: "Python", harga: "Rp 129.000", slug: "python" },
		{ nama: "Svelte", harga: "Rp 129.000", slug: "svelte" },
		{ nama: "Bootstrap", harga: "Rp 129.000", slug: "bootstrap" },
		{ nama: "Rust", harga: "Rp 129.000", slug: "rust" },
		{ nama: "Bun", harga: "Rp 129.000", slug: "bun" },
		{ nama: "K6 Performance Testing", harga: "Rp 129.000", slug: "k6-performance-testing" },
		{ nama: "NestJS", harga: "Rp 129.000", slug: "nestjs" },
		{ nama: "RabbitMQ", harga: "Rp 129.000", slug: "rabbitmq" },
		{ nama: "Apache Kafka", harga: "Rp 129.000", slug: "apache-kafka" }
	];

	let endDate = new Date("2025-11-01T23:59:59").getTime();
	let days = 0, hours = 0, minutes = 0, seconds = 0;
	let promoBerakhir = false;

	// ⏰ Update waktu promo
	onMount(() => {
		const timer = setInterval(() => {
			const now = new Date().getTime();
			const timeLeft = endDate - now;

			if (timeLeft <= 0) {
				clearInterval(timer);
				promoBerakhir = true;
				days = hours = minutes = seconds = 0;
			} else {
				promoBerakhir = false;
				days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
				hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
				minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
				seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
			}
		}, 1000);
	});
</script>

<svelte:head>
	<title>Cara Pembayaran - Programmer Zaman Now</title>
	<meta
		name="description"
		content="Panduan lengkap cara pembayaran kelas di Programmer Zaman Now. Mudah, cepat, dan aman."
	/>
</svelte:head>

<!-- SECTION: Cara Pembayaran -->
<section class="bg-black text-white py-12 px-4 sm:px-8">
	<div class="max-w-4xl mx-auto">
		<!-- Judul -->
		<div class="text-center mb-10">
			<h1 class="text-3xl sm:text-5xl font-extrabold mb-3 tracking-tight">Cara Pembayaran</h1>
			<p class="text-gray-400 max-w-2xl mx-auto text-sm sm:text-lg leading-relaxed">
				Panduan langkah demi langkah untuk menyelesaikan pembayaran dan mengakses kelas di
				<span class="font-semibold text-blue-400">Programmer Zaman Now</span>.
			</p>
		</div>

		<!-- Langkah-langkah -->
		<ol class="space-y-8">
			{#each [
				{
					no: 1,
					title: 'Pilih Kelas & Daftar',
					desc: 'Pilih kelas yang ingin Anda ikuti, lalu klik tombol <span class="font-semibold text-blue-400">Daftar Sekarang</span> pada halaman kelas.'
				},
				{
					no: 2,
					title: 'Isi Data & Konfirmasi',
					desc: 'Isikan data diri Anda dengan benar dan pastikan email aktif agar dapat menerima konfirmasi pembayaran dan akses kelas.'
				},
				{
					no: 3,
					title: 'Lakukan Pembayaran',
					desc: 'Transfer sesuai harga kelas ke rekening berikut:'
				},
				{
					no: 4,
					title: 'Konfirmasi Pembayaran',
					desc: 'Setelah melakukan transfer, kirim bukti pembayaran dan sebutkan kelas yang ingin dibeli ke nomor WhatsApp berikut:'
				},
				{
					no: 5,
					title: 'Akses Kelas Anda',
					desc: 'Setelah pembayaran dikonfirmasi, Anda akan mendapatkan akses ke kelas yang telah dibeli melalui chat WhatsApp. Link yang akan diberi berupa link yang berisi kode kupon untuk mengakses kelas tersebut. Jika kode kupon sudah tidak berlaku, silahkan konfirmasi kembali ke nomor WhatsApp yang telah disebutkan di atas, sehingga dapat diberikan kode kupon yang baru.'
				}
			] as step}
				<li class="group">
					<!-- Nomor & Judul -->
					<div class="flex items-center sm:items-start gap-4 mb-3">
						<div
							class="flex-shrink-0 w-10 h-10 rounded-full bg-white text-gray-900 font-bold flex items-center justify-center text-lg shadow transition-transform group-hover:scale-110"
						>
							{step.no}
						</div>
						<h2 class="font-semibold text-lg sm:text-xl leading-snug group-hover:text-blue-400 transition">
							{step.title}
						</h2>
					</div>

					<!-- Deskripsi -->
					<p class="text-gray-300 text-sm sm:text-base leading-relaxed mb-3 pl-14 sm:pl-14">
						{@html step.desc}
					</p>

					<!-- Tambahan untuk langkah 3 -->
					{#if step.no === 3}
						<div class="rounded-xl p-4 border border-gray-700 bg-gray-900/40 mb-2 ml-14 sm:ml-14">
							<div class="space-y-2 text-sm sm:text-base text-gray-300">
								<div class="flex flex-wrap sm:flex-nowrap gap-2">
									<div class="w-32 font-semibold text-white">Bank</div>
									<div class="flex-1">: JAGO</div>
								</div>
								<div class="flex flex-wrap sm:flex-nowrap gap-2">
									<div class="w-32 font-semibold text-white">No. Rekening</div>
									<div class="flex-1">: 1057-3122-2434</div>
								</div>
								<div class="flex flex-wrap sm:flex-nowrap gap-2">
									<div class="w-32 font-semibold text-white">Nama</div>
									<div class="flex-1">: Yanti</div>
								</div>
							</div>
						</div>
					{/if}

					<!-- Tambahan untuk langkah 4 -->
					{#if step.no === 4}
						<div class="ml-14 sm:ml-14">
							<a
								href="https://wa.me/6285161745660"
								target="_blank"
								class="inline-flex items-center gap-2 mt-3 px-4 py-2 rounded-full bg-green-500 hover:bg-green-600 text-white font-medium shadow-md transition-all duration-300"
							>
								<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="w-5 h-5">
									<path
										d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.198.297-.767.967-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.173.198-.297.298-.496.099-.198.05-.372-.025-.52-.075-.148-.67-1.611-.916-2.206-.242-.579-.487-.501-.67-.51-.173-.007-.372-.009-.57-.009-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.693.626.712.227 1.36.195 1.872.118.571-.085 1.758-.718 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347z"
									/>
									<path
										fill-rule="evenodd"
										d="M12 2C6.477 2 2 6.274 2 11.667c0 2.07.738 3.984 1.972 5.497L2 22l4.997-1.926A10.6 10.6 0 0 0 12 21.333c5.523 0 10-4.274 10-9.666C22 6.274 17.523 2 12 2z"
										clip-rule="evenodd"
									/>
								</svg>
								Hubungi via WhatsApp
							</a>

							<p class="mt-3 text-gray-300 text-sm sm:text-base">
								Jam kerja:
								<span class="font-semibold text-blue-400">Senin – Sabtu, 09:00 – 18:00 WIB</span>.
							</p>
						</div>
					{/if}
				</li>
			{/each}
		</ol>
	</div>
</section>


<!-- SECTION: Daftar Harga -->
<section class="bg-black text-white py-10 px-4 sm:px-8">
	<div class="max-w-6xl mx-auto">
		<h2 class="text-3xl sm:text-4xl font-bold mb-8 text-center">Daftar Harga Kelas</h2>

		<div class="overflow-x-auto rounded-2xl border border-gray-800">
			<table class="min-w-full text-sm sm:text-base">
				<thead class="bg-white text-gray-900">
					<tr>
						<th class="py-4 px-6 text-left font-bold">Nama Kelas</th>
						<th class="py-4 px-6 text-left font-bold">Harga</th>
						<th class="py-4 px-6 text-left font-bold">Status</th>
						<th class="py-4 px-6 text-center font-bold">Aksi</th>
					</tr>
				</thead>

				<tbody class="bg-gray-950">
					{#each kelasList as kelas}
						<tr class="border-t border-gray-700 hover:bg-gray-800 transition">
							<td class="py-4 px-6">{kelas.nama}</td>
							<td class="py-4 px-6">{kelas.harga}</td>

							<td class="py-4 px-6 font-semibold">
								{#if promoBerakhir}
									<span class="text-red-400">Promo Berakhir</span>
								{:else}
									Promo berakhir dalam <span class="text-red-400">{days} Hari</span>
								{/if}
							</td>

							<td class="py-4 px-6 text-center">
								<a
									href={`${base}/kelas/${kelas.slug}`}
									class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-5 rounded-lg transition"
								>
									Lihat Detail
								</a>
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>

		<p class="text-gray-400 text-xs mt-5 text-center">
			*Harga dapat berubah sewaktu-waktu. Promo berlaku hingga 1 November 2025.
		</p>
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
	/* Scrollbar minimalis */
	section::-webkit-scrollbar {
		width: 8px;
		background: #111;
	}
	section::-webkit-scrollbar-thumb {
		background: #333;
		border-radius: 8px;
	}
</style>
