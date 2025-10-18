<script lang="ts">
	import "../app.css";
	import { onMount } from "svelte";
	import { base } from '$app/paths';

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
	  document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto";
	}

	function closeMobileMenu() {
	  mobileMenuOpen = false;
	  document.body.style.overflow = "auto";
	}
</script>

<svelte:head>
	<title>Programmer Zaman Now</title>
	<meta
		name="description"
		content="Ikuti Programmer Zaman Now di berbagai platform sosial media untuk update terbaru, tips programming, dan konten edukatif."
	/>

	<!-- 🧩 Logo PZN sebagai favicon -->
	<link rel="icon" type="image/png" href="https://www.programmerzamannow.com/img/pzn.png" />
	<link rel="apple-touch-icon" href="https://www.programmerzamannow.com/img/pzn.png" />
	<meta name="theme-color" content="#4F46E5" />
</svelte:head>

<nav class="fixed inset-x-0 top-0 z-50 bg-white dark:bg-gray-900 shadow-md transition-all duration-300">
	<div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
		<!-- Logo -->
		<a href={base + "/"} class="flex items-center gap-4 group">
			<img
				src="https://www.programmerzamannow.com/img/pzn.png"
				alt="PZN Logo"
				class="h-10 w-auto transition-transform duration-300 group-hover:scale-110"
			/>
			<span class="font-semibold text-gray-900 dark:text-white text-xl tracking-tight">
				Programmer Zaman Now
			</span>
		</a>

		<!-- Desktop Menu -->
		<div class="hidden lg:flex items-center gap-12">
			{#each [
				{ name: "Beranda", href: "/" },
				{ name: "Kelas Online", href: "/kelas" },
				{ name: "Promo", href: "/promo" },
				{ name: "Sosial Media", href: "/sosial-media" }
			] as link}
				<a
					href={base + link.href}
					class="text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white relative group transition-colors"
				>
					{link.name}
					<span class="absolute left-0 bottom-0 w-0 h-[2px] bg-black dark:bg-white transition-all duration-300 group-hover:w-full"></span>
				</a>
			{/each}
		</div>

		<!-- Mobile Menu Button -->
		<button
			on:click={toggleMobileMenu}
			class="lg:hidden p-3 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
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

	<!-- MOBILE MENU -->
	{#if mobileMenuOpen}
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<div class="fixed inset-0 z-30" on:click={closeMobileMenu}></div>

		<div
			class="absolute inset-x-0 top-full z-40 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-md animate-slideDown"
			role="dialog"
			aria-modal="true"
			tabindex="-1"
		>
			<div class="p-8 space-y-3">
				<!-- Link Menu -->
				<nav class="flex flex-col space-y-3 text-left">
					{#each [
						{ name: "Beranda", href: "/" },
						{ name: "Kelas Online", href: "/kelas" },
						{ name: "Promo", href: "/promo" },
						{ name: "Sosial Media", href: "/sosial-media" }
					] as link}
						<a
							href={base + link.href}
							on:click={closeMobileMenu}
							class="block rounded-lg py-3 px-4 text-lg text-gray-700 dark:text-gray-300 
								   hover:bg-gray-100 dark:hover:bg-gray-800 
								   hover:text-black dark:hover:text-white
								   transition-all duration-200 ease-out
								   hover:translate-x-1"
						>
							{link.name}
						</a>
					{/each}
				</nav>
			</div>

			<!-- Footer -->
			<footer
				class="border-t border-gray-200 dark:border-gray-800 mt-4 py-5 text-center text-base text-gray-500 dark:text-gray-400"
			>
				<p>
					&copy; {new Date().getFullYear()} <strong>Programmer Zaman Now</strong>. All rights reserved.
				</p>
			</footer>
		</div>
	{/if}
</nav>

<main class="mt-8">
	<slot />
</main>

<style>
	:global(body) {
		scroll-behavior: smooth;
	}

	@keyframes slideDown {
		from {
			opacity: 0;
			transform: translateY(-10px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.animate-slideDown {
		animation: slideDown 0.25s ease-out forwards;
	}
</style>
