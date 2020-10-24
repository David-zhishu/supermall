<template>
 <div class="shop-item">
    <div class="item-selector">
      <check-button :is-checked="product.checked" @click.native="checkClick"/>
    </div>
    <div class="item-img">
      <img :src="product.image" alt="">
    </div>
    <div class="item-info">
      <div class="item-title">{{product.title}}</div>
      <div class="item-desc">{{product.desc}}</div>
      <div class="info-bottom">
        <div class="item-price">单价：{{product.price}}</div>
        <div class="item-count">数量：<button class="plus" @click="plus">+</button>{{product.count}}<button class="min" @click="min"><span>-</span></button></div>
      </div>
    </div>
 </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton"

export default {
 data() {
  return {

  }
 },
 props: {
   product:{
     type: Object,
     default() {
       return {}
     }
   }
 },
 components: {
   CheckButton
 },
 methods: {
   checkClick() {
     this.product.checked = !this.product.checked
   },
   plus() {
     this.product.count++
   },
   min() {
     if(this.product.count==1) {
       this.$toast.show('不能再减了',1500)
     }else {
     this.product.count--
     }
   }
 }
}
</script>

<style scoped>
.shop-item {
  width: 100%;
  display: flex;
  font-size: 0;
  padding: 5px;
  border-bottom: 1px solid #ccc;
}

.item-selector {
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.item-desc {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.item-title {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}

.item-img {
  padding: 5px;
}

.item-img img {
  width: 80px;
  height: 100px;
  display: block;
  border-radius: 5px;
}

.item-info {
  font-size: 17px;
  color: #333;
  padding: 5px 10px;
  position: relative;
  overflow: hidden;
}

.item-info .item-desc {
  font-size: 14px;
  color: #666;
  margin-top: 4px;
}

.info-bottom {
  font-size: 14px;
  margin-top: 10px;
  position: absolute;
  bottom: 6px;
  left: 10px;
  right: 10px;
}

.item-count {
  display: flex;
}

.item-count button {
  height: 16px;
  width: 16px;
  margin: 0 2px;
  border: none;
  border-radius: 2px;
  outline: none;
}

.item-count button span {
  position: relative;
  top: 0;
}

</style>
