<script lang="ts">
  import { base } from "$app/paths";
  import { NAV_LINKS } from "$lib/constants/navigation";
  import { fly } from "svelte/transition";

  let mobileMenuOpen = false;

  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto";
  }

  function closeMobileMenu() {
    mobileMenuOpen = false;
    document.body.style.overflow = "auto";
  }
</script>

<!-- 🌙 NAVBAR -->
<nav class="fixed inset-x-0 top-0 z-50 bg-gray-900 shadow-md transition-all duration-300">
  <div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-8 lg:px-8">
    <!-- Logo -->
    <a href={base + "/"} class="flex items-center gap-4 group">
      <img
        src="https://www.programmerzamannow.com/img/pzn.png"
        alt="PZN Logo"
        class="h-10 w-auto transition-transform duration-300 group-hover:scale-110"
      />
      <span class="font-semibold text-white text-xl tracking-tight">
        Programmer Zaman Now
      </span>
    </a>

    <!-- Menu Desktop -->
    <div class="hidden lg:flex items-center gap-10">
      {#each NAV_LINKS as link}
        <a
          href={base + link.href}
          class="text-base font-medium text-white hover:text-white relative group transition-colors"
        >
          {link.name}
          <span
            class="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"
          ></span>
        </a>
      {/each}

      <!-- Tombol Login & Daftar -->
      <div class="flex items-center gap-3 ml-4">
        <a
          href={base + "/login"}
          class="text-white border border-gray-400 hover:border-blue-600 hover:text-blue-400 rounded-lg px-4 py-2 text-sm font-medium transition-all"
        >
          Masuk
        </a>
        <a
          href={base + "/daftar"}
          class="bg-white hover:bg-transparent border border-gray-400 hover:text-blue-400 hover:border-blue-600 text-gray-900 font-medium px-4 py-2 rounded-lg text-sm transition-all"
        >
          Daftar
        </a>
      </div>
    </div>

    <!-- Tombol Menu Mobile -->
    <button
      on:click={toggleMobileMenu}
      class="lg:hidden p-3 rounded-md text-white hover:bg-gray-800 transition"
      aria-label="Toggle menu"
      aria-expanded={mobileMenuOpen}
    >
      {#if mobileMenuOpen}
        <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      {:else}
        <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      {/if}
    </button>
  </div>
</nav>

<!-- 📱 MENU MOBILE -->
{#if mobileMenuOpen}
  <button
    type="button"
    class="fixed inset-0 z-30 bg-black/40 backdrop-blur-sm"
    aria-label="Close mobile menu"
    on:click={closeMobileMenu}
  ></button>

  <div
    in:fly={{ y: -20, opacity: 0, duration: 400 }}
    out:fly={{ y: -20, opacity: 0, duration: 400 }}
    class="fixed top-[64px] inset-x-0 z-40 bg-gray-900 border-t border-gray-800 shadow-lg rounded-b-2xl"
    role="dialog"
  >
    <div class="p-8 space-y-4">
      <nav class="flex flex-col space-y-3 text-left">
        {#each NAV_LINKS as link}
          <a
            href={base + link.href}
            on:click={closeMobileMenu}
            class="block rounded-lg py-3 px-4 text-base text-white hover:bg-gray-800 hover:text-white transition-all duration-200 ease-out hover:translate-x-1"
          >
            {link.name}
          </a>
        {/each}

        <!-- 🔹 Tombol Login & Daftar Mobile -->
        <div class="pt-4 flex flex-col gap-3">
          <a
            href={base + "/login"}
            on:click={closeMobileMenu}
            class="block text-center border border-gray-400 hover:border-blue-600 text-white hover:text-blue-400 rounded-lg py-2.5 transition-all"
          >
            Masuk
          </a>
          <a
            href={base + "/daftar"}
            on:click={closeMobileMenu}
            class="block text-center bg-white hover:bg-transparent border border-gray-400 hover:text-blue-400 hover:border-blue-600 text-gray-900 font-medium py-2.5 rounded-lg transition-all"
          >
            Daftar
          </a>
        </div>
      </nav>
    </div>

    <footer class="border-t border-gray-800 mt-4 py-5 text-center text-base text-gray-200">
      <p>&copy; {new Date().getFullYear()} <strong>Programmer Zaman Now</strong>.</p>
    </footer>
  </div>
{/if}
