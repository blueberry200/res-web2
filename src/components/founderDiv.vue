<template>
    <div id="founderDiv">
      <div class="bgContainer">
        <div class="bg"></div>
        <div class="container">
          <div class="row">
            <div class="col-7 col-md-6">
              <div class="founderPic">
                <img src="@/assets/img/founder/founder1.jpg">
              </div>
              <div class="founderName">
                <h1 class="chName">鮑伯‧威廉斯</h1>
                <h5 class="enName">Bob Williams</h5>
              </div>
            </div>
            <div class="col-11 col-md-6">
              <div class="textContainer">
                <div class="founderTitle">
                  <h1>那是一切的起點...</h1>
                </div>
                <div class="founderContent">
                  <h5>西元1984年，Bob Williams出生在中國四川省，身為西班牙移民的父親，擁有豐富的畜牧業經驗，因此在四川從事起牛肉進口的事業，Bob Williams也因此接觸到很多肉質檢驗的先進技術，但四川飲食口味偏重，肉質的層次在當地的主流調味沒能獲得充分的展現，這份遺憾一直到25歲那年，Bob Williams決定將家業提升到料理的最前線，帶著中西合併的手藝，以及基於統計的肉質檢驗技術，毅然決然地離開家鄉，那年，也是他與台灣的豔遇...</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <style lang="scss" scoped>
    #founderDiv{
      min-height: 100vh;
      >.bgContainer{
        min-height: 100%;
        >.bg{
          height: 100vh;
          background-position: center center;
          background-image: url("@/assets/img/bgFounder.jpg");
          min-height: 100vh;
          filter: brightness(25%);
          -webkit-filter: brightness(25%);
        }
        >.container{
          >.row{
            height: 100vh;
            display: flex;
            flex-wrap: wrap;
            //手機版圖片置中
            justify-content: center;
            .founderPic{
              max-width: 350px;
              //電腦版圖片置中
              margin: 10vh auto auto;
              >img{
                width: 100%;
                border: 5px solid #fff;
              }
            }
            .founderName{
              max-width: 300px;
              text-align: center;
              font-family: "DFKai-SB","STKaiti";
              //電腦版圖片置中
              margin: 5vh auto auto;
              >h5{
                font-style: italic;
              }
            }
            .textContainer{
              width: 100%;
              display: flex;
              //flex-direction: column;
              flex-wrap: wrap; //也可以使用這個
              //分隔線置中，文字則靠text-align
              text-align: center;
              font-family: "DFKai-SB","STKaiti";
              margin: 15vh auto 10vh;
              align-content: flex-start;
              @media screen and (max-width: 767px){
                margin-top: 10vh;
              }
              >.founderTitle{
                width: 100%;
                text-shadow: 0 0 15px $minorColor;
              }
              >.founderContent{
                width: 100%;
                margin-top: 5vh;
              }
            }
          }
        }
      }
      @media screen and (max-width: 767px){
        //flex-wrap換行無法撐開高度，所以用斷點控制高度
        min-height: 140vh;
      }  
    }
  </style>
  
  <script>
  export default {
    name: 'founderDiv'
  }
  </script>