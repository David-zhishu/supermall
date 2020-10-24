<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view />
    </keep-alive>        
    <main-tab-bar />
  </div>
</template>

<script>
import MainTabBar from './components/content/MainTabBar/MainTabBar'

export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>

<style>
  @import "assets/css/base.css";
  
  /* transition {
    width: 100%;
    overflow-x: hidden;
  }

  .v-enter {
    opacity: 0;
    transform: translateX(100%);
  }

  .v-leave-to {
    opacity: 0;
    transform: translateX(-100%);
    position: absolute;
  }

  .v-enter-active,
  .v-leave-active {
    transition: all .5s ease;
  } */
  
</style>
