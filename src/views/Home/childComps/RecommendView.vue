<template>
  <div class="recommend">
    <div v-for="item in recommends" :key="item.sort" class="recmmend-item">
      <a :href="item.link">
        <img v-lazy="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReccommendView",
  data() {
    return {};
  },
  components: {},
  props: {
    recommends: {
      type: Array,
      default() {
        return []
      }
    },
  },
};
</script>

<style scoped>
.recommend {
  display: flex;
  text-align: center;
  padding: 10px 0 20px;
  border-bottom: 8px solid #eee;
}

.recmmend-item {
  flex: 1;
}

.recmmend-item img {
  width: 70px;
  height: 70px;
  margin-bottom: 5px;
}
</style>
