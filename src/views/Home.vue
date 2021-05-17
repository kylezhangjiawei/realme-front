<template>
  <section class="home">
    <!--  rules  -->
    <p class="rules" @click="showPopup()">
      {{$m.rules.text}}
    </p>
    <!--  login  -->
    <article class="login">
      <div>
        <p>
          {{$m.login.text}}<br>
          {{$m.login.text2}}
        </p>
        <img src="../assets/ic_gift@2x.png" alt="" @click="show1Popup()">
        <p>
          {{$m.login.text3}}
        </p>
        <button @click="show2Popup()">{{$m.login.text4}}</button>
      </div>
    </article>
<!--   steps   -->
    <article class="steps">
        <div>
            <div>
              <p>
                <img src="../assets/ic_running@2x.png" alt="">
                <span>{{$m.steps.text}}</span>
              </p>
              <p>
                {{$m.steps.text1}}
              </p>
            </div>
          <p>
            <span>3,700</span>
            <span>&nbsp;/&nbsp;3000&nbsp;{{$m.steps.text2}}</span>
          </p>
          <p>
            {{$m.steps.text3}}
          </p>
        </div>
    </article>
<!--   date -->
    <article class="date">
      <div>
        <p>{{$m.week.text}}</p>
        <div>
          <div v-for="(item,index) in $m.week.text1">
            <p><img src="../assets/ic_lipin01@2x.png" alt=""></p>
            <p>
              <img src="../assets/ic_day_01@2x.png" alt="">
              <span :class="{empty:index === ($m.week.text1.length - 1)}"></span>
            </p>
            <span>{{item}}</span>
          </div>
        </div>
        <p>
          <button>{{$m.week.text2}}</button>
        </p>
      </div>
    </article>
<!--   tips  -->
    <article class="tips">
      <img src="../assets/ic_title@2x.png" alt="">
    </article>
<!--   product  -->
    <article class="product">
      <div>
        <p>
          <img src="../assets/pic_placeholder_01@2x.png" alt="">
        </p>
        <div>
          <p>realme narzo 20</p>
          <p>The Surge of Powr The Surge of Powr</p>
          <p>
            <img src="../assets/money.png" alt="">
            <span>10,499</span>
          </p>
        </div>
      </div>
      <div>
        <p>
          <img src="../assets/pic_placeholder_01@2x.png" alt="">
        </p>
        <div>
          <p>realme narzo 20</p>
          <p>The Surge of Powr The Surge of Powr</p>
          <p>
            <img src="../assets/money.png" alt="">
            <span>10,499</span>
          </p>
        </div>
      </div>
    </article>
<!--  规则弹出框  -->
    <van-popup v-model:show="show">
      <section class="tipsModal">
        <article>
          <span>{{$m.rules.text1}}</span>
          <van-icon name="cross" @click="show = false" />
        </article>
        <article>
          {{$m.rules.text2}}<br>
          {{$m.rules.text3}}<br>
          {{$m.rules.text4}}<br>
          {{$m.rules.text5}}<br>
          {{$m.rules.text6}}<br>
          {{$m.rules.text6}}
        </article>
      </section>
    </van-popup>
<!-- 优惠券弹出框  -->
    <van-popup v-model:show="show1">
      <section class="couponModal">
        <article>
          <img src="../assets/ic_guan@2x.png" alt="" @click="show1 = false">
        </article>
        <article>
          {{$m.coupon.text0}} <br>
          {{$m.coupon.text}}<br>
          {{$m.coupon.text1}}
        </article>
        <article>
          <img src="../assets/moneys.png" alt="">
          <span>200</span>
          <span>{{$m.coupon.text2}}</span>
        </article>
        <article>
          {{$m.coupon.text3}}
        </article>
        <article>
          <button>{{$m.coupon.text4}}</button>
        </article>
        <article>
          <button>{{$m.coupon.text5}}</button>
        </article>
      </section>
    </van-popup>
<!--    分享模态框 -->
    <van-action-sheet v-model:show="show2" :title="$m.share.text"   :cancel-text="$m.share.text3" :closeable="false"
                      close-on-click-action
                      @cancel="onCancel">
      <div class="shareModal">
        <p>
          <img src="../assets/what.png" alt="">
          <span>{{$m.share.text1}}</span>
        </p>
        <p>
          <img src="../assets/face.png" alt="">
          <span>{{$m.share.text2}}</span>
        </p>
      </div>
    </van-action-sheet>
  </section>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { ref } from 'vue';


