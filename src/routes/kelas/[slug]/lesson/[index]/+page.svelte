<script lang="ts">
  import { base } from '$app/paths';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	let slug = '';
	let index = 0;
	let lesson: any = null;
	let errorMessage = ''; //Pesan error

	onMount(async () => {
		try {
			slug = $page.params.slug ?? '';
			index = Number($page.params.index);

			const res = await fetch(`http://localhost:3000/kelas/${slug}/lesson/${index}`);

			//  Jika fetch gagal atau data kosong
			if (!res.ok) {
				errorMessage = 'Kursus belum tersedia atau sedang dalam perbaikan.';
				return;
			}

			const data = await res.json();
			if (!data || Object.keys(data).length === 0) {
				errorMessage = 'Kursus ini belum memiliki materi.';
				return;
			}

			lesson = data;
		} catch (err) {
			console.error(err);
			errorMessage = 'Terjadi kesalahan saat memuat materi. Silakan coba lagi nanti.';
		}
	});
</script>

<section class="min-h-screen bg-black text-white py-10 px-6">
	<div class="max-w-6xl mx-auto space-y-8">
		<!-- Kembali ke Kursus -->
		<a
			href={`${base}/kelas/${slug}`}
			class="inline-flex items-center text-gray-200 hover:text-blue-400 transition text-sm mb-4"
		>
			<svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
			</svg>
			Kembali ke Kursus
		</a>

		<!-- Kondisi Error -->
		{#if errorMessage}
			<div class="bg-red-500/10 border border-red-600 text-red-400 rounded-lg p-4 text-center text-sm sm:text-base">
				{errorMessage}
			</div>

		<!-- Loading -->
		{:else if !lesson}
			<p class="text-gray-400 text-center animate-pulse">Memuat materi...</p>

		<!-- Konten Lesson -->
		{:else}
			<h1 class="text-3xl sm:text-4xl font-bold mb-4">{lesson.title}</h1>
			<p class="text-gray-400 mb-6">{lesson.description}</p>

			<!-- Video -->
			<div class="aspect-video rounded-xl overflow-hidden border border-gray-700 shadow-lg">
				<iframe
					src={lesson.videoUrl}
					title={lesson.title}
					class="w-full h-full"
					allowfullscreen
				></iframe>
			</div>

			<!-- Materi Teks -->
			<div class="prose prose-invert max-w-none mt-8">
				{@html lesson.content}
			</div>

			<!-- Navigasi -->
			<div class="flex justify-between items-center mt-10">
				{#if lesson.prev}
					<a
						href={`/kelas/${slug}/lesson/${lesson.prev}`}
						class="text-sm px-4 py-2 border border-gray-700 rounded-lg text-gray-300 hover:border-blue-400 hover:text-blue-400 transition"
					>
						← Sebelumnya
					</a>
				{:else}
					<div></div>
				{/if}

				{#if lesson.next}
					<a
						href={`/kelas/${slug}/lesson/${lesson.next}`}
						class="text-sm px-4 py-2 border border-gray-700 rounded-lg text-gray-300 hover:border-blue-400 hover:text-blue-400 transition"
					>
						Selanjutnya →
					</a>
				{/if}
			</div>
		{/if}
	</div>
</section>

