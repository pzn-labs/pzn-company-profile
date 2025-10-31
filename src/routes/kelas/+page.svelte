<script lang="ts">
  import "../../app.css";
  import { base } from "$app/paths";
  import { fade, fly } from "svelte/transition";
  import { allClasses } from "$lib/data/classes";

  // State utama
  let searchQuery = "";
  let sortOrder: "asc" | "desc" = "asc";
  let selectedCategory = "Semua";
  let showAll = false;
  let filterRecommendation = "all";

  // Ambil kategori
  const categories = ["Semua", ...Array.from(new Set(allClasses.flatMap(k => k.category || [])))];

  // Filter
  $: filteredClasses = allClasses
    .filter(k => filterRecommendation === "recommended" ? k.recommended : true)
    .filter(k => {
      const matchCategory = selectedCategory === "Semua" || k.category?.includes(selectedCategory);
      const matchSearch = k.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    })
    .sort((a, b) => sortOrder === "asc"
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name)
    );
</script>

<svelte:head>
  <title>Kelas Online - Programmer Zaman Now</title>
  <meta
    name="description"
    content="Pilih kelas programming terbaik sesuai kebutuhan Anda. Dari pemula hingga mahir, semua tersedia di Programmer Zaman Now."
  />

  <!-- Open Graph -->
  <meta property="og:title" content="Kelas Online - Programmer Zaman Now" />
  <meta property="og:description" content="Pilih kelas programming terbaik sesuai kebutuhan Anda. Dari pemula hingga mahir, semua tersedia di Programmer Zaman Now." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://pzn-labs.github.io/pzn-company-profile/kelas" />
  <meta property="og:image" content="https://www.programmerzamannow.com/img/pzn-classes.png" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Kelas Online - Programmer Zaman Now" />
  <meta name="twitter:description" content="Pilih kelas programming terbaik sesuai kebutuhan Anda. Dari pemula hingga mahir, semua tersedia di Programmer Zaman Now." />
  <meta name="twitter:image" content="https://www.programmerzamannow.com/img/pzn-classes.png" />

  <!-- Canonical URL -->
  <link rel="canonical" href="https://pzn-labs.github.io/pzn-company-profile/kelas" />
</svelte:head>