export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  setup() {
    const show = ref(false);
    const show1 = ref(false);
    const show2 = ref(false);
    const showPopup = () => {
      show.value = true;
    };
    const show1Popup = () => {
      show1.value = true;
    };
    const show2Popup = () => {
      show2.value = true;
    };
    const onCancel = () => {

    };
    return {
      show,
      showPopup,
      show1,
      show1Popup,
      show2,
      show2Popup,
      onCancel
    };
  },
  created() {
  }
}
</script>
<style lang="scss" scoped>
.home {
  background: url("../assets/pic_di_01@2x.png") 0 0 /cover no-repeat;
  position: relative;
  padding-top: 4.2rem;
  .rules{
    width: 1.1rem;
    height: .5rem;
    background: rgba(0,0,0,.45);
    border-radius:  .25rem 0 0 .25rem ;
    color: #ffffff;
    font-size: .24rem;
    font-weight: 400;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: .35rem;
    right: 0;
    z-index: 10;
  }
  .login{
    padding: .14rem;
    &>div{
      background: url("../assets/ic_background_gift@2x.png")center /cover no-repeat;
      width: 100%;
      height: 9.2rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      &>p{
        &:nth-of-type(1){
          text-align: center;
          font-size: .36rem;
          color: #F67020;
          font-weight: bold;
          padding-top: .52rem;
        }
        &:nth-of-type(2){
          width: 5.45rem;
          font-size: .24rem;
          color: #333333;
          font-weight: 400;
          padding: .24rem 0 .2rem 0;
        }
      }
      &>img{
        width: 6.4rem;
        height: 5.08rem;
      }
      &>button{
        width: 5.85rem;
        height: .74rem;
        border-radius: .37rem;
        background-color: #FFC915;
        border: none;
        outline: none;
        color: #000000;
        font-weight: 600;
        font-size: .28rem;
      }
    }
  }
  .steps{
    padding: 0 .16rem;
    box-sizing: border-box;
    &>div{
      background: url("../assets/ic_background_count@2x.png")center /cover no-repeat;
      width: 100%;
      box-sizing: border-box;
      height: 2.9rem;
      &>div{
        display: flex;
        justify-content: space-between;
        padding: .44rem .46rem 0 .53rem;
        align-items: center;
        box-sizing: border-box;
        &>p{
          &:nth-of-type(1){
            &>img{
              width: .27rem;
              height: .24rem;
              margin-right: .1rem;
            }
            font-size: .3rem;
            color: #000000;
            font-weight: 600;
          }
          &:nth-of-type(2){
            width: 2.38rem;
            height: .55rem;
            border-radius: .28rem;
            border: 1px solid #999999;
            font-size: .28rem;
            font-weight: 500;
            color: #000000;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
      }
      &>p{
        &:nth-of-type(1){
          display: flex;
          padding-top: .28rem;
          text-align: left;
          padding-left: .53rem;
          align-items: baseline;
          &>span{
            font-weight: 600;
            color: #000000;
            font-size: .26rem;
            &:nth-of-type(1){
              font-size: .6rem;
            }
          }
        }
        &:nth-of-type(2){
          padding-left: .53rem;
          padding-top: .16rem;
          font-size: .24rem;
          color: #555555;
          text-align: left;
        }
      }

    }
  }
  .date{
    padding: 0 .28rem 0 .32rem;
    &>div{
      background: url("../assets/ic_background_date@2x.png")center /cover no-repeat;
      height: 4.18rem;
      &>p{
        &:nth-of-type(1){
          font-size: .28rem;
          color: #000000;
          font-weight: 600;
          padding-top: .56rem;
          text-align: left;
          padding-left: .38rem;
        }
        &:nth-of-type(2){
          display: flex;
          justify-content: center;
          align-items: center;
          height: 1.16rem;
          &>button{
            height: .74rem;
            background: #FFC915;
            border-radius: .37rem;
            width: 5.1rem;
            font-size: .28rem;
            color: #000000;
            font-weight: 600;
            border: none;
            outline: none;
          }
        }
      }
      &>div{
        display: flex;
        padding-left: .42rem;
        &>div{
          display: flex;
          flex-direction: column;
          font-size: .22rem;
          color: #555555;
          font-weight: 400;
          &>p{
            &:nth-of-type(1){
              padding-top: .15rem;
              display: flex;
              justify-content: center;
              align-items: center;
              width: .43rem;
              height: .43rem;
              &>img{
                width: .38rem;
                height: .39rem;
              }
            }
            &:nth-of-type(2){
              display: flex;
              align-items: center;
              padding-top: .12rem;
              &>img{
                width:.43rem;
                height:.43rem;
              }
              &>span{
                width: .52rem;
                height: .02rem;
                background-color: #DCDCDC;
              }
              .empty{
                display: none;
              }
            }
          }
          &>span{
            width: .43rem;
            padding-top: .16rem;
          }
        }
      }
    }
  }
  .tips{
    padding: .6rem 0 .56rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    &>img{
      width: 4.61rem;
      height: .65rem;
    }
  }
  .product{
    padding: 0 .23rem 0 .37rem;
    display: flex;
    flex-wrap: wrap;
    &>div{
      width: 3.35rem;
      height: 5.18rem;
      border-radius: .08rem;
      background-color: #ffffff;
      margin-bottom: .2rem;
      overflow: hidden;
      &>p{
        display: flex;
        justify-content: center;
        align-items: center;
        &>img{
          width: 3.35rem;
          height: 3.35rem;
        }
      }
      &>div{
        padding-top: .2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        &>p{
          text-align: center;
          font-size: .26rem;
          color: #000000;
          &:nth-of-type(1){
            font-weight: 600;
          }
          &:nth-of-type(2){
            font-size: .22rem;
            color: #555555;
            width: 2.6rem;
            margin-bottom: .16rem;
          }
          &:nth-of-type(3){
            padding-bottom: .27rem;
            font-size: .28rem;
            color: #FE1230;
            font-weight: bold;
            &>img{
                width: .12rem;
              height: .16rem;
            }
          }
        }
      }
      &:nth-child(odd){
        margin-right: .2rem;
      }
    }
  }
  .tipsModal{
    width: 6.73rem;
    &>article{
      &:nth-of-type(1){
        font-size: .28rem;
        color: #333;
        padding: .3rem .45rem;
        font-weight: 600;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #DCDCDC;
      }
      &:nth-of-type(2){
        padding: .3rem .45rem;
        font-size: .24rem;
        color: #333;
        line-height: .36rem;
        text-align: left;
      }
    }
  }
  .couponModal{
    width: 6.73rem;
    height: 7.46rem;
    background: url("../assets/ic_01@2x.png")center /cover no-repeat;
    display: flex;
    flex-direction: column;
    &>article{
      display: flex;
      &:nth-of-type(1){
        padding: .32rem .42rem;
        display: flex;
        justify-content: flex-end;
        &>img{
          width: .26rem;
          height: .26rem;
        }
      }
      &:nth-of-type(2){
        font-size: .26rem;
        color: #FFE8A1;
        font-weight: bold;
        width: 5.4rem;
        margin: 0 auto;
      }
      &:nth-of-type(3){
        padding-top: .96rem;
        font-size: .4rem;
        color: #FF6000;
        font-weight: 600;
        justify-content: center;
        align-items: center;
        &>img{
          width: .2rem;
          height: .29rem;
          margin-right: .06rem;
        }
      }
      &:nth-of-type(4){
        padding-top: .31rem;
        color: #BA922A;
        font-size: .26rem;
        font-weight: 500;
        justify-content: center;
      }
      &:nth-of-type(5){
        justify-content: center;
        padding-top: 1.06rem;
        &>button{
          height: .74rem;
          border-radius: .37rem;
          background-color: #FFC915;
          width: 5.1rem;
          font-size: .28rem;
          color: #000000;
          font-weight: 600;
          border: none;
          outline: none;
        }
      }
      &:nth-of-type(6){
        justify-content: center;
        padding-top: .3rem;
        &>button{
          height: .74rem;
          border-radius: .37rem;
          width: 5.1rem;
          font-size: .28rem;
          color: #000000;
          font-weight: 600;
          border: .02rem solid #555555;
          outline: none;
          background-color: #fff;
        }
      }
    }
  }
  .shareModal{
    padding-top: .44rem;
    padding-bottom: .48rem;
    display: flex;
    justify-content: center;
    align-items: center;
    &>p{
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      font-size: .28rem;
      color: #333;
      font-weight: 600;
      &>img{
        width: .84rem;
        height: .84rem;
        margin-bottom: .2rem;
      }
      &:nth-of-type(1){
        margin-right: 1.27rem;
      }
    }

  }
}
</style>
<style lang="scss">
.home{
  .van-action-sheet__header{
    font-size: .32rem;
    color: #000;
    font-weight: 600;
    border-bottom: .01rem solid #DCDCDC;
  }
}
</style>
