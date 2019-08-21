<template>
<div>
  <h1>哈哈哈</h1>
  <form-item :ref="item.pdata" v-for="(item,index) in arr" :item="item" :pdata="item.pdata" :key="index" @onBlur="fromItemBlur"></form-item>
  <!-- <TextInput :value="textValue" label="二狗子" @input="textInput"></TextInput> -->
</div>
</template>
<script>
import formItem from '../components/formItem'
// import TextInput from '../components/TextInput'
export default{
  name: 'apge',
  components:{
    formItem,
    // TextInput
  },
  data(){
    return{
      textValue:"",
      obj:{
        name:"",
        age:0,
        weight:0,
      },
      arr:[
        {lableText:"姓名",type:"showText",text:""},
        {lableText:"年龄",type:"input",pdata:"age"},
        {lableText:"年龄2",type:"input",pdata:""},
        {lableText:"体重",type:"showText",text:""}
      ],
      age:'18'
    }
  },
  created(){
    window.x = this;
    this.getPageData()
  },
  mounted(){
    this.textValue = "18363970911"
  },
  methods:{
    textInput(val){
      this.textValue = val
      console.log("val===",val)
    },
    fromItemBlur(data){
      console.log(data)
      console.log(this.age)
      console.log(this.$refs.age[0].clear())
    },
    async getPageData(){
      // var result = await getData({num:123})
      // 假设请求到的值
      var result = {
        data:{
          name:"二狗",
          age:18,
          weight:"180",
        }
      }
      this.arr.forEach(item => {
        switch(item.lableText){
          case "姓名":
            item.text = result.data.name
            break
          // case "年龄":
          // item.pdata = result.data.age
          //   break
          case "体重":
            item.text = result.data.weight
            break
          // ...
        }
      });
    },
    getPhone(){
      console.log(789)
    }
  }
}
</script>