<template>
    <div id="homeContact">
      <div class="bgContainer">
        <div class="bg"></div>
        <div class="textWrap">
          <div class="titleSentence">
            <h1 class="titleSen1">初食不知曲中意</h1>
            <h1 class="titleSen2">再食已是曲中人</h1>
          </div>
          <div class="contentSentence">
            <h5>我有牛排，你有故事嗎？今晚不食人間煙火，只有舌尖上的感動！</h5>
          </div>
          <div class="callToAction">
            <h1>預約您的特等席</h1>
          </div>
          <div class="resBtnDiv contactBtn">
            <div class="resBtn">
              <h3><router-link to="/contact" class="nav-link">立即預約</router-link></h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <style lang="scss" scoped>
    #homeContact{
      position: relative;
      min-height: 100vh;
      >.bgContainer{
        >.bg{
          background-position: center 80%;
          background-image: url("@/assets/img/bgHomeContact.jpg");
          min-height: 100vh;
          filter: brightness(40%);
          -webkit-filter: brightness(40%);
        }
        >.textWrap{
          position: relative;
          width: 100%;
          min-height: 100vh;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          padding-bottom: 20vh;
          >.titleSentence{
            width: 70%;
            margin-top: 80px;
            >h1{
              text-align: center;
              line-height: 1.5em;
              font-family: "DFKai-SB","STKaiti";
              text-shadow: 0px 0px 15px #fff;
            }
            >.titleSen1{
              position: relative;
              right: 10%;
            }
            >.titleSen2{
              position: relative;
              left: 10%;
            }
          }
          >.contentSentence{
            margin-top: 140px;
            width: 80%;
            >h5{
              text-align: center;
              text-shadow: 3px 3px 5px $mainColor;
            }
          }
          >.callToAction{
            margin-top: 80px;
            width: 80%;
            >h1{
              text-align: center;
              text-shadow:  4px 2px 1px #000
            }
          }
          >.contactBtn{
            margin-top: 30px;
          }
        }
      }
    }
  </style>
  
  <script>
  export default {
    name: 'homeContact'
  }
  </script>