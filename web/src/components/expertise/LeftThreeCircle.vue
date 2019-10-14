<template>
  <div class="three-circle">
    <!-- 三圓形容器 -->
    <div class="circle-container d-flex flex-column ai-end jc-center mt-4 py-2">
      <!-- 三圓形 -->
      <div
        class="circle-item-1 bg-primary d-flex ai-center jc-center"
        :class="{'circle-item-1-active': active === index}"
        v-for="(item, index) in content"
        @click="changeTalentSlide(index)"
        :key="index"
      >
        <!-- 圓形icon -->
        <i class="circle-icon iconfont text-white" :class="`icon-${item.icon}`"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["content"],
  data() {
    return {
      active: 0 //被點擊或hover的圓圈
    };
  },
  methods: {
    changeTalentSlide(index) {
      this.active = index;
      this.$emit("parentChangeSlide", index); //監聽從父組件調用兄弟組件的方法
    },
    //給兄弟組件做監聽
    changeCircle(index) {
      this.active = index;
    }
  }
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/variables.scss";

// 三圓形
.circle-item-1 {
  position: relative;
  border-radius: 50%;
  width: 9rem;
  height: 9rem;
  cursor: pointer;

  // 圓形內icon
  .circle-icon {
    font-size: 5rem;
  }
  // 第一個
  &:nth-child(1) {
    margin-right: 2.5rem;
    border-radius: 50%;
  }
  // 第二個
  &:nth-child(2) {
    margin-right: 12.5rem;
    margin-top: -2.5rem;
    margin-bottom: -3rem;
    width: 14rem;
    height: 14rem;
    // 裡面icon
    .circle-icon {
      font-size: 8rem;
      font-weight: 500;
    }
  }
  // 第三個
  &:nth-child(3) {
    margin-right: 0.5rem;
  }
  // 外圍藍色圓圈
  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    border: 0.25rem solid map-get($colors, "light-blue");
    opacity: 0;
    border-radius: 50%;
    transition: all 0.3s;
  }
  // 觸發後 外圍圓圈出現
  &:hover::before {
    top: -0.5rem;
    left: -0.5rem;
    right: -0.5rem;
    bottom: -0.5rem;
    opacity: 1;
  }
}
// 點擊外圍圓圈也要出現
.circle-item-1-active::before {
  top: -0.5rem;
  left: -0.5rem;
  right: -0.5rem;
  bottom: -0.5rem;
  opacity: 1;
}
@media all and (max-width: 1080px) {
  // 容器 變水平排列
  .circle-container {
    flex-direction: row !important;
    // 圓形調大小
    .circle-item-1 {
      width: 12rem;
      height: 12rem;
      margin: 0 2rem;
      // 圓形內icon調大小
      .circle-icon {
        font-size: 6.5rem;
        font-weight: 500;
      }
    }
  }
}
@media all and (max-width: 900px) {
  .circle-container {
    // 圓形調大小
    .circle-item-1 {
      width: 9.5rem;
      height: 9.5rem;
      margin: 0 2rem;
      // 圓形內icon調大小
      .circle-icon {
        font-size: 5rem;
        font-weight: 500;
      }
    }
  }
}
@media all and (max-width: 800px) {
  .circle-container {
    // 圓形調大小
    .circle-item-1 {
      width: 8rem;
      height: 8rem;
      margin: 0 1rem;
      // 圓形內icon調大小
      .circle-icon {
        font-size: 4rem;
        font-weight: 500;
      }
    }
  }
}
@media all and (max-width: 520px) {
  .circle-container {
    // 圓形調大小
    .circle-item-1 {
      width: 7rem;
      height: 7rem;
      // 圓形內icon調大小
      .circle-icon {
        font-size: 3rem;
        font-weight: 500;
      }
    }
  }
}
@media all and (max-width: 390px) {
  .circle-container {
    // 圓形調大小
    .circle-item-1 {
      width: 5rem;
      height: 5rem;
      margin: 0 0.6rem;
      &::before {
        border: 0.2rem solid map-get($colors, "light-blue");
      }
      // 觸發後 外圍圓圈出現
      &:hover::before {
        top: -0.3rem;
        left: -0.3rem;
        right: -0.3rem;
        bottom: -0.3rem;
      }
      // 圓形內icon調大小
      .circle-icon {
        font-size: 2.5rem;
      }
    }
  }
  // 圓外 圓框框
  .circle-item-1-active::before {
    top: -0.3rem;
    left: -0.3rem;
    right: -0.3rem;
    bottom: -0.3rem;
  }
}
</style>