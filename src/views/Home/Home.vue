<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>购物街</template>
    </nav-bar>
    <home-swiper :banners="banners" />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "./childComps/HomeSwiper";
import { getHomeMultidata } from "network/home";

export default {
  name: "Home",
  data() {
    return {
       banners: [],
       recommends: []
    };
  },
  components: {
    NavBar,
    HomeSwiper
  },
  created() {
    //请求多个数据
    getHomeMultidata().then((res) => {
      // console.log(res.data);
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list
    });
  },
};
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>
