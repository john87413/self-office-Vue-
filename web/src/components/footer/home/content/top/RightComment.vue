<template>
  <div class="right-comment d-flex ml-9">
    <!-- 容器 -->
    <div class="comment-container d-flex flex-column">
      <!-- title -->
      <p class="m-0 text-white fs-xxl my-3">{{content.title}}</p>
      <!-- form -->
      <div class="comment-info d-flex flex-column">
        <textarea
          class="my-1 bg-none fs-lg text-white py-1 px-2 text-top"
          v-for="(item, index) in content.commentList"
          :key="index"
          :placeholder="item"
        />
        <button class="bt-back-1 bt-nav-1 ripple fs-md py-2 my-2 fw-bold">發送</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["content"],
  data() {
    return {
      commentIntro: [
        { height: 0, hint: "你的姓名" },
        { height: 0, hint: "E-mail" },
        { height: 0, hint: "主題" },
        { height: 0, hint: "留言內容" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../../../../../assets/scss/variables.scss";
.comment-container {
  // 輸入部分
  .comment-info {
    // 按鈕發送
    button {
      width: 25rem;
      height: auto;
    }
    // 輸入框
    textarea {
      width: 25rem;
      height: 2.4rem; // 設置高度會比較好看 不然他會加入卷軸高度
      line-height: 1.8rem; // 讓placeholder保持在中間
      border: 1px solid map-get($colors, "white");
      text-align: top; // 讓光標或是Placeholder保持在前面
      overflow: hidden; // 不顯示捲軸
      resize: none; //不讓使用者更換大小
      transition: all 0.3s;
      // 提示文字
      &::placeholder {
        font-size: 1rem;
        color: map-get($colors, "white");
        opacity: 0.5;
        text-align: top;
      }
      &:nth-child(4) {
        height: 8rem;
        padding-bottom: 6rem;
      }
      // 點擊輸入時
      &:focus {
        border: 1px solid map-get($colors, "primary");
        transition: all 0.3s;
        &::placeholder {
          transform: translateX(15px);
          opacity: 0;
          transition: all 0.3s;
        }
      }
    }
  }
}

@media all and (max-width: 900px) {
  .right-comment {
    justify-content: center;
    margin: 0;
    .comment-container {
      p {
        margin-left: 2.5rem;
      }
      .comment-info {
        margin-left: 7rem;
      }
    }
  }
}

@media all and (max-width: 600px) {
  .right-comment {
    justify-content: flex-start;
    .comment-container {
      p {
        margin-left: 0rem;
      }
      .comment-info {
        margin-left: 5rem;
        button {
          width: 25rem;
        }
        textarea {
          width: 25rem;
        }
      }
    }
  }
}

@media all and (max-width: 555px) {
  .right-comment {
    justify-content: flex-start;
    .comment-container {
      p {
        margin-left: -2.8rem !important;
      }
      .comment-info {
        margin-left: 0;
        button {
          width: 20rem;
        }
        textarea {
          width: 20rem;
        }
      }
    }
  }
}
@media all and (max-width: 340px) {
  .right-comment {
    justify-content: flex-start;
    .comment-container {
      p {
        margin-left: -1.3rem !important;
      }
    }
  }
}
</style>