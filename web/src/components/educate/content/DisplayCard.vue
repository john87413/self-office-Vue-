<template>
  <div class="display-card my-3">
    <div class="card-container d-flex jc-center ai-center">
      <!-- swiper -->
      <swiper ref="list" class="swiper-educate d-flex m-5" :options="swiperOption">
        <swiper-slide
          class="d-flex ai-center jc-center fl-wrap"
          v-for="(swiper, index) in content"
          :key="index"
        >
          <!-- 三卡片容器 -->
          <div class="display-swiper-container d-flex ai-center jc-start fl-wrap">
            <!-- 單張卡片區 -->
            <div
              class="card-content mx-3 my-3"
              v-for="(cardIntro, index) in swiper.swiperItem"
              :key="index"
            >
              <!-- 卡片圖片 -->
              <img class="card-img w-100" :src="cardIntro.imgSrc" />
              <!-- 卡片文字內容 -->
              <article class="card-intro">
                <!-- 卡片日期 -->
                <div class="intro-date fs-xxs bg-primary text-white py-1 px-2">{{cardIntro.date}}</div>
                <!-- 卡片標題 -->
                <div
                  class="intro-title text-dark-grey fw-bold fs-lg mx-2 my-2 pt-3"
                >{{cardIntro.title}}</div>
                <!-- 卡片內文 -->
                <div>
                  <p class="intro-text text-light-grey m-0 mx-2 my-2">{{cardIntro.text}}</p>
                </div>
              </article>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  props: ["content"],
  data() {
    return {
      swiperOption: {
        spaceBetween: 0,
        allowTouchMove: false
      }
    };
  },
  methods: {
    //   給父組件調用的方法(bar 組件才可調用)
    changeSlide(index) {
      this.$refs.list.swiper.slideTo(index);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/variables.scss";
// 最外面的容器
.display-card {
  .card-container {
    // swiper 容器 讓他滑動距離不要那麼大
    .swiper-educate {
      width: 75rem;
    }
    // 卡片 內容
    .card-content {
      position: relative;
      border-radius: 0.625rem;
      overflow: hidden;
      width: 22rem;
      height: 30rem;
      transition: width 300ms ease 0ms, height 300ms ease 0ms;
      // 卡片灰色外框
      &::after {
        content: "";
        z-index: -999;
        position: absolute;
        left: 0;
        top: 0;
        width: 99.5%;
        height: 99.5%;
        border-radius: 0.625rem;
        border: 1px solid map-get($colors, "light-grey-2");
      }
      // 觸及卡片後發生
      &:hover {
        box-shadow: 2px 4px 20px 1.4px rgba(45, 45, 45, 0.13);
        transition: all 0.25s;
        // 卡片灰框要變不見
        &::after {
          content: "";
          border-color: transparent;
          transition: all 0.25s;
        }
      }
      // 卡片 頂部圖片
      img {
        height: 70%;
        cursor: pointer;
      }
      // 卡片底部文字內容
      .card-intro {
        position: relative;
        // 卡片內日期
        .intro-date {
          position: absolute;
          left: 36%;
          top: -2rem;
          border-radius: 0.3125rem;
        }
      }
    }
  }
}
@media all and (max-width: 1250px) {
  .display-card {
    .card-container {
      .card-content {
        width: 19rem;
        height: 27.5rem;
        transition: all 0.3s;
        &::after {
          width: 18.9rem;
          height: 27rem;
        }
      }
    }
  }
}

@media all and (max-width: 1080px) {
  .display-card {
    .card-container {
      .swiper-educate {
        margin: 0 auto;
      }
      // 限定寬度讓它可以置中
      .display-swiper-container {
        width: 46rem;
        transition: all 0.3s;
        .card-content {
          width: 21rem;
          height: 28rem;
          transition: all 0.3s;
          &::after {
            width: 20.9rem;
            height: 27.8rem;
          }
        }
      }
    }
  }
}
@media all and (max-width: 760px) {
  .display-card {
    .card-container {
      .display-swiper-container {
        width: 28rem;
        justify-content: center;
        transition: all 0.3s;
        .card-content {
          width: 24rem;
          height: 29rem;
          transition: all 0.3s;
          &::after {
            width: 23.9rem;
            height: 28.8rem;
          }
        }
      }
    }
  }
}
@media all and (max-width: 555px) {
  .display-card {
    .card-container {
      .display-swiper-container {
        width: 22rem;
        justify-content: center;
        transition: all 0.3s;
        .card-content {
          width: 20.5rem;
          height: 28rem;
          transition: all 0.3s;
          &::after {
            width: 19.9rem;
            height: 27.8rem;
          }
        }
      }
    }
  }
}

@media all and (max-width: 500px) {
  .display-card {
    .card-container {
      .display-swiper-container {
        .card-content::after {
          width: 19.85rem;
          height: 27.85rem;
        }
      }
    }
  }
}

@media all and (max-width: 410px) {
  .display-card {
    .card-container {
      .display-swiper-container {
        .card-content::after {
          width: 99.2%;
          height: 99.4%;
        }
      }
    }
  }
}

@media all and (max-width: 355px) {
  .display-card {
    .card-container {
      .display-swiper-container {
        .card-content {
          &::after {
            width: 99%;
            height: 99.4%;
          }
        }
      }
    }
  }
}
</style>