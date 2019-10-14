<template>
  <div class="right-intro-container d-flex mx-5">
    <!-- 最外容器 垂直排列 -->
    <div class="right-intro-content d-flex flex-column">
      <!-- 內容 容器 垂直排列 -->
      <div
        class="right-intro-content-item d-flex flex-column"
        v-for="(item, index) in intros"
        :key="index"
      >
        <p class="title text-primary fs-xxxl my-2" style="font-weight: 900;">{{item.count}}</p>
        <p class="text text-dark-grey fs-xlx fw-bold">{{item.description}}</p>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: ["intros"],
  data() {
    return {};
  }
};
</script>

<style lang="scss">
@media all and (max-width: 1080px) {
  .right-intro-content-item {
    text-align: center;
    .text{
      margin-bottom: 1rem;
      line-height: 1.8rem
    } 
  }
}
</style>