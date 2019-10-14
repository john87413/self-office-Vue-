<template>
  <div id="home-cllection" class="collection d-flex flex-column bg-light-grey-1 py-2">
    <myTitle v-bind:content="titleContent"></myTitle>
    <display :bars="displayBars" :content="displayContent"></display>
  </div>
</template>

<script>
import myTitle from "../title/HomeTitle";
import display from "./DisplayCollection";

import web_back from '../../assets/images/web-back.png'
import web_static_1 from '../../assets/images/web-static-1.png'
import web_static_2 from '../../assets/images/web-static-2.png'
import app_main from '../../assets/images/app-main.png'
import app_post from '../../assets/images/app-post.png'
import app_relife from '../../assets/images/app-relife.png'

export default {
  data() {
    return {
      // 標題內容區
      titleContent: {
        title: "Side Projects",
        text: "MY WORKS"
      },
      // 內容bar
      displayBars: [
        "ALL",
        "MOBILE_APPS",
        "WEBPAGE",
        "STATIC_WEBPAGE",
        "APP_CASE"
      ],
      // 內容bar
      displayContent: [
        {
          imgSrc: web_back,
          title: "後台管理平台",
          text:
            "當初為了練後端,就跟著教學做了這份project,主要是學習CRUD通用接口和前端串接API。",
          icon: "arrow-right",
          target: "QA & TESTING",
          isNone: false,
        },
        {
          imgSrc: web_static_1,
          title: "履歷網站-1",
          text:
            "這個履歷網站是我第一份side project,這是剛學習Vue框架時做得,當時在練習RWD製作,幾乎都是用%來做成的,後來發現rem會更好",
          icon: "arrow-right",
          target: "QA & TESTING",
          isNone: false,
        },
        {
          imgSrc: web_static_2,
          title: "履歷網站-2",
          text:
            "這邊的圖都是我用PPT做出來的,在做圖時素材來源真的很重要像是pexels、pixabay和pngImg都不錯,未來應該學一下製圖軟體",
          icon: "arrow-right",
          target: "CUSTOM SOFTWARE",
          isNone: false,
        },
        {
          imgSrc: app_main,
          title: "長照資訊平台",
          text:
            "我自己的第一份校內APP CASE,製作一個當地資訊平台,讓長照人員可以快速了解當地資訊,並了解照護者需求。",
          icon: "arrow-right",
          target: "MOBILE APPS",
          isNone: false,
        },
        {
          imgSrc: app_relife,
          title: "ReLife",
          text:
            "大三的專題,當時第一次接觸android app 製作,想做出一個改善生活習慣的APP,寒假自學了一段時間後就開始和同學分工進行,我主要是前端界面和功能。",
          icon: "arrow-right",
          target: "QA & TESTING",
          isNone: false,
        },
        {
          imgSrc: app_post,
          title: "長照資訊平台",
          text:
            "這個是長照資訊平台的貼文頁面,這個頁面花了蠻多時間討論和修改的,成果個人覺得也不錯",
          icon: "arrow-right",
          target: "MOBILE APPS",
          isNone: false,
        },
      ]
    };
  },
  components: {
    myTitle,
    display
  }
};
</script>

<style lang="scss" scoped>
</style>