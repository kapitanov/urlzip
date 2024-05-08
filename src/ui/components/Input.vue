<script setup>
import { computed, onMounted, ref } from 'vue';

const model = defineModel();
const props = defineProps(['type', 'placeholder', 'required', 'readonly', 'autofocus']);

const baseInputClass = {
    'border': true,
    'rounded': true,
    'p-1': true,
    'grow': true,
    'outline-none': true,
};
const editableInputClass = {
    'border-violet-900': true,
    'bg-white': true,
    'text-black': true,
    'focus:ring-1': true,
    'focus:ring-violet-900': true,
};
const readonlyInputClass = {
    'text-black': true,
    'bg-stone-200': true,
    'border-gray-900': true,
};
const inputClass = computed(() => {
    return {
        ...baseInputClass,
        ...(props.readonly ? readonlyInputClass : editableInputClass),
    };
});

const handleInput = (e) => {
    model.value = e.target.value;
};

const inputRef = ref(null);
onMounted(() => {
    if (props.autofocus) {
        inputRef.value.focus();
    }
});
</script>
<template>
    <input ref="inputRef" :type="props.type" :class="inputClass" :placeholder="props.placeholder" :readonly="props.readonly"
        :required="props.required" :value="model" @input="handleInput">
</template>