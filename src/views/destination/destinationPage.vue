<template>
  <div class="content">
    <navigation-bar></navigation-bar>
    <div class="container">
      <div class="dest-header">
        <span>01</span><p class="dest-text">Pick your destination</p>
      </div>
      
      <div class="dest-content">
        <moon-page></moon-page>
      </div>
    </div>
  </div>
</template>

<script>
import navigationBar from '../navigationBar.vue';
import moonPage from './moonPage.vue'


export default {
  name: 'destinationPage',
  components: {
    navigationBar,
    moonPage
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
    top: 212px;
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

}
</style>