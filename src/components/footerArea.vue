<template>
    <div id="footerArea">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 col-lg-4">
            <div class="colWrap">
              <h2>門市資訊</h2>
              <div class="colListWrap">
                <h5>
                  0987-654-321
                </h5>
                <p>
                  平日 11:30 - 14:00、17:30 - 21:00<br />
                  假日 11:00 - 14:00、17:00 - 22:00
                </p>
                <p>
                  台北市中正區承德路一段2號
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-4">
            <div class="colWrap">
              <h2>建議頁面</h2>
              <div class="colListWrap">
                <ul>
                  <li><router-link to="/menu" class="nav-link">珍饌佳餚</router-link></li>
                  <li><router-link to="/contact" class="nav-link">聯絡資訊</router-link></li>
                  <li><router-link to="/privacy" class="nav-link">網站政策</router-link></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-4">
            <div class="colWrap">
              <h2>訂閱電子報</h2>
              <p>我們不定時推出特色餐點及各式優惠，歡迎訂閱電子報以取得最新資訊！</p>
              <div class="NewsLetterWrap">
                <form id="formSelf" autocomplete="off" action="" method="post" @submit.prevent="onSubmit">
                  <input type="email" autocomplete="off" name="email" placeholder="輸入您的電子郵件" :class="{ 'is-invalid': emailError }" v-model.lazy="email" maxlength="50" required>
                  <button type="submit">
                    <p>訂閱</p>
                  </button>
                  <div class="invalid-feedback">
                    {{ emailErrMsg }}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="copyrightArea">
        <p>肉霸國際股份有限公司 Meat King International {{time}} @ All Rights Reserved &nbsp; | &nbsp; Web Design by Blueberry</p>
      </div>
    </div>
  </template>
  
  <style lang="scss" scoped>
    #footerArea{
      min-height: 50vh;
      background-color: $bgColor;
      color: white;
      >.container-fluid{
        border-top: 1px solid #fff;
        >.row{
          justify-content: center;
          align-items: center;
          >.col-lg-4{
            border-left: 1px solid #ffffff;
            margin: 60px auto;
            >.colWrap{
              height: 35vh;
              >h2{
                text-align: center;
                margin: 20px auto;
                color: $minorColor;
              }
              >p{
                text-align: center;
                margin: 0 20px;
              }
              >.colListWrap{
                display: flex;
                height: 20vh;
                flex-direction: column;
                justify-content: space-around;
                align-items: center;
                margin: 5vh auto;
                >h5, p{
                  text-align: center;
                  margin: 10px 0;
                }
                >ul{
                  list-style: none;
                  display: flex;
                  flex-direction: column;
                  justify-content: space-around;
                  align-items: center;
                  height: 20vh;
                  padding: 0;
                  >li{
                    color: #fff;
                    font-size: 1.3em;
                  }
                  >li:hover{
                    color: #ff5900aa;
                    text-shadow: 0em 0em 1em $mainColor;
                  }
                }
              }
              >.NewsLetterWrap{
                display: flex;
                justify-content: center;
                align-items: center;
                height: 20vh;
                >#formSelf{
                  width: 90%;
                  position: relative;
                  display: flex;
                  flex-wrap: wrap;
                  justify-content: center;
                  align-items: center;
                  >input, >button{
                    display: inline-block;
                    line-height: 2em;
                  }
                  >input{
                    max-width: 300px;
                    width: 70%;
                    outline: none;
                    border-color: $minorColor;
                  }
                  >input:focus, input:not(:placeholder-shown){
                    box-shadow: 0 0 1px 1px $minorColor;
                  }
                  >button{
                    max-width: 100px;
                    width: 30%;
                    text-align: center;
                    border: 2px solid $minorColor;
                    letter-spacing: 0;
                    color: $minorColor;
                    transition: all 0.5s ease;
                    box-shadow: 6px 6px 15px 3px #000;
                    background: transparent;
                    >p{
                      margin: 0;
                    }
                  }
                  >button:hover{
                    background: $minorColor;
                    color: #000;
                    transition: all 0.5s ease;
                  }
                  >.invalid-feedback{
                    position: absolute;
                    top: 40px;
                    text-align: center;
                    font-size: 1.2em;
                  }
                }
              }
            }
            @media screen and (max-width: 991px){
              border-left: none;
              margin-bottom: 0;
            }
          }
          >.col-lg-4:first-child{
            border-left: none;
          }
        }
        @media screen and (max-width: 991px){
          border: none;
        }
      }
      >.copyrightArea{
        display: flex;
        justify-content: center;
        align-items: center;
        border-top: 1px solid #fff;
        background-color: #222;
        color: #ffffff66;
        >p{
          width: 80%;
          margin: 20px;
          text-align: center;
        }
      }
    }
  </style>
  
  <script>
  export default {
    name: 'footerArea',
    data(){
      return{
        email: '',
        emailError: false,
        emailErrMsg: '',
        time: ''
      }
    },
    watch: {
      email: function(){
        let isMail = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/; // eslint-disable-line
        if ((!isMail.test(this.email)) && (this.email != '')) {
          this.emailError = true;
          this.emailErrMsg = 'email格式錯誤';
        }
        else if ((this.email.length >= 50) && (this.email != '')) {
          this.emailError = true;
          this.emailErrMsg = '已達字數上限，50個字';
        }
        else {
          this.emailError = false;
        }
      }
    },
    methods:{
      onSubmit(){
        if (this.email == ''){
          alert('欄位不得為空');
        }
        else if (this.emailError){
          alert(this.emailErrMsg);
        }
        else{
          this.email = '';
          alert('感謝您的訂閱！');
        }
      },
      nowTime(){
        let nowDate = new Date();
        this.time = nowDate.getFullYear();
      }
    },
    mounted(){
      this.nowTime();
    }
  }
  </script>