<template>
    <LoadingPage v-if="isLoading"/>
    <ErrorPage v-if="isError" error="404"/>
    <div class="w-full h-full flex flex-col bg-gray-100 overflow-x-hidden" v-if="products">
        <ProductRowSection v-for="category in categories" :products="products.filter((product) => product.Product_Category === category)" :title-section=category />
    </div>
</template>
<script setup lang="ts">
import ProductRowSection from '@/catalog/components/ProductRowSection.vue';
import useCatalogoPrincipal from '../composables/useCatalogoPrincipal';
import LoadingPage from '@/shared/components/LoadingPage.vue';
import ErrorPage from '@/shared/components/ErrorPage.vue';

const { isLoading, isError, products, categories } = useCatalogoPrincipal();

</script>