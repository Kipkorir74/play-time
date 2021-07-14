<template>
<div v-theme:column="'narrow'" id="show-blogs">
    <h1>All blog articles</h1>
    <input type="text" v-model="search" placeholder="search blogs"/>
        <div v-for="blog in filteredBlog" :key="blog" class="single-blog">
           <router-link v-bind:to="'/blog/' + blog.id"> <h1 >{{ blog.title }}</h1></router-link>
            <article>{{blog.content}}</article>

        </div>

</div>
</template>



<script>
import searchMixins from './mixins/searchMixins'


export default {
  components:{
 
},

  data () {
    return {
        blogs:[],
        search:''
     
    }
  },
  methods:{

  },
  created(){
      this.$http.get("https://vue-project-cba67-default-rtdb.firebaseio.com/posts.json").then(function(data){
          return data.json();
         
      }).then(function(data){
          var blogsArray=[];
          for(let key in data){
            data[key].id=key;
            blogsArray.push(data[key]);
          }
          this.blogs=blogsArray;
      })

      
  },
  computed:{
      
  },
  mixins:[searchMixins]
  
  
}
</script>

<style scoped>
#show-blogs{
    max-width:800px;
    margin:0 auto;
}
.single-blog{
    padding:20px;
    margin:20px 0;
    box-sizing:border-box;
    background:#eee;
}
</style>
