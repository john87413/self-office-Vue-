<template>
  <div class="auto-container bg-light-grey-1 py-5">
    <!-- 容器 水平排列 並分開 -->
    <div class="auto-content d-flex jc-around ai-center">
      <p class="title fs-xxl m-3">自傳與簡歷</p>
      <button class="bt-1 bt-back-1 bt-nav-1 ripple fs-xl py-2 fw-bold">查看/下載(PDF)</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.auto-content {
  // 容器內按鈕
  button {
    width: 15rem;
    height: auto;
  }
}
@media all and (max-width: 880px) {
  // 容器改垂直排列
  .auto-content {
    flex-direction: column;
  }
}
</style>