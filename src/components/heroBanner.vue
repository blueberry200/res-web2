<template>
    <div id="heroBanner">
      <div class="videoContainer">
        <video src="@/assets/steakHero.mp4" autoplay muted loop webkit-playsinline playsinline></video>
      </div>
      <div class="textContainer">
        <div class="titleSen titleSen1">
          <h1>從一開始&nbsp;我們注定相遇</h1>
        </div>
        <div class="titleSen titleSen2">
          <h6>-Nice to meet you-</h6>
        </div>
        <div class="titleSen titleSen3">
          <h5>肉霸網羅中西方各式的牛排製程，創造出獨一無二的調理方式，只為了找到最耐吃的口感，這悠遠的理想，尊貴的您，要一同共襄盛舉嗎？</h5>
        </div>
        <div class="resBtnDiv heroBtn">
          <div class="resBtn">
            <h3><router-link to="/menu" class="nav-link">查看菜單</router-link></h3>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <style lang="scss" scoped>
    #heroBanner{
      position: relative;
      height: calc(100vh - 5em);
      .videoContainer{
        position: absolute;
        width: 100vw;
        height: 100vh;
        overflow: hidden;
        z-index: 1;
        filter: brightness(40%);
        -webkit-filter: brightness(40%);
        >video{
          position: absolute;
          //寬度的裝置能顯示置中位置
          left: 0;
          right: 0;
          width: 100%;
          height: calc(100vh - 5em);
          object-fit: cover;
        }
      }
      .textContainer{
        position: absolute;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 20vh;
        text-align: center;
        z-index: 5;
        >.titleSen1{
          margin-top: 25vh;
          width: 80%;
          >h1{
            text-align: center;
            line-height: 1.5em;
            text-shadow: 0px 0px 15px #fff;
          }
        }
        >.titleSen2{
          width: 60%;
          >h6{
            font-family: "DFKai-SB","STKaiti";
            font-style: italic;
          }
        }
        >.titleSen3{
          margin-top: 10vh;
          width: 70%;
          >h5{
            font-family: "DFKai-SB","STKaiti";
          }
        }
        >.heroBtn{
          margin-top: 5vh;
        }
      }
    }
  </style>
  
  <script>
  export default {
    name: 'heroBanner'
  }
  </script>