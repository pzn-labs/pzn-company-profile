<script lang="ts">
    import { onMount } from "svelte";
    import { base } from "$app/paths";
  
    // Import gambar
    import golang from "$lib/assets/golang.jpg";
    import html from "$lib/assets/html.jpg";
    import java from "$lib/assets/java.jpg";
    import laravel from "$lib/assets/laravel.jpg";
    import nodejs from "$lib/assets/nodejs.jpg";
    import mysql from "$lib/assets/mysql.jpg";
    import vue from "$lib/assets/vuejs.jpg";
    import php from "$lib/assets/php.jpg";
    import docker from "$lib/assets/docker.jpg";
    import spring from "$lib/assets/spring.jpg";
    import react from "$lib/assets/reactjs.jpg";
    import mongo from "$lib/assets/mongodb.jpg";
    import kotlin from "$lib/assets/kotlin.jpg";
    import git from "$lib/assets/git.jpg";
    import postgre from "$lib/assets/postgre.jpg";
    import redis from "$lib/assets/redis.jpg";
    import dart from "$lib/assets/dart.jpg";
    import typescript from "$lib/assets/typescript.jpg";
    import elastic from "$lib/assets/elasticsearch.jpg";
    import jenkins from "$lib/assets/jenkins.jpg";
    import android from "$lib/assets/android.jpg";
    import openapi from "$lib/assets/openapi.jpg";
    import restfull from "$lib/assets/restfulapi.jpg";
    import http from "$lib/assets/http.jpg";
    import python from "$lib/assets/python.jpg";
    import svelte from "$lib/assets/svelte.jpg";
    import bootstrap from "$lib/assets/bootstrap.jpg";
    import rust from "$lib/assets/rust.png";
    import bun from "$lib/assets/bun.png";
    import k6 from "$lib/assets/k6.jpg";
    import nestjs from "$lib/assets/nestjs.jpg";
    import rabbit from "$lib/assets/rabbitmq.jpg";
    import kafka from "$lib/assets/kafka.jpg";
  
    // Array gambar slideshow
    const images = [
      html, laravel, mysql, golang, java, nodejs, vue, php, docker, spring,
      mongo, kotlin, git, postgre, react, redis, dart, typescript, elastic,
      jenkins, android, openapi, restfull, http, python, svelte, bootstrap,
      rust, bun, k6, nestjs, rabbit, kafka
    ];
  
    let currentIndex = 0;
    let currentImage = images[currentIndex];
    let isFading = false;
    let interval: ReturnType<typeof setInterval>;
  
    // Ganti gambar tiap 1.5 detik
    const showNext = () => {
      isFading = true;
      setTimeout(() => {
        currentIndex = (currentIndex + 1) % images.length;
        currentImage = images[currentIndex];
        isFading = false;
      }, 300);
    };
  
    onMount(() => {
      interval = setInterval(showNext, 1500);
      return () => clearInterval(interval);
    });
  </script>
  
  
  <!-- HERO SECTION -->
  <section class="relative bg-gray-950 text-white overflow-hidden">
    <div class="mx-auto max-w-7xl px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
      
      <!-- Gambar slideshow -->
      <div class="relative w-full overflow-hidden rounded-3xl shadow-2xl order-1 lg:order-2">
        <img 
          src={currentImage} 
          alt="Programmer Zaman Now" 
          class="w-full h-full object-cover rounded-3xl transform hover:scale-105 transition-transform duration-300 fade {isFading ? 'fade-out' : ''}"
          loading="eager"
          fetchpriority="high"
          width="600"
          height="400"
        />
      </div>
  
      <!-- Teks -->
      <div class="space-y-4 text-center lg:text-left relative z-20">
        <span class="inline-block text-sm font-semibold text-white bg-clip-text uppercase tracking-wide">
          Ngoding Dulu, Jadi Sultan Nanti!
        </span>
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
          <span class="text-white">Programmer Zaman Now</span>
        </h1>
        <p class="text-base sm:text-lg text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
          Tingkatkan skill coding kamu dan jadilah bagian dari komunitas developer terbaik di Indonesia! 
          Belajar dengan mentor profesional dan kurikulum yang up-to-date.
        </p>
        <div class="pt-6 flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4">
          <a href={base + "/kelas"} 
            class="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white hover:bg-transparent 
            text-gray-900 border border-gray-200 hover:border-blue-400 hover:text-blue-400 font-semibold 
            rounded-full shadow-lg transition-transform duration-300 hover:scale-105 w-full sm:w-auto">
            Mulai Sekarang
          </a>
          <a href={base + "/promo"} 
            class="inline-flex items-center justify-center gap-2 px-6 py-3 border border-gray-600 
            hover:border-blue-400 hover:text-blue-400 text-gray-300 font-semibold rounded-full 
            transition-all duration-300 w-full sm:w-auto">
            Lihat Promo
          </a>
        </div>
      </div>
    </div>
  </section>
  