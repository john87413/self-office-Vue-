<template>
  <div id="home-educate" class="educate pt-3 pb-4">
    <div class="educate-container d-flex flex-column my-2">
      <my-title v-bind:content="titleContent"></my-title>
      <my-bar @parentChangeSlide="triggerChangeSlide" v-bind:content="barContent"></my-bar>
      <my-display ref="display" v-bind:content="swiperContent"></my-display>
    </div>
  </div>
</template>

<script>
import myTitle from "../title/HomeTitle";
import myBar from "./content/EducateBar";
import myDisplay from "./content/DisplayCard";

import threeD_1 from '../../assets/images/3d-1.jpg'
import threeD_2 from '../../assets/images/3d-2.jpg'
import threeD_3 from '../../assets/images/3d-3.jpg'
import lego_A_1 from '../../assets/images/Lego-A-1.jpg'
import lego_A_2 from '../../assets/images/Lego-A-2.jpg'
import lego_A_3 from '../../assets/images/Lego-A-3.jpg'
import lego_B_1 from '../../assets/images/Lego-B-1.jpg'
import lego_B_2 from '../../assets/images/Lego-B-2.jpg'
import lego_B_3 from '../../assets/images/Lego-B-3.jpg'

export default {
  data() {
    return {
      // 標題內容區
      titleContent: {
        title: "Educate",
        text: "MORE PHOTO ABOUT"
      },
      // menu內容區
      barContent: ["3D列印", "樂高-A", "樂高-B"],
      // card內容區
      swiperContent: [
        {
          swiperItem: [
            {
              imgSrc: threeD_1,
              date: "04/01/2019",
              title: "北辰國小-3D列印",
              text:
                "他是個非常活潑的小女孩,雖然比較沒有自己的意見,但個性大方很棒"
            },
            {
              imgSrc: threeD_2,
              date: "04/14/2019",
              title: "北辰國小-3D列印",
              text:
                "一個很有個性的小男生,雖然很喜歡跟旁邊的男生吵架,但感情還是很好。"
            },
            {
              imgSrc: threeD_3,
              date: "04/26/2019",
              title: "北辰國小-3D列印",
              text:
                "很樂意幫老師的學生,雖然還是很愛玩,但還算成熟"
            }
          ]
        },
        {
          swiperItem: [
            {
              imgSrc: lego_A_1,
              date: "10/07/2019",
              title: "ABC多元教育中心_A",
              text:
                "很愛搞怪的小朋友,整體看是蠻聽話的,但需要一直盯著他不然也是會失控"
            },
            {
              imgSrc: lego_A_2,
              date: "10/07/2019",
              title: "ABC多元教育中心_A",
              text:
                "非常愛黏人的小孩,通常他會要老師直接幫他做他,但他應該只是懶得想怎麼做"
            },
            {
              imgSrc: lego_A_3,
              date: "14/07/2019",
              title: "ABC多元教育中心_A",
              text:
                "蠻聰明又話很多的兩位小朋友,做樂高時都非常有想法,但需要時常管控他們。"
            }
          ]
        },
        {
          swiperItem: [
            {
              imgSrc: lego_B_1,
              date: "03/08/2019",
              title: "ABC多元教育中心_B",
              text:
                "小朋友真的都非常喜歡回答問題,不說出來會不開心的那種"
            },
            {
              imgSrc: lego_B_2,
              date: "03/08/2019",
              title: "ABC多元教育中心_B",
              text:
                "一個很可愛的小男生,也是蠻有想法的,而且很喜歡玩樂高"
            },
            {
              imgSrc: lego_B_3,
              date: "11/08/2019",
              title: "ABC多元教育中心_B",
              text:
                "比較文靜的女生,中規中矩的感覺,會認真聽課後照老師的做法做出當天進度。"
            }
          ]
        }
      ]
    };
  },
  methods: {
    triggerChangeSlide(index) {
      // 父组件通过$ref调用display中的事件方法
      this.$refs.display.changeSlide(index);
    }
  },
  components: {
    "my-title": myTitle,
    "my-bar": myBar,
    "my-display": myDisplay
  }
};
</script>

<style lang="scss" scoped>
</style>