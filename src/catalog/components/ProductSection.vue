<template>
    <div class="relative min-w-80 w-80 max-w-80 min-h-80 h-80 max-h-80 bg-white flex flex-col rounded-md">
        <div class="absolute w-full h-full hover:bg-white/30 hover:cursor-pointer" @click="goToProduct()">
        </div>
        <div class="flex flex-col  items-center w-full h-full p-4 ">
            <div class="w-full h-2/3 flex justify-center">
                <img :src="props.product.Product_Images[0]" class="w-3/4 h-full imgCollar">
            </div>
            <div class="flex justify-center flex-col pt-2">
                <h3 class="text-lg text-center font-semibold text-blue-900">{{ product.Product_Name }}</h3>
                <div class="w-full h-8 flex items-center justify-center svgClass">
                    <Button :icon="isFavorite ? 'pi pi-heart-fill' : 'pi pi-heart'" @click="isFavorite = !isFavorite"
                        class="p-button-rounded" :class="{ 'p-button-danger': isFavorite }" ></Button>{{ likes }}
                </div>
                <h3 class="text-base text-center">${{ product.Product_PaymentMethodsAvailable[0].Product_Price }}.00 MX
                </h3>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Product } from '@interfaces/Product';
import { computed, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const isFavorite = ref(false);

const likes = computed(() => {
    return props.product.Product_Ratings?.length || 0;
});

interface Props {
    product: Product;
}
const props = defineProps<Props>();
const router = useRouter();
const rating = ref(0);
const goToProduct = () => {
    router.push({
        name: 'producto',
        params: {
            slug: props.product.Product_Slug,
        },
    });
}


onMounted(() => {
    rating.value = props.product.Product_Ratings !== null ? Math.round(props.product.Product_Ratings.reduce((acc, rating) => acc + rating.Product_Rating, 0) / props.product.Product_Ratings.length) : 0;
});
</script>

<style scoped></style>