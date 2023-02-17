<template>
  <div class="content">
    <navigation-bar></navigation-bar>
    <div class="container">
      <div class="dest-header">
        <span>01</span><p class="dest-text">Pick your destination</p>
      </div>
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
import navigationBar from '../navigationBar.vue';


export default {
  name: 'destinationPage',
  components: {
    navigationBar
  }
}
</script>

<style lang="scss" scoped>
@use '@/assets/styles/-variables.scss' as *;
.content {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 900px;
  background-image: url(@/assets/destination/background-destination-desktop.jpg);
  background-size: cover;
  .dest-header{
    position: absolute;
    width: 382px;
    height: 34px;
    left: 166.5px;
    top: 200px;
    span{
      width: 26px;
      position: absolute;
      height: 34px;
      left: 0%;
      right: 93.19%;
      top: calc(50% - 34px/2);
      font-family: $barlowCond;
      font-style: normal;
      font-weight: 700;
      font-size: 28px;
      line-height: 34px;
      letter-spacing: 4.725px;
      color: white;
      mix-blend-mode: normal;
      opacity: 0.25;
    }
    .dest-text{
      position: absolute;
      height: 34px;
      width: 327px;
      left: 14.14%;
      right: 1.57%;
      top: calc(50% - 34px/2);
      font-family: $barlowCond;
      font-style: normal;
      font-weight: 400;
      font-size: 28px;
      line-height: 34px;
      letter-spacing: 4.725px;
      text-transform: uppercase;
      color: white;
    }
  }

  .dest-nav {
    width: 285px;
    height: 34px;
    position: absolute;
    left: 900px;
    top: 310px;
  }

}

@media screen and (max-width:1200px){
  .content{
    height: 1024px;
    background-image: url(@/assets/destination/background-destination-tablet.jpg);
    background-size: cover;
    .dest-header{
      top: 136px;
      left: 4vw;
      width: 272px;
      height: 24px;
      span{
        font-size: 20px;
        line-height: 24px;
        letter-spacing: 3.375px;
      }
      .dest-text{
        font-size: 20px;
        line-height: 24px;
        letter-spacing: 3.375px;
      }
    }
  }
}

@media screen and (max-width:768px){
  .content{
    height: 860px;
    background-image: url(@/assets/destination/background-destination-mobile.jpg);
    background-size: cover;
    .dest-header{
      width: 221px;
      position: relative;
      top: 8px;
      margin-right: auto;
      margin-left: auto;
      span{
        width: 15px;
        height: 19px;
        font-size: 16px;
        line-height: 19px;
        letter-spacing: 2.7px;
      }
      .dest-text{
        width: 205px;
        height: 20px;
        font-size: 16px;
        line-height: 19px;
        letter-spacing: 2.7px;
      }
    }
  }
}
</style>