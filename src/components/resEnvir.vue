<template>
    <div id="resEnvir">
      <div class="bgContainer">
        <div class="bg"></div>
        <div class="titleText">
          <h1>餐廳環境</h1>
          <div class="titleLine"></div>
          <p>歐式工業風裝潢搭配室內植被擺設，讓您感受生氣蓬勃的低調奢華。</p>
        </div>
        <div class="envirPhoto">
          <div v-for="(item, index) in imgCount/2" :key="index">
            <div class="imgWrap rightArrange">
              <transition name="fade" mode="out-in">
                <img v-if="isShow" :src="require(`@/assets/img/res/res${item * 2 - 1}.jpg`)" alt="restaurant environment"/>
              </transition>
            </div>
            <div class="imgWrap leftArrange">
              <transition name="fade" mode="out-in">
                <img v-if="isShow" :src="require(`@/assets/img/res/res${item * 2}.jpg`)" alt="restaurant environment"/>
              </transition>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <style lang="scss" scoped>
    #resEnvir{
      position: relative;
      min-height: calc(300px + 106vw + 20vh);
      >.bgContainer{
        >.bg{
          background-position: center center;
          background-image: url("@/assets/img/bgEnvir.jpg");
          filter: brightness(40%);
          -webkit-filter: brightness(40%);
        }
        >.titleText{
          width: 80%;
          margin: 100px auto 50px;
        }
        >.envirPhoto{
          position: relative;
          top: 0;
          left: 0;
          display: flex;
          flex-wrap: wrap;
          margin-bottom: 20vh;
          .imgWrap{
            width:50%;
            display: inline-block;
            img{
              width: 80%;
            }
          }
          .rightArrange{
            text-align: right;
          }
          .leftArrange{
            text-align: left;
          }  
        }
      }
    }
    .fade-enter-active, .fade-leave-active {
      transition: all 2s ease;
    }
    .fade-enter-from, .fade-leave-to {
      opacity: 0;
    }
  </style>
  
  <script>
  
  export default {
    name: 'resEnvir',
    data(){
      return{
        imgCount: 8,
        isShow: false
      }
    },
    mounted(){
      setTimeout(() => {
        this.isShow = true;
      },1000);
    }
  }
  </script>