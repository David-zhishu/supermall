<template>
  <nav-bar class="detail-nav">
    <div slot="left" class="back" @click="backClick">
      <img src="~assets/img/common/back.svg" alt="">
    </div>
    <div slot="center" class="title">
      <div v-for="(item,index) in titles" :key="index" class="title-item" :class="{active: index === currentIndex}" @click="titleClick(index)">{{item}}</div>
    </div>
  </nav-bar>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  data() {
    return {
      titles: ['商品','参数','评论','推荐'],
      currentIndex: 0
    }
  },
  components: {
    NavBar,
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index
    },
    backClick() {
      this.$router.back()
    }
  }
};
</script>

<style scoped>
.detail-nav {
  background-color: #fff;
  /* position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9; */
}

.title {
  display: flex;
}

.title-item {
  flex: 1;
  font-size: 14px;
}

.active {
  color: var(--color-tint);
}

.back img {
  margin-top: 12px;
}
</style>
