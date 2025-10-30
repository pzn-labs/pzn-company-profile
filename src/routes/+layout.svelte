<script lang="ts">
	import "../app.css";
	import { onMount } from "svelte";
	import { fade } from "svelte/transition";	
	import Navbar from "$lib/components/Navbar.svelte";
	import Footer from '$lib/components/Footer.svelte';


	let scrolled = false;
	let showBanner = false;

	function closeBanner() {
		showBanner = false;
		sessionStorage.setItem("bannerShown", "true");
	}

	onMount(() => {
		const bannerShown = sessionStorage.getItem("bannerShown");
		if (!bannerShown) {
			showBanner = true;
			sessionStorage.setItem("bannerShown", "true");
		}

		const handleScroll = () => {
			scrolled = window.scrollY > 20;
		};
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	});


</script>

<svelte:head>
	<title>Programmer Zaman Now</title>
	<meta
		name="description"
		content="Ikuti Programmer Zaman Now di berbagai platform sosial media untuk update terbaru, tips programming, dan konten edukatif."
	/>
	<link rel="icon" type="image/png" href="https://www.programmerzamannow.com/img/pzn.png" />
	<link rel="apple-touch-icon" href="https://www.programmerzamannow.com/img/pzn.png" />
	<meta name="theme-color" content="#0f172a" />
</svelte:head>

<!-- NAVBAR -->
<Navbar />

<!-- KONTEN UTAMA -->
<main class="mt-[72px] bg-gray-950 min-h-screen text-gray-200">
	<slot />
</main>

<!-- BANNER PROMO -->
{#if showBanner}
	<div
		in:fade={{ duration: 400 }}
		out:fade={{ duration: 300 }}
		class="fixed bottom-4 left-0 right-0 z-40 flex justify-center px-3 sm:px-6"
	>
		<div
			class="relative w-full max-w-7xl flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 rounded-xl bg-white/95 px-4 sm:px-6 py-3 sm:py-4 shadow-lg ring-1 ring-gray-200 backdrop-blur-md transition-all text-center sm:text-left"
		>
			<p class="text-xs sm:text-sm text-gray-900 leading-snug">
				<strong class="font-semibold text-blue-600">PROMO AKHIR OKTOBER</strong> — Gunakan kode
				<strong class="text-gray-800 bg-gray-100 px-1.5 py-0.5 rounded-md">PZN2025</strong>
			</p>

			<button
				on:click={closeBanner}
				type="button"
				class="absolute right-2 top-2 sm:right-3 sm:top-1/2 sm:-translate-y-1/2 rounded-full p-1.5 sm:p-2 hover:bg-gray-100 transition"
				aria-label="Tutup banner"
			>
				<svg viewBox="0 0 20 20" fill="currentColor" class="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-600">
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


<!-- Footer -->
 <Footer />

<style>
	:global(body) {
		background-color: #0f172a;
		color: #e5e7eb;
		scroll-behavior: smooth;
	}
</style>
