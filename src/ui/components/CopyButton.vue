<script setup>
import { computed, ref } from 'vue';
import { Icon } from '@iconify/vue';
import Button from './Button.vue';

const props = defineProps(['value']);
const state = ref('idle');

const color = computed(() => {
    if (state.value === 'ok') {
        return 'success';
    }

    if (state.value === 'error') {
        return 'danger';
    }

    return 'primary';
});

const onClick = () => {
    try {
        navigator.clipboard.writeText(props.value);
        state.value = 'ok';
    } catch (err) {
        console.error('Failed to copy: ', err);
        state.value = 'error';
    }

    setTimeout(() => { state.value = 'idle'; }, 1000);
};
</script>
<template>
    <Button type="button" :color="color" @click="onClick">
        <span v-if="state === 'idle'" class="flex items-center gap-1">
            <Icon icon="tabler:copy" /> Copy
        </span>
        <span v-if="state === 'ok'" class="flex items-center gap-1 text-green-900">
            <Icon icon="tabler:copy-check-filled" /> Copy
        </span>
        <span v-if="state === 'error'" class="flex items-center gap-1 text-red-900">
            <Icon icon="tabler:copy-x-filled" /> Copy
        </span>
    </Button>
</template>
