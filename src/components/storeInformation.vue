<template>
    <div id="storeInformation">
      <div class="titleText">
        <h1>門市資訊</h1>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-10 col-md-4">
            <div class="storePhone informationWrap">
              <div class="informationTitle">
                <h2>電話</h2>
              </div>
              <p>{{ phone }}</p>
            </div>
          </div>
          <div class="col-10 col-md-4">
            <div class="storeTime informationWrap">
              <div class="informationTitle">
                <h2>營業時間</h2>
              </div>
              <p>{{ time[0] }}</p>
              <p>{{ time[1] }}</p>
            </div>
          </div>
          <div class="col-10 col-md-4">
            <div class="storeAddress informationWrap">
              <div class="informationTitle">
                <h2>門市地址</h2>
              </div>
              <p>{{ address }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <style lang="scss" scoped>
    #storeInformation{
      min-height: 30vh;
      >.container{
        >.row{
          justify-content: center;
          .informationWrap{
            text-align: center;
            margin-bottom: 3rem;
            >.informationTitle{
              margin-bottom: 1rem;
            }
          }
        }
      }
    }
  </style>
  
  <script>
  export default {
    name: 'storeInformation',
    data(){
      return{
        phone: '0987-654-321',
        time: ['平日 11:30 - 14:00、17:30 - 21:00', '假日 11:00 - 14:00、17:00 - 22:00'],
        address: '台北市中正區承德路一段2號'
      }
    }
  }
  </script>