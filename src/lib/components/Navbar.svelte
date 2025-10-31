<script lang="ts">
  import { onMount, onDestroy, tick } from 'svelte';
  import { browser } from '$app/environment';
  import { base } from '$app/paths';
  import { NAV_LINKS } from '$lib/constants/navigation';
  import { fly } from 'svelte/transition';

  let mobileMenuOpen = false;
  let firstFocusable: HTMLElement;
  let lastFocusable: HTMLElement;

  // Toggle menu
  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;

    if (browser) {
      document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'auto';

      // Fokuskan elemen pertama saat menu dibuka
      if (mobileMenuOpen) {
        tick().then(() => firstFocusable?.focus());
      }
    }
  }

  function closeMobileMenu() {
    mobileMenuOpen = false;
    if (browser) {
      document.body.style.overflow = 'auto';
    }
  }

  // Keyboard support: Esc to close & trap Tab
  function handleKeyDown(event: KeyboardEvent) {
    if (!mobileMenuOpen) return;

    const focusableElements = Array.from(
      document.querySelectorAll(
        '.mobile-menu a, .mobile-menu button'
      )
    ) as HTMLElement[];

    if (event.key === 'Escape') {
      event.preventDefault();
      closeMobileMenu();
    }

    if (event.key === 'Tab') {
      const first = focusableElements[0];
      const last = focusableElements[focusableElements.length - 1];

      if (event.shiftKey) {
        if (document.activeElement === first) {
          event.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    }
  }

  onMount(() => {
    if (browser) {
      window.addEventListener('keydown', handleKeyDown);
    }
  });

  onDestroy(() => {
    if (browser) {
      window.removeEventListener('keydown', handleKeyDown);
    }
  });
</script>

<nav class="fixed inset-x-0 top-0 z-50 bg-gray-900 shadow-md">
  <div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-8 lg:px-8">
    <!-- Logo -->
    <a href={base + "/"} class="flex items-center gap-4 group">
      <img
        src="https://www.programmerzamannow.com/img/pzn.png"
        alt="PZN Logo"
        class="h-10 w-auto transition-transform duration-300 group-hover:scale-110"
        loading="lazy"
      />
      <span class="font-semibold text-white text-xl tracking-tight">
        Programmer Zaman Now
      </span>
    </a>

    <!-- Menu Desktop -->
    <div class="hidden lg:flex items-center gap-10">
      {#each NAV_LINKS as link}
        <a href={base + link.href} class="text-base font-medium text-white hover:text-white relative group">
          {link.name}
          <span class="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
        </a>
      {/each}
    </div>

    <!-- Tombol Menu Mobile -->
    <button
      on:click={toggleMobileMenu}
      class="lg:hidden p-3 rounded-md text-white hover:bg-gray-800 transition"
      aria-label="Toggle menu"
      aria-expanded={mobileMenuOpen}
      on:keydown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggleMobileMenu();
        }
      }}
    >
      {#if mobileMenuOpen}
        <!-- Close icon -->
        <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      {:else}
        <!-- Hamburger icon -->
        <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      {/if}
    </button>
  </div>
</nav>

{#if mobileMenuOpen}
  <!-- Overlay -->
  <div
    class="fixed inset-0 z-30 bg-black/40 backdrop-blur-sm"
    on:click={closeMobileMenu}
    aria-hidden="true"
  ></div>

  <!-- Mobile Menu -->
  <div
    in:fly={{ y: -20, opacity: 0, duration: 400 }}
    out:fly={{ y: -20, opacity: 0, duration: 400 }}
    class="fixed top-[64px] inset-x-0 z-40 bg-gray-900 border-t border-gray-800 shadow-lg rounded-b-2xl mobile-menu"
    role="dialog"
    aria-modal="true"
  >
    <div class="p-8 space-y-4">
      <nav class="flex flex-col space-y-3 text-left">
        {#each NAV_LINKS as link, i}
          <a
            href={base + link.href}
            on:click={closeMobileMenu}
            bind:this={firstFocusable}
            class="block rounded-lg py-3 px-4 text-base text-white hover:bg-gray-800 hover:text-white transition-all duration-200 ease-out hover:translate-x-1"
          >
            {link.name}
          </a>
        {/each}
      </nav>
    </div>

    <footer class="border-t border-gray-800 mt-4 py-5 text-center text-base text-gray-200">
      <p>&copy; {new Date().getFullYear()} <strong>Programmer Zaman Now</strong>.</p>
    </footer>
  </div>
{/if}
