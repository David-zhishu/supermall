<template>
  <div id="detail_params" v-if="Object.keys(paramInfo).length !== 0">
    <table class="params_rule">
      <tbody>
        <tr
          v-for="(item, index) in paramInfo.sizes[0]"
          :key="index"
          :v-if="item[1] !== ''"
        >
          <th>{{ item[0] }}</th>
          <td v-for="(td_item, td_index) in item.length - 1" :key="td_index">
            {{ item[td_item] }}
          </td>
        </tr>
      </tbody>
    </table>
    <table class="params_set">
      <tbody>
        <tr v-for="(item, index) in paramInfo.infos" :key="index">
          <th>{{ item.key }}</th>
          <td>{{ item.value }}</td>
        </tr>
      </tbody>
    </table>
    <div class="info_img" v-if="paramInfo.image.length !== 0">
      <img :src="paramInfo.image" alt="" />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    paramInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>
<style>
#detail_params {
  font-size: 12px;
  padding: 6px;
  border-bottom: 5px solid rgba(128, 128, 128, 0.2);
}

.params_rule,
.params_set {
  border-bottom: 2px solid rgba(128, 128, 128, 0.5);
  border-collapse: collapse; /* 可以合并邻近的边框，且可以让tr显示出边框 */
  margin: 0 auto;
  margin-bottom: 7px;
  width: 360px;
}
.params_rule tr,
.params_set tr {
  border-bottom: 1px solid rgba(128, 128, 128, 0.5);
}

.params_rule th {
  text-align: left;
  padding-right: 16px;
  white-space: nowrap;
}
.params_rule td {
  padding: 8px;
}

.params_set th {
  text-align: left;
  padding: 8px 56px 8px 0;
  white-space: nowrap;
}
.params_set td {
  color: var(--color-high-text);
}

.info_img img {
  width: 100%;
}
</style>
