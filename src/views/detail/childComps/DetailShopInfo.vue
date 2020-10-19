<template>
  <div id="shop_info" v-if="Object.keys(shop).length != 0">
    <div class="shop_name">
      <img :src="shop.logo" alt="" />
      <span>{{ shop.name }}</span>
    </div>

    <div class="score_info">
      <div class="score_left">
        <div class="score_sell">
          <div>{{ sellValue }}万</div>
          <div style="font-size: 12px;">总销量</div>
        </div>
        <div class="score_item">
          <div>{{ shop.goods }}</div>
          <div style="font-size: 12px;">全部宝贝</div>
        </div>
      </div>
      <div class="score_right">
        <table>
          <tr v-for="(item, index) in shop.score" :key="index">
            <td>{{ item.name }}</td>
            <td :style="{ color: item.isBetter ? 'red' : 'green' }">
              {{ item.score }}
            </td>
            <td
              style="color: white;"
              :style="{ backgroundColor: item.isBetter ? 'red' : 'green' }"
            >
              {{ item.isBetter ? "高" : "低" }}
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="come_shop">进店逛逛</div>
  </div>
</template>

<script>
export default {
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed: {
    sellValue() {
      /* parseFloat(this.shop.sells / 10000).toFixed(1) */
      return Math.round((this.shop.sells / 10000) * 10) / 10;
    },
    betterScore(isBetter) {
      if (isBetter) {
        return "{ backgroundColor: red, color: white}";
      } else {
        return "{ backgroundColor: green, color: white}";
      }
    }
  }
};
</script>

<style scoped>
#shop_info {
  padding: 10px 6px;
  border-bottom: 2px solid rgba(128, 128, 128, 0.2);
  font-size: 12px;
}
.shop_name img {
  width: 26px;
  height: 26px;
  border: 1px solid rgba(128, 128, 128, 0.5);
  border-radius: 13px;
}
.shop_name span {
  margin-left: 6px;
  position: relative;
  top: -10px;
  font-size: 14px;
}

/**
  * 商店信息左右两侧的样式，整个商店信息是弹性盒子，
  * 可左边用弹性盒子做，右边用table做
  */
.score_info {
  padding: 0px 8px;
  display: flex;
}
.score_left,
.score_right {
  flex: 1;
}
/* 给score_left也做弹性盒子，且其子元素以侧轴中心对齐 */
.score_left {
  display: flex;
  align-items: center;
  font-size: 12px;
}
.score_left > div {
  flex: 1;
}
.score_sell,
.score_item {
  text-align: center;
  font-size: 14px;
}
.score_item {
  border-right: 1px solid gray;
}
/**
  * 右边用table做的
  */
.score_right > table {
  margin: 0 auto;
  font-size: 12px;
  border-spacing: 4px;
}
/**
  * 进店逛逛的样式
  */
.come_shop {
  width: 102px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  border-radius: 4px;
  background-color: rgba(128, 128, 128, 0.3);
  margin: 4px auto;
}
</style>
