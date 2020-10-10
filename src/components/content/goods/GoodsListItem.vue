<template>
  <div class="goods-item">
    <img :src="goodsItem.show.img" alt="" @load="imgLoad">
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">￥{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  data() {
    return {};
  },
  components: {},
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    imgLoad() {
      this.$bus.$emit('itemImageLoad')
    }
  }
};
</script>

<style scoped>
.goods-item {
  padding-bottom: 20px;
  /* position: relative; */
  width: 48%;
}

.goods-item img {
  width: 100%;
  border-radius: 5px;
}

.goods-info {
  text-align: center;
}

.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-indent: 4px;
}

.goods-info .collect {
  position: relative;
  left: 20px;
  margin-left: 10px;
  margin-right: 12px;
}

.goods-info .collect::before {
  content: '';
  position: absolute;
  left: -15px;
  top: 1px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>
