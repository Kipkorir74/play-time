import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import Axios from 'axios'
import FormHelper from './components/formHelper.vue'
import addBlog from './components/addBlog.vue'
import showBlog from './components/showBlog.vue'
import listBlog from './components/listBlogs.vue'
import Header from './components/header.vue'
import VueRouter from 'vue-router'
import Routes from './routes'

Vue.use(VueResource)
Vue.use(Axios)
Vue.use(VueRouter)

const router=new VueRouter({
  routes: Routes,
  mode:'history'
})
  


Vue.component('form-helper',FormHelper)
Vue.component('add-blog',addBlog)
Vue.component('show-blog',showBlog)
Vue.component('list-blog',listBlog)
Vue.component('app-header',Header)

Vue.directive('rainbow',{
  bind(el,binding,vnode){
    el.style.color="#" + Math.random().toString().slice(2,8)

  }
}),
Vue.directive('theme', {
  bind(el, binding, vnode){
      if (binding.value == 'wide'){
          el.style.maxWidth = "1260px";
      } else if (binding.value = 'narrow'){
          el.style.maxWidth = "560px";
      }
      if(binding.arg == 'column'){
          el.style.background = '#ddd';
          el.style.padding = '20px';
      }
  }
});
// Filters
Vue.filter('to-uppercase', function(value){
  return value.toUpperCase();
});
Vue.filter('snippet',function(value){
  return value.slice(0,90) + ".." ;
})





new Vue({
  router:router,
  el: '#app',
  render: h => h(App),
  router:router
})
