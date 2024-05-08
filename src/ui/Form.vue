<script setup>
import { ref } from 'vue';
import InputView from './InputView.vue';
import ResultView from './ResultView.vue';
import { shorten } from '../core/shortener.js'

const result = ref(null);

const onSubmit = async (url) => {
    result.value = await shorten(url);
};

const onClear = () => {
    result.value = null;
};
</script>
<template>
    <InputView v-if="!result" @input="onSubmit" />
    <ResultView v-if="result" :result="result" @clear="onClear" />
</template>