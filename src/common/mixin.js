import {debounce} from "./utils"
import BackTop from "components/content/backTop/BackTop"

export const itemMixin = {
  mounted() {
    let newRefresh = debounce(this.$refs.scroll && this.$refs.scroll.refresh,200)
  }
}

export const backTopMixin = {
  data() {
    return {
      isShowBackTop: false
    }
  },
  components: {
    BackTop
  },
  methods: {
    backClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },    
  }
}