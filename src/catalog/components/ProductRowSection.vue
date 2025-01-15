<template>
    <div class="mt-10 w-full flex justify-center" v-if="products.length>0">
        <div class="w-full 3xl:w-3/4 flex flex-col">
        <div class="bg-white w-full h-12 flex items-center justify-center">
            <h1 class="text-center text-lg">{{ titleSection }}</h1>
        </div>
        <div class="w-full bg-gray-200 flex flex-row items-center justify-center overflow-x-auto overflow-y-hidden py-4 space-x-6">
            <ProductSection v-for="product in products" :product="product"/>
        </div>
    </div>
    </div>
</template>

<script setup lang="ts">
import type {Product} from '@interfaces/Product';
interface Props {
    titleSection: string;
    products: Product[];
}

const props = defineProps<Props>();

//Componentes
import ProductSection from './ProductSection.vue';
</script>

<style scoped></style>