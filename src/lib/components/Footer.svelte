<script>
  import { base } from '$app/paths';
</script>

<footer class="bg-gray-950 text-gray-400 border-t border-gray-800">
  <div class="mx-auto max-w-7xl px-6 py-16 lg:px-8 grid gap-12 md:grid-cols-3 items-start">
    <!-- Kolom 1 -->
    <div class="space-y-5">
      <div class="flex items-center gap-3">
        <img
          src="https://www.programmerzamannow.com/img/pzn.png"
          alt="PZN Logo"
          class="h-10 w-auto transition-transform hover:scale-105 duration-300"
        />
        <span class="text-lg font-semibold text-white">Programmer Zaman Now</span>
      </div>
      <p class="text-sm leading-relaxed max-w-sm">
        Belajar programming dari dasar hingga mahir bersama mentor berpengalaman.
        Temukan cara modern untuk menguasai dunia teknologi dengan pembelajaran praktis dan relevan industri.
      </p>
    </div>

    <!-- Kolom 2 -->
    <div class="space-y-5">
      <h4 class="text-base font-semibold text-white">Navigasi</h4>
      <ul class="grid grid-cols-2 sm:grid-cols-1 gap-2">
        {#each [
          { name: "Beranda", href: "/" },
          { name: "Kelas", href: "/kelas" },
          { name: "Promo", href: "/promo" },
          { name: "Sosial Media", href: "/sosial-media" }
        ] as link}
          <li>
            <a href={base + link.href} class="text-sm text-gray-400 hover:text-white transition-colors duration-200">
              {link.name}
            </a>
          </li>
        {/each}
      </ul>
    </div>

    <!-- Kolom 3 -->
    <div class="space-y-5">
      <h4 class="text-base font-semibold text-white">Ikuti Kami</h4>
      <div class="flex gap-5">
        {#each [
          { href: "https://youtube.com", icon: "https://cdn-icons-png.flaticon.com/512/1384/1384060.png", label: "YouTube" },
          { href: "https://instagram.com", icon: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png", label: "Instagram" },
          { href: "https://www.tiktok.com/@programmerzamannow", icon: "https://cdn-icons-png.flaticon.com/512/3046/3046121.png", label: "TikTok" },
          { href: "https://facebook.com", icon: "https://cdn-icons-png.flaticon.com/512/733/733547.png", label: "Facebook" }
        ] as social}
          <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} class="group">
            <img
              src={social.icon}
              alt={social.label}
              class="h-6 w-6 opacity-80 group-hover:opacity-100 transform group-hover:scale-110 transition-all duration-300"
            />
          </a>
        {/each}
      </div>
    </div>
  </div>

  <div class="border-t border-gray-800 py-6 text-center">
    <p class="text-sm text-gray-400">
      © {new Date().getFullYear()} <span class="font-medium text-white">Programmer Zaman Now</span>.
    </p>
  </div>
</footer>
