<template>
  <section class="home">
    <!--  rules  -->
    <p class="rules">
      {{$m.rules.text}}
    </p>
    <!--  login  -->
    <article class="login">
      <div>
        <p>
          {{$m.login.text}}<br>
          {{$m.login.text2}}
        </p>
        <img src="../assets/ic_gift@2x.png" alt="">
        <p>
          {{$m.login.text3}}
        </p>
        <button>{{$m.login.text4}}</button>
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
        <img src="../assets/pic_placeholder_01@2x.png" alt="">
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
  </section>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  created() {
    console.log(this.$m.index)
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
    &>div{
      width: 3.35rem;
      height: 5.18rem;
      border-radius: .08rem;
      background-color: #ffffff;
      margin-bottom: .2rem;
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
        &>p{
          text-align: center;
          font-size: .26rem;
          color: #000000;
          &:nth-of-type(1){
            font-weight: 600;
          }
          &:nth-of-type(2){

          }
          &:nth-of-type(3){
            &>img{

            }
          }
        }
      }
    }
  }
}
</style>
