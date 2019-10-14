<template>
  <div class="left-connect d-flex flex-columm">
    <!-- 容器 -->
    <div class="connect-container d-flex flex-column ai-start">
      <!-- title -->
      <P class="connect-title text-white fs-xxl m-0 my-3">My contacts</P>
      <!-- 內容 -->
      <div class="connect-info d-flex mt-4" v-for="(item, index) in connectInfo" :key="index">
        <i class="iconfont fs-lg text-white mr-2" :class="`icon-${item.icon}`"></i>
        <p class="m-0 mx-2 fs-lgs text-white">{{item.text}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      connectInfo: [
        { text: "暫不提供", icon: "phoneon" },
        { text: "暫不提供", icon: "font-publish--" },
        { text: "暫不提供", icon: "Fax" },
        { text: "a098400926@gmail.com", icon: "email" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@media all and (max-width: 900px) {
  .left-connect {
    .connect-container {
      .connect-title {
        margin-left: -5rem;
      }
    }
  }
}
@media all and (max-width: 600px) {
  .left-connect {
    .connect-container {
      .connect-title {
        margin-left: -6.5rem;
      }
    }
  }
}

@media all and (max-width: 555px) {
  .left-connect {
    .connect-container {
      .connect-title {
        margin-left: -4.3rem;
      }
    }
  }
}

@media all and (max-width: 340px) {
  .left-connect {
    .connect-container {
      .connect-title {
        margin-left: -2.5rem;
      }
    }
  }
}
</style>