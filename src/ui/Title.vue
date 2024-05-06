<script setup>
import { Icon } from '@iconify/vue';

const href = "https://github.com/kapitanov/urlzip"
</script>
<template>
    <div class="flex gap-1 items-center">
        <h1 class="text-2xl font-bold grow text-violet-900">
            URL-ZIP
        </h1>
        <a :href="href"
            class="text-2xl p-1 text-violet-900 rounded focus:ring-1 focus:ring-violet-900 hover:bg-violet-900 hover:text-white">
            <Icon icon="tabler:brand-github" />
        </a>
    </div>
</template>