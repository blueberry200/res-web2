<template>
    <div id="popularMeal">
      <div class="slideWrap">
        <div class="titleText">
          <h1>主廚推薦</h1>
          <div class="titleLine"></div>
          <p>肉霸主廚依經驗推薦以下菜單，除了適合嚐鮮的觀光客，同時也是最耐吃的饕餮特餐。</p>
        </div>
        <div class="slideImgWin">
          <div class="photo" v-for="(item, index) in imgCount" :key="index" :class="`photo${index}`" >
            <img :src="require(`@/assets/img/menu/steak${item}.jpg`)" alt="photo" @load="if( item == (imgCount) ){ autoMove(); }" @touchstart="touchStart" @touchmove.prevent="touchMove" @touchend="if(moveFlag){ touchEnd(); }">
            <h1>{{ slideText[activePhoto].mealChName }}</h1>
            <h6>{{ slideText[activePhoto].mealEnName }}</h6>
            <h4>{{ slideText[activePhoto].mealDes }}</h4>
          </div>
        </div>
        <div class="dotsWrap">
          <div class="dotOutter" v-for="(item, index) in imgCount" :key="index" :class="`dot${index}`">
            <div class="dot"></div>
          </div>
        </div>
        <div class="moveBtns moveBtn1" @click="leftMove()" v-show="!(activePhoto == 0)">
          <h1><i class="fa-solid fa-chevron-left"></i></h1>
        </div>
        <div class="moveBtns moveBtn2" @click="rightMove()" v-show="!(activePhoto == (imgCount-1))">
          <h1><i class="fa-solid fa-chevron-right"></i></h1>
        </div>
        <div class="resBtnDiv contactBtn">
          <div class="resBtn">
            <h4><router-link to="/menu" class="nav-link">查看菜單</router-link></h4>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <style lang="scss" scoped>
    #popularMeal{
      display:flex;
      flex-wrap: wrap;
      justify-content: center;
      background-image: url("@/assets/img/bgSlate.jpg");
      background-size: cover;
      background-position: center center;
      min-height: 100vh;
      >.slideWrap{
        width: 80%;
        position: relative;
        margin: 0 auto 20vh;
        >.slideImgWin{
          position: relative;
          width: 100%;
          margin-top: 8vh;
          overflow: hidden;
          >.photo{
            position: absolute;
            top: 0;
            width: 60%;
            opacity: 0;
            transition: all 1s ease;
            img{
              width: 100%;
              border: 5px solid #fff;
              box-shadow: 5px 5px 20px 5px #000;
            }
            >h1, h4, h6{
              text-align: center;
            }
            >h1, h4{
              margin-top: 20px;
            }
            >h1{
              text-shadow: 0 0 1.2em $mainColor;
            }
            >h6{
              color: $mainColor;
            }
          }
          >.activePhoto{
            opacity: 1;
          }
          >.photo:first-child{
            position: relative;
          }
          @for $i from 0 through 2 {
            .photo#{$i}{
              left: 20 + $i * 100%;
            }
          }
        }
        >.dotsWrap{
          display: flex;
          justify-content: center;
          margin-top: 20px;
          >.dotOutter{
            margin: 5px;
            >.dot{
              width: 16px;
              height: 16px;
              border: 2px solid #fff;
              border-radius: 8px;
              transition: .5s ease;
            }
            >.activeDot{
              background-color: #fff;
              transition: .5s ease;
            }
          }
        }
        >.moveBtns{
          position: absolute;
          display: inline-block;
          top: calc(8vh + 14vw + 250px);
          cursor: pointer;
          transition: 1s ease;
        }
        >.moveBtn1{
          left: 0;
        }
        >.moveBtn2{
          right: 0;
        }
      }
    }
  </style>
  
  <script>
  
  export default {
    name: 'popularMeal',
    data(){
      return{
        fade: 'fade',
        imgCount: 3,
        activePhoto: 0,
        positionArr: [],
        timeCut: null,
        startX: 0,
        moveX: 0,
        moveFlag: false,
        testTT: 0,
        photo: document.getElementsByClassName('photo'),
        dot: document.getElementsByClassName('dot'),
        slideText: [
          {
            mealChName: '厚切菲力',
            mealEnName: 'Fillet Steak',
            mealDes: '脂肪極低，牛最嫩的部位，經由超高溫縮時炭烤，讓口感外酥內軟，鮮嫩多汁。'
          },
          {
            mealChName: '安格斯板腱心',
            mealEnName: 'Blade Steak',
            mealDes: '脂肪少，肉結實，嚼勁恰到好處的板腱肉，喜愛牛筋口感的老食客千萬不能錯過！'
          },
          {
            mealChName: '頂級肋眼',
            mealEnName: 'Rib Eye',
            mealDes: '均勻的油花讓肋眼的香味特別濃郁，大火烹飪後絲滑細緻的口感帶有鮮甜的滋味。'
          }
        ]
      }
    },
    mounted(){
      for(let i=0; i<this.imgCount; i++){
        this.positionArr[i] = 20 + 100 * i;
      }
      this.photo[this.activePhoto].classList.add('activePhoto');
      this.dot[this.activePhoto].classList.add('activeDot');
    },
    beforeUnmount() {
      clearTimeout(this.timeCut);
    },
    watch:{
      activePhoto:{
        handler: function(){
          this.dot[ this.activePhoto ];
        }
      }
    },
    methods:{
      rightMove(){
        if(this.activePhoto < (this.imgCount-1)){
          clearTimeout(this.timeCut);
          this.photo[this.activePhoto].classList.remove('activePhoto');
          this.dot[this.activePhoto].classList.remove('activeDot');
          this.activePhoto += 1;
          this.photo[this.activePhoto].classList.add('activePhoto');
          this.dot[this.activePhoto].classList.add('activeDot');
          for(let i=0; i<this.imgCount; i++){
            this.photo[i].style.left =  (this.positionArr[i] - 100) + "%";
            this.positionArr[i] -= 100;
          }
          this.autoMove();
        }
      },
      leftMove(){
        if(this.activePhoto > 0){
          clearTimeout(this.timeCut);
          this.photo[this.activePhoto].classList.remove('activePhoto');
          this.dot[this.activePhoto].classList.remove('activeDot');
          this.activePhoto -= 1;
          this.photo[this.activePhoto].classList.add('activePhoto');
          this.dot[this.activePhoto].classList.add('activeDot');
          for(let i=0; i<this.imgCount; i++){
            this.photo[i].style.left =  (this.positionArr[i] + 100) + "%";
            this.positionArr[i] += 100;
          }
          this.autoMove();
        }
      },
      autoMove(){
        this.timeCut = setTimeout(() => {
          clearTimeout(this.timeCut);
          if(this.activePhoto < (this.imgCount-1)){
            this.photo[this.activePhoto].classList.remove('activePhoto');
            this.dot[this.activePhoto].classList.remove('activeDot');
            this.activePhoto += 1;
            this.photo[this.activePhoto].classList.add('activePhoto');
            this.dot[this.activePhoto].classList.add('activeDot');
            for(let i=0; i<this.imgCount; i++){
              this.photo[i].style.left =  (this.positionArr[i] - 100) + "%";
              this.positionArr[i] -= 100;
            }
          }else{
            this.photo[this.activePhoto].classList.remove('activePhoto');
            this.dot[this.activePhoto].classList.remove('activeDot');
            this.activePhoto = 0;
            this.photo[this.activePhoto].classList.add('activePhoto');
            this.dot[this.activePhoto].classList.add('activeDot');
            for(let i=0; i<this.imgCount; i++){
              this.positionArr[i] = 20 + 100 * i;
              this.photo[i].style.left = this.positionArr[i] + "%";
            }
          }
          this.timeCut = setTimeout(() => {
            this.autoMove();
          }, 3000); 
        }, 3000);
      },
      touchStart(event){
        clearTimeout(this.timeCut);
        this.startX = event.targetTouches[0].pageX;
      },
      touchMove(event){
        this.moveX = event.targetTouches[0].pageX - this.startX;
        let absMove = -this.positionArr[this.activePhoto] + this.moveX;
        this.photo[this.activePhoto].style.left = absMove + "%";
        this.moveFlag = true;
      },
      touchEnd(){
        if(Math.abs(this.moveX) > 50){
          if(this.moveX > 0 && this.activePhoto > 0){
            this.photo[this.activePhoto].classList.remove('activePhoto');
            this.dot[this.activePhoto].classList.remove('activeDot');
            this.activePhoto -= 1;
            this.photo[this.activePhoto].classList.add('activePhoto');
            this.dot[this.activePhoto].classList.add('activeDot');
            for(let i=0; i<this.imgCount; i++){
              this.positionArr[i] += 100;
              this.photo[i].style.left = this.positionArr[i] + "%";
            }
          }else if(this.moveX < 0 && this.activePhoto < (this.imgCount - 1)){
            this.photo[this.activePhoto].classList.remove('activePhoto');
            this.dot[this.activePhoto].classList.remove('activeDot');
            this.activePhoto += 1;
            this.photo[this.activePhoto].classList.add('activePhoto');
            this.dot[this.activePhoto].classList.add('activeDot');
            for(let i=0; i<this.imgCount; i++){
              this.positionArr[i] -= 100;
              this.photo[i].style.left = this.positionArr[i] + "%";
            }
          }else{
            this.photo[this.activePhoto].style.left = this.positionArr[this.activePhoto] + "%";
            this.moveX = 0;
            this.startX = 0;
          }
        }else{
          this.photo[this.activePhoto].style.left = this.positionArr[this.activePhoto] + "%";
        }
        this.moveFlag = false;
        this.moveX = 0;
        this.startX = 0;      
        this.autoMove();
      }
    }
  }
  </script>