<script lang="ts">
  import "../../app.css";
  import { base } from "$app/paths";
  
  let email = "";
  let password = "";
  let error = "";

  function handleLogin() {
    error = "";
    if (!email || !password) {
      error = "Email dan password wajib diisi!";
      return;
    }

    if (email === "dwi@gmail.com" && password === "12345") {
    window.location.href = `${base}/kelas`;
    } else {
      error = "Email atau password salah!";
    }
  }
</script>

<section class="min-h-screen flex flex-col items-center bg-black px-4 sm:px-6 pt-16 sm:pt-20 pb-10">
  <!-- 🔹 Logo -->
  <div class="mb-8 text-center">
    <h1 class="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
      Programmer Zaman Now
    </h1>
    <p class="text-gray-400 text-xs sm:text-sm mt-2">
      Masuk untuk mulai belajar bersama kami
    </p>
  </div>

  <!-- 🔹 Card Login -->
  <form
    class="bg-gray-950 border border-gray-800 rounded-2xl shadow-xl w-full max-w-sm sm:max-w-md p-6 sm:p-10 space-y-6"
    on:submit|preventDefault={handleLogin}
  >
    <h2 class="text-xl sm:text-2xl font-bold text-white text-center">
      Masuk ke Akun Anda
    </h2>

    {#if error}
      <div class="bg-red-500/10 border border-red-600 text-red-400 rounded-lg p-2 text-xs sm:text-sm text-center">
        {error}
      </div>
    {/if}

    <!-- Email -->
    <div class="space-y-1">
      <label for="email" class="block text-gray-300 text-sm font-medium">Email</label>
      <input
        id="email"
        type="email"
        placeholder="contoh@email.com"
        class="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm sm:text-base text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
        bind:value={email}
        required
      />
    </div>

    <!-- Password -->
    <div class="space-y-1">
      <label for="password" class="block text-gray-300 text-sm font-medium">Password</label>
      <input
        id="password"
        type="password"
        placeholder="Masukkan password"
        class="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm sm:text-base text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
        bind:value={password}
        required
      />
    </div>

    <!-- Ingat Saya + Lupa Password -->
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs sm:text-sm text-gray-400">
      <label class="flex items-center gap-2">
        <input type="checkbox" class="rounded bg-gray-800 border-gray-600 text-blue-500 focus:ring-blue-500" />
        Ingat saya
      </label>
      <a href="/" class="text-blue-500 hover:text-blue-400 font-medium">Lupa password?</a>
    </div>

    <!-- Tombol Login -->
    <button
      type="submit"
      class="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg font-semibold transition text-sm sm:text-base"
    >
      Login
    </button>

    <!-- Atau -->
    <div class="flex items-center gap-3 my-4">
      <hr class="flex-grow border-gray-700" />
      <span class="text-gray-400 text-xs sm:text-sm">atau</span>
      <hr class="flex-grow border-gray-700" />
    </div>

    <!-- Login Google -->
    <button
      type="button"
      class="w-full border border-gray-700 bg-gray-800 text-gray-300 py-2.5 rounded-lg font-semibold hover:bg-gray-850 transition flex items-center justify-center gap-2 text-sm sm:text-base"
    >
      <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google" class="w-5 h-5" />
      Masuk dengan Google
    </button>

    <p class="text-center text-xs sm:text-sm text-gray-400 mt-4">
      Belum punya akun?
      <a href="{base}/daftar" class="text-blue-500 hover:text-blue-400 font-medium">Daftar Sekarang</a>
    </p>
  </form>
</section>
