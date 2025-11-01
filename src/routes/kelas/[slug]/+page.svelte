<script lang="ts">
	import "../../../app.css";
	import { page } from '$app/stores';
	import { slide } from 'svelte/transition';
	import { onMount } from 'svelte';
  	import { base } from '$app/paths';
  	import { allClasses } from '$lib/data/classes';
	import PromoCountdown from "$lib/components/PromoCountdown.svelte";

	const endDate = "2025-11-01T23:59:59";



 // SLUG DARI URL DAN KURSUS AKTIF 
  let course: typeof allClasses[number] | undefined;

  $: recommendedCourses = allClasses.filter((c) => c.slug !== course?.slug).slice(0, 4);

  $: {
    const slug = $page.params.slug;
    course = allClasses.find((c) => c.slug === slug);
  }

  onMount(() => {
    window.scrollTo({ top: 0 });
  });

  //  Tambahkan ini
  let showMore = false; // digunakan untuk tombol "Lihat Lebih Banyak" di bagian rekomendasi kelas

  //  State terpisah untuk bagian lain (jika kamu sudah pakai sebelumnya)
  let showAllSectionsMap: Record<string, boolean> = {}; // untuk Kurikulum
  let showDescriptionMap: Record<string, boolean> = {}; // untuk Deskripsi Kelas

  function toggleAll() {
    const slug = course?.slug ?? "";
    const newState = !showAllSectionsMap[slug];
    showAllSectionsMap[slug] = newState;

    const detailsElements = document.querySelectorAll("details");
    detailsElements.forEach((el) => {
      if (newState) el.setAttribute("open", "");
      else el.removeAttribute("open");
    });
  }

  function toggleDescription() {
    const key = course?.slug ?? "";
    if (!key) return;
    showDescriptionMap = {
      ...showDescriptionMap,
      [key]: !showDescriptionMap[key],
    };
  }


	const MAX_COMMENTS = 3;

	let showAllComments = false;
	

</script>


<svelte:head>
  <title>{course ? `${course.name} - Programmer Zaman Now` : 'Kelas - Programmer Zaman Now'}</title>
  <meta
    name="description"
    content={course
      ? `Pelajari ${course.name} di Programmer Zaman Now. ${course.description?.slice(0, 150)}...`
      : 'Panduan lengkap kelas di Programmer Zaman Now.'}
  />

  <!-- Open Graph -->
  <meta property="og:title" content={course ? `${course.name} - Programmer Zaman Now` : 'Kelas - Programmer Zaman Now'} />
  <meta property="og:description" content={course ? `Pelajari ${course.name} di Programmer Zaman Now. ${course.description?.slice(0, 150)}...` : 'Panduan lengkap kelas di Programmer Zaman Now.'} />
  <meta property="og:type" content="website" />
  <meta property="og:url" content={course ? `https://pzn-labs.github.io/pzn-company-profile/kelas/${course.slug}` : 'https://pzn-labs.github.io/pzn-company-profile/kelas'} />
  <meta property="og:image" content={course?.image || 'https://www.programmerzamannow.com/img/pzn-classes.png'} />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={course ? `${course.name} - Programmer Zaman Now` : 'Kelas - Programmer Zaman Now'} />
  <meta name="twitter:description" content={course ? `Pelajari ${course.name} di Programmer Zaman Now. ${course.description?.slice(0, 150)}...` : 'Panduan lengkap kelas di Programmer Zaman Now.'} />
  <meta name="twitter:image" content={course?.image || 'https://www.programmerzamannow.com/img/pzn-classes.png'} />

  <!-- Canonical URL -->
  <link rel="canonical" href={course ? `https://pzn-labs.github.io/pzn-company-profile/kelas/${course.slug}` : 'https://pzn-labs.github.io/pzn-company-profile/kelas'} />
</svelte:head>


