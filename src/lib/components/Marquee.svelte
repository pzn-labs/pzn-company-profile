<script lang="ts">
    export let images: string[] = [];
    export let direction: "left" | "right" = "left";
    export let speed: number = 30; // detik
  </script>
  
  <style>
    :global(.scroll) {
      display: flex;
      align-items: center;
      gap: 2.5rem;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
    }
  
    :global(.scroll-right) {
      animation-name: marquee;
    }
  
    :global(.scroll-left) {
      animation-name: marquee;
      animation-direction: reverse;
    }
  
    @keyframes marquee {
      0% {
        transform: translateX(0%);
      }
      100% {
        transform: translateX(-50%);
      }
    }
  </style>
  
  
  <div class="relative overflow-hidden w-full group py-4 sm:py-6">
    <div
      class="flex items-center gap-6 sm:gap-8 animate-[scroll_20s_linear_infinite] {direction === 'right' ? 'scroll-right' : 'scroll-left'} px-2 sm:px-4 lg:px-6 group-hover:[animation-play-state:paused]"
      style="animation-duration: {speed}s"
    >
      {#each [...images, ...images] as img, i (i)}
        <img
          src={img}
          alt="marquee-logo"
          loading="lazy"
          class="h-20 sm:h-24 md:h-28 lg:h-32 xl:h-40 w-auto object-contain hover:scale-110 transition-transform duration-300 cursor-pointer"
        />
      {/each}
    </div>
  </div>
  
  
  