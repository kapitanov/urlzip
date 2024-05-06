<script setup>
import Title from './Title.vue';
import About from './About.vue';
import Form from './Form.vue';
</script>
<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
<template>
    <div class="left-0 top-0 bottom-0 right-0 flex justify-center pt-6">
        <div class="flex p-4 w-6/12 rounded bg-stone-200">
            <div class="flex flex-col gap-6 w-full">
                <Title />
                <About />
                <Form />
            </div>
        </div>
    </div>
</template>