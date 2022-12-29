<template>
  <div class="container">
    <div class="row">
      <div class="col dest-img">
        <img src="../../assets/destination/image-europa.webp">
      </div>

      <div class="col dest-details">
        <div class="row">
          <div class="col dest-nav">
            <destination-nav></destination-nav>
          </div>

          <div class="col dest-name">
            <p>EUROPA</p>
          </div>

          <div class="col dest-description">
            <p>The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter 
            lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, 
            curling, hockey, or simple relaxation in your snug wintery cabin.</p>
          </div>
          <div class="col line"></div>

          <div class="col dest-info">

            <div class="row">
              <div class="col dest-distance">
                <p class="info-title">AVG. DISTANCE</p>
                <p class="info-number">628 MIL. km</p>
              </div>

              <div class="col dest-time ms-5">
                <p class="info-title">Est. travel time</p>
                <p class="info-number">3 years</p>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  </div>
</template>

<script>
import destinationNav from './destinationNav.vue';
export default {
  name: 'europaPage',
  components: {
    destinationNav,
  }
}
</script>

<style lang="scss" scoped>
@use '@/assets/styles/-variables.scss' as *;

.dest-img {
  position: absolute;
  width: 445px;
  height: 445px;
  left: 230px;
  top: 343px;
}

.dest-details {
  position: absolute;
  width: 445px;
  height: 472px;
  left: 900px;
  top: 310px;

  .dest-name {
    position: absolute;
    height: 115px;
    left: 0.11%;
    right: 25.06%;
    top: calc(50% - 115px/2 - 107.5px);

    p {
      font-family: $belle;
      font-style: normal;
      font-weight: 400;
      font-size: 100px;
      line-height: 115px;
      color: white;
    }
  }

  .dest-description {
    position: absolute;
    height: 128px;
    left: 0%;
    right: 0.22%;
    top: calc(50% - 128px/2 + 28px);

    p {
      font-family: $barlow;
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 32px;
      color: $lightGray;
    }
  }

  .line {
    position: absolute;
    left: 0.22%;
    right: 0%;
    top: 86.93%;
    bottom: 18.86%;
    height: 1px;
    width: 436px;
    background-color: #383B4B;
    mix-blend-mode: normal;
  }

  .dest-info {
    position: absolute;
    left: 0.11%;
    top: 87.08%;
    bottom: 0%;
    width: 360px;
    height: 62px;

    .dest-distance {
      position: absolute;
      left: 0.11%;
      right: 67.75%;
      top: 87.08%;
      bottom: 0%;
      height: 62px;

      .info-title {
        position: absolute;
        height: 17px;
        top: calc(50% - 17px/2 - 22px);
        font-family: $barlowCond;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        letter-spacing: 2.3625px;
        text-transform: uppercase;
        color: $lightGray;
      }

      .info-number {
        position: absolute;
        height: 32px;
        top: calc(50% - 32px/2 + 14.5px);
        font-family: $belle;
        font-style: normal;
        font-weight: 400;
        font-size: 28px;
        line-height: 32px;
        text-transform: uppercase;
        color: white;
      }
    }

    .dest-time {
      position: absolute;
      left: 50%;
      right: 22.58%;
      top: 87.08%;
      bottom: 0%;
      height: 62px;

      .info-title {
        position: absolute;
        height: 17px;
        top: calc(50% - 17px/2 - 22px);
        font-family: $barlowCond;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        letter-spacing: 2.3625px;
        text-transform: uppercase;
        color: $lightGray;
      }

      .info-number {
        position: absolute;
        height: 32px;
        top: calc(50% - 32px/2 + 14.5px);
        font-family: $belle;
        font-style: normal;
        font-weight: 400;
        font-size: 28px;
        line-height: 32px;
        text-transform: uppercase;
        color: white;
      }
    }
  }
}
</style>