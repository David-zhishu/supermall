<template>
    <div class="tab-bar-item" :style="activeStyle" @click="itemClick">
        <slot>  </slot>    
    </div>
</template>

<script>
export default {
    name: 'TabBarItem',
    props: {
        path: String,
        activeColor: {
            type: String,
            default: "pink"
        }
    },
    data() {
        return {
            // isActive:false
        }
    },
    computed: {
        isActive() {
            // return this.$route.path.indexOf(this.path) !== -1
          return this.$route.path == this.path
        },
        activeStyle() {
            return this.isActive ? {color:this.activeColor} : {}
        }
    },
    methods: {
        itemClick() {
            this.$router.replace(this.path)
        }
    },
    components: {

    }
}
</script>

<style scoped>
@import "../../../assets/fonts/iconfont.css";
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}

.col {
    color:pink;
}

.iconfont {
    margin-top: 8px;
}

.iconfont div {
    font-size: 14px;
}
</style>