<!-- SECTION UTAMA -->
<section class="py-14 bg-black text-gray-100">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">

    <!-- HEADER -->
    <div class="mx-auto mb-20 grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-16">
      <div class="text-left order-2 md:order-1">
        <h2 class="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
          Pilihan Kelas Terbaik
        </h2>
        <p class="text-lg leading-8 text-gray-300 mb-4 max-w-2xl">
          Tingkatkan kemampuan programming Anda dengan kelas eksklusif dari
          <strong class="text-blue-400">Programmer Zaman Now</strong>.
          Belajar lebih efektif & menyenangkan.
        </p>
      </div>

      <div class="flex justify-center order-1 md:order-2">
        <img
          src="https://i.pinimg.com/1200x/04/e9/64/04e9640e588d7ec3a84c16ee3eac9bf0.jpg"
          alt="Belajar Online"
          class="rounded-2xl shadow-lg w-full max-w-md object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
    </div>

    <!-- KATEGORI -->
    <div class="text-center mb-10">
      <div
        class="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-5 mb-6 transition-all duration-500 overflow-hidden"
        style="max-height: {showAll ? '1000px' : '140px'}"
      >
        {#each (showAll ? categories : categories.slice(0, 8)) as category}
          <div in:fly={{ y: 10, duration: 200 }} out:fade={{ duration: 150 }}>
            <button
              class="px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-xl sm:rounded-2xl text-sm sm:text-base md:text-lg font-semibold border transition-all duration-300
                     {selectedCategory === category 
                       ? 'bg-white text-gray-900 border-white shadow-md' 
                       : 'bg-black text-gray-200 border-gray-700 hover:border-blue-400 hover:text-blue-400'}"
              on:click={() => selectedCategory = category}
            >
              {category}
            </button>
          </div>
        {/each}
      </div>

      {#if categories.length > 8}
        <button
          in:fly={{ y: 15, duration: 300 }}
          out:fade={{ duration: 200 }}
          class="group inline-flex items-center gap-2 mt-2 px-5 py-2 rounded-2xl text-sm sm:text-base md:text-lg font-semibold text-gray-900 bg-white hover:bg-gray-200 shadow-md hover:shadow-lg transition-all"
          on:click={() => showAll = !showAll}
        >
          <span>{showAll ? "Sembunyikan Kategori" : "Lihat Semua Kategori"}</span>
          <svg
            class="w-5 h-5 transform transition-transform duration-300 {showAll ? 'rotate-180' : ''}"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      {/if}
    </div>

<!--  FILTER & SEARCH -->
<div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 w-full max-w-4xl mx-auto px-4">
  
  <!-- Sort -->

<div class="relative w-full sm:w-1/4">
  <select
    bind:value={sortOrder}
    class="appearance-none w-full rounded-2xl border border-gray-700 bg-black text-gray-200 text-sm sm:text-base py-3 pl-5 pr-10 focus:ring-2 focus:ring-gray-300 focus:outline-none transition cursor-pointer"
  >
    <option value="asc">Urutkan: A - Z</option>
    <option value="desc">Urutkan: Z - A</option>
  </select>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    stroke-width="2"
  >
    <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
</div>

<!-- Filter Rekomendasi -->
<div class="relative w-full sm:w-1/4">
  <select
    bind:value={filterRecommendation}
    class="appearance-none w-full rounded-2xl border border-gray-700 bg-black text-gray-200 text-sm sm:text-base py-3 pl-5 pr-10 focus:ring-2 focus:ring-gray-300 focus:outline-none transition cursor-pointer"
  >
    <option value="all">Semua Kelas</option>
    <option value="recommended">Rekomendasi</option>
  </select>

  <!-- Custom Panah -->
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    stroke-width="2"
  >
    <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
</div>

  <!-- Search -->
  <div class="relative w-full sm:w-2/4">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
    >
      <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-4.35-4.35M10 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z" />
    </svg>

    <input
      type="text"
      placeholder="Cari kelas..."
      bind:value={searchQuery}
      class="w-full rounded-2xl border border-gray-600 bg-black px-12 py-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-gray-200 focus:outline-none text-sm sm:text-base transition"
    />
  </div>
</div>


<!-- GRID KELAS -->
<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
  {#each filteredClasses as kelas (kelas.name)}
    <div
      in:fly={{ y: 20, duration: 400 }}
      out:fade={{ duration: 200 }}
      class="group relative bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.01] overflow-hidden flex flex-col"
    >
      <!-- Gambar -->
      <div class="relative w-full overflow-hidden">
        <img
          src={kelas.image}
          alt={kelas.name}
          class="w-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>

      <!-- Detail -->
      <div class="p-4 flex-1 flex flex-col justify-between">
        <div class="mb-8">
          <h3 class="text-lg font-medium text-gray-900">{kelas.name}</h3>

          {#if kelas.instructor}
            <p class="text-sm text-gray-500 mt-1">Instruktur: {kelas.instructor}</p>
          {/if}

          <p class="text-gray-600 text-sm mt-2 line-clamp-3">{kelas.description}</p>
        </div>

        <div class="flex items-center justify-between text-sm text-gray-900 mt-3">
          <div>&#128100; {kelas.students?.toLocaleString('id-ID') ?? '0'} siswa</div>
          <div class="text-right">
            <div class="text-base text-gray-900">
              Rp {kelas.price.toLocaleString('id-ID')}
            </div>
            {#if kelas.originalPrice && kelas.originalPrice > kelas.price}
              <div class="text-sm text-red-500 line-through">
                Rp {kelas.originalPrice.toLocaleString('id-ID')}
              </div>
            {/if}
          </div>
        </div>

        <a
          href={`${base}/kelas/${kelas.slug}`}
          class="block w-full mt-3 rounded-lg bg-gray-900 px-6 py-3 text-base font-semibold text-white shadow hover:bg-blue-600 hover:border-blue-600 border border-gray-200 text-center transition-all duration-300"
        >
          Lihat Detail
        </a>

      </div>
    </div>
  {/each}

  {#if filteredClasses.length === 0}
    <p in:fade={{ duration: 250 }} class="col-span-full text-center text-gray-500 mt-4">
      Tidak ada kelas yang sesuai.
    </p>
  {/if}
</div>




  </div>
</section>

