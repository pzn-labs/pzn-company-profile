<script lang="ts">
	import "../app.css";
	import { onMount } from "svelte";
	import { afterNavigate } from "$app/navigation";
	import { base } from "$app/paths";
	import { fly, fade } from "svelte/transition";

	let mobileMenuOpen = false;
	let scrolled = false;
	let showBanner = false;

	// 🔹 Fungsi menutup banner (sementara untuk halaman ini saja)
	function closeBanner() {
		showBanner = false;
		sessionStorage.setItem("bannerClosed", "true");
	}

	// 🔹 Banner akan muncul setiap kali halaman baru dimuat
	function checkBanner() {
		const bannerClosed = sessionStorage.getItem("bannerClosed");
		showBanner = !bannerClosed;
	}

	onMount(() => {
		checkBanner();

		// Deteksi scroll
		const handleScroll = () => {
			scrolled = window.scrollY > 20;
		};
		window.addEventListener("scroll", handleScroll);

		// Bersihkan event listener
		return () => window.removeEventListener("scroll", handleScroll);
	});

	// 🔹 Jalankan ulang logika banner setiap kali pindah halaman
	afterNavigate(() => {
		sessionStorage.removeItem("bannerClosed"); // reset agar muncul lagi
		checkBanner();
	});

	// 🔹 Toggle menu mobile
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

<!-- 🔹 NAVBAR -->
<nav class="fixed inset-x-0 top-0 z-50 bg-gray-900 shadow-md transition-all duration-300">
	<div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-8 lg:px-10">
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
					class="text-lg font-medium text-gray-300 hover:text-white relative group transition-colors"
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
			class="lg:hidden p-3 rounded-md text-gray-300 hover:bg-gray-800 transition"
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

<!-- 🔹 MENU MOBILE -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
{#if mobileMenuOpen}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
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
						class="block rounded-lg py-3 px-4 text-lg text-gray-300 hover:bg-gray-800 hover:text-white transition-all duration-200 ease-out hover:translate-x-1"
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

<!--  BANNER PROMO (Rapi & Responsif untuk Mobile & Desktop) -->
{#if showBanner}
  <div
    in:fade={{ duration: 400 }}
    out:fade={{ duration: 300 }}
    class="fixed bottom-4 left-0 right-0 z-40 flex justify-center px-3 sm:px-6"
  >
    <div
      class="relative w-full max-w-7xl flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 rounded-xl bg-white/95 px-4 sm:px-6 py-3 sm:py-4 shadow-lg ring-1 ring-gray-200 dark:bg-gray-900/90 dark:ring-gray-700 backdrop-blur-md transition-all text-center sm:text-left"
    >
      <!--  Isi Banner -->
      <p class="text-xs sm:text-sm text-gray-900 leading-snug">
        <strong class="font-semibold text-blue-600">PROMO AKHIR OKTOBER</strong> — Gunakan kode
        <strong class="text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded-md">
          PZN2025
        </strong>
      </p>

      <!--  Tombol Tutup -->
      <button
        on:click={closeBanner}
        type="button"
        class="absolute right-2 top-2 sm:right-3 sm:top-1/2 sm:-translate-y-1/2 rounded-full p-1.5 sm:p-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
      >
        <span class="sr-only">Tutup</span>
        <svg
          viewBox="0 0 20 20"
          fill="currentColor"
          class="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-600 dark:text-gray-300"
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

<style>
	:global(body) {
		background-color: #0f172a;
		color: #e5e7eb;
		scroll-behavior: smooth;
	}
</style>
