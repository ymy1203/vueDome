<template>
<div>
  <h1>哈哈哈</h1>
  <form-item v-for="(item,index) in arr" :item="item" :key="index"></form-item>
</div>
</template>
<script>
import formItem from '../components/formItem'
export default{
  name: 'apge',
  components:{
    formItem
  },
  data(){
    return{
      obj:{
        name:"",
        age:0,
        weight:0,
      },
      arr:[
        {lableText:"姓名",type:"showText",text:""},
        {lableText:"年龄",type:"input",pdata:"",inputblur:()=>{console.log(123)}},
        {lableText:"年龄2",type:"input",pdata:""},
        {lableText:"体重",type:"showText",text:""}
      ]
    }
  },
  created(){
    this.getPageData()
  },
  methods:{
    async getPageData(){
      // var result = await getData({num:123})
      // 假设请求到的值
      var result = {
        data:{
          name:"二狗",
          age:18,
          weight:180,
        }
      }
      this.arr.forEach(item => {
        switch(item.lableText){
          case "姓名":
            item.text = result.data.name
            break
          case "年龄":
            item.pdata = result.data.age
            break
          case "年龄2":
            item.inputInput = this.getPhone  // 注意这里，methods里的方法不要调用，去等组件里的 inputInput 这个方法调用
            break
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