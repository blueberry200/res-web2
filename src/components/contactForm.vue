<template>
    <div id="contactForm">
      <div class="bgContact"></div>
      <div class="titleText">
        <h1>聯絡我們</h1>
      </div>
      <div class="formWrap">
        <form id="formSelf" autocomplete="off" action="" method="post" @submit.prevent="onSubmit">
          <div class="container">
            <div class="row">
              <div class="col-12 col-sm-6">
                <div class="contactName inputWrap">
                  <input type="text" autocomplete="off" placeholder=" " name="name" class="contactInput" :class="{ 'is-invalid': userNameError }" v-model="userName" maxlength="20" required>
                  <label for="name">
                    <h4>姓名</h4>
                  </label>
                  <div class="invalid-feedback">
                    {{ userNameErrMsg }}
                  </div>
                </div>
              </div>
              <div class="col-12 col-sm-6">
                <div class="contactPhone inputWrap">
                  <input type="tel" autocomplete="off" placeholder=" " name="phone" class="contactInput" :class="{ 'is-invalid': phoneNumberError }" v-model.lazy="phoneNumber" maxlength="10">
                  <label for="phone">
                    <h4>手機號碼</h4>
                  </label>
                  <div class="invalid-feedback">
                    {{ phoneNumberErrMsg }}
                  </div>
                </div>
              </div>
              <div class="col-12">
                <div class="contactEmail inputWrap">
                  <input type="email" autocomplete="off" placeholder=" " name="email" class="contactInput" :class="{ 'is-invalid': emailError }" v-model.lazy="email" maxlength="50" required>
                  <label for="email">
                    <h4>電子郵件</h4>
                  </label>
                  <div class="invalid-feedback">
                    {{ emailErrMsg }}
                  </div>
                </div>
              </div>
              <div class="col-12">
                <div class="contactMsg inputWrap">
                  <textarea name="message" rows="5" autocomplete="off" placeholder=" " class="contactInput" :class="{ 'is-invalid': yourMsgError }" v-model="yourMsg" maxlength="200" required></textarea>
                  <label for="message">
                    <h4>您的訊息</h4>
                  </label>
                  <div class="invalid-feedback">
                    {{ yourMsgErrMsg }}
                  </div>
                </div>
              </div>
              <div class="col-12">
                <div class="contactSubmit">
                  <button type="submit">
                    <h4>提交表單</h4>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <style lang="scss" scoped>
    #contactForm{
      min-height: 100vh;
      display: flex;
      position: relative;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      >.bgContact{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url("@/assets/img/bgContact.jpg");
        background-size: cover;
        background-position: center center;
        z-index: -10;
        animation: animationBg 5s linear infinite;
        @keyframes animationBg {
          100% {
            filter: hue-rotate(360deg);
          }
        }
      }
      >.formWrap{
        width: 90%;
        border: 3px solid #fff;
        border-radius: 30px;
        padding: 20px 10px;
        backdrop-filter: blur(10px);
        >form{
          >.container{
            >.row{
              .inputWrap{
                position: relative;
                width: 100%;
                margin: 30px 0;
                padding: 0;
                border-bottom: 2px solid #fff;
                >.requiredStar{
                  position: absolute;
                  top: -15px;
                  left: 0;
                  font-size: 1.2em;
                  color: #f00;
                }
                >label{
                  display: flex;
                  position: absolute;
                  top: -10px;
                  left: 10px;
                  color: #fff;
                  pointer-events: none;
                  transition: all .5s ease;
                }
                >input, textarea{
                  width: 100%;
                  background: transparent;
                  border: none;
                  outline: none;
                  color: #fff;
                  font-size: 1.2em;
                }
                >input:required~label::before, textarea:required~label::before{
                  content: "*";
                  font-size: 1.2em;
                  color: #f00;
                  position: absolute;
                  top: -5px;
                  left: -10px;
                }
                input:focus~label, input:not(:placeholder-shown)~label, textarea:focus~label, textarea:valid~label{
                  top: -25px;
                  scale: 0.9;
                  color: $minorColor;
                }
              }
              .inputWrap:has(input:focus, input:not(:placeholder-shown), textarea:focus, textarea:valid){
                border-bottom: 2px solid $minorColor;
              }
              .invalid-feedback{
                position: absolute;
                bottom: -30px;
                font-size: 1.1em;
              }
              .contactSubmit{
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                align-items: center;
                margin: 20px auto;
                >button{
                  width: 170px;
                  padding: 10px 0px;
                  text-align: center;
                  border: 2px solid $minorColor;
                  color: $minorColor;
                  font-family: "DFKai-SB","STKaiti";
                  transition: all 0.5s ease;
                  box-shadow: 6px 6px 15px 3px #000;
                  background: transparent;
                }
                >button:hover{
                  background: $minorColor;
                  color: #000;
                  transition: all 0.5s ease;
                }
              }
            }
          }
        }
      }
    }
  </style>
  
  <script>
  export default {
    name: 'contactForm',
    data(){
      return{
        userName: '',
        userNameError: false,
        userNameErrMsg: '',
        phoneNumber: '',
        phoneNumberError: false,
        phoneNumberErrMsg: '',
        email: '',
        emailError: false,
        emailErrMsg: '',
        yourMsg: '',
        yourMsgError: false,
        yourMsgErrMsg: '',
        submit: '',
        submitError: true,
        submitErrMsg: '',
      }
    },
    watch:{
      userName: function(){
        let isText = /^[\u4E00-\u9FA5A-Za-z\s]+(·[\u4E00-\u9FA5A-Za-z]+)*$/
        if ((!isText.test(this.userName)) && (this.userName != '')) {
          this.userNameError = true;
          this.userNameErrMsg = '請勿包含特殊字元';
        }
        else if ((this.userName.length >= 20) && (this.userName != '')) {
          this.userNameError = true;
          this.userNameErrMsg = '已達字數上限，20個字';
        }
        else {
          this.userNameError = false;
        }
      },
      phoneNumber: function(){
        let isPhone = /^09[0-9]{8}$/;
        if ((!isPhone.test(this.phoneNumber)) && (this.phoneNumber != '')) {
          this.phoneNumberError = true;
          this.phoneNumberErrMsg = '電話號碼格式錯誤';
        }
        else if ((this.phoneNumber.length != 10) && (this.phoneNumber != '')) {
          this.phoneNumberError = true;
          this.phoneNumberErrMsg = '電話號碼為10個數字';
        }
        else {
          this.phoneNumberError = false;
        }
      },
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
      },
      yourMsg: function(){
        let isMsg = /[@,?$\s\u4E00-\u9FA50-9A-Za-z\s\u3002|\uff1f|\uff01|\uff0c|\u3001|\uff1b|\uff1a|\uff08|\uff09|\u300a|\u300b|\u3008|\u3009|\u3010|\u3011|\u300e|\u300f|\u300c|\u300d|\ufe43|\ufe44|\u3014|\u3015|\u2026|\u2014|\uff5e|\ufe4f|\uffe5]+$/; // eslint-disable-line
        if ((!isMsg.test(this.yourMsg)) && (this.yourMsg != '')) {
          this.yourMsgError = true;
          this.yourMsgErrMsg = '請勿包含特殊字元';
        }
        else if ((this.yourMsg.length >= 200) && (this.yourMsg != '')) {
          this.yourMsgError = true;
          this.yourMsgErrMsg = '已達字數上限，200個字';
        }
        else {
          this.yourMsgError = false;
        }
      }
    },
    methods:{
      onSubmit(){
        if ((this.userName == '') || (this.email == '') || (this.yourMsg == '')){
          alert('請輸入完整資訊');
        }
        else if (this.userNameError){
          alert('使用者名稱有誤');
        }
        else if (this.phoneNumberError){
          alert('手機號碼有誤');
        }
        else if (this.emailError){
          alert('電子郵件有誤');
        }
        else if (this.yourMsgError){
          alert('訊息欄位有誤');
        }
        else{
          this.userName = '';
          this.phoneNumber = '';
          this.email = '';
          this.yourMsg = '';
          alert('感謝您的來信！');
        }
      }
    }
  }
  </script>