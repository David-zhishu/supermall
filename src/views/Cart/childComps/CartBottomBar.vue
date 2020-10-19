<template>
 <div class="bottom-bar">
   <div class="check-all">
     <check-button :is-checked="isSelectAll" class="check-button"
     @click.native="checkClick"/>
     <span>全选</span>
   </div>
   <div class="price">
     合计: {{totalPrice}}元
   </div>
   <div class="calculate" @click="calcClick">
     去结算({{checkLength}})
   </div>
 </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton"

import {mapGetters, mapState} from 'vuex'

export default {
 data() {
  return {

  }
 },
 components: {
   CheckButton
 },
 computed: {
   ...mapGetters(['cartList']),
   totalPrice() {
     return this.cartList.filter(item => {
       return item.checked
     }).reduce((preValue,item) => {
       return preValue + item.price*item.count
     },0).toFixed(2)
   },
   checkLength() {
     return this.cartList.filter(item => {
       return item.checked
     }).length
   },
   isSelectAll() {
     return !(!this.cartList.length || this.cartList.find(item => !item.checked))
   }
 },
 methods: {
   checkClick() {
     if(this.isSelectAll) {
       this.cartList.forEach(item => item.checked = false)
     }else {
       this.cartList.forEach(item => item.checked = true)
     }
   },
   calcClick() {
     let flag = false;
     this.cartList.forEach(item => {
       if(item.checked == true){
         flag = true;
       }
     })
     if(this.cartList.length==0){
       this.$toast.show('先去添加商品吧~',1500)
     }else
     if(!flag) {
       this.$toast.show('请选择商品',1500)
     }
   }
 }
}
</script>

<style scoped>
.bottom-bar {
  height: 40px;
  background-color: #eee;
  position: relative;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
}

.check-all {
  display: flex;
  align-items: center;
  height: 40px;

}
.check-button {
  height: 20px;
  width: 20px;
  margin: 0 4px 0 10px;
}

.price {
  height: 40px;
  line-height: 40px;
}

.calculate {
  width: 100px;
  line-height: 40px;
  text-align: center;
  background-color: rgb(255, 0, 0);
  color: azure;
}
</style>
