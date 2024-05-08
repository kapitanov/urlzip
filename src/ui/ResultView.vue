<script setup>
import { Icon } from '@iconify/vue';
import Input from './components/Input.vue';
import Button from './components/Button.vue';
import CopyButton from './components/CopyButton.vue';

const props = defineProps(['result']);
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
            <Input type="url" :readonly="true" :value="props.result.url" />
            <div class="hidden lg:flex gap-1">
                <CopyButton type="button" :value="props.result.url" />
                <Button type="button" @click="onClear">
                    <Icon icon="tabler:arrow-back-up" /> Try another URL
                </Button>
            </div>
        </div>
        <div class="lg:hidden flex flex-row gap-1 w-full">
            <CopyButton type="button" :value="props.result.url" />
            <Button type="button" @click="onClear">
                <Icon icon="tabler:arrow-back-up" /> Try another URL
            </Button>
        </div>
        <div class="flex flex-col md:flex-row gap-1 w-full mt-4 text-gray-700">
            <div class="flex flex-row md:flex-col w-full">
                <label class="font-bold grow">
                    Original size:
                </label>
                <div class="font-mono">
                    {{ props.result.originalSize }} bytes
                </div>
            </div>
            <div class="flex flex-row md:flex-col w-full">
                <label class="font-bold grow">
                    Compressed size:
                </label>
                <div class="font-mono">
                    {{ props.result.compressedSize }} bytes
                </div>
            </div>
            <div class="flex flex-row md:flex-col w-full">
                <label class="font-bold grow">
                    Compression ratio:
                </label>
                <div class="font-mono">
                    {{ props.result.ratio.toFixed(2) }}%
                </div>
            </div>
        </div>
    </div>
</template>