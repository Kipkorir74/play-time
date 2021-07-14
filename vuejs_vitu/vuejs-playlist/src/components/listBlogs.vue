<template>
<div v-theme:column="'narrow'" id="show-blogs">
    <h1>List Blog Titles</h1>
    <input type="text" v-model="search" placeholder="search blogs"/>
        <div v-for="blog in filteredBlog" :key="blog" class="single-blog">
            <h1 v-rainbow>{{ blog.title }}</h1>
            

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
      this.$http.get("https://jsonplaceholder.typicode.com/posts").then(function(data){
          console.log(data);
         this.blogs= data.body.slice(0,10);
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
