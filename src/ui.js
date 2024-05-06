import * as Vue from 'vue';
import App from './ui/App.vue'

export function display(target) {
    console.log('Displaying UI');
    const app = Vue.createApp(App);
    app.mount(target);
}