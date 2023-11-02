<template>
    <div id="brandSpirit">
      <div class="titleSentence">
        <h1><span class="titleSpan1">霸氣外肉！</span><span class="titleSpan2">飢餓的氣息席捲而來</span></h1>
        <h3>品質與份量為何不能兼具？震撼三觀的料理就是我們的信仰！</h3>
      </div>
      <div class="container">
        <div class="row justify-content-around">
          <div class="col-10 col-sm-6">
            <lazyloadContainer :animationType="rightFade" :class="{H80:true}">
              <div class="brandBanner">              
                <div class="brandPic leftPic">
                  <img src="@/assets/img/brandSpirit1.jpg"/>
                </div>
                <h2>歲月匆匆溜走，唯肉霸一生懸命，只為在這倉促的時代留下歷久彌新的滋味，不斷的創新、測試、調整，融合各方手藝創造我們獨樹一幟的料理風格。</h2>
              </div>
            </lazyloadContainer>
          </div>
          <div class="col-10 col-sm-6">
            <lazyloadContainer :animationType="leftFade" :class="{H80:true}">
              <div class="brandBanner">
                <div class="brandPic rightPic">
                  <img src="@/assets/img/brandSpirit2.jpg"/>
                </div>
                <h2>味的極致就是鮮，肉霸組織了肉質特派小組，深入行業內部情報網，為的是找尋上等肉源，再經科學定標、檢驗，保證每一塊肉的出身不凡。</h2>
              </div>
            </lazyloadContainer>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <style lang="scss" scoped>
    #brandSpirit{
      >.titleSentence{
        line-height: 500px;
        text-align: center;
        color: #ffffff;
        margin: 2em 2em 0;
        >h1{
          line-height: 5em;
          transform: translateY(20px);
          @media screen and (max-width:575px) {
              line-height: 3em;
            }
          >.titleSpan1{
            display: inline-block;
            color: $mainColor;
            font-size: 1.5em;
            text-shadow: -1px -1px white, 1px 1px #333;
            transform: rotate(20deg);
          }
          >.titleSpan2{
            display: inline-block;
            text-shadow: -2px -2px $mainColor, 2px 2px $mainColor;
          }
        }
        >h3{
          margin-top: 1.5em;
          font-style: italic;
          text-shadow: 0 0 1.2em $mainColor;
        }
      }
      .container{
        margin-top: 5em;
        min-height: 120vh;
        //因為產生transition元素產生文本，並且因為動畫由右側滑入，文本會向右側擴大導致跑版，所以需要使用overflow隱藏擴張的動畫文本
        overflow: hidden;
        .col-10:nth-child(1){
          margin-top: 5vh;
        }
        .col-10:nth-child(2){
          margin-top: 25vh;
        }
        .brandBanner{
          >.brandPic{
            display: flex;
            justify-content: center;
            >img{
              position: relative;
              z-index: 10;
              display: block;
              width: 80%;
              box-shadow: 0px 0px 30px 5px $mainColor;
            }
          }
          >h2{
            margin-top: 1.5em;
            display: block;
            justify-content: center;
            width: 100%;
            font-family: "DFKai-SB","STKaiti";
            text-align: center;
            line-height: 1.5em;
          }
        }
        @media screen and (max-width:575px){
          .col-10:nth-child(2){
            margin-top: 0vh;
          }
        }
      }
    }
  </style>
  
  <script>
  import lazyloadContainer from '@/components/lazyloadContainer.vue'
  
  export default {
    name: 'brandSpirit',
    data(){
      return{
        leftFade: 'leftFade',
        rightFade: 'rightFade',
        fade: 'fade'
      }
    },
    components: {
      lazyloadContainer
    },
    mounted(){
    }
  }
  </script>