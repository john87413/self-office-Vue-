<template>
  <main class="home">
    <home-swiper v-bind:contents="swipers"></home-swiper>
    <home-about></home-about>
    <home-ability></home-ability>
    <home-auto></home-auto>
    <home-expertise></home-expertise>
    <home-coll></home-coll>
    <home-edu></home-edu>
  </main>
</template>

<script>
import homeswiper from "../components/swiper/HomeSwiper";
import aboutMe from "../components/about_me/AboutMe";
import ability from "../components/about_me/ability/Ability";
import autobiography from "../components/about_me/autobiography/Autobiography";
import expertise from "../components/expertise/Expertise";
import collection from "../components/collection/Collection";
import educate from "../components/educate/educate";
// import Test from "../test"; 這邊在實驗該怎麼引入自己寫的方法

export default {
  data() {
    return {
      // swiper 內容區
      swipers: [
        {
          templete:
            "<h1 class='fs-xxl text-dark-grey my-2' style='line-height: 3rem'>陳俊達<br>個人網站</h1>",
          content:
            "現在就讀中正大學資管系四年級<br>兼職未來科技教育中心的才藝老師<br>未來規劃是可以成立個人工作室接網頁case"
        },
        {
          templete:
            "<h2 class='fs-xxl text-dark-grey my-2' style='line-height: 3rem'>Web<br>網頁開發</h2>",
          content:
            "目前上線過三個side project<br>分別是後台管理平台、履歷網站、個人網站<br>前端皆以Vue為主,後端則是node.js + mongo<br>對網頁製作有需求的朋友歡迎詢問<br>"
        },
        {
          templete:
            "<h2 class='fs-xxl text-dark-grey my-2' style='line-height: 3rem'>APP<br>JAVA 開發</h2>",
          content:
            "從大三專題開始學習android APP開發<br>並在專題做出了作息紀錄APP<br>後來跟同學在校內接了一個APP case<br>主要是幫助長照人員了解當地資訊的平台<br>"
        }
      ]
    };
  },
  created() {
    // Test.welcome2()   這邊在實驗該怎麼引入自己寫的方法
  },
  components: {
    "home-swiper": homeswiper,
    "home-about": aboutMe,
    "home-ability": ability,
    "home-auto": autobiography,
    "home-expertise": expertise,
    "home-coll": collection,
    "home-edu": educate
  }
};
</script>

<style scoped lang="scss">
</style>
