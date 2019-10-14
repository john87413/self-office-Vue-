<template>
  <div class="circle-container d-flex jc-center mx-5">
    <!-- 容器 -->
    <div class="circle-content d-flex ai-center">
      <!-- 左邊 背後藍色圓圈 -->
      <div class="circle-item-left bg-primary"></div>
      <!-- 右邊白色圓圈 -->
      <div class="circle-item-right bg-white d-flex flex-column jc-center ai-center">
        <p class="title m-4 text-primary" style="font-size: 7rem">{{content.count}}</p>
        <p class="text text-dark-grey fs-xl text-center" v-html="content.description"></p>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: ["content"],
  data() {
    return {};
  }
};
</script>

<style scoped  lang="scss">
// 容器
.circle-content {
  position: relative;
  width: 27rem;
  height: 27rem;
  // 右邊白色圓圈
  .circle-item-right {
    z-index: 2 !important;
    border-radius: 50%;
    box-shadow: 0.7094rem 1.3922rem 1.62rem 0.0675rem rgba(14, 62, 129, 0.29);
    width: 80%;
    height: 80%;
  }
  // 左邊藍色圓圈
  .circle-item-left {
    z-index: 1 !important;
    position: absolute;
    border-radius: 50%;
    width: 70%;
    height: 70%;
    top: 8.5%;
    left: -22%;
    z-index: -1;

    // 左邊藍色圓圈底部白色裝飾
    &::before {
      content: "";
      position: absolute;
      left: -8%;
      bottom: -21%;
      width: 79%;
      height: 82.5%;
      border-radius: 50%;
      background-color: rgba(255, 255, 255, 0.1);
      -webkit-transition: all 0.25s;
      -o-transition: all 0.25s;
      transition: all 0.25s;
    }
    // 左邊藍色圓圈底部白色裝飾
    &::after {
      content: "";
      position: absolute;
      left: 10%;
      bottom: -16%;
      width: 79%;
      height: 79%;
      border-radius: 50%;
      background-color: rgba(255, 255, 255, 0.15);
      -webkit-transition: all 0.25s;
      -o-transition: all 0.25s;
      transition: all 0.25s;
    }
  }
  // 容器右邊藍色圓圈裝飾
  &::after {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    width: 3.5rem;
    height: 3.5rem;
    background-color: #2c7ae7;
    border-radius: 50%;
    background: linear-gradient(to right, #2876e2 0, #3f8efc 100%);
  }
  // 容器右邊藍色圓圈裝飾
  &::before {
    content: "";
    position: absolute;
    right: 0;
    top: 5.6rem;
    width: 2.5rem;
    height: 2.5rem;
    background-color: #2c7ae7;
    border-radius: 50%;
    background: linear-gradient(to right, #2876e2 0, #3f8efc 100%);
  }
}

@media all and (max-width: 1080px) {
  // 容器
  .circle-container {
    margin-right: 0;
    margin-left: 5rem;
  }
}
@media all and (max-width: 880px) {
  // 容器
  .circle-content {
    width: 22rem;
    height: 22rem;
  }
}
@media all and (max-width: 395px) {
  // 容器
  .circle-content {
    width: 20rem;
    height: 20rem;
    .circle-item-right {
      .title {
        font-size: 5rem !important;
      }
      .text {
        font-size: 1.3rem !important;
      }
    }
  }
}
@media all and (max-width: 340px) {
  // 容器
  .circle-content {
    width: 18rem;
    height: 18rem;
  }
}
</style>