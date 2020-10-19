<template>
  <div class="comment-info">
    <div class="info-header">
      <div class="head-title">用户评价</div>
      <div class="header-more">
        更多
        <i class="arrow-right"></i>
      </div>
    </div>
    <div v-if="Object.keys(commentInfo).length !== 0">
      <div class="info-user">
        <img :src="commentInfo.user.avatar" alt="" />
        <span>{{ commentInfo.user.uname }}</span>
      </div>
      <div class="info-detail">
        <p>{{ commentInfo.content }}</p>
        <div class="info-other">
          <span>{{ commentInfo.created | dateFilter }} </span>
          <span>{{ commentInfo.style }}</span>
        </div>
        <div class="info-imgs">
          <img
            :src="item"
            v-for="(item, index) in commentInfo.images"
            :key="index"
            alt=""
          />
        </div>
      </div>
    </div>
    <div v-else class="else">此商品暂无评论</div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  components: {},
  filters: {
    dateFilter(date) {
      let newDate = new Date(date * 1000);
      return (
        newDate.getFullYear() +
        "-" +
        (newDate.getMonth() + 1) +
        "-" +
        newDate.getDay()
      );
    },
  },
};
</script>

<style scoped>
.comment-info {
  padding: 8px;
  border-bottom: 5px solid rgba(128, 128, 128, 0.2);
  margin-bottom: 10px;
}

.info-header {
  height: 52px;
  display: flex;
  justify-content: space-between;
  line-height: 52px;
  font-size: 14px;
  border-bottom: 3px solid rgba(128, 128, 128, 0.2);
}

.header-more {
  position: relative;
  left: 0;
  padding-right: 30px;
}

.arrow-right {
  position: absolute;
  top: 12px;
  right: 0;
  width: 28px;
  height: 28px;
  background: url("~assets/img/detail/detail_bottom.png") no-repeat 4px -88px/92%;
}

.info-user img {
  width: 40px;
  height: 40px;
  margin: 10px 6px;
  vertical-align: middle;
  border-radius: 50%;
}

.info-user span {
  font-size: 14px;
}

.info-other {
  margin: 4px 0;
}

.info-other span {
  font-size: 14px;
  color: #999;
}

.info-imgs img {
  width: 80px;
  height: 80px;
  margin: 4px 4px 4px 0;
}

.else {
  font-size: 14px;
  line-height: 36px;
}
</style>
