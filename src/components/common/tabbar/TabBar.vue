<template>
    <div id="tab-bar">
      <slot></slot>
    </div>
</template>

<script>
export default {
 data() {
  return {

  }
 },
 components: {

 }
}
</script>

<style scoped>
@import "../../../assets/fonts/iconfont.css";
#tab-bar {
  display: flex;
  background-color: #f6f6f6;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -1px 1px rgba(100,100,100,.2);
}


</style>
