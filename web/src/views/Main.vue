<template>
  <div>
    <!-- header -->
    <my-header v-bind:content="menus[0]"></my-header>
    <!-- main view -->
    <router-view class="main-view bg-white"></router-view>
    <!-- footer -->
    <my-footer></my-footer>
  </div>
</template>

<script>
import myHeader from "../components/header/HomeHeader";
import myFooter from "../components/footer/home/Homefooter";

export default {
  data() {
    return {
      menus: [
        {
          title: ["About me", "Expertise", "APP", "Photo", "Contact me"], //網站nav 導航欄文字
          link: [
            "home-about",
            "home-talent",
            "home-cllection",
            "home-educate",
            ""
          ] //滑動到指定ID
        }
      ] //header menu
    };
  },
  components: {
    'my-header': myHeader,
    'my-footer': myFooter
  }
};
</script>

<style scoped lang="scss">
// 用來避免看不到footer
.main-view {
  margin-bottom: 34rem;
}
// 取消footer的隱藏
@media all and (max-width: 900px) {
  .main-view {
    margin-bottom: 0rem;
  }
}
</style>
