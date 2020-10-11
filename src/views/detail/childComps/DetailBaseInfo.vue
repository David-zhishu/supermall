<template>
  <div id="base_info" v-if="Object.keys(goods).length !== 0">
    <div class="goods_info_desc">
      <div style="float: left" class="desc_line">
        <i class="desc_dot"></i>
      </div>
      <div class="desc_text">
        {{ goods.title }}
      </div>
      <div style="float: right" class="desc_line">
        <i style="right: 0px" class="desc_dot"></i>
      </div>
    </div>
    <div class="info-price">
      <span class="n-price">{{goods.newPrice}}</span>
      <span class="o-price">{{goods.oldPrice}}</span>
      <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
    </div>
    <div class="info-other">
      <span>{{ goods.columns[0] }}</span>
      <span>{{ goods.columns[1] }}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="info-service">
      <span class="info-service-item"  v-for="(item, index) in goods.services.length-1" :key="index">
        <img         
          :src="goods.services[index].icon"
          alt=""          
          @load="loadImg"
        />
        <span>{{goods.services[index].name}}</span>
      </span>

    </div>
  </div>
</template>
<script>
export default {
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    loadImg() {
      this.$emit("loadImgEvent");
    },
  }
};
</script>
<style scoped>
#base_info {
  margin-top: 15px;
  padding: 0 8px;
  color: #999;
  border-bottom: 5px solid #f2f5f8;
}
.goods_info_desc {
  font-size: 14px;
  padding: 0.42rem 0.34rem;
  color: #222;
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
  font-size: 15px;
  font-weight: 600;
  padding: 0.85rem 0;
  color: gray;
}

.info-price {
  margin-top: 10px;
}

.info-price .n-price {
  font-size: 24px;
  color: var(--color-high-text);
}

.info-price .o-price {
  font-size: 13px;
  margin-left: 5px;
  text-decoration: line-through;
}

.info-price .discount {
  font-size: 12px;
  padding: 2px 5px;
  color: #fff;
  background-color: var(--color-high-text);
  border-radius: 8px;
  margin-left: 5px;
  position: relative;
  top: -8px;
}

.info-other {
  margin-top: 15px;
  line-height: 30px;
  display: flex;
  font-size: 13px;
  border-bottom: 1px solid rgba(100,100,100,.1);
  justify-content: space-between;
}

.info-service {
  display: flex;
  justify-content: space-between;
  line-height: 60px;
}

.info-service-item img {
  width: 14px;
  height: 14px;
  position: relative;
  top: 2px;
}

.info-service-item span {
  font-size: 12px;
  color: #333;
}
</style>
