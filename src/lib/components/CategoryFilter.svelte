<script lang="ts">
  import { fly, fade } from "svelte/transition";
  import { createEventDispatcher } from "svelte";

  export let categories: string[] = [];
  export let selectedCategory: string = "Semua";
  export let showAll: boolean = false;

  const dispatch = createEventDispatcher();

  function selectCategory(category: string) {
    dispatch("select", category);
  }

  function toggleShowAll() {
    dispatch("toggle");
  }
</script>

<div class="text-center mb-10">
  <div
    class="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-5 mb-6 transition-all duration-500 overflow-hidden"
    style="max-height: {showAll ? '1000px' : '140px'}"
  >
    {#each (showAll ? categories : categories.slice(0, 8)) as category (category)}
      <div in:fly={{ y: 10, duration: 200 }} out:fade={{ duration: 150 }}>
        <button
          class="px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-xl sm:rounded-2xl 
                 text-sm sm:text-base md:text-lg font-semibold border transition-all duration-300
                 {selectedCategory === category 
                   ? 'bg-white text-gray-900 border-white shadow-md' 
                   : 'bg-black text-gray-200 border-gray-700 hover:border-blue-400 hover:text-blue-400'}"
          on:click={() => selectCategory(category)}
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
      class="group inline-flex items-center gap-2 sm:gap-3 mt-2 px-5 sm:px-6 md:px-8 py-2 sm:py-3 rounded-2xl 
             text-sm sm:text-base md:text-lg font-semibold text-gray-900 bg-white hover:bg-gray-200 
             shadow-md hover:shadow-lg transition-all duration-300"
      on:click={toggleShowAll}
    >
      <span>{showAll ? "Sembunyikan Kategori" : "Lihat Semua Kategori"}</span>
      <svg
        class="w-4 sm:w-5 h-4 sm:h-5 transform transition-transform duration-300 {showAll ? 'rotate-180' : ''}"
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
