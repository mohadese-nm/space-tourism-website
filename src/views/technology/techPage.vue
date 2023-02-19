<template>
  <div class="content">
    <navigation-bar></navigation-bar>
    <div class="container">
      <div class="row tech-content">
        <div class="col-12 tech-header">
          <span>01</span><p class="tech-text">Pick your destination</p>
        </div>
        <div class="col-12">
          <router-view></router-view>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import navigationBar from '../navigationBar.vue';
export default {
  name: 'techPage',
  components: {
    navigationBar,
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
  background-image: url(@/assets/technology/background-technology-desktop.jpg);
  background-size: cover;
  .tech-header{
    width: 420px;
    height: 34px;
    margin-top: 15vh;
    margin-left: 8vw;
    span{
      width: 26px;
      height: 34px;
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
    .tech-text{
      padding-left: 28px;
      display: inline-block;
      height: 34px;
      width: 360px;
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
}

@media screen and (max-width:1200px){
  .content{
    .tech-header{
      width: 340px;
      height: 34px;
      margin-top: 8vh;
      margin-left: 0;
      span{
        font-size: 20px;
        line-height: 24px;
        letter-spacing: 3.375px;
      }
      .tech-text{
        display: inline;
        font-size: 20px;
        line-height: 24px;
        letter-spacing: 3.375px;
      }
    }
  }
}
@media screen and (max-width:992px){
  .content{
    height: 1024px;
    background-image: url(@/assets/crew/background-crew-tablet.jpg);
  }
}
@media screen and (max-width:768px){
  .content{
    height: 860px;
    background-image: url(@/assets/crew/background-crew-mobile.jpg);
    background-size: cover;
    .tech-header{
      width: 280px;
      margin: 0 auto 0 auto;
      text-align: center;
      span{
        width: 17px;
        height: 21px;
        font-size: 17px;
        line-height: 20px;
        letter-spacing: 2.9px;
      }
      .tech-text{
        padding-left: 18px;
        width: 205px;
        height: 20px;
        font-size: 18px;
        line-height: 21px;
        letter-spacing: 2.9px;
      }
    }
  }
}

@media screen and (max-width:576px){
  .content{
    height: 800px;
    .tech-header{
      width: 260px;
      margin: 20px auto 0 auto;
      span{
        width: 15px;
        height: 19px;
        font-size: 16px;
        line-height: 19px;
        letter-spacing: 2.7px;
      }
      .tech-text{
        padding-left: 18px;
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