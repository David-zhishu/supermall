<template>
 <div class="toast" v-show="isShow">
   <div>{{message}}</div>
 </div>
</template>

<script>
export default {
 data() {
  return {
     message: "",
     isShow: false
  }
 },
 components: {

 },
 props: {
  //  message: {
  //    type: String,
  //    default: '213213'
  //  },
  //  show: {
  //    type: Boolean,
  //    default: false
  //  }
 },
 methods: {
   show(message1,duration) {
     this.isShow = true
     this.message = message1
     setTimeout(() => {
       this.isShow = false
       this.message = ''
     },duration)
   }
 }
}
</script>

<style scoped>
.toast {
  padding: 16px 20px;
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 999;
  transform: translate(-50%,-50%);
  border-radius: 4px;
  background-color: rgba(0,0,0,.7);
  color: #eee;
  text-align: center;
}

</style>
