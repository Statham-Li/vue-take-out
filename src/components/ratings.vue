<template>
  <div class="rate">
    <div class="ratings">
      <div class="ratings-content">
        <div class="ratings-detail-left border-1px-right">
          <p class="ratings-num">3.9</p>
          <p class="zhpf">综合评分</p>
          <p class="exc">高于周边商家69.2%</p>
        </div>
        <div class="ratings-detail-right">
          <div class="describe">
            <p class="des-name">服务态度</p>
            <div class="ratings-pic">
              <img src="../resource/img/star36_on@2x.png" alt="">
              <img src="../resource/img/star36_on@2x.png" alt="">
              <img src="../resource/img/star36_on@2x.png" alt="">
              <img src="../resource/img/star36_on@2x.png" alt="">
              <img src="../resource/img/star36_off@2x.png" alt="">
            </div>
            <div class="des-rating">3.9</div>
          </div>
          <div class="describe">
            <p class="des-name">商品评价</p>
            <div class="ratings-pic">
              <img src="../resource/img/star36_on@2x.png" alt="">
              <img src="../resource/img/star36_on@2x.png" alt="">
              <img src="../resource/img/star36_on@2x.png" alt="">
              <img src="../resource/img/star36_on@2x.png" alt="">
              <img src="../resource/img/star36_off@2x.png" alt="">
            </div>
            <div class="des-rating">4.0</div>
          </div>
          <div class="describe">
            <p class="des-name">送达时间</p>
            <p class="time">42分钟</p>
          </div>
        </div>
      </div>
      <div class="ratings-wrapper">
       <div class="tag">
         <p class="all">全部<span>57</span></p>
         <p class="perfect">满意<span>47</span></p>
         <p class="no-perfect">不满意<span>10</span></p>
       </div>
        <div class="talk">
          <ul>
            <li class="ratings-item">
              <div class="ave"></div>
              <div class="item-right">
                <ul>
                  <li class="username">用户名<span class="talk-time">2018-06-12 14:21</span></li>
                  <li class="stars">
                    <img src="../resource/img/star36_on@2x.png" alt="">
                    <img src="../resource/img/star36_on@2x.png" alt="">
                    <img src="../resource/img/star36_on@2x.png" alt="">
                    <img src="../resource/img/star36_on@2x.png" alt="">
                    <img src="../resource/img/star36_on@2x.png" alt="">
                  </li>
                  <li class="ratings-talk">啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</li>
                  <li class="best">666</li>
                </ul>
              </div>
            </li>
            <li class="ratings-item">
              <div class="ave"></div>
              <div class="item-right">
                <ul>
                  <li class="username">用户名<span class="talk-time">2018-06-12 14:21</span></li>
                  <li class="stars">
                    <img src="../resource/img/star36_on@2x.png" alt="">
                    <img src="../resource/img/star36_on@2x.png" alt="">
                    <img src="../resource/img/star36_on@2x.png" alt="">
                    <img src="../resource/img/star36_on@2x.png" alt="">
                    <img src="../resource/img/star36_on@2x.png" alt="">
                  </li>
                  <li class="ratings-talk">啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</li>
                  <li class="best">666</li>
                </ul>
              </div>
            </li>
            <li class="ratings-item">
              <div class="ave"></div>
              <div class="item-right">
                <ul>
                  <li class="username">用户名<span class="talk-time">2018-06-12 14:21</span></li>
                  <li class="stars">
                    <img src="../resource/img/star36_on@2x.png" alt="">
                    <img src="../resource/img/star36_on@2x.png" alt="">
                    <img src="../resource/img/star36_on@2x.png" alt="">
                    <img src="../resource/img/star36_on@2x.png" alt="">
                    <img src="../resource/img/star36_on@2x.png" alt="">
                  </li>
                  <li class="ratings-talk">啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</li>
                  <li class="best">666</li>
                </ul>
              </div>
            </li>
            <li class="ratings-item">
              <div class="ave"></div>
              <div class="item-right">
                <ul>
                  <li class="username">用户名<span class="talk-time">2018-06-12 14:21</span></li>
                  <li class="stars">
                    <img src="../resource/img/star36_on@2x.png" alt="">
                    <img src="../resource/img/star36_on@2x.png" alt="">
                    <img src="../resource/img/star36_on@2x.png" alt="">
                    <img src="../resource/img/star36_on@2x.png" alt="">
                    <img src="../resource/img/star36_on@2x.png" alt="">
                  </li>
                  <li class="ratings-talk">啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</li>
                  <li class="best">666</li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <shopcart></shopcart>
  </div>
</template>

<script>
import axios from "axios"
import Vue from "vue"
import BScroll from "better-scroll"
import shopcart from './shopcart'
export default {
  name: 'ratings',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    shopcart
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" ref="stylesheet/stylus">
@import '../assets/stylus/index.styl'
.ratings
    display block
    position absolute
    top 174px
    bottom 48px
    left 0
    right 0
    width 100%
    overflow hidden
    background #f3f5f7
    .ratings-content
      display flex
      margin-top 2px
      width 100%
      height 106px
      margin-bottom 18px
      .ratings-detail-left
        flex 2
        height 106px
        background #fff
        box-sizing border-box
        padding 18px
        //border-right 1px solid rgba(255,255,255,.5)
        border-1px-right (rgb(255,255,255))
        .ratings-num
          font-size 24px
          line-height 28px
          text-align center
          color rgb(255,153,0)
          font-weight bolder
        .zhpf
          font-size 12px
          line-height 12px
          color rgb(7,17,27)
          text-align center
          margin 6px
        .exc
          margin-top 8px
          text-align center
          font-size 10px
          line-height 10px
          color rgb(147,153,159)
      .ratings-detail-right
        flex 4
        height 106px
        box-sizing border-box
        padding 18px 24px
        background #fff
        .describe
          font-size 12px
          line-height 18px
          color rgb(7,17,27)
          margin-bottom 8px
          .des-name
            float left
            margin 0 12px
          .ratings-pic
            float left
            margin-right 12px
            width 80px
            img
              width 12px
              height 12px
          .time
            float left
            margin-left 12px
            line-height 18px
            font-size 12px
            color rgb(147,153,159)
    .ratings-wrapper
      position absolute
      top 123px
      left 0
      bottom 0
      width 100%
      background #fff
      .tag
        height 35px
        width 100%
        padding 18px
        color #fff
        border-1px(rgba(7,17,27,0.1))
        p
          border-radius:2px
          width 60px
          height 35px
          float left
          margin-right 9px
          text-align center
          line-height 35px
          font-size 12px
          font-weight bold
          &.all
            background rgb(0,160,220)  
          &.perfect
            background rgb(204,236,248)
          &.no-perfect
            background rgb(233,235,236)
          span
            font-size 10px
      .talk
        display flex
        flex-direction column
        position relative
        bottom 0
        overflow hidden
        .ratings-item
          display flex
          flex 1
          margin 18px
          border-1px(rgba(7,17,27,0.1))
          .ave
            flex 0 0 28px
            height 28px
            border-radius 50%
            border 0.5px solid rgba(7,17,27,.3)
          .item-right
            flex 1
            display flex
            flex-direction column
            font-size 12px
            padding 0 12px 12px 12px
            .username
              flex 1
              padding 4px 0
              .talk-time
                float right
                color #666
            .stars
              flex 1
              padding 4px 0
              img
                width 12px
                height 12px
            .ratings-talk
              flex 1
              padding 4px 0
            .best
              flex 1
              padding 4px 0
              
        
              
</style>
