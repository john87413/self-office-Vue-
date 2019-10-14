<template>
  <div id="home-about" class="about-me py-5">
    <div class="about-container d-flex flex-column my-2 mx-2">
      <myTitle v-bind:content="titleContent"></myTitle>
      <myIntro v-bind:content="introContent"></myIntro>
    </div>
  </div>
</template>

<script>
import myTitle from "../title/HomeTitle";
import myIntro from "./IntroMe";

export default {
  data() {
    return {
      // 標題內容區
      titleContent: {
        title: "自我介紹",
        text: "WHO AM I"
      },
      // 底下介紹內容區
      introContent: [
        {
          title: "教育經驗",
          content:
            "在中正大學擔任過學系服務學習助教,這門課在資管系主要由助教規劃和帶領課程,那時候課程內容是去幼兒園做資訊基礎教學有設計過<strong class='text-primary'>網頁UI排版</strong>和<strong class='text-primary'>認識電腦硬體</strong>兩項課程",
          icon: "book"
        },
        {
          title: "程式旅程",
          content:
            "學過的程式語言有C#、JAVA、C,網頁的部分前端主要熟悉<strong class='text-primary'>Vue</strong>,後端則是Node.js資料庫的話,因為在做side project時都是用mongo所以對非關聯式資料庫比較了解",
          icon: "code"
        },
        {
          title: "網頁開發",
          content:
            "<a href='https://backsideadmin.herokuapp.com/' class='text-primary fw-bold'>後台管理平台</a>: 後端CRUD製作和前端串接API<br><a href='https://john87413.github.io/#/web' class='text-primary fw-bold'>履歷網站</a>:第一份專案,練習RWD<br><a href='/' class='text-primary fw-bold'>個人網站</a>: 主要為練習SEO優化<br>",
          icon: "web"
        }
      ]
    };
  },
  components: {
    myTitle,
    myIntro
  }
};
</script>

<style scoped lang="scss">
</style>