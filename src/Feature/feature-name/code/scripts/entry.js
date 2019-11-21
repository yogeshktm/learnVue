import Vue from 'vue';
import 'es6-promise/auto';
import 'idempotent-babel-polyfill';

import quotes from './Components/quotes/quotes.vue';
import posts from './Components/facebook/posts.vue';
import ViewPost from './Components/facebook/ViewPost.vue';
import todoApp from './Components/todoApp/todoApp.vue';
import currencyConverter from './Components/currencyConverter/currencyConverter.vue';
import qrCodeGenerator from './Components/qrCodeGenerator/qrCodeGenerator.vue';


Vue.component(quotes.componentName, quotes);
Vue.component(posts.name, posts);
Vue.component(ViewPost.name, ViewPost);
Vue.component(todoApp.name, todoApp);
Vue.component(currencyConverter.name, currencyConverter);
Vue.component(qrCodeGenerator.name, qrCodeGenerator);


window.eventBus = new Vue();

new Vue({
  el: '#app'
});
