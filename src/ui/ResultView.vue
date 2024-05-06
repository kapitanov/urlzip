<script setup>
import { Icon } from '@iconify/vue';
import Input from './components/Input.vue';
import Button from './components/Button.vue';
import CopyButton from './components/CopyButton.vue';

const props = defineProps(['url']);
const emit = defineEmits(['clear']);

const onClear = () => {
    emit('clear');
};
</script>
<template>
    <div class="flex flex-col gap-2">
        <label>
            Shortened URL:
        </label>
        <div class="flex flex-row gap-1 w-full">
            <Input type="url" :readonly="true" :value="props.url" />
            <CopyButton type="button" :value="props.url" />
            <Button type="button" color="secondary" @click="onClear">
                <Icon icon="tabler:arrow-back-up" /> Try another URL
            </Button>
        </div>
    </div>
</template>