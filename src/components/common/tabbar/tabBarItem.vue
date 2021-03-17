<template>
    <!-- 所有的time都展示一个图片，同一个文字 -->
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>  
    <div :style="activestyle"><slot name="item-text"></slot></div>    
  </div>
</template>
<script>
export default {
  name: "TabBarItem",
  props:{
     path:String,
     activeColor:{
        type:String,
        dafault:'red'
     }
  },
  data() { 
      return {
          // isActive:true
      }
  }, 
 computed:{
   isActive(){
     return this.$route.path.indexOf(this.path) !== -1
   },
   activestyle(){
     return this.isActive ? {color:this.activeColor}:{}
   }
   
 },
  methods: {
    itemClick() {
      // console.log("itemClick")
     this.$router.replace(this.path)
    }
  },
};
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
}
.tab-bar-item img {
  width: 20px;
  height: 20px;
}

 .active{
    color:red;
 }
</style>
