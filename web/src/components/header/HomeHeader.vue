<template>
  <header class="topbar w-100 d-flex">
    <!-- 左側滑欄區 -->
    <div class="left-menu">
      <div class="left-content d-flex flex-column" :class="{'open-left': openLeft}">
        <div class="left-line"></div>
        <div
          class="left-item px-4 py-3"
          v-for="(item, index) in content.title"
          :key="index"
          @click="scrollToID(index)"
        >{{item}}</div>
      </div>
    </div>
    <!-- 中間 menu 區 -->
    <div class="middle-menu bg-white py-1 d-flex ai-center w-100">
      <i
        class="middle-icon iconfont icon-menu pl-4 fs-xl"
        @click="openLeft=openLeft === true? false:true"
      ></i>
      <div class="middle-content d-flex ai-center jc-center w-100">
        <!-- header 標題區-->
        <a class="title d-flex jc-start ai-center mr-3 my-2" title="SELF 個人網站">
          <img src="../../assets/images/self-logo-black.png" @click="scrollTop(true)" />
        </a>
        <!-- nav 選單區-->
        <div class="nav d-flex ai-center jc-start ml-3">
          <ul class="nav-menu p-0 d-flex my-3">
            <li
              class="nav-menu-item mx-4"
              v-for="(item, index) in content.title"
              :key="index"
              @click="scrollToID(index)"
            >
              <a :class="{active: active === index}">{{item}}</a>
            </li>
          </ul>
        </div>
        <!-- end -->
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: ["content"],
  data() {
    return {
      active: 5, //被點擊的menu
      scrollId: this.content.link, //要滑到的是哪一個id
      openLeft: false, //是否開啟左邊滑欄
      //動畫ID
      moveWhere: undefined,
      moveTopest: undefined,
      moveBottomest: undefined
    };
  },
  created() {
    // 一開始滑到最頂
    this.scrollTop(false);
  },
  mounted() {
    // 監聽網頁放大縮小
    window.addEventListener("resize", this.setOpenLeft);
    window.addEventListener("mousewheel", this.handleScroll);
    // 監聽點擊螢幕事件
    document.addEventListener("click", e => {
      let flag = e.target.contains(
        document.getElementsByClassName("middle-icon")[0]
      );
      if (flag) {
        return;
      } else {
        this.openLeft = false;
      }
    });
  },
  methods: {
    // 監聽resize事件
    setOpenLeft() {
      if (window.innerWidth > 1080) {this.openLeft = false;}
    },
    // 監聽滑屬滾輪事件
    handleScroll() {
      this.stopAll();
    },
    // 停止某一動畫
    stop(aniId) {
      if (aniId) {
        window.cancelAnimationFrame(aniId);
        aniId = undefined;
      }
    },
    // 停止所有動畫
    stopAll() {
      this.stop(this.moveWhere);
      this.stop(this.moveTopest);
      this.stop(this.moveBottomest);
    },
    // 計算元素絕對位址
    countAbsolute(yourElement) {
      let actualTop = yourElement.offsetTop;
      let current = yourElement.offsetParent;
      while (current !== null) {
        actualTop += current.offsetTop + current.clientTop;
        current = current.offsetParent;
      }
      return actualTop;
    },
    // 計算是否到底
    scrollBottom() {
      let SH = document.body.scrollTop || document.documentElement.scrollTop;
      let CH =
        document.documentElement.clientHeight || document.body.clientHeight;
      let DH =
        document.documentElement.scrollHeight || document.body.scrollHeight;
      return SH + CH === DH;
    },
    // 滑動到某原素
    scrollToWhere(yourElement, offset) {
      const scrollToWhere = () => {
        if (
          yourElement.getBoundingClientRect().top > 60 ||
          yourElement.getBoundingClientRect().top < 40
        ) {
          this.moveWhere = window.requestAnimationFrame(scrollToWhere);
          window.scrollTo(
            0,
            window.pageYOffset +
              yourElement.getBoundingClientRect().top / 15 -
              offset
          );
        }
      };
      scrollToWhere();
    },
    // 滑動到最底
    scrollToBottomest() {
      const scrollBottomest = () => {
        const scrollTop =
          document.documentElement.scrollTop || document.body.scrollTop;
        const distance = document.body.scrollHeight - scrollTop;
        if (!this.scrollBottom()) {
          this.moveBottomest = window.requestAnimationFrame(scrollBottomest);
          window.scrollTo(0, scrollTop + distance / 20);
        }
      };
      scrollBottomest();
    },
    // 滑動到最頂
    scrollToTopest() {
      const scrollToTopest = () => {
        const scrollTop =
          document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollTop > 0) {
          this.moveTopest = window.requestAnimationFrame(scrollToTopest);
          window.scrollTo(0, scrollTop - scrollTop / 20);
        }
      };
      scrollToTopest();
    },
    // 給menu點擊呼叫的方法
    scrollToID(index) {
      this.stopAll();
      this.openLeft = false;
      this.active = index;
      // 分成滑動到底或是某原素
      if (index !== this.scrollId.length - 1) {
        const yourElement = document.getElementById(this.scrollId[index]);
        // 計算滑動距離 現在不用
        // const yCoordinate =
        //   yourElement.getBoundingClientRect().top + window.pageYOffset;
        // const yOffset = -60;

        // 計算元素絕對位置 目前沒用
        // let actualTop = this.countAbsolute(yourElement);

        //分成元素在可視範圍的上還是下
        if (yourElement.getBoundingClientRect().top > 0) {
          this.scrollToWhere(yourElement, 0);
        } else {
          this.scrollToWhere(yourElement, 15);
        }
        // window 原生 scroll方法 手機端不能用
        // window.scrollTo({
        //   top: yCoordinate + yOffset,
        //   behavior: "smooth"
        // });
      } else {
        this.scrollToBottomest();
        // window 原生 scroll方法 手機端不能用
        // window.scrollTo({
        //   top: document.body.scrollHeight,
        //   behavior: "smooth"
        // });
      }
    },
    // 給標題點擊呼叫的方法 滑動到頂
    scrollTop(isClick) {
      this.stopAll();
      this.active = this.content.title.length;
      if (isClick) {
        this.scrollToTopest();
      } else {
        setTimeout(() => {
          this.scrollToTopest();
          // window 原生 scroll方法 手機端不能用
          // window.scrollTo({
          //   top: 0,
          //   behavior: "smooth"
          // });
        }, 1000);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables.scss";
// 容器
.topbar {
  z-index: 999;
  position: fixed;
  box-shadow: 1px 0.5px 8px rgba(20%, 20%, 40%, 0.5);
  // 左側滑欄
  .left-menu {
    // 左側滑欄的內容
    .left-content {
      z-index: -1;
      position: absolute;
      width: 20rem;
      height: 100vh;
      left: -20rem;
      padding-top: 3.7rem;
      background: map-get($colors, "white");
      transition: all 0.3s;
      // 左側滑欄的每一個選項
      .left-item {
        cursor: pointer;
        &:hover {
          background: map-get($colors, "light-grey-1");
        }
      }
    }
    // 左側滑欄上方Line
    .left-line {
      width: 100%;
      height: 0.09rem;
      background: map-get($colors, "light-grey");
    }
  }
  // 中間menu
  .middle-menu {
    .middle-icon {
      cursor: pointer;
      display: none;
    }
    // 中間menu的內容
    .middle-content {
      // 中間menu title
      .title {
        cursor: pointer;
        img {
          width: 5.5rem;
          height: auto;
        }
      }
      // 中間menu nav 選單
      .nav {
        .active {
          padding-bottom: 0.1rem;
          border-bottom: 3px solid map-get($colors, "light-grey");
          transition: all 0.3s;
        }
      }
    }
  }
}
@media all and (max-width: 1080px) {
  .topbar {
    .middle-menu {
      .middle-icon {
        display: block;
      }
      .middle-content {
        .nav {
          display: none !important;
        }
      }
    }
  }
  .open-left {
    left: 0 !important;
    transition: all 0.3s;
  }
}
</style>