<template>
    <LoadingPage v-if="isLoadingProductSlug" wh200 />
    <div class="flex items-center justify-center h-full bg-gray-100" v-if="!isLoadingProductSlug">
        <div class="w-full md:w-10/12 lg:w-9/12 xl:w-8/12 2xl:w-6/12 bg-gray-200 shadow-md rounded-lg overflow-hidden">
            <div class="flex">
                <!-- Imagen del producto -->
                <div class="w-1/2 relative">
                    <img v-for="(image, index) in product?.Product_Images" :key="index" :src="image"
                        :class="index === selectedImage ? 'block' : 'hidden'"
                        class="w-full min-h-[700px] h-[700px] object-cover rounded-md" />

                    <!-- Selección de imágenes pequeñas -->
                    <div class="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 p-2 bg-gray-100">
                        <img v-for="(thumb, index) in product?.Product_Images" :key="index" :src="thumb" @click="selectedImage = index"
                            :class="index === selectedImage ? 'border-2 border-yellow-600' : ''"
                            class="w-12 h-12 object-cover cursor-pointer rounded-lg transition duration-200" />
                    </div>
                </div>
                <!-- Detalles del producto -->
                <div class="w-1/2 p-6">
                    <h2 class="text-2xl font-bold text-gray-800">{{ product?.Product_Name }}</h2>

                    <!-- Estrellas de calificación -->
                    <div class="flex items-center mt-2 mb-4">
                        <Button :icon="isFavorite ? 'pi pi-heart-fill' : 'pi pi-heart'" @click="isFavorite = !isFavorite"
                        class="p-button-rounded" :class="{ 'p-button-danger': isFavorite }" ></Button>{{ likes }}
                    </div>

                    <!-- Precio -->
                    <p class="text-xl font-semibold text-gray-700 mb-2">{{
                        product?.Product_PaymentMethodsAvailable[0].Product_Price }} MX</p>

                    <!-- Descripción -->
                    <p class="text-gray-600 text-sm mb-6">
                        {{ product?.Product_Description }}
                    </p>

                    <!-- Botón de Solicitar -->
                    <!-- <button 
                        class="bg-yellow-600 text-white px-4 py-2 rounded">
                        Solicitar (Proximamente)
                    </button> -->
                    <div class="bg-gray-600 text-white px-4 py-2 rounded w-56 ">
                        Solicitar (Proximamente)
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query';
import { getSlugProduct } from '@/shared/services/productService';
import { computed, onMounted, ref } from 'vue';
interface Props {
    slug: string;
}
const props = defineProps<Props>();

const isFavorite = ref(false);

const likes = computed(() => {
    return product.value?.Product_Ratings?.length || 0;
});

const { data: product, isLoading: isLoadingProductSlug } = useQuery({
    queryKey: ['product', props.slug],
    queryFn: () => getSlugProduct(props.slug),
});

const selectedImage = ref(0);
const images = [
    "https://raw.githubusercontent.com/lireyes22/catalogoImagesBD/main/Prueba.jpg",
    "https://raw.githubusercontent.com/lireyes22/catalogoImagesBD/main/PruebaDos.jpg",
    "https://raw.githubusercontent.com/lireyes22/catalogoImagesBD/main/Prueba.jpg",
    "https://raw.githubusercontent.com/lireyes22/catalogoImagesBD/main/PruebaDos.jpg",
];

</script>