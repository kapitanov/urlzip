<script setup>
import { ref } from 'vue';
import Input from './components/Input.vue';
import Button from './components/Button.vue';
import { Icon } from '@iconify/vue';

const emit = defineEmits(['input']);

const url = ref('https://www.google.com/search?q=what+is+a+url+shortener');
const error = ref('');

const onSubmit = () => {
    url.value = url.value.trim();

    if (!url.value) {
        error.value = 'URL is required';
        return;
    }

    try {
        new URL(url.value);
    } catch {
        error.value = 'Invalid URL';
        return;
    }

    error.value = '';
    emit('input', url.value);
};
</script>
<template>
    <form class="flex flex-col gap-2" @submit.prevent="onSubmit">
        <label>
            URL to shorten:
        </label>
        <div class="flex flex-row gap-1 w-full">
            <Input v-model="url" type="text" placeholder="Enter an URL to shorten" required autofocus />

            <div class="hidden md:block">
                <Button type="submit">
                    Go
                    <Icon icon="tabler:arrow-right" />
                </Button>
            </div>
        </div>
        <div class="md:hidden flex flex-row gap-1 w-full">
            <Button type="submit">
                Go
                <Icon icon="tabler:arrow-right" />
            </Button>
        </div>
        <div class="text-red-900">
            {{ error }}
        </div>
    </form>
</template>