{#if !course}
<section
  class="relative flex flex-col items-center justify-center min-h-screen text-center space-y-6 bg-gray-950 text-white px-6 animate-fadeIn"
>
  <!-- Logo -->
  <div class="relative flex justify-center">
    <img
      src="https://img-c.udemycdn.com/user/200_H/15481646_a97d_6.jpg"
      alt="Logo Programmer Zaman Now"
      class="w-28 h-28 object-contain rounded-full transition-transform duration-500 hover:scale-105 shadow-lg"
      loading="lazy"
    />
  </div>

  <!-- Teks -->
  <div>
    <h2 class="text-3xl sm:text-4xl font-bold text-white mb-3 tracking-tight">
      Oops! Kelas Tidak Ditemukan
    </h2>
    <p class="text-gray-400 max-w-md mx-auto leading-relaxed">
      Sepertinya kelas yang kamu cari belum tersedia, sudah dihapus, atau sedang dalam perbaikan.
      Coba temukan kursus menarik lainnya yang sedang trending di Programmer Zaman Now!
    </p>
  </div>

  <!-- Tombol -->
  <div class="flex flex-col sm:flex-row gap-3 mt-2">
    <a
      href="{base}/kelas"
      class="px-6 py-3 border border-gray-600 hover:border-blue-400 text-gray-300 hover:text-blue-400 rounded-lg font-medium transition duration-300"
    >
    Jelajahi Kelas Lain
    </a>
  </div>
</section>

{:else}

<!-- DETAIL KELAS PAGE -->
<section class="bg-black text-white px-4 sm:px-6 py-10 font-extralight">
  <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
    
<!-- SIDEBAR -->
<aside
  class="order-1 lg:order-2 sticky lg:top-24 h-fit bg-white text-gray-900 rounded-2xl shadow-2xl p-5 sm:p-6 space-y-6 w-full font-light transition-all duration-300"
>
  <!-- Gambar Kursus -->
  <div class="w-full aspect-[16/9] overflow-hidden rounded-xl shadow-md">
    <img
      src={course?.image}
      alt={course?.name ?? ''}
      class="w-full h-full object-cover"
    />
  </div>

<!-- Harga -->
<div class="space-y-2">
  <!-- Harga & Harga Asli -->
  <div class="flex flex-wrap items-baseline gap-2">
    <h3 class="text-2xl sm:text-2xl font-semibold text-gray-900">
      Rp {course?.price?.toLocaleString('id-ID')}
    </h3>

    {#if course?.originalPrice}
      <p class="text-sm sm:text-sm text-gray-500 line-through">
        Rp {course?.originalPrice?.toLocaleString('id-ID')}
      </p>
    {/if}
  </div>

  <!-- Keterangan Promo -->
  <div class="mt-1">
	<PromoCountdown endDate="2025-11-10T23:59:59" mode="simple" />
  </div>
  

</div>


  <!-- Tombol Aksi -->
  <div class="flex flex-col sm:flex-row lg:flex-col gap-3">
    <button
      class="bg-gray-900 hover:bg-transparent hover:text-blue-400 border border-gray-200 hover:border-blue-400 text-white font-semibold py-3 rounded-lg transition w-full"
    >
      Tambahkan ke keranjang
    </button>
	<a
		href="{base}/cara-pembayaran"
		class="block border border-gray-900 text-gray-900 font-semibold py-3 rounded-lg hover:border-blue-400 hover:text-blue-400 transition w-full text-center"
	>
		Daftar sekarang
	</a>
  </div>

  <!-- Input Kode Promo -->
  <div class="space-y-2">
    <label for="promo" class="text-sm font-medium text-gray-700">
      Punya kode promo?
    </label>
    <div class="flex flex-col sm:flex-row gap-2">
      <input
        id="promo"
        type="text"
        placeholder="Masukkan kode"
        class="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        class="bg-gray-900 hover:bg-transparent hover:text-blue-400 border border-gray-200 hover:border-blue-400 text-white font-semibold px-4 py-2 rounded-lg text-sm transition w-full sm:w-auto"
      >
        Terapkan
      </button>
    </div>
  </div>

  <hr class="border-gray-200" />
  <p class="text-xs text-gray-500 text-center">
    Jaminan uang kembali 30 hari
  </p>

  <!-- Fitur Kursus -->
  <ul class="text-sm text-gray-700 space-y-3 mb-6">
    <li class="flex items-center gap-3">
      <img
        src="https://images.icon-icons.com/934/PNG/512/movie-symbol-of-video-camera_icon-icons.com_72981.png"
        class="w-5 h-5"
        alt="Video"
        loading="lazy"
      />
      43 jam video
    </li>
    <li class="flex items-center gap-3">
      <img
        src="https://images.icon-icons.com/2724/PNG/512/newspaper_news_daily_business_media_article_icon_175626.png"
        class="w-5 h-5"
        alt="Artikel"
        loading="lazy"
      />
      10 artikel
    </li>
    <li class="flex items-center gap-3">
      <img
        src="https://images.icon-icons.com/1946/PNG/96/1904669-call-chat-device-message-mobile-phone-smartphone_122519.png"
        class="w-5 h-5"
        alt="Akses HP"
        loading="lazy"
      />
      Akses di HP & TV
    </li>
    <li class="flex items-center gap-3">
      <img
        src="https://images.icon-icons.com/3832/PNG/96/infinite_icon_234518.png"
        class="w-5 h-5"
        alt="Seumur hidup"
        loading="lazy"
      />
      Akses seumur hidup
    </li>
    <li class="flex items-center gap-3">
      <img
        src="https://images.icon-icons.com/1919/PNG/96/licensedocument_121962.png"
        class="w-5 h-5"
        alt="Sertifikat"
        loading="lazy"
      />
      Sertifikat penyelesaian
    </li>
  </ul>

  <hr class="border-gray-200" />

  <!-- Tombol Tambahan -->
  <div class="flex flex-col gap-3 text-sm">
    <button
      class="border border-gray-900 hover:border-blue-400 hover:text-blue-400 rounded-lg py-2.5 flex items-center justify-center gap-2 text-gray-700 font-medium hover:shadow-md hover:bg-gray-50 transition"
    >
      Bagikan
    </button>
    <button
      class="border border-gray-900 hover:border-blue-400 hover:text-blue-400 rounded-lg py-2.5 flex items-center justify-center gap-2 text-gray-700 font-medium hover:shadow-md hover:bg-gray-50 transition"
    >
      Hadiahkan
    </button>
  </div>
</aside>


    <!-- KONTEN UTAMA -->
    <div class="order-2 lg:order-1 lg:col-span-2 space-y-10">
      
<!-- 🧭 Hero & Info Kursus -->
<div class="space-y-5">
  <!-- Judul & Deskripsi -->
  <h1 class="text-2xl sm:text-3xl font-bold leading-tight text-white">
    {course?.name ?? ''}
  </h1>
  <p class="text-gray-300 text-sm sm:text-base">
    {course?.description ?? ''}
  </p>

  <!-- Info Utama -->
  <div class="flex flex-wrap items-center gap-2 sm:gap-3 text-sm text-gray-400">
    <span>⭐ {course?.rating ?? '4.8'}</span>
    <span>·</span>
    <span>{course?.students?.toLocaleString('id-ID') ?? '12,345'} peserta</span>
    <span>·</span>
    <span>
      Dibuat oleh
      <span class="text-blue-400 font-normal">
        {course?.instructor ?? 'Nama Instructor'}
      </span>
    </span>
  </div>

  <!-- Info Tambahan -->
  <div class="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
    <span>Bahasa : <span class="text-gray-300 dark:text-gray-200">{course?.language ?? 'Indonesia'}</span></span>
    <span>·</span>
    <span>Terakhir diperbarui : <span class="text-gray-300 dark:text-gray-200">{course?.lastUpdated ?? 'Oktober 2025'}</span></span>
  </div>
</div>


      <!-- Yang Akan Anda Pelajari -->
      <div class="bg-gray-950 rounded-2xl p-5 sm:p-6 border border-gray-700">
        <h2 class="text-lg sm:text-xl font-semibold mb-3">Yang akan Anda pelajari</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-300 text-sm">
          {#each course?.whatYouWillLearn ?? [] as item}
            <div class="flex items-start gap-2">
              <span class="text-green-400">✔</span>
              <span>{item}</span>
            </div>
          {/each}
        </div>
      </div>

<!-- Kurikulum -->
<div class="bg-gray-950 rounded-2xl p-5 border border-gray-700 space-y-4">
  <div class="flex justify-between items-center mb-3">
    <h2 class="text-lg sm:text-xl font-semibold">Kurikulum Kursus</h2>
    <button
      on:click={toggleAll}
      class="px-4 py-2 text-xs sm:text-sm font-medium text-gray-200 border border-gray-400 hover:border-blue-400 rounded-lg hover:text-blue-400 transition-all"
    >
      {showAllSectionsMap[course?.slug ?? ''] ? 'Tutup Semua' : 'Lihat Semua'}
    </button>
  </div>

  <div class="divide-y divide-gray-700">
    {#each course?.courseContent ?? [] as section, i}
      <details class="py-3 group rounded-lg hover:bg-gray-900/40 transition">
        <summary class="flex flex-col sm:flex-row justify-between items-start sm:items-center cursor-pointer text-white px-2">
          <span class="flex items-center gap-2 w-full sm:w-auto">
            <span class="text-base sm:text-lg">{section.title}</span>
            <svg
              class="w-4 h-4 transition-transform duration-300 group-open:rotate-180 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </span>
          <span class="text-gray-400 text-xs sm:text-sm mt-1 sm:mt-0 italic">
            {section.lectures} Lectures • {section.duration}
          </span>
        </summary>
        <ul class="mt-2 pl-6 list-disc text-gray-300 text-sm space-y-1">
          {#each Array(section.lectures) as _, index}
            <li class="hover:text-blue-400 transition">{`Lecture ${index + 1}`}</li>
          {/each}
        </ul>
      </details>
    {/each}
  </div>

  <!-- Tombol Lihat Kursus (Ukuran & gaya disamakan) -->
	<div class="pt-0 text-right">
	<a
		href={`${base}/kelas/${course?.slug ?? ''}/lesson/1`}
		class="inline-block px-4 py-2 text-xs sm:text-sm font-medium text-gray-200 border border-gray-400 hover:border-blue-400 rounded-lg hover:text-blue-400 transition-all"
	>
		Lihat Kursus
	</a>

	</div>
	</div>



      <!-- Deskripsi Kelas -->
      <div class="bg-gray-950 rounded-2xl p-5 border border-gray-700 space-y-4">
        <h2 class="text-lg sm:text-xl font-semibold">Deskripsi Kelas</h2>

        {#if course?.shortDescription?.length}
          <p class="text-gray-200 text-sm sm:text-base">{course.shortDescription[0]}</p>

          {#if !!showDescriptionMap?.[course.slug]}
            <div transition:slide={{ duration: 300 }}>
              {#if course.shortDescription.length > 1}
                <ul class="list-disc list-inside text-gray-400 space-y-1 pl-5 mt-2 text-sm">
                  {#each course.shortDescription.slice(1) as point}
                    <li>{point}</li>
                  {/each}
                </ul>
              {/if}

              {#if course?.forWho?.length}
                <div class="mt-3">
                  <h3 class="text-base sm:text-lg font-semibold text-gray-200 mb-2">
                    Untuk siapa kursus ini?
                  </h3>
                  <ul class="list-disc list-inside text-gray-400 space-y-1 pl-5 text-sm">
                    {#each course.forWho as person}
                      <li>{person}</li>
                    {/each}
                  </ul>
                </div>
              {/if}
            </div>
          {/if}

          {#if (course?.shortDescription?.length ?? 0) > 1 || (course?.forWho?.length ?? 0) > 0}
            <button
              on:click={toggleDescription}
              class="mt-4 w-full px-5 py-3 border border-gray-400 text-white hover:text-blue-400 rounded-lg hover:border-blue-400 transition font-semibold text-center text-sm sm:text-base"
            >
              {showDescriptionMap[course?.slug ?? ''] ? 'Tutup' : 'Lihat Lebih Banyak'}
            </button>
          {/if}
        {/if}
      </div>

      <!-- Instruktur -->
      <div class="space-y-4">
        <h2 class="text-lg sm:text-xl font-semibold text-white">Instruktur</h2>
        <div class="flex flex-row items-center gap-4">
          <img
            src="https://img-c.udemycdn.com/user/200_H/15481646_a97d_6.jpg"
            alt="Instructor"
            class="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border border-gray-700 flex-shrink-0"
            loading="lazy"
          />
          <div class="flex-1">
            <h3 class="font-semibold text-base sm:text-lg text-white mb-1">
              {course?.instructor ?? 'Nama Instructor'}
            </h3>
            <p class="text-gray-400 text-sm leading-relaxed">
              Programmer Zaman Now membuat berbagai kursus seputar pemrograman mencakup Backend, Frontend, DevOps, dan Mobile.
            </p>
          </div>
        </div>
      </div>

		<!-- Komentar / Ulasan -->
				{#if course.comments && course.comments.length > 0}
		<section class="mt-10 border-t border-gray-800 pt-6">
			<h3 class="text-lg sm:text-xl font-bold mb-4 text-white">Ulasan Peserta</h3>
			<div class="space-y-4">
			{#each (showAllComments ? course.comments : course.comments.slice(0, MAX_COMMENTS)) as comment (comment.name + comment.date)}
				<div
				class="border border-gray-700 bg-gray-950 rounded-xl p-4 hover:bg-gray-850 transition"
				transition:slide={{ duration: 300 }}
				>
				<div class="flex flex-wrap items-center justify-between mb-2">
					<div class="flex items-center gap-2">
					<span class="font-semibold text-white">{comment.name}</span>
					<span class="text-xs text-gray-400">{comment.date}</span>
					</div>
					<div class="text-yellow-400 text-sm">
					{Array(comment.rating).fill('★').join('')}
					{Array(5 - comment.rating).fill('☆').join('')}
					</div>
				</div>
				<p class="text-gray-300 text-sm leading-relaxed italic">"{comment.comment}"</p>
				</div>
			{/each}
			</div>
			{#if course.comments.length > MAX_COMMENTS}
			<div class="mt-6 flex flex-col justify-center">
				{#if !showAllComments}
				<button
					class="w-full sm:w-auto px-6 py-3 rounded-lg bg-transparent text-white font-semibold hover:text-blue-400 hover:border-blue-400 border border-gray-400 transition"
					on:click={() => showAllComments = true}
				>
					Lihat Semua Ulasan
				</button>
				{:else}
				<button
					class="w-full sm:w-auto px-6 py-3 rounded-lg bg-transparent text-white font-semibold border hover:text-blue-400 hover:border-blue-400 border-gray-400 transition"
					on:click={() => showAllComments = false}
				>
					Sembunyikan Ulasan
				</button>
				{/if}
			</div>
			{/if}
		</section>
		{:else}
		<section class="mt-10 border-t border-gray-800 pt-6">
			<h3 class="text-lg sm:text-xl font-bold mb-4 text-white">Ulasan Peserta</h3>
			<div class="text-gray-400 italic text-sm text-center py-8" transition:slide={{ duration: 300 }}>
			Belum ada ulasan untuk kelas ini.
			</div>
		</section>
		{/if}


<!-- Rekomendasi Kelas -->
<div class="mt-12">
	<h2 class="text-lg sm:text-2xl font-semibold mb-4 text-white">
	  Rekomendasi Kelas Lainnya
	</h2>
  
	<div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
	  {#each recommendedCourses as rec}
		<a
		  href={`${base}/kelas/${rec.slug}`}
		  class="group block bg-gray-950 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-400 transition-all hover:-translate-y-1 hover:shadow-lg"
		>
		  <!-- 🔹 Gambar kecil tanpa terpotong -->
		  <div class="relative w-full h-32 flex items-center justify-center bg-gray-900">
			<img
			  src={rec.image}
			  alt={rec.name}
			  class="max-h-full max-w-full object-contain transform group-hover:scale-105 transition-transform duration-500 p-2"
			  loading="lazy"
			/>
		  </div>
  
		  <!-- 🔹 Konten ringkas -->
		  <div class="p-3 space-y-1">
			<h3 class="font-semibold text-white text-sm sm:text-base group-hover:text-blue-400 line-clamp-1">
			  {rec.name}
			</h3>
			<p class="text-gray-400 text-xs sm:text-sm line-clamp-2">
			  {rec.description}
			</p>
  
			<div class="flex items-center justify-between text-xs sm:text-sm text-gray-400 mt-2">
			  <span>⭐ {rec.rating}</span>
			  <span>Rp {rec.price.toLocaleString('id-ID')}</span>
			</div>
		  </div>
		</a>
	  {/each}
	</div>
  
	{#if allClasses.length > 4}
	  <div class="mt-6 text-center">
		<a
		  href={`${base}/kelas`}
		  class="inline-block px-6 py-2.5 text-sm sm:text-base font-semibold border border-gray-400 rounded-lg text-white hover:text-blue-400 hover:border-blue-400 transition"
		>
		  Lihat Semua Kelas
		</a>
	  </div>
	{/if}
  </div>
   
  
    </div>
  </div>

<!-- Tombol Beli Sekarang (Mobile Sticky) -->
<div class="fixed bottom-0 left-0 right-0 bg-white text-gray-900 py-2 px-4 flex justify-between items-center lg:hidden z-50 shadow-lg border-t border-gray-200">
  <!-- Harga + Link -->
  <div class="flex flex-col">
    <a
      href="{base}/cara-pembayaran"
      class="text-[10px] text-blue-600 font-semibold hover:text-blue-500 transition"
    >
      Daftar Sekarang
    </a>

    <div class="flex items-baseline gap-1">
      <p class="text-sm font-bold text-gray-900">
        Rp {course?.price?.toLocaleString('id-ID')}
      </p>

      {#if course?.originalPrice}
        <p class="text-[10px] text-gray-500 line-through">
          Rp {course?.originalPrice?.toLocaleString('id-ID')}
        </p>
      {/if}
    </div>
  </div>

  <!-- Tombol Beli Sekarang -->
  <a
    href="{base}/cara-pembayaran"
    class="bg-gray-900 text-white font-medium px-4 py-2 rounded-lg text-xs hover:bg-transparent border border-gray-900 hover:text-blue-400 hover:border-blue-400 transition"
  >
    Daftar Sekarang
  </a>
</div>


</section>

{/if}




<style>
  /* 🔹 Fade-in + slide-up animasi */
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(12px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .animate-fadeIn {
    animation: fadeIn 0.4s ease-out both;
  }

</style>