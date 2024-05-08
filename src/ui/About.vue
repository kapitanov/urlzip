<script setup>
import { Icon } from '@iconify/vue';
import Hyperlink from './components/Hyperlink.vue';

const href = "https://github.com/kapitanov/urlzip"
</script>
<template>
    <div class="flex flex-col gap-1">
        <p>
            This is a tiny project that mimics the behavior of a URL shortener.
            But instead of actually shortening URLs, it just ZIPs them!
            Actually, it uses <Hyperlink href="https://github.com/antirez/smaz">SMAZ</Hyperlink>, not ZIP, but you get the
            idea.
        </p>
        <p>
            Disclaimer: this app has no backend. It's just a frontend app, nothing is sent to any server.
        </p>
        <p>
            The source code is available on
            <Hyperlink :href="href">
                <Icon icon="tabler:brand-github" class="inline" /> GitHub
            </Hyperlink>.
        </p>
    </div>
</template>