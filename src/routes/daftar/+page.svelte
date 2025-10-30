<script lang="ts">
  import { base } from "$app/paths";
  import "../../app.css";

  let name = "";
  let email = "";
  let password = "";
  let confirmPassword = "";
  let error = "";
  let success = "";

  function handleRegister() {
    error = "";
    success = "";

    if (!name || !email || !password || !confirmPassword) {
      error = "Semua kolom wajib diisi!";
      return;
    }

    if (password !== confirmPassword) {
      error = "Password dan konfirmasi password tidak cocok!";
      return;
    }

    // Simulasi berhasil daftar
    success = "Pendaftaran berhasil! Silakan login.";
    setTimeout(() => {
		window.location.href = `${base}/login`;
    }, 1500);
  }
</script>

<section class="min-h-screen flex flex-col items-center bg-black px-4 sm:px-6 pt-16 sm:pt-20 pb-10">
  <!-- 🔹 Logo -->
  <div class="mb-8 text-center">
    <h1 class="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
      Programmer Zaman Now
    </h1>
    <p class="text-gray-400 text-xs sm:text-sm mt-2">
      Bergabung untuk mulai belajar bersama kami
    </p>
  </div>

  <!-- 🔹 Card Register -->
  <form
    class="bg-gray-950 border border-gray-800 rounded-2xl shadow-xl w-full max-w-sm sm:max-w-md p-6 sm:p-10 space-y-6"
    on:submit|preventDefault={handleRegister}
  >
    <h2 class="text-xl sm:text-2xl font-bold text-white text-center">
      Buat Akun Baru
    </h2>

    {#if error}
      <div class="bg-red-500/10 border border-red-600 text-red-400 rounded-lg p-2 text-sm text-center">
        {error}
      </div>
    {/if}

    {#if success}
      <div class="bg-green-500/10 border border-green-600 text-green-400 rounded-lg p-2 text-sm text-center">
        {success}
      </div>
    {/if}

    <div class="space-y-1">
      <label for="name" class="block text-gray-300 text-sm font-medium">Nama Lengkap</label>
      <input
        id="name"
        type="text"
        placeholder="Masukkan nama lengkap"
        class="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm sm:text-base"
        bind:value={name}
        required
      />
    </div>

    <div class="space-y-1">
      <label for="email" class="block text-gray-300 text-sm font-medium">Email</label>
      <input
        id="email"
        type="email"
        placeholder="contoh@email.com"
        class="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm sm:text-base"
        bind:value={email}
        required
      />
    </div>

    <div class="space-y-1">
      <label for="password" class="block text-gray-300 text-sm font-medium">Password</label>
      <input
        id="password"
        type="password"
        placeholder="Minimal 6 karakter"
        class="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm sm:text-base"
        bind:value={password}
        required
      />
    </div>

    <div class="space-y-1">
      <label for="confirmPassword" class="block text-gray-300 text-sm font-medium">Konfirmasi Password</label>
      <input
        id="confirmPassword"
        type="password"
        placeholder="Ulangi password"
        class="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm sm:text-base"
        bind:value={confirmPassword}
        required
      />
    </div>

    <button
      type="submit"
      class="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg font-semibold transition text-sm sm:text-base"
    >
      Daftar Sekarang
    </button>

    <div class="flex items-center gap-3 my-4">
      <hr class="flex-grow border-gray-700" />
      <span class="text-gray-400 text-sm">atau</span>
      <hr class="flex-grow border-gray-700" />
    </div>

    <button
      type="button"
      class="w-full border border-gray-700 bg-gray-800 text-gray-300 py-2.5 rounded-lg font-semibold hover:bg-gray-850 transition flex items-center justify-center gap-2 text-sm sm:text-base"
    >
      <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google" class="w-5 h-5" />
      Daftar dengan Google
    </button>

    <p class="text-center text-xs sm:text-sm text-gray-400 mt-4">
      Sudah punya akun?
      <a href="{base}/login" class="text-blue-500 hover:text-blue-400 font-medium">Masuk Sekarang</a>
    </p>
  </form>
</section>

