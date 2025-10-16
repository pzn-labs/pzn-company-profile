<script lang="ts">
	import "../app.css";
	import { onMount } from "svelte";
  
	// svelte-ignore export_let_unused
		export let children;
	let mobileMenuOpen = false;
	let scrolled = false;
  
	onMount(() => {
	  const handleScroll = () => {
		scrolled = window.scrollY > 20;
	  };
	  window.addEventListener("scroll", handleScroll);
	  return () => window.removeEventListener("scroll", handleScroll);
	});
  
	function toggleMobileMenu() {
	  mobileMenuOpen = !mobileMenuOpen;
	}
  
	function closeMobileMenu() {
	  mobileMenuOpen = false;
	}
  </script>
  
  <!-- NAVBAR -->
  <nav
	class="fixed inset-x-0 top-0 z-50 bg-white dark:bg-gray-900 shadow-md transition-all duration-300"
	aria-label="Main Navigation"
  >
	<div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
	  <!-- LOGO -->
	  <a href="/" class="flex items-center gap-3 group">
		<img
		  src="https://www.programmerzamannow.com/img/pzn.png"
		  alt="PZN Logo"
		  class="h-8 w-auto transition-transform group-hover:scale-105"
		/>
		<span class="font-semibold text-gray-900 dark:text-white text-lg tracking-tight">
		  Programmer Zaman Now
		</span>
	  </a>
  
	  <!-- DESKTOP MENU -->
	  <div class="hidden lg:flex items-center gap-10">
		{#each [
		  { name: "Beranda", href: "/" },
		  { name: "Kelas", href: "/kelas" },
		  { name: "Promo", href: "/promo" },
		  { name: "Sosial Media", href: "/sosial-media" }
		] as link}
		  <a
			href={link.href}
			class="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white relative group transition-colors"
		  >
			{link.name}
			<span
			  class="absolute left-0 bottom-0 w-0 h-[2px] bg-black dark:bg-white transition-all duration-300 group-hover:w-full"
			></span>
		  </a>
		{/each}
	  </div>
  
	  <!-- DESKTOP CTA -->
	  <div class="hidden lg:flex items-center gap-4">
		<a
		  href="/login"
		  class="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
		  >Masuk</a
		>
		<a
		  href="/kelas"
		  class="rounded-lg bg-black dark:bg-white text-white dark:text-black px-4 py-2 text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-all"
		  >Daftar Kelas</a
		>
	  </div>
  
	  <!-- MOBILE MENU BUTTON -->
	  <button
		on:click={toggleMobileMenu}
		class="lg:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
		aria-label="Toggle menu"
		aria-expanded={mobileMenuOpen}
	  >
		{#if mobileMenuOpen}
		  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
		  </svg>
		{:else}
		  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
		  </svg>
		{/if}
	  </button>
	</div>
  
	<!-- MOBILE MENU -->
	{#if mobileMenuOpen}
	  <div
		class="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-200"
		on:click={closeMobileMenu}
		aria-hidden="true"
	  ></div>
  
	  <!-- svelte-ignore a11y_interactive_supports_focus -->
	  <!-- svelte-ignore a11y_click_events_have_key_events -->
	  <div
		class="fixed right-0 top-0 z-50 h-full w-72 bg-white dark:bg-gray-900 shadow-lg transform transition-transform duration-300 ease-in-out"
		on:click|stopPropagation
		role="dialog"
		aria-modal="true"
	  >
		<div class="flex items-center justify-between p-4 border-b border-gray-100 dark:border-gray-800">
		  <div class="flex items-center gap-3">
			<img src="https://www.programmerzamannow.com/img/pzn.png" alt="PZN" class="h-6 w-auto" />
			<span class="font-semibold text-gray-900 dark:text-white">PZN</span>
		  </div>
		  <button
			on:click={closeMobileMenu}
			class="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
			aria-label="Close menu"
		  >
			<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
			</svg>
		  </button>
		</div>
  
		<div class="p-4 space-y-2 overflow-auto">
		  {#each [
			{ name: "Beranda", href: "/" },
			{ name: "Kelas", href: "/kelas" },
			{ name: "Promo", href: "/promo" },
			{ name: "Sosial Media", href: "/sosial-media" }
		  ] as link}
			<a
			  href={link.href}
			  on:click={closeMobileMenu}
			  class="block px-4 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
			>
			  {link.name}
			</a>
		  {/each}
		</div>
  
		<div class="mt-auto p-4 border-t border-gray-100 dark:border-gray-800 space-y-3">
		  <a
			href="/login"
			on:click={closeMobileMenu}
			class="block text-center rounded-md border border-gray-300 dark:border-gray-600 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition"
			>Masuk</a
		  >
		  <a
			href="/kelas"
			on:click={closeMobileMenu}
			class="block text-center rounded-md bg-black dark:bg-white text-white dark:text-black px-4 py-2 text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition"
			>Daftar Kelas</a
		  >
		</div>
	  </div>
	{/if}
  </nav>
  
  <!-- PAGE CONTENT -->
  <main class="mt-8">
	<slot />
  </main>
  
  <style>
	:global(body) {
	  scroll-behavior: smooth;
	}
  </style>
  