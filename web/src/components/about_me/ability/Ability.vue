<template>
    <div class="ability-container d-flex ai-center jc-center">
        <left-circle v-bind:content="leftCircleContent"></left-circle>
        <right-intro v-bind:intros="rightIntroContent"></right-intro>
    </div>
</template>

<script>

import leftCircle from './LeftCircle'
import rightIntro from './RightIntro'

export default {
    data() {
        return {
            // 右邊介紹區內容
            rightIntroContent:[
                {count: "2",description: "Аpps Developed"},
                {count: "3",description: "Web Developed"},
                {count: "1",description: "case"},
            ],
            // 左邊圓圈內容
            leftCircleContent:{count: "3",description: "Years <br> Of Experience"},
        }
    },
    components:{
        'left-circle': leftCircle,
        'right-intro': rightIntro
    }
}
</script>

<style>
@media all and (max-width: 1080px) {
    /* ability 變成垂直排列 */
  .ability-container{
      flex-direction: column;
  }
}
</style>