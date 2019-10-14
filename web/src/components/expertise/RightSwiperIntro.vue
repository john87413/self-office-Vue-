<template>
  <div class="right-swiper-intro d-flex flex-column ai-center px-2">
    <!-- 標題區 -->
    <mytitle class="talent-title my-4 ml-6" v-bind:content="titleContent"></mytitle>
    <!-- 下面滑塊區 -->
    <div class="mt-4 d-flex jc-center">
      <!-- 小icon -->
      <i class="iconfont icon-quote text-primary fs-xlx mr-4 mt-3"></i>
      <!-- 滑塊 -->
      <swiper ref="list" class="swiper-talent d-flex m-5 bg-light-grey-1" :options="swiperOption">
        <swiper-slide
          class="swiper-slide-talent d-flex flex-column ai-center jc-center"
          v-for="(item, index) in content"
          :key="index"
        >
          <!-- 內容區 -->
          <p class="title fs-xxl text-dark-grey my-2">{{item.title}}</p>
          <p class="text fs-lg text-light-grey my-2 px-4 text-center">{{item.text}}</p>
        </swiper-slide>
        <!-- <div class="swiper-pagination" slot="pagination"></div> -->
      </swiper>
    </div>
  </div>
</template>

<script>
import mytitle from "../title/TalentTitle";
export default {
  props: ["content"],
  data() {
    return {
      titleContent: { title: "專長", text: "what do I expert in" }, //標題內容
      swiperOption: {
        // pagination: {
        //   el: ".swiper-pagination"
        // },
        on: {
          slideChange: () => {
            let swiper = this.$refs.list.swiper;
            this.$emit("parentChangeCircle", swiper.activeIndex); //監聽從父子見傳過來的兄弟組件方法
          }
        }
      }
    };
  },
  methods: {
    //   給父組件調用的方法(threeCircle 組件才可調用)
    changeSlide(index) {
      this.$refs.list.swiper.slideTo(index);
    }
  },
  components: {
    mytitle
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables.scss";
// 滑塊容器
.swiper-talent {
  border: 1px solid map-get($colors, "light-grey-2");
  border-radius: 10px;
  width: 35rem;
  height: 20rem;
  cursor: pointer;
}
@media all and (max-width: 1080px) {
  // 最外部容器
  .right-swiper-intro {
    // 標題
    .talent-title {
      margin-left: 0;
      width: 40rem;
    }
  }
  // 滑塊
  .swiper-talent {
    margin: 0 !important;
  }
}
@media all and (max-width: 800px) {
  // 最外部容器
  .right-swiper-intro {
    // 標題
    .talent-title {
      width: 34rem;
    }
  }
  // 滑塊
  .swiper-talent {
    width: 30rem;
    height: 18rem;
  }
}
@media all and (max-width: 580px) {
  // 最外部容器
  .right-swiper-intro {
    // 標題
    .talent-title {
      width: 28rem;
    }
    // 滑塊
    .swiper-talent {
      width: 24rem;
      height: 20rem;
    }
  }
}
@media all and (max-width: 400px) {
  // 最外部容器
  .right-swiper-intro {
    // 標題
    .talent-title {
      width: 24rem;
    }
    // 滑塊
    .swiper-talent {
      width: 20rem;
      height: 18rem;
      .swiper-slide-talent{
        .title{
          font-size: 1.5rem;
        } 
        .text{
          margin: 0 0;
          padding: 0 1rem;
          font-size: 1rem;
        }
      }
    }
  }
}
</style>