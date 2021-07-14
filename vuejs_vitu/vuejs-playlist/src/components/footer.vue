<template>
<footer>
   <p> {{copyright}} {{ title}}</p>
</footer>
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
    copyright:"Copyright 2021 "
    }
  },
  created(){
    bus.$on("titleChanged",(data)=>{
      this.title=data
    })
  }
  
}
</script>

<style scoped>
footer{
    background:rgb(8, 10, 8);
    padding:6px
}
p{
    color:chartreuse;
    text-align: center;
}
</style>
