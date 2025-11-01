<script lang="ts">
    import { onMount } from "svelte";
    
    export let endDate: string; // contoh: "2025-11-10T23:59:59"
    export let mode: "full" | "simple" = "simple"; // mode default
  
    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let isExpired = false;
  
    onMount(() => {
      const updateCountdown = () => {
        const now = new Date().getTime();
        const end = new Date(endDate).getTime();
        const diff = end - now;
  
        if (diff <= 0) {
          isExpired = true;
          days = hours = minutes = seconds = 0;
          return;
        }
  
        days = Math.floor(diff / (1000 * 60 * 60 * 24));
        hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        seconds = Math.floor((diff % (1000 * 60)) / 1000);
      };
  
      updateCountdown();
      const interval = setInterval(updateCountdown, 1000);
      return () => clearInterval(interval);
    });
  </script>
  
  {#if !isExpired}
    {#if mode === "full"}
      <!-- MODE LENGKAP -->
      <div class="flex justify-center gap-6 sm:gap-10 md:gap-14 font-mono text-center mb-6">
        <div class="flex flex-col items-center">
          <p class="text-4xl sm:text-5xl font-extrabold text-white">{days}</p>
          <p class="text-sm uppercase tracking-wider text-gray-300">Hari</p>
        </div>
        <div class="flex flex-col items-center">
          <p class="text-4xl sm:text-5xl font-extrabold text-white">{hours}</p>
          <p class="text-sm uppercase tracking-wider text-gray-300">Jam</p>
        </div>
        <div class="flex flex-col items-center">
          <p class="text-4xl sm:text-5xl font-extrabold text-white">{minutes}</p>
          <p class="text-sm uppercase tracking-wider text-gray-300">Menit</p>
        </div>
        <div class="flex flex-col items-center">
          <p class="text-4xl sm:text-5xl font-extrabold text-red-400 animate-bounce">{seconds}</p>
          <p class="text-sm uppercase tracking-wider text-gray-300">Detik</p>
        </div>
      </div>
    {:else}
      <!-- MODE SEDERHANA -->
      <div class="flex items-center gap-2 text-sm text-red-500 mt-1">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2" fill="none" />
          <path stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M12 7v5l3 3" />
        </svg>
        <p class="font-medium">
          Promo berakhir dalam
          <span class="font-semibold">{days}</span> hari
          <span class="font-semibold">{hours}</span> jam
        </p>
      </div>
    {/if}
  {:else}
    <div class="text-sm text-gray-500 mt-1 italic">
      Promo telah berakhir
    </div>
  {/if}
  