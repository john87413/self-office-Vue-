<template>
  <div class="display-collection d-flex flex-column ai-center">
    <!-- 選擇作品集 menu -->
    <ul class="display-bar d-flex jc-center mt-5 p-2">
      <!-- menu item -->
      <li
        class="bar-item mx-3"
        :class="{'bar-item-active': active === index}"
        v-for="(item, index) in bars"
        :key="index"
        @click="changeDisplayContent(index)"
      >{{item}}</li>
    </ul>
    <!-- 展示作品集 -->
    <div class="display-parent d-flex jc-center fl-wrap my-4">
      <div class="display-container d-flex jc-start fl-wrap" :style="containerChange">
        <!-- 作品 item -->
        <div
          class="display-content mx-2 my-2"
          ref="element"
          :class="{'display-content-change': arrDisplayNone.indexOf(index) > -1,
          'display-none': tempNone.indexOf(index) > -1}"
          v-for="(item, index) in content"
          :key="index"
        >
          <!-- 作品 front 展示 -->
          <div class="content-item content-item-front w-100 h-100">
            <img class="front-img" :src="item.imgSrc" />
          </div>
          <!-- 作品 back 展示 -->
          <div class="content-item content-item-back w-100 h-100 d-flex jc-center ai-center">
            <!-- back 內容 -->
            <div class="back-content d-flex flex-column jc-center ai-center">
              <!-- 文字 -->
              <article class="text-content d-flex flex-column jc-center ai-center">
                <h5 class="title text-white fs-xl my-2 fw-bold">{{item.title}}</h5>
                <p class="text text-white text-center my-2">{{item.text}}</p>
              </article>
              <!-- icon -->
              <div class="icon-content bg-white my-2 d-flex jc-center ai-center">
                <i class="iconfont fs-lg text-primary" :class="`icon-${item.icon}`"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    bars: { type: Array, required: true }, //bar 內容
    content: { type: Array, required: true } //作品 內容
  },
  data() {
    return {
      tempNone: [], // display : none
      arrDisplayNone: [], //scale要縮小的作品 index
      arrDisplay: [0, 1, 2, 3, 4, 5], //寬高不為零 會展示的作品 index
      active: 0, //bar 要為藍色的 index
      displayContentHeight: 23,
      displayContentCount: 3
    };
  },
  created() {
    this.handleResize();
  },
  mounted() {
    // 監聽網頁放大縮小
    window.addEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      if (window.innerWidth <= 355) {
        this.displayContentHeight = 18;
        this.displayContentCount = 1;
      } else if (window.innerWidth <= 525) {
        this.displayContentHeight = 15;
        this.displayContentCount = 2;
      } else if (window.innerWidth < 680) {
        this.displayContentHeight = 27;
        this.displayContentCount = 1;
      } else if (window.innerWidth < 800) {
        this.displayContentHeight = 23;
        this.displayContentCount = 2;
      } else if (window.innerWidth < 1080) {
        this.displayContentHeight = 25;
        this.displayContentCount = 2;
      } else {
        this.displayContentHeight = 23;
        this.displayContentCount = 3;
      }
    },
    // 變換要展示的作品數量
    changeDisplayContent(index) {
      if(this.active === index){return} //點擊同樣的直接return
      this.active = index; //看哪一個 baritem 要變藍色
      //看是點擊到哪一個baritem
      switch (index) {
        case 0:
          this.displayAni([]);
          break;
        case 1:
          this.displayAni([0, 1, 2]);
          break;
        case 2:
          this.displayAni([3, 4, 5]);
          break;
        case 3:
          this.displayAni([0, 3, 4, 5]);
          break;
        case 4:
          this.displayAni([0, 1, 2, 4]);
          break;
      }
    },
    delayTempNone() {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve("我是傳下去的值");
          this.tempNone = []; //先讓全部display 不為none
        }, 300);
      });
    },
    // 用來調用消失和出現動畫
    displayAni(displayNone) {
      this.arrDisplayNone = [0, 1, 2, 3, 4, 5]; //先把全部弄消失
      //取差集 把應該要出現的存入陣列 原本計算高度用
      this.arrDisplay = this.arrDisplayNone.filter(function(v) {
        return displayNone.indexOf(v) == -1;
      });
      this.delayTempNone().then(() => {
        // 有延遲才不會看不出動畫
        setTimeout(() => {
          this.arrDisplayNone = displayNone; //延遲秒後出現不再arrDisplayNone的index 作品
          this.tempNone = displayNone; //display: none 使用者才不會觸發hover效果
        }, 50);
      });
    }
  },
  computed: {
    containerChange() {
      return {
        height: `${Math.ceil(
          this.arrDisplay.length / this.displayContentCount
        ) *
          (this.displayContentHeight + 1)}rem` //動態計算容器高度(先計算有幾層在乘上一層的高度)
      };
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";
// bar 容器
.display-bar {
  // bar item
  overflow-x: auto;
  white-space: nowrap;
  width: 100%;
  .bar-item {
    display: inline-block;
    color: map-get($colors, "dark-grey");
    cursor: pointer;
    transition: 0.3s;
    // item hover
    &:hover {
      color: map-get($colors, "primary");
      transition: 0.3s;
    }
  }
}
// bar 被點擊後的樣式
.bar-item-active {
  color: map-get($colors, "primary") !important;
}

// 作品 Item 消失的動畫
.display-content-change {
  // opacity: 0 !important;
  // margin-left: 0 !important;
  // margin-right: 0 !important;
  // width: 0 !important;
  // height: 0 !important;
  transform: translate(0px, 0px) scale(0.01) !important;
}
.display-none {
  display: none;
}

// 作品 容器
.display-container {
  width: 60rem;
  transition: width 200ms ease 0ms, height 200ms ease-in-out 0ms !important;
  // 作品 item 容器
  .display-content {
    position: relative;
    width: 31%;
    height: 23rem;
    opacity: 1;
    transform: translate(0px, 0px) scale(1);
    transition: transform 300ms ease 0ms, opacity 400ms linear 0ms,
      width 300ms ease 0ms, height 300ms ease 0ms !important;
    // 作品 卡片
    .content-item {
      position: absolute;
      left: 0;
      top: 0;
      border-radius: 6%;
      transition: 0.6s ease-in-out; //讓底下的front & back 都有動畫感
    }
    // 作品 卡片-前
    .content-item-front {
      z-index: 2;
      background: map-get($colors, "white");
      // 作品 卡片-前-圖片
      .front-img {
        width: 100%;
        height: 100%;
        border-radius: 6%;
      }
    }
    // 作品 卡片-後
    .content-item-back {
      z-index: 1;
      // 作品 卡片-後-內容容器
      .back-content {
        transform: rotateY(-180deg);
        .text-content {
          opacity: 0;
          transition: all 0.3s;
          // 作品 卡片-後-內容 文字
          .text {
            width: 80%;
          }
        }
        // 作品 卡片-後-icon
        .icon-content {
          width: 2rem;
          height: 2rem;
          border-radius: 50%;
          opacity: 0;
          transition: all 0.3s;
          cursor: pointer;
          // 作品 卡片-後-icon 觸發
          &:hover {
            background: map-get($colors, "white-1");
            transition: all 0.3s;
          }
        }
      }
    }
    // 作品 卡片 觸發旋轉
    &:hover {
      .content-item-front {
        z-index: 1;
        transform: rotateY(180deg);
      }
      .content-item-back {
        z-index: 2;
        transform: rotateY(180deg);
        background: map-get($colors, "primary");
        .back-content {
          .text-content {
            opacity: 1;
            transition: all 0.3s;
          }
          .icon-content {
            opacity: 1;
            transition: all 0.3s;
          }
        }
      }
    }
  }
}
@media all and (max-width: 1080px) {
  .display-container {
    width: 46rem;
    .display-content {
      width: 47.5%;
      height: 25rem;
    }
  }
}

@media all and (max-width: 800px) {
  .display-container {
    width: 40rem;
    .display-content {
      width: 47.5%;
      height: 23rem;
    }
  }
}
@media all and (max-width: 730px) {
  .display-bar {
    justify-content: flex-start;
    // &::-webkit-scrollbar {
    //     display: none;
    // }
  }
}
@media all and (max-width: 680px) {
  .display-collection {
    .display-bar {
      flex-wrap: wrap;
      justify-content: center;
      .bar-item {
        font-size: 1.2rem;
        margin: 0.5rem 0.8rem;
      }
    }
    .display-container {
      width: 25rem;
      .display-content {
        width: 100%;
        height: 27rem;
      }
    }
  }
}

@media all and (max-width: 525px) {
  .display-collection {
    .display-container {
      width: 28rem;
      .display-content {
        width: 46.3%;
        height: 15rem;
        .content-item-back {
          .back-content {
            .text-content {
              h5 {
                font-size: 1rem;
                margin: 0 0;
              }
              p {
                width: 90%;
                font-size: 0.8rem;
                margin: 0 0;
              }
            }
            .icon-content {
              margin: 0.2rem 0;
              width: 1.3rem;
              height: 1.3rem;
            }
          }
        }
      }
    }
  }
}

@media all and (max-width: 395px) {
  .display-collection {
    .display-container {
      width: 26rem;
      .display-content {
        width: 46%;
        height: 15rem;
        .content-item-back {
          .back-content {
            .text-content {
              .text {
                width: 90%;
              }
            }
          }
        }
      }
    }
  }
}
@media all and (max-width: 355px) {
  .display-collection {
    .display-container {
      width: 20rem;
      .display-content {
        width: 100%;
        height: 18rem;
        .content-item-back {
          .back-content {
            .text-content {
              .text {
                width: 90%;
              }
            }
          }
        }
      }
    }
  }
}
</style>

