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
  font-size: 12px;
}
.goods_info_desc {
  font-size: 12px;
  padding: 6px 6px;
}
.desc_line {
  width: 56px;
  height: 1px;
  background-color: gray;
  position: relative;
}

.desc_dot {
  position: absolute;
  top: -1px;
  display: inline-block;
  width: 4px;
  height: 4px;
  background-color: black;
  border-radius: 50%;
}

.desc_text {
  font-size: 12px;
  text-indent: 32px;
  padding: 14px 0;
  color: gray;
}

.goods_info_key {
  padding: 6px;
}
.goods_info_imgs img {
  width: 100%;
}
</style>
