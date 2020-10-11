<template>
    <tab-bar>
      <tab-bar-item path="/home" activeColor="pink"><div class="iconfont icon-shouye"><div>首页</div></div></tab-bar-item>
      <tab-bar-item path="/categories"><div class="iconfont icon-leimupinleifenleileibie"><div>分类</div></div></tab-bar-item>
      <tab-bar-item path="/cart"><div class="iconfont icon-gouwuche"><div>购物车</div></div></tab-bar-item>
      <tab-bar-item path="/profile"><div class="iconfont icon-wode"><div>我的</div></div></tab-bar-item>
    </tab-bar>
</template>

<script>
  import TabBar from '@/components/common/tabbar/TabBar'
  import TabBarItem from '@/components/common/tabbar/TabBarItem'
  export default {
    data() {
      return {

      }
    },
    components: {
      TabBar,
      TabBarItem,
      }
    }
</script>

<style scoped lang="scss">

</style>
