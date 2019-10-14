<template>
  <div class="home-swiper swiper-container d-flex jc-center w-100 pb-5" style="z-index: 1;">
    <!-- content 讓這邊可以對齊左邊 -->
    <div class="home-swiper-content swiper-content d-flex flex-column" style="margin-right: 25%">
      <!-- title-text -->
      <div class="d-flex flex-column">
        <div v-html="text.templete"></div>
        <p class="fs-lgs text-light-grey" style="font-weight: 100" v-html="text.content"></p>
      </div>
      <!-- button -->
      <div class="content-bt d-flex">
        <button class="bt-1 bt-back-1 bt-nav-1 ripple mr-5 py-2">Learn More</button>
        <button class="bt-2 bt-back-2 bt-nav-2 ripple">Get in Touch</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props:['text'],
    data() {
        return {
            
        }
    },
}
</script>

<style lang="scss" scoped>
@media all and (max-width: 460px) {
  .home-swiper{
    .home-swiper-content{
      margin-right: 5% !important;
    }
  }
}
</style>