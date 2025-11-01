<script lang="ts">
    import { fade } from "svelte/transition";
  
    export let promoCode = "PZN2025";
    export let promoTitle = "PROMO AWAL NOVEMBER";
  
    let showBanner = false;
  
    // Tutup banner dan simpan di sessionStorage
    function closeBanner() {
      showBanner = false;
      sessionStorage.setItem("bannerShown", "true");
    }
  
    // Hanya tampil sekali per sesi browser
    import { onMount } from "svelte";
    onMount(() => {
      const bannerShown = sessionStorage.getItem("bannerShown");
      if (!bannerShown) {
        showBanner = true;
        sessionStorage.setItem("bannerShown", "true");
      }
    });
  </script>
  
  {#if showBanner}
    <div
      in:fade={{ duration: 400 }}
      out:fade={{ duration: 300 }}
      class="fixed bottom-4 left-0 right-0 z-40 flex justify-center px-3 sm:px-6"
    >
      <div
        class="relative w-full max-w-7xl flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 rounded-xl bg-white/95 px-4 sm:px-6 py-3 sm:py-4 shadow-lg ring-1 ring-gray-200 backdrop-blur-md transition-all text-center sm:text-left"
      >
        <!-- Isi Banner -->
        <p class="text-xs sm:text-sm text-gray-900 leading-snug">
          <strong class="font-semibold text-blue-600">{promoTitle}</strong> — Gunakan kode
          <strong class="text-gray-800 bg-gray-100 px-1.5 py-0.5 rounded-md">{promoCode}</strong>
        </p>
  
        <!-- Tombol Tutup -->
        <button
          on:click={closeBanner}
          type="button"
          class="absolute right-2 top-2 sm:right-3 sm:top-1/2 sm:-translate-y-1/2 rounded-full p-1.5 sm:p-2 hover:bg-gray-100 transition"
        >
          <span class="sr-only">Tutup</span>
          <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            class="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-600"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  {/if}
  