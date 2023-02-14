<template> 
  <div class="container">
    <div class="row justify-content-between dest-content">
      <div class="col pt-3 dest-img">
        <img src="../../assets/destination/image-moon.webp" >
      </div>

      <div class="col dest-details">
        <div class="row">

          <div class="col-12 dest-nav">
            <destination-nav></destination-nav>
          </div>
          
          <div class="col-12 dest-name">
            <p>MOON</p>
          </div>

          <div class="col-12 dest-description">
            <p>See our planet as you’ve never seen it before. A perfect relaxing 
              trip away to help regain perspective and come back
              refreshed. While you’re there, take in some history by visiting the 
              Luna 2 and Apollo 11 landing sites.</p>
          </div>
          <div class="col-12 line"></div>

          <div class="col-12 dest-info">

            <div class="row">
              <div class="col-sm-12 dest-distance">
                <p class="info-title">AVG. DISTANCE</p>
                <p class="info-number">384,400 km</p>
              </div>

              <div class="col-sm-12 dest-time ms-5">
                <p class="info-title">Est. travel time</p>
                <p class="info-number">3 days</p>
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
  name: 'moonPage',
  components: {
    destinationNav
  }
}
</script>

<style lang="scss" scoped>
@use '@/assets/styles/-variables.scss' as *;
.container{
  .dest-content{
    margin: 38vh auto 0 7vw;
    .dest-img{
      width: 445px;
      height: 445px;
    }

  .dest-details{
    width: 445px;
    height: 472px;
    .dest-name {
        height: 115px;
        p{
          font-family: $belle;
          font-style: normal;
          font-weight: 400;
          font-size: 100px;
          line-height: 115px;
          color: white;
        }
      }
      .dest-description{
        height: 128px;
        p{
          font-family: $barlow;
          font-style: normal;
          font-weight: 400;
          font-size: 18px;
          line-height: 32px;
          color: $lightGray;
        }
      }
      .line{
        height: 1px;
        width: 436px;
        background-color: #383B4B;
        mix-blend-mode: normal;
      }
      .dest-info{
        left: 0.11%;
        top: 87.08%;
        bottom: 0%;
        width: 360px;
        height: 62px;
        .dest-distance{
          height: 62px;
          .info-title{
            height: 17px;
            font-family: $barlowCond;
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 17px;
            letter-spacing: 2.3625px;
            text-transform: uppercase;
            color: $lightGray;
          }
          .info-number{
            height: 32px;
            font-family: $belle;
            font-style: normal;
            font-weight: 400;
            font-size: 28px;
            line-height: 32px;
            text-transform: uppercase;
            color: white;
          }
        }
        .dest-time{
          height: 62px;
          .info-title {
              height: 17px;
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
              height: 32px;
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
  }
}
</style>