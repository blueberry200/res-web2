<template>
    <div id="serviceBanner">
      <div class="container-fluid">
        <div class="row">
          <div class="serBanPhoto col-sm-6">
          </div>
          <div class="serBanText col-sm-6">
            <h3>除了餐點美味，我們也同樣在乎服務品質，畢竟品嚐美食也很講究氛圍！</h3>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <style lang="scss" scoped>
    #serviceBanner{
      min-height: 50vh;
      @media screen and (max-width: 575px){
        min-height:80vh;
      }
      .serBanPhoto{
        height: 50vh;
        background-image: url('@/assets/img/waitress.png');
        background-size: cover;
        background-position: 50% 50%;
      }
      .serBanText{
        display: flex;
        justify-content: center;
        align-items: center;
        >h3{
          text-align: center;
          width: 80%;
          text-shadow: 0 0 0.2em $minorColor;
          line-height: 1.5em;
          letter-spacing: 2px;
        }
      }
    }
  </style>
  
  <script>
  export default {
    name: 'serviceBanner'
  }
  </script>