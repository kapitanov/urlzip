<script setup>
const props = defineProps(['href']);
</script>
<template>
    <a :href="props.href" class="text-violet-900 underline hover:text-violet-700">
        <slot></slot>
    </a>
</template>