<template>
    <div class="min-h-screen bg-[#f5eee3] flex flex-col items-center justify-center p-6">
        <Image src="/src/assets/imgs/logo-lb.png" alt="Image" width="250" />
        <!-- Título de la empresa -->
        <h1 class="text-4xl font-bold text-center text-cyan-700 mb-2">
            Bienvenid@s a Letzairi Bisuteria
        </h1>


        <!-- Descripción breve -->
        <p class="text-lg text-center text-gray-700 mb-4">
            Somos una empresa dedicada a ofrecer lo mejor en bisutería, collares y más.
        </p>

        <!-- Botones principales en columna -->
        <div class="flex flex-col space-y-2 mb-8 w-3/12">
            <!-- Botón Catálogo -->
            <!-- <router-link to="/catalogo">
                <IconButton icon="pi pi-book" text="Catálogo" cyan rounded />
            </router-link> -->

            <!-- Botón Google -->
            <IconButton @click="handleSignIn" icon="pi pi-google" text="Iniciar Sesión con Google" green rounded />
        </div>
        
        <p class="text-sm text-center text-gray-600 mb-4">
            Redes Sociales: 
        </p>
        <div class="flex space-x-6">
            <a href="https://www.facebook.com/profile.php?id=61563874783893" target="_blank"
                class="text-blue-600 hover:text-blue-800">
                <i class="pi pi-facebook text-2xl"></i>
            </a>
            <a href="https://wa.me/9831382030" target="_blank" class="text-green-600 hover:text-green-800">
                <i class="pi pi-whatsapp text-2xl"></i>
            </a>
        </div>
    </div>
</template>

<script setup lang="ts">
import usePresentationComposable from '@/presentation/composables/usePresentationComposable';
const { handleSignIn } = usePresentationComposable();




</script>

<style scoped>

</style>
