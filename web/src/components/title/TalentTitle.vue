<template>
    <div class="title-container d-flex flex-column jc-center text-center">
        <div class="title text-primary fs-lgs my-3 fl-nowrap">{{content.text}}</div>
        <h4 class="text text-dark-grey fs-xxxl fw-bold m-0">{{content.title}}</h4>
    </div>
</template>

<script>
export default {
    props:['content'],
    data() {
        return {
            
        }
    },
    components:{

    }
}
</script>

<style scoped lang="scss">
@media all and (max-width: 1080px) {
  .title-container {
      text-align: start !important;
  }
}
@media all and (max-width: 800px) {
  .title-container {
    .title{
        font-size: 1rem;
    }
    .text{
        font-size: 2rem;
    }
  }
}
</style>