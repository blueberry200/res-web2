<template>
    <div id="historyKid">
      <div>
        <div class="historyPicWin">
          <div v-for="(item, index) in picCount" :key="index">
            <div class="historyPic" :class="[`historyPic-${id}`, `historyPic${ item }`]">
              <img :src="require(`@/assets/img/history/${picSrcData[item-1]}`)">
            </div>
          </div>
        </div>
        <div class="historyTextWin">
          <h5>
            {{ picText }}
          </h5>
        </div>
      </div>
    </div>
  </template>
  
  <style lang="scss" scoped>
    #historyKid{
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      height: 100vh;
      width: 60vw;
      >div{
        >.historyPicWin{
          position: relative;
          display: flex;
          .historyPic{
            position: absolute;
            border: 3px solid #fff;
            box-shadow: 3px 3px 10px 3px #000;
            >img{
              width: 100%;
            }
          }
          .historyPic1, .historyPic2{
            position: relative;
          }
        }
        >.historyTextWin{
          display: flex;
          justify-content: center;
          margin-top: 5vh;
          margin-bottom: 5vh;
          >h5{
            width: 90%;
            text-align: center;
            @media screen and (max-width: 575px){
              font-size: 1.1rem;
            }
          }
        }
      }
      @media screen and (max-width: 991px){
        height: 90vh;
      }
      @media screen and (max-width: 575px){
        height: 80vh;
      }
    }
  </style>
  
  <script>
  export default {
    name: 'historyKid',
    data(){
      return{
        historyPic: document.getElementsByClassName('historyPic-'+this.id),
        //props的圖片路徑不能直接被require解譯，而且require只能解譯檔名，不能包含路徑
        picSrcData: this.picSrc
      }
    },
    props:[
      'id',
      'picCount',
      'picSrc',
      'picArr',
      'picText'
    ],
    mounted(){
      this.renderPic();
    },
    methods:{
      renderPic(){
        for(let i=0; i<this.picCount; i++){
          this.historyPic[i].style.width = this.picArr[i].width + 'vw';
        //  this.historyPic[i].style.height = this.picArr[i].height + 'vh';
          this.historyPic[i].style.top = this.picArr[i].top + '%';
          this.historyPic[i].style.left = this.picArr[i].left + '%';
          this.historyPic[i].style.scale = this.picArr[i].scale;
          this.historyPic[i].style.zIndex = this.picArr[i].zIndex;
        }
      }
    }
  }
  </script>