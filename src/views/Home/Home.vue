<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>购物街</template>
    </nav-bar>
    <tab-control
        v-show="isShow"
        class="tab-control"
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabControl1"
      />
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="conentScroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <home-swiper :banners="banners" @swiperLoadImage="swiperLoadImage"/>
      <recommend-view :recommends="recommends" />
      <feature-view />
      <tab-control
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabControl2"
      />
      <goods-list :goods="showGoods" />
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop" />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";

import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";

import { getHomeMultidata, getHomeGoods } from "network/home";
import { debounce } from "common/utils.js";
import { backTopMixin } from "common/mixin"

export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      tabOffsetTop: 0,
      isShow: false
    };
  },
  components: {
    NavBar,
    TabControl,
    HomeSwiper,
    RecommendView,
    FeatureView,
    GoodsList,
    Scroll,
  },
  mixins: [backTopMixin],
  created() {
    //1、请求多个数据
    this.getHomeMultidata();
    //2、请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {
    const refresh = debounce(
      this.$refs.scroll && this.$refs.scroll.refresh,
      200
    );
    this.$bus.$on("itemImageLoad", () => {
      // this.$refs.scroll && this.$refs.scroll.refresh();
      refresh();
    });
    // this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop;
  },
  methods: {
    // 事件监听方法
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index
    },
    conentScroll(position) {
      // 判断backTop是否显示
      this.isShowBackTop = position.y < -1000 ? true : false;
      // 判断tabControl是否吸顶
      this.isShow = position.y < -this.tabOffsetTop
    },
    loadMore() {
      this.getHomeGoods(this.currentType);
    },
    swiperLoadImage() {
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
    },
    // 网络请求方法
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page++;
        this.$refs.scroll.finishPullUp();
      });
    },
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
    // pop1() {
    // 	return this.goods.pop.list
    // }
  },
  watch: {
    // pop1() {
    // 	this.$nextTick(function () {
    // 	 this.$refs.scroll.scroll.refresh();
    // 	})
    // }
  },
};
</script>

<style scoped>
#home {
  /* padding-top: 44px; */
  height: 100vh;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  /* position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9; */
}

.tab-control {
  position: relative;
  /* top: 44px; */
  z-index: 8;
  background-color: #fff;
}

.content {
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  height: calc(100% - 93px);
  overflow: hidden;
}

</style>
