<template>
  <div class="footer-container d-flex flex-column bg-dark-grey w-100">
    <my-footer-top></my-footer-top>
    <my-footer-bottom></my-footer-bottom>
  </div>
</template>

<script>

import myFooterTop from './content/top/FooterTop'
import myFooterBottom from './content/bottom/FooterBottom'

export default {
  data() {
    return {

    };
  },
  components:{
    'my-footer-top': myFooterTop,
    'my-footer-bottom': myFooterBottom,
  }
};
</script>

<style lang="scss" scoped>
// footer 容器 用 fix讓它可以像隱藏起來
.footer-container {
  z-index: -10;
  position: fixed;
  bottom: 0px;
}
// 小於900px後讓她不用被隱藏 不然可能會被遮到
@media all and (max-width: 900px) {
  .footer-container {
    position: static;
  }
}
</style>