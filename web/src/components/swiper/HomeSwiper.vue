<template>
  <div class="home-swiper">
    <swiper class="home-swiper-container" :options="swiperOption">
      <!-- 三個滑欄 -->
      <swiper-slide
        class="swiper-slide-home d-flex ai-center"
        v-for="(item, index) in contents"
        :key="index"
      >
        <!-- 內容區 -->
        <home-slide-content v-bind:text="item"></home-slide-content>
      </swiper-slide>

      <!-- 底部三個按鈕 -->
      <div class="swiper-pagination pagination-home mb-3" slot="pagination"></div>
      <!-- 兩側側滑按鈕 現在取消掉 -->

      <!-- <div class="swiper-button-prev ml-5" slot="button-prev"></div>
      <div class="swiper-button-next mr-5" slot="button-next"></div>-->
    </swiper>
  </div>
</template>

<script>
import homeSlideContent from "./HomeSlideContent";

export default {
  props: ["contents"],
  data() {
    return {
      swiperOption: {
        spaceBetween: 0,
        pagination: {
          el: ".pagination-home",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  },
  components: {
    "home-slide-content": homeSlideContent
  }
};
</script>

<style lang="scss">
@import "../../assets/scss/variables.scss";
// 外部容器
.home-swiper-container {
  padding-top: 4.1rem !important;
  // 滑欄區
  .swiper-slide-home {
    height: 45rem !important;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    &:nth-child(1) {
      background-image: url("../../assets/images/self-bg.jpg");
    }
    &:nth-child(2) {
      background-image: url("../../assets/images/web-bg.jpg");
    }
    &:nth-child(3) {
      background-image: url("../../assets/images/app-bg.jpg");
    }
    // 滑欄上面的遮罩
    &::after {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: map-get($colors, "white-1");
    }
  }
  // 底部三個點點 容器
  .pagination-home {
    // 底部點點
    .swiper-pagination-bullet {
      width: 0.625rem;
      height: 0.625rem;
      margin: 0 0.625rem !important;
      background: #303036 !important;
      opacity: 1;
      transition: all .3s;
      &:hover {
        background: map-get($colors, "primary") !important;
      }
    }
    .swiper-pagination-bullet-active {
      width: 0.8125rem;
      height: 0.8125rem;
      background: map-get($colors, "primary") !important;
      transition: all .3s;
    }
  }
}

@media all and (max-width: 1080px) {
  .home-swiper-container {
    padding-top: 3.8rem !important;
  }
}
</style>

