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
    <div class="left-0 top-0 bottom-0 right-0 flex justify-center p-0 sm:pt-6 sm:px-6 md:px-0">
        <div class="flex p-4 xl:w-6/12 lg:w-8/12 md:w-10/12 w-full rounded bg-stone-200">
            <div class="flex flex-col gap-6 w-full">
                <Title />
                <About />
                <Form />
            </div>
        </div>
    </div>
</template>