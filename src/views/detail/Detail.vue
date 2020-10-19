<template>
  <div id="detail">
    <detail-nav-bar @titleClick="titleClick" ref="nav"/>
    <scroll class="content" ref="scroll" :pull-up-load="true" @scroll="contentScroll">
      <detail-swiper
        :top-images="topImages"
        @swiperLoadImage="swiperLoadImage"
      />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info
        :detail-info="detailInfo"
        @loadImgEvent="loadImgEvent"
      />
      <detail-params ref="params" :param-info="paramInfo" />
      <detail-comment-info ref="comment" :comment-info="commentInfo" />
      <goods-list ref="recommend" :goods="recommends" />
    </scroll>
    <detail-bottom-bar @addToCart="addToCart" />
    <back-top @click.native="backClick" v-show="isShowBackTop" />
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import Scroll from "components/common/scroll/Scroll";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParams from "./childComps/DetailParams";
import DetailCommentInfo from "./childComps/DetailCommentInfo";
import GoodsList from "components/content/goods/GoodsList";
import DetailBottomBar from "./childComps/DetailBottomBar";

import {
  getDetail,
  Goods,
  Shop,
  GoodsParam,
  getRecommend,
} from "network/detail";
import { debounce } from "common/utils";
import { backTopMixin } from "common/mixin"
import { mapActions, mapGetters } from "vuex"

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParams,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar,
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: [],
      themeTopYs: [],
      getThemeTopY: null,
      propIndex: 0,
    };
  },
  mixins: [backTopMixin],
  created() {
    this.iid = this.$route.params.iid;
    getDetail(this.iid).then((res) => {
      // console.log(res);
      const data = res.result;
      this.topImages = data.itemInfo.topImages;
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      this.shop = new Shop(data.shopInfo);
      this.detailInfo = data.detailInfo;
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0];
      }
      // this.$nextTick(() => {
      //   this.themeTopYs = [];
      //   this.themeTopYs.push(0);
      //   this.themeTopYs.push(this.$refs.params.$el.offsetTop-44);
      //   this.themeTopYs.push(this.$refs.comment.$el.offsetTop-44);
      //   this.themeTopYs.push(this.$refs.recommend.$el.offsetTop-44);
      //   console.log(this.themeTopYs);
      // });
    });
    getRecommend().then((res) => {
      // console.log(res);
      this.recommends = res.data.list;
    });
    this.getThemeTopY = debounce(() => {
      this.themeTopYs = [];
      this.themeTopYs.push(0);
      this.themeTopYs.push(this.$refs.params.$el.offsetTop-44);
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop-44);
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop-44);
      // console.log(this.themeTopYs);
    },300)
  },
  mounted() {
    let newRefresh = debounce(
      this.$refs.scroll && this.$refs.scroll.refresh,
      200
    );
    this.$bus.$on("itemImageLoad1", () => {
      newRefresh();
    });
  },
  updated() {},
  methods: {
    ...mapActions(['addCart']),
    swiperLoadImage() {
      this.$refs.scroll && this.$refs.scroll.refresh();
    },
    loadImgEvent() {
      this.$refs.scroll && this.$refs.scroll.refresh();
      this.getThemeTopY()
    },
    titleClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 500);
    },
    contentScroll(position) {
      for(let i=0;i<=this.themeTopYs.length;i++){
        if(this.propIndex!=i && -position.y>=this.themeTopYs[i]){
          this.propIndex = i;
          this.$refs.nav.currentIndex = this.propIndex
        }
      }
      // 判断backTop是否显示
      this.isShowBackTop = position.y < -1000 ? true : false;
    },
    addToCart() {
      const product = {};
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.iid = this.iid;
      //添加到购物车
      // this.$store.dispatch('addCart',product).then(res => {
      //   console.log(res);
      // })
      this.addCart(product).then(res => {
        this.$toast.show('已添加至购物车',1500)
      })
    }
  },
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 10;
  background-color: #fff;
  height: 100vh;
}

.content {
  height: calc(100% - 44px - 49px);
  overflow: hidden;
}
</style>
