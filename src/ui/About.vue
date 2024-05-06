<script setup>
import { Icon } from '@iconify/vue';

const href = "https://github.com/kapitanov/urlzip"
</script>
<template>
    <div class="flex flex-col gap-1">
        <p>
            This is a tiny project that mimics the behavior of a URL shortener.
            But instead of actually shortening URLs, it just ZIPs them!
            Actually, it uses Brotli, not ZIP, but you get the idea.
        </p>
        <p>
            Disclaimer: this app has no backend. It's just a frontend app, nothing is sent to any server.
        </p>
        <p>
            The source code is available on
            <a :href="href" class="text-violet-900 underline hover:text-violet-700">
                <Icon icon="tabler:brand-github" class="inline" /> GitHub
            </a>.
        </p>
    </div>
</template>