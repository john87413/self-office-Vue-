<template>
  <div class="intro d-flex jc-center ai-center fl-wrap mt-5">
    <!-- 三個方塊 -->
    <div
      class="intro-content d-flex flex-column ai-center mx-3 px-4 pt-3"
      v-for="(item, index) in content"
      :key="index"
    >
      <!-- 方塊背景 -->
      <div class="intro-bg w-100 h-100"></div>
      <!-- 方塊頂部icon -->
      <div class="intro-icon d-flex ai-center jc-center">
        <i class="iconfont fs-xxxl text-white" :class="`icon-${item.icon}`"></i>
      </div>
      <!-- 方塊下面內容區 -->
      <div class="content">
        <h4 class="intro-title text-dark-grey fs-xl fw-bold my-3 text-center">{{item.title}}</h4>
        <p class="intro-text text-light-grey fs-lgs text-center my-0" v-html="item.content"></p>
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

<style lang="scss">
@import "../../assets/scss/variables.scss";

// 三方塊樣式
.intro-content {
  overflow: hidden;
  position: relative;
  border: 0.0625rem solid map-get($colors, "light-grey-2");
  border-radius: 0.625rem;
  width: 22rem;
  height: 23rem;
  // background: #fff;
  // transition: all .3s; //手機版很卡

  .intro-bg {
    position: absolute;
    border-radius: 0.5rem;
    left: 0;
    top: 0;
    background: map-get($colors, "primary");
    opacity: 0;
    transition: all 0.3s;
  }
  // 方塊下icon樣式
  .intro-icon {
    z-index: 1;
    border-radius: 50%;
    background: linear-gradient(
      to right,
      map-get($colors, "primary") 0,
      map-get($colors, "light-blue") 100%
    );
    width: 8rem;
    height: 8rem;
  }
  .content{
    z-index: 1;
  }
  // 方塊右下角裝飾 樣式
  &::after {
    content: "";
    position: absolute;
    right: 0px;
    bottom: 0px;
    width: 0px;
    height: 0px;
    border-radius: 50%;
    background-color: map-get($colors, "white-2");
    opacity: 0;
    transition: all 0.3s;
  }
  // 方塊右下角裝飾
  &::before {
    content: "";
    position: absolute;
    right: 0px;
    bottom: 0px;
    width: 0px;
    height: 0px;
    border-radius: 50%;
    background-color: map-get($colors, "white-3");
    opacity: 0;
    transition: all 0.3s;
    z-index: 1;
  }
  // 三方塊下 觸發樣式
  &:hover {
    // background: map-get($colors, "primary");
    box-shadow: 0.3125rem 0.3125rem 0.775rem 0.2875rem
      map-get($colors, "light-black");
    // border-color: transparent;
    // transition: all .3s; //手機版很卡
    .intro-bg {
      opacity: 1;
      transition: all 0.3s;
    }
    // 方塊右下角裝飾
    &::after {
      opacity: 1;
      width: 20rem;
      height: 20rem;
      right: -11rem;
      bottom: -10rem;
      transition: all 0.3s;
    }
    // 方塊右下角裝飾
    &::before {
      opacity: 1;
      width: 22.5rem;
      height: 22.5rem;
      right: -10rem;
      bottom: -12rem;
      transition: all 0.3s;
    }

    // 三方塊下icon
    .intro-icon {
      background: map-get($colors, "white");
      transition: all 0.3s;
      i {
        color: map-get($colors, "primary");
        transition: all 0.3s;
      }
    }
    // 三方塊下內容
    .content {
      .intro-title {
        color: map-get($colors, "white");
        transition: all 0.3s;
      }
      .intro-text {
        color: map-get($colors, "white");
        transition: 0.3s;
        a {
          color: map-get($colors, "white");
          transition: all 0.3s;
        }
        strong {
          color: map-get($colors, "white");
          transition: all 0.3s;
        }
      }
    }
  }
}

@media all and (max-width: 1190px) {
  // 三方塊
  .intro-content {
    width: 19rem;
    height: 24rem;
    // 三方塊下icon
    .intro-icon {
      width: 6rem;
      height: 6rem;
    }
    // 三方塊右下角裝飾
    &:hover::before {
      right: -9rem;
      bottom: -13rem;
    }
    // 三方塊右下角裝飾
    &:hover::after {
      right: -10rem;
      bottom: -11rem;
    }
  }
}

@media all and (max-width: 1080px) {
  // 三方塊 第三個
  .intro-content:nth-child(3) {
    width: 40rem;
    height: 18rem;
    margin-top: 2vw;
  }
}
@media all and (max-width: 880px) {
  // 三方塊
  .intro-content {
    width: 40rem;
    height: 16rem;
    margin-top: 2vw;
  }
}
@media all and (max-width: 680px) {
  // 三方塊
  .intro-content {
    height: 18rem;
  }
}
</style>