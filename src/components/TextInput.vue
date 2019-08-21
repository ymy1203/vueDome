<template>
  <div ref="textInput" class="text-input">
    <span v-if="label" class="label"><span v-if="required" class="require">*</span>{{label}}</span>
    <input :class="{'input': true, 'disabled': disabled}" :style="{'text-align' : textAlign ? textAlign : 'right', 'padding-right': clearBtnShow ? '28px' : '10px' }"
     :type="type" :value="value"  :disabled="disabled" v-bind="$attrs" v-on="inputListeners">
    <span class="clear" v-if="clearBtn" v-show="clearBtnShow" :style="{top:clearTop}" @click="clear"></span>
  </div>
</template>
<script>
  export default {
    props: {
      value: {
        type: String,
        default: '',
      },
      type: {
        type: String,
        default: 'text',
      },
      disabled: {
        type: Boolean,
        default: false,
      },
      required: {
        type: Boolean,
        default: false,
      },
      hasBorder: {
        type: Boolean,
        default:false,
      },
      label: {
        type:String,
        default: '',
      },
      textAlign: {
        type: String,
        default: 'right',
      },
      clearBtn: {
        type: Boolean,
        default: true
      },
    },
    data(){
      return {
        clearBtnShow: false,
        clearTop: 0,
      }
    },
    mounted(){
      this.clearBtnShow = !!this.value
      console.log(this.$refs.textInput.offsetHeight)
      this.clearTop = Math.ceil((this.$refs.textInput.offsetHeight-18)/2) + 'px'
    },
    methods: {
      clear(){
        this.$emit('input', '')
        this.clearBtnShow = false
      }
    },
    computed:{
      inputListeners(){
        return Object.assign({}, this.$listeners, {
          input: (event) => {
            this.clearBtnShow = !!event.target.value
            this.$emit("input", event.target.value)
          }
        })
      }
    }
  }
</script>
<style scoped>
  .text-input{
    display: flex;
    position: relative;
    align-items: center;
    font-size:.14rem;
    padding: 0 .1rem;
  }
  .label{
    word-break:break-all;
  }
  .input {
    height: .3rem;
    border: 1px solid #DDDFE6;
    background-color: white;
    border-radius: 4px;
    padding-left: .1rem;
    flex:1;
    margin-left:.1rem;
  }
  .input::-webkit-input-placeholder{
     color: #C1C4CB;
     font-style: normal;
  }
  .disabled{
    background-color: #F5F7FA;
    border-color: #E5E7ED;
    color: #999999;
  }
  .require{
    color:red;
    padding:0 .03rem;
  }
  .clear{
    position:absolute;
    right: .16rem;
    top: .08rem;
    background-image:url(data:image/png;base64,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);
    height:.18rem;
    width:.18rem;
    background-size:.18rem .18rem;
  }
</style>
