<template>
    <div class="footer-top d-flex jc-center ai-center">
        <my-left-connect></my-left-connect>
        <my-right-comment v-bind:content="rightCommentContent"></my-right-comment>
    </div>
</template>

<script>

import myLeftConnect from './LeftConnect'
import myRightComment from './RightComment'

export default {
    data() {
        return {
            rightCommentContent: {
                title: "Comment",
                commentList:['你的姓名','E-mail','主題','留言內容'],
            }
        }
    },
    components:{
        'my-left-connect': myLeftConnect,
        'my-right-comment': myRightComment,
    }
}
</script>

<style lang="scss" scoped>
// 容器
.footer-top{
    height: 28rem;
}
// 布局改垂直 高度增加
@media all and (max-width: 900px) {
    .footer-top{
        padding-top: 0.5rem;
        height: 40rem;
        flex-direction: column;
    }
}
</style>