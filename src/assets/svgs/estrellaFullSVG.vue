<template>
    <svg :class="`w-5 h-5 ${props.colorClass}`" fill="currentColor" viewBox="0 0 24 24">
        <path
            d="M12 .587l3.668 7.451 8.214 1.193-5.941 5.787 1.402 8.171L12 18.896l-7.343 3.866 1.402-8.171-5.941-5.787 8.214-1.193z" />
    </svg>
</template>


<script setup lang="ts">
import { defineProps } from 'vue';

interface Props {
    colorClass?: string;
}

const props = withDefaults(defineProps<Props>(), {
    colorClass: 'text-yellow-500',
});
</script>