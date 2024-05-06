import * as Vue from 'vue';
import App from './ui/App.vue'

export function display(target) {
    const app = Vue.createApp(App);
    app.mount(target);
}