<template>
  <div class="footer-bottom d-flex jc-center">
    <div class="bottom-container d-flex ai-center jc-between h-100">
      <div class="logo-container ">
        <img class src="../../../../../assets/images/self-logo-white.png" />
      </div>
      <div class="intro-container d-flex text-white">© 2019 Self. All rights reserved.</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
@import "../../../../../assets/scss/variables.scss";
.footer-bottom {
  height: 6rem;
  border-top: 1px solid map-get($colors, "light-grey");
  .bottom-container {
    width: 50rem;
    .logo-container {
      img {
        width: 7rem;
        height: 2.5rem;
      }
    }
  }
}

@media all and (max-width: 900px) {
  .footer-bottom {
    .bottom-container {
        flex-direction: column;
        justify-content: center
    }
  }
}
</style>