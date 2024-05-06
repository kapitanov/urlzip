<script setup>
import { ref } from 'vue';
import InputView from './InputView.vue';
import ResultView from './ResultView.vue';
import { shorten } from '../core/shortener.js'

const shortUrl = ref('');

const onSubmit = async (url) => {
    shortUrl.value = await shorten(url);
};

const onClear = () => {
    shortUrl.value = '';
};
</script>
<template>
    <InputView v-if="!shortUrl" @input="onSubmit" />
    <ResultView v-if="shortUrl" :url="shortUrl" @clear="onClear" />
</template>