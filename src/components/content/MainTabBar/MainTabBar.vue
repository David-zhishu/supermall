<template>
    <tab-bar>
      <tab-bar-item path="/Home" activeColor="pink"><div class="iconfont icon-shouye"><div>首页</div></div></tab-bar-item>
      <tab-bar-item path="/Categories"><div class="iconfont icon-leimupinleifenleileibie"><div>分类</div></div></tab-bar-item>
      <tab-bar-item path="/Cart"><div class="iconfont icon-gouwuche"><div>购物车</div></div></tab-bar-item>
      <tab-bar-item path="/Profile"><div class="iconfont icon-wode"><div>我的</div></div></tab-bar-item>
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
