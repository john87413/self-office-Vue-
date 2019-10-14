<template>
  <div id="home-talent" class="talent">
    <div class="talent-intro d-flex jc-center my-5">
      <leftThreeCircle
        ref="circle"
        @parentChangeSlide="triggerChangeSlide"
        v-bind:content="leftCircleContent"
      ></leftThreeCircle>
      <rightIntro
        ref="Intro"
        @parentChangeCircle="triggerChangeCircle"
        v-bind:content="rightIntroContent"
      ></rightIntro>
    </div>
  </div>
</template>

<script>
import leftThreeCircle from "./LeftThreeCircle";
import rightIntro from "./RightSwiperIntro";

export default {
  data() {
    return {
      // 右邊內容區
      rightIntroContent: [
        {
          title: "教案設計",
          text:
            "個人教學經驗幾乎從大一到現在都一直有,從一開始的返鄉服務去國小教手語課,再來擔任助教設計課程並帶領大一完成服務學習,最後則是在未來科技教育中心擔任才藝老師,有教過3D列印和樂高,這些經驗都讓我一次一次瞭解到規劃一個國小課程需要兼顧內容深入淺出又有趣,課堂上的掌握度和細心度也是非常重要的"
        },
        {
          title: "網頁前端",
          text:
            "個人在整個網頁技術上比較多著墨的地方是前端設計,平時就會看一些codepen或是部落格等等的來增進自己的前端知識與見聞在side project裡幾乎很少用套件,最一開始製作靜態網站時,還自己刻了一個swiper,目前應該只有後台管理那份project是全用element。"
        },
        {
          title: "APP前端",
          text:
            "在製作APP這方面,在專題和之後跟同學接case裡,本身的職責都是前端功能與介面製作,所以在APP前端也是花比較多時間的,平常也都會看一些有趣的UI設計和套件來增進自己的實力與見聞"
        }
      ],
      // 左邊三圓圈資料
      leftCircleContent: [{ icon: "book" }, { icon: "web" }, { icon: "APP" }]
    };
  },
  methods: {
    triggerChangeSlide(index) {
      // 父组件通过$ref调用Intro中的事件方法
      this.$refs.Intro.changeSlide(index);
    },
    triggerChangeCircle(index) {
      // 父组件通过$ref调用circle中的事件方法
      this.$refs.circle.changeCircle(index);
    }
  },
  components: {
    leftThreeCircle,
    rightIntro
  }
};
</script>

<style scoped lang="scss">
@media all and (max-width: 1080px) {
  // 容器 變垂直排列
  .talent-intro {
    flex-direction: column;
  }
}
</style>