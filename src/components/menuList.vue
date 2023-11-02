<template>
    <div id="menuList">
      <div class="bgContainer">
        <div class="bg"></div>
      </div>
      <div v-if="isShow">
        <div v-for="item in menuList" :key="item.id">
          <div class="categoryWrap">
            <div class="categoryTitle">
              <h1>{{item.category}}</h1>
            </div>
            <div class="categoryContent">
              <div v-for="(dish,index) in item.dishes" :key="index"  class="col-10 col-sm-5">
                <div class="dishWrap">
                  <div class="dishPic col-10">
                    <img :src="require(`@/assets/img/menu/${dish.dishSrc}`)" alt="">
                  </div>
                  <div class="dishText col-10">
                    <div class="dishChName">
                      <h3>{{dish.dishChName}}</h3>
                    </div>
                    <div class="dishEnName">
                      <h6>-{{dish.dishEnName}}-</h6>
                    </div>
                    <div class="dishPrice">
                      <h4>${{dish.dishPrice}}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <style lang="scss" scoped>
    #menuList{
      min-height: 100vh;
      >.bgContainer{
        position: relative;
        >.bg{
          position: fixed;
          background-image: url("@/assets/img/bgWood.jpg");
          filter: brightness(80%);
          -webkit-filter: brightness(80%);
        }
      }
      .categoryWrap{
        >.categoryTitle{
          text-align: center;
          text-shadow: 5px 5px 2px #000;
          color: $minorColor;
          >h1{
            font-size: 3rem;
            margin:3rem auto 3rem;
          }
        }
        >.categoryContent{
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
          .dishWrap{
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            margin: 2rem auto 2rem;
            >.dishPic{
              max-width: 400px;
              border: 3px solid #fff;
              box-shadow: 5px 5px 10px 5px #000;
              >img{
                width: 100%;
              }
            }
            >.dishText{
              max-width: 400px;
              margin-top: 1rem;
              text-shadow: 5px 5px 2px #000;
              >.dishEnName{
                >h6{
                  font-style: italic;
                }
              }
              >.dishPrice{
                margin-top: 1rem;
                >h4{
                  color: $mainColor;
                }
              }
            }
          }
        }
      }
    }
  </style>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'menuList',
    data(){
      return{
        isShow: false,
        menuList: []
      }
    },
    async mounted(){
      let url = 'menuList.json';
      await axios.get(url).then((response) => {
        this.menuList = response.data;
      }).catch(error => {
        console.log(error);
      })
      this.isShow = true;
    }
  }
  </script>