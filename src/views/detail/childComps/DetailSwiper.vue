<template>
    <swiper class="detail-swiper">
      <swiper-item v-for="(item,index) in topImages" :key="index" class="swiper-item">
        <img :src="item" alt="" @load="imgLoad">
      </swiper-item>
    </swiper>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper'
export default {
  name: "DetailSwiper",
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    Swiper,
    SwiperItem
  },
  methods: {
    imgLoad() {
      this.$emit('swiperLoadImage') 
    }
  }
};
</script>

<style scoped>
.detail-swiper {
  /* margin-top: 44px; */
  height: 300px;
  overflow: hidden;
}
</style>
