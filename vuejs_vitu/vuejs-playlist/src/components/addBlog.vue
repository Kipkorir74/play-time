<template>
<div id="add-blog">
    <h2>Add New Blog Post</h2>
    <form v-if="!submitted">
        <label>Blog Title:</label>
        <input type="text" v-model.lazy='blog.title' required/>
        <label> Blog Content:</label>
        <textarea v-model.lazy="blog.content"></textarea>

         <div id='checkboxes'>
        <label>Sancho</label>
        <input type="checkbox" v-model="blog.categories" value="sancho"  />
        <label>Messi</label>
        <input type="checkbox" value="messi" v-model="blog.categories" />
        <label>Ronaldo</label>
        <input type="checkbox" value="roro" v-model="blog.categories" />
        <label>Kdbeast</label>
        <input type="checkbox" value="kdbeast" v-model="blog.categories" />
        <label>Pogboom</label>
        <input type="checkbox" value="pogboom" v-model="blog.categories" />
    </div>

    <label>Author:</label>
     <select v-model="blog.author">
            <option v-for= "author in authors" :key="author">{{author}}</option>
            
    </select>
    <button v-on:click.prevent="post">Add Blog</button>
    </form>
    <div v-if="submitted">
        Merci mosiuer for wekaring something
    </div>
   
        <div id='preview'>
        <h3> Preview Blog</h3>
        <p>Blog Title: {{blog.title}}</p>
        <p>Blog content:</p>
        <p>{{blog.content}}</p>
        <p>Blog Categories:</p>
            <ul>
                <li v-for= "category in blog.categories" :key="category">{{category}}</li>
            </ul>
        <p>Blog Authors: {{ blog.author}}</p>
    </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
    
  components:{
 
},

  data () {
    return {
        blog:{
            title:"",
            content:"",
            categories:[],
            author:""
        },
        authors:["JLingz","Cavani","Bruno"],
        submitted:false,    
    }
  },
  methods:{
      post:function(){
          this.$http.post("https://vue-project-cba67-default-rtdb.firebaseio.com/posts.json",this.blog).
          then(function(data){
              console.log(data)
              this.submitted=true
          })
    // post:function(){
    //     axios.get("https://jsonplaceholder.typicode.com/posts",{
    //         title: this.blog.title,
    //         body:this.blog.content,
    //         userId:1
    //     }).then((response)=>{
    //         console.log(response.data)    
    //     })
    //     .catch((error)=>
    //     console.log(error)
    //     )
    }
      }
  }
  
  

</script>

<style scoped>
#add-blog *{
    box-sizing: border-box;
}
#add-blog{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
    max-width: 500px;
}
h3{
    margin-top: 10px;
}
#checkboxes input{
    display:inline-block;
    margin-right:10px;
}
#checkboxes label{
    display:inline-block;
}
</style>
