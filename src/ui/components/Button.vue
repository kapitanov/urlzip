<script setup>
import { computed } from 'vue';

const props = defineProps(['type', 'color', 'disabled']);
const emit = defineEmits(['click']);

const baseClass = {
    'py-1': true,
    'px-3': true,
    'border': true,
    'rounded': true,
    'outline-none': true,
    'flex': true,
    'gap-1': true,
    'items-center': true,
};
const primaryColorClass = {
    'border-violet-900': true,
    'bg-violet-100': true,
    'text-black': true,
    'hover:bg-violet-900': true,
    'hover:text-white': true,
    'focus:ring-1': true,
    'focus:ring-violet-900': true,
};
const secondaryColorClass = {
    'border-gray-500': true,
    'bg-gray-100': true,
    'text-black': true,
    'hover:bg-gray-500': true,
    'hover:text-white': true,
    'focus:ring-1': true,
    'focus:ring-gray-500': true,
};
const successColorClass = {
    'border-green-500': true,
    'bg-green-100': true,
    'text-black': true,
    'hover:bg-green-500': true,
    'hover:text-white': true,
    'focus:ring-1': true,
    'focus:ring-green-500': true,
};
const dangerColorClass = {
    'border-red-500': true,
    'bg-red-100': true,
    'text-black': true,
    'hover:bg-red-500': true,
    'hover:text-white': true,
    'focus:ring-1': true,
    'focus:ring-red-500': true,
};

const buttonClass = computed(() => {
    const color = props.color || 'primary';
    return {
        ...baseClass,
        ...(color === 'primary' ? primaryColorClass : {}),
        ...(color === 'secondary' ? secondaryColorClass : {}),
        ...(color === 'success' ? successColorClass : {}),
        ...(color === 'danger' ? dangerColorClass : {}),
    };
});

const onClick = () => {
    emit('click');
};
</script>
<template>
    <button :type="props.type" :disabled="props.disabled" :class="buttonClass" @click="onClick">
        <slot />
    </button>
</template>