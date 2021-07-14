new Vue({
    el:'#vue-app',
    data:{
        health:100,
        ended:false    
    },
    methods:{
       punch:function(){
           this.health -= 10;
           if(this.health<=0){
               this.ended=true
               alert("Howdy mate, you are a fockin champ")
           }
       },
       restart:function(){
           alert("Are you sure you want to restart the game?");
           this.health=100;
           this.ended=false
       }
       },
      
    computed:{
      compClasses:function(){
        return{
            available:this.available,
            nearby:this.nearby
        }
      } 
       }
    
});