<template>
<div id="formItem">
  <div class="from-item">
    <span class="lable">{{item.lableText}}:</span>
    <input 
      v-if="item.type === 'input'" 
      type="text" 
      v-model="item.pdata" 
      @change="inputChange(item.inputChange)"
      @blur="inputblur(item.inputblur)"
      @focus="inputfocus(item.inputfocus)"
      @input="inputInput(item.inputInput)"
    >
    <div v-if="item.type === 'showText'">{{item.text}}</div>
  </div>
  
</div>
</template>
<script>
export default{
  props:{
    item:Object
  },
  methods:{
    inputChange(cb){
      if(cb) cb()
    },
    inputblur(cb){
      if(cb) cb()
    },
    inputfocus(cb){
      if(cb) cb()
    },
    inputInput(cb){
      if(cb) cb()
    }
  }
}
</script>
<style>
#formItem{
  width: 300px;
  margin: 0 auto;
}
.from-item{
  display: flex;
}
</style>