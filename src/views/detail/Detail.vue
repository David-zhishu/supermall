<template>
  <div id="detail">
    <detail-nav-bar />
    <scroll class="content" ref="DetailScroll" :pull-up-load="true">
      <detail-swiper :top-images="topImages" @swiperLoadImage="swiperLoadImage"/>
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detail-info="detailInfo" @loadImgEvent="loadImgEvent"/>
      <detail-params :param-info="paramInfo"/>
    </scroll>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import Scroll from "components/common/scroll/Scroll";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParams from "./childComps/DetailParams"

import {getDetail,Goods,Shop,GoodsParam} from "network/detail"

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParams
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {}
    };
  },
  created() {
    this.iid = this.$route.params.iid;
    getDetail(this.iid).then(res => {
      console.log(res);
      const data = res.result
      this.topImages = data.itemInfo.topImages
      this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
      this.shop = new Shop(data.shopInfo)
      this.detailInfo = data.detailInfo
      this.paramInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule)
      console.log(this.paramInfo);
    })
  },
  methods: {
    swiperLoadImage() {
      this.$refs.DetailScroll && this.$refs.DetailScroll.refresh()
    },
    loadImgEvent() {
      this.$refs.DetailScroll && this.$refs.DetailScroll.refresh()
    }
  }
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
  height: calc(100% - 44px);
  overflow: hidden;
}
</style>
