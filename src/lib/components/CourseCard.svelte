<script lang="ts">
  import { fade, fly } from "svelte/transition";

  export let kelas: {
    name: string;
    description: string;
    image: string;
    students?: number;
    price: number;
    originalPrice?: number;
  };
  export let base: string;
</script>

<div
  class="group relative bg-white rounded-2xl shadow-lg ring-1 ring-gray-400 hover:shadow-xl transition-shadow"
  in:fly={{ y: 20, duration: 250 }}
  out:fade={{ duration: 150 }}
>
  <!-- Gambar -->
  <div class="overflow-hidden rounded-t-2xl">
    <img
      src={kelas.image}
      alt={kelas.name}
      class="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-300"
    />
  </div>

  <!-- Konten -->
  <div class="p-6">
    <h3 class="text-lg font-bold text-gray-900 mb-2">{kelas.name}</h3>
    <p class="text-gray-600 text-sm mb-4">{kelas.description}</p>

    <div class="flex items-center justify-between mt-4">
      <div class="flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" 
             class="h-6 w-6 rounded-full bg-gray-700 p-1 text-gray-300 ring-2 ring-gray-800" 
             fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v1.2h19.2v-1.2c0-3.2-6.4-4.8-9.6-4.8z"/>
        </svg>
        <span class="text-sm text-gray-600">{kelas.students?.toLocaleString('id-ID') ?? '0'} siswa</span>
      </div>

      <div class="text-right">
        <div class="text-lg font-bold text-gray-900">
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
      href="{base}/kelas/{kelas.name.toLowerCase().replace(/\s+/g, '-')}"
      class="block w-full mt-4 rounded-md bg-gray-900 px-4 py-2 text-sm font-semibold text-white 
             shadow-sm hover:bg-transparent hover:text-blue-400 border border-gray-200 hover:border-blue-400 text-center"
    >
      Lihat Detail
    </a>
  </div>
</div>
