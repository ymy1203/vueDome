<template>
<div id="formItem">
  <div class="from-item">
    <span class="lable">{{item.lableText}}:</span>
    <input 
      v-if="item.type === 'input'" 
      type="text" 
      v-model="vInput" 
      @blur="onBlur()"
    >
    <div v-if="item.type === 'showText'">{{item.text}}</div>
  </div>
  
</div>
</template>
<script>
export default{
  props:{
    item:Object,
    pdata:String
  },
  data(){
    return{
      vInput:""
    }
  },
  updated(){
    this.$parent[this.pdata] = this.vInput;
  },
  created(){
    // this.vInput = this.item.pdata
  },
  methods:{
    clear(){
      this.vInput = ''
    },
    onBlur(){
      this.$emit("onBlur",this.vInput)
    },
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