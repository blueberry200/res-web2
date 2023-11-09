<template>
    <div id="historySlide">
      <div class="bgHistory"></div>
      <div class="titleText">
        <h1>~典藏歲月~</h1>
        <p>肉霸主廚依經驗推薦以下菜單，除了適合嚐鮮的觀光客，同時也是最耐吃的饕餮。</p>
      </div>
      <div class="historySlate">
        <div class="yearsWrap">
          <ul>
            <li @click="changeSlide(1)" class="yearItem activeYear">2010</li>
            <li @click="changeSlide(2)" class="yearItem">2012</li>
            <li @click="changeSlide(3)" class="yearItem">2015</li>
            <li @click="changeSlide(4)" class="yearItem">2016</li>
            <li @click="changeSlide(5)" class="yearItem">2020</li>
          </ul>
        </div>
        <div class="eventWrap">
          <div v-if="isShow">
            <div v-for="item in 5" :key="historyList[item-1].id">
              <transition name="topFade" mode="out-in">
                <div v-if="activePic == item">
                  <div class="picsWrap">
                    <historyKid 
                      :id="historyList[item-1].id" 
                      :picCount="historyList[item-1].picCount" 
                      :picSrc="historyList[item-1].picSrc" 
                      :picArr="historyList[item-1].picArr" 
                      :picText="historyList[item-1].picText"
                    />
                  </div>
                </div>
              </transition>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <style lang="scss" scoped>
    #historySlide{
      position: relative;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      min-height: 100vh;
      >.bgHistory{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url("@/assets/img/bgHistory.jpg");
        background-size: cover;
        background-position: center center;
        filter: contrast(50%);
      }
      >.titleText{
        color: #000000;
        width: 80%;
        >p{
          font-weight: 900;
        }
      }
      >.historySlate{
        position: relative;
        display: flex;
        width: 80%;
        margin-bottom: 20vh;
        box-shadow: 5px 5px 15px 5px #000000;
        background-image: url("@/assets/img/bgSlate2.jpg");
        background-size: cover;
        //設定這行才不會被背景蓋過去
        z-index: 1;
        >.yearsWrap{
          display: flex;
          justify-content: center;
          align-items: center;
          width: 25%;
          margin: 50px auto 50px;
          border-right: 2px solid #ffffff;
          >ul{
            list-style: none;
            padding: 0;
            >li{
              line-height: 3em;
              font-size: 1.3em;
              cursor: pointer;
              transition: 0.5s;
            }
            >.activeYear{
              scale: 1.3;
              color: $mainColor;
              font-weight: 600;
              text-shadow: 0em 0em 1em $mainColor;
              transition: 0.5s;
            }
          }
        }
        >.eventWrap{
          width: 75%;
          overflow: hidden;
          height: 100vh;
          .picsWrap{
            position: absolute;
          }
          @media screen and (max-width: 991px){
            height: 90vh;
          }
          @media screen and (max-width: 575px){
            height: 80vh;
          }
        }
      }
    }
  
    .topFade-enter-active, .topFade-leave-active{
      transition: all 2s ease;
    }
    .topFade-enter-from, .topFade-leave-to{
      opacity: 0;
      transform: translateY(-40vh);
    }
  
  </style>
  
  <script>
  import historyKid from '@/components/historyKid.vue'
  import axios from 'axios';
  
  export default {
    name: 'historySlide',
    data(){
      return{
        isShow: false,
        activePic: 1,
        historyList: '',
        historySlide: document.getElementsByClassName('yearItem')
      }
    },
    components:{
      historyKid
    },
    async mounted(){
      let url = 'historyPic.json';
      await axios.get(url).then((response) => {
        this.historyList = response.data;
      }).catch(error => {
        console.log(error);
      })
      this.isShow = true;
    },
    methods: {
      async changeSlide( slideNum ){
        this.historySlide[ this.activePic - 1 ].classList.remove("activeYear");
        this.activePic = '';
        this.historySlide[ slideNum - 1 ].classList.add("activeYear");
        setTimeout(() => {
          this.activePic = slideNum;
        }, 500);
      }
    }
  }
  </script>