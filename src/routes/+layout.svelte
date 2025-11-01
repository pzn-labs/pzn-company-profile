<script lang="ts">
	import "../app.css";
	import { onMount } from "svelte";
	import { base } from "$app/paths";
	import { fly } from "svelte/transition";
	import BannerPromo from "$lib/components/BannerPromo.svelte";
	import Footer from "$lib/components/Footer.svelte";

	let mobileMenuOpen = false;
	let scrolled = false;
	let showBanner = false;

	//  Tutup banner (tidak tampil lagi selama sesi browser)
	function closeBanner() {
		showBanner = false;
		sessionStorage.setItem("bannerShown", "true");
	}

	onMount(() => {
		// Hanya tampil sekali saat pertama kali user buka website
		const bannerShown = sessionStorage.getItem("bannerShown");
		if (!bannerShown) {
			showBanner = true;
			sessionStorage.setItem("bannerShown", "true");
		}

		// Deteksi scroll untuk ubah gaya navbar
		const handleScroll = () => {
			scrolled = window.scrollY > 20;
		};
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	});

	//  Toggle menu mobile
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
	<link rel="icon" type="image/png" href="https://www.programmerzamannow.com/img/pzn.png" />
	<link rel="apple-touch-icon" href="https://www.programmerzamannow.com/img/pzn.png" />
	<meta name="theme-color" content="#0f172a" />
</svelte:head>

<!--  NAVBAR -->
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
		<div class="hidden lg:flex items-center gap-12">
			{#each [
				{ name: "Beranda", href: "/" },
				{ name: "Kelas Online", href: "/kelas" },
				{ name: "Promo", href: "/promo" },
				{ name: "Sosial Media", href: "/sosial-media" }
			] as link}
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

<!--  MENU MOBILE -->

{#if mobileMenuOpen}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div class="fixed inset-0 z-30 bg-black/40 backdrop-blur-sm" on:click={closeMobileMenu}></div>

	<div
		in:fly={{ y: -20, opacity: 0, duration: 400 }}
		out:fly={{ y: -20, opacity: 0, duration: 400 }}
		class="fixed top-[64px] inset-x-0 z-40 bg-gray-900 border-t border-gray-800 shadow-lg rounded-b-2xl"
		role="dialog"
	>
		<div class="p-8 space-y-3">
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

<!--  KONTEN UTAMA -->
<main class="mt-[72px] bg-gray-950 min-h-screen text-gray-200">
	<slot />
</main>

<!--  BANNER PROMO -->
<BannerPromo
/>

<!-- Footer -->
 <Footer/>

<style>
	:global(body) {
		background-color: #0f172a;
		color: #e5e7eb;
		scroll-behavior: smooth;
	}
</style>


