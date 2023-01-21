<template>
  <div class="content">
    <navigation-bar></navigation-bar>
    <div class="container">
      <div class="row">

        <div class=" col d-block crew-header">
          <span>02</span>
          <p class="crew-text">meet your crew</p>
        </div>

        <div class="col crew-info">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navigationBar from '../navigationBar.vue';
export default {
  name: 'crewPage',
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
  background-image: url(@/assets/crew/background-crew-desktop.jpg);
  background-size: cover;

  .crew-header {
    position: absolute;
    width: 382px;
    height: 34px;
    left: 166.5px;
    top: 212px;

    span {
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

    .crew-text {
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

  .crew-info{
    position: absolute;
    left: 11vw;
    top: 44vh;
    width: 100%;
    height: 47vh;
  }
}
</style>