<template>
 <header>
     <h1 v-on:click="changeTitle">{{title}}</h1>
     </header>
</template>

<script>
import {bus} from '../main'
export default {
  props:{
    title:{
      type:String
    }
  },
  data () {
    return {
    title:"Vue Assassins"
    }
  },
  methods:{
    changeTitle:function(){
      // this.$emit("changeTitle", "Vue Ninjares")
      this.title="Vue Ninjares"
      bus.$emit('titleChanged','Vue Ninjares')
    }
  }
  
}
</script>

<style scoped>
header{
    background: rgb(30, 46, 30);
    padding: 10px;
}
h1{
    color:chartreuse;
    text-align: center;
}
</style>
