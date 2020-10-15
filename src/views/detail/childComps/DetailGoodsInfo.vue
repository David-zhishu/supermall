<template>
  <div id="detail_goods_info" v-if="Object.keys(detailInfo).length !== 0">
    <div class="goods_info_desc">
      <div style="float: left;" class="desc_line">
        <i class="desc_dot"></i>
      </div>
      <div class="desc_text">
        {{ detailInfo.desc }}
      </div>
      <div style="float: right;" class="desc_line">
        <i style="right: 0px;" class="desc_dot"></i>
      </div>
    </div>
    <div v-for="(item,index) in detailInfo.detailImage" :key="index">
      <div class="goods_info_key">
        {{ item.key }}
      </div>
      <div class="goods_info_imgs">
        <img
          :src="item1"
          alt=""
          v-for="(item1, index1) in item.list"
          :key="index1"
          @load="loadImg"
        />
      </div>
    </div>

  </div>
</template>
<script>
export default {
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    loadImg() {
      this.$emit("loadImgEvent");
    }
  }
};
</script>
<style scoped>
#detail_goods_info {
  font-size: 0.68rem;
}
.goods_info_desc {
  font-size: 0.6rem;
  padding: 0.42rem 0.34rem;
}
.desc_line {
  width: 3.5rem;
  height: 0.04rem;
  background-color: gray;
  position: relative;
}

.desc_dot {
  position: absolute;
  top: -0.1rem;
  display: inline-block;
  width: 0.21rem;
  height: 0.21rem;
  background-color: black;
  border-radius: 50%;
}

.desc_text {
  font-size: 0.75rem;
  text-indent: 2em;
  padding: 0.85rem 0;
  color: gray;
}

.goods_info_key {
  padding: 0.42rem 0.34rem;
}
.goods_info_imgs img {
  width: 100%;
}
</style>
