<template>
    <div id='single-blog'>
        <h1>{{blog.title}}</h1>
        <article>{{blog.content}}</article>
    </div>
</template>

<script>
export default {
    data() {
        return{
            id:this.$route.params.id,
            blog:{}
        }
    },
    created(){
        this.$http.get('https://jsonplaceholder.typicode.com/posts/' + this.id +'.json').then(function(data){
            return data.json()
        }).then(function(data){
            this.blog=data;
        });
    }
}
</script>

<style scoped>
#single-blog{
    max-width: 960px;
    text-align: center;
}
</style>