<template>
  <div class="total-sales">
    <common-card title="累计销售额" :value="'¥ 76,209,575'">
      <template>
        <div class="compare-wrapper">
          <div class="compare">
            <span>日同比</span>
            <span class="emphasis">1</span>
            <div class="increase" />
          </div>
          <div class="compare">
            <span>月同比</span>
            <span class="emphasis">2</span>
            <div class="decrease" />
          </div>
        </div>
      </template>
      <template v-slot:footer>
        <span>昨日销售额 </span>
        <span class="emphasis">800</span>
      </template>
    </common-card>
  </div>
</template>

<script>
import commonCardMixins from "@/mixins/commonCardMixins.js";
export default {
  mixins: [commonCardMixins],
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.compare-wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .compare {
    display: flex;
    align-items: center;
    font-size: 12px;
    margin-top: 3px;
    color: #666;
  }
}
</style>