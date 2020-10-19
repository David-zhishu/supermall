<template>
  <div id="cart">
    <nav-bar class="cart-nav">
      <template v-slot:center>购物车({{ cartLength }})</template>
    </nav-bar>
    <cart-list />
    <cart-bottom-bar />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar"
import CartList from "./childComps/CartList"
import CartBottomBar from "./childComps/CartBottomBar"

import { mapGetters } from "vuex";

export default {
  data() {
    return {
      totalAmount: 0,
    };
  },
  components: {
    NavBar,
    CartList,
    CartBottomBar
  },
  computed: {
    ...mapGetters(['cartLength'])
  },
};
</script>

<style scoped>
#cart {
  /* padding-top: 44px; */
  height: 100vh;
}
.cart-nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>
