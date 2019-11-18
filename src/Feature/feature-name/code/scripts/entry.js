import Vue from 'vue';
import 'es6-promise/auto';
import 'idempotent-babel-polyfill';

import profile from './Components/profile/profile.vue';
import quotes from './Components/quotes/quotes.vue';
import posts from './Components/facebook/posts.vue';
import todoApp from './Components/todoApp/todoApp.vue';
import currencyConverter from './Components/currencyConverter/currencyConverter.vue';


Vue.component(profile.name, profile);
Vue.component(quotes.componentName, quotes);
Vue.component(posts.name, posts);
Vue.component(todoApp.name, todoApp);
Vue.component(currencyConverter.name, currencyConverter);


window.eventBus = new Vue();

new Vue({
  el: '#app'
});
