<template>
  <div class="educate-bar">
    <!-- 容器 -->
    <div class="bar-container d-flex jc-center ai-center">
      <!-- menu 清單 -->
      <ul class="m-0 p-0 mt-5">
        <li
          class="bar-item mx-3 fs-lg text-light-grey"
          :class="{'bar-item-active': active === index}"
          @click="changeCard(index)"
          v-for="(item, index) in content"
          :key="index"
        >{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  props: ["content"],
  data() {
    return {
      active: 0 //被點擊的menu
    };
  },
  methods: {
    //   透過父組件調用到 display 組件的changeSlide 方法
      changeCard(index){
          this.active = index;
          this.$emit('parentChangeSlide',index); //這個名稱是在父組件的
      }
  },
};
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/variables.scss";
// 容器
.bar-container {
  // menu
  ul {
    // menu item
    .bar-item {
      &:hover {
        color: map-get($colors, "primary");
        transition: all 0.3s;
      }
    }
  }
}
// 被點擊的menu樣式
.bar-item-active {
  color: map-get($colors, "primary");
  transition: all 0.3s;
}
</style>