<template>
 <div class="check-button" :class="{check:isChecked}">
   <img src="~assets/img/cart/tick.svg" alt="">
 </div>
</template>

<script>
export default {
 data() {
  return {

  }
 },
 props: {
   isChecked: {
     type: Boolean,
     default: false
   }
 }
}
</script>

<style scoped>
.check-button {
  border-radius: 50%;
  border: 1px solid #ccc;
}

.check {
  background-color: #FF8198;
  border-color: #FF8198;
}

</style>
