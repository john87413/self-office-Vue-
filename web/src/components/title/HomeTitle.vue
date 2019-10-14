<template>
    <div class="title-container d-flex flex-column ai-center jc-center">
        <div class="title text-primary fs-xs my-3">{{content.text}}</div>
        <h4 class="text text-dark-grey fs-xxl fw-bold m-0">{{content.title}}</h4>
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

</style>