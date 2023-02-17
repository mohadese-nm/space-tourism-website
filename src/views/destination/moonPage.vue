<template> 
  <div class="container">
    <div class="row dest-content">
      <div class="col-12 col-xl-7 dest-img">
        <img src="../../assets/destination/image-moon.webp" >
      </div>

      <div class="col-12 col-xl-5 dest-details">
        <div class="row">

          <div class="col-12 dest-nav">
            <destination-nav></destination-nav>
          </div>
          
          <div class="col-12  dest-name">
            <p>MOON</p>
          </div>

          <div class="col-12  dest-description">
            <p>See our planet as you’ve never seen it before. A perfect relaxing 
              trip away to help regain perspective and come back
              refreshed. While you’re there, take in some history by visiting the 
              Luna 2 and Apollo 11 landing sites.</p>
          </div>
          <div class="col-12  line"></div>

          <div class="col-12 mt-3 dest-info">
            <div class="row distance">
              <div class="col-sm dest-distance">
                <p class="info-title">AVG. DISTANCE</p>
                <p class="info-number">384,400 km</p>
              </div>

              <div class="col-sm dest-time">
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
    display: flex;
    justify-content: space-between;
    margin: 30vh auto 0 6vw;
    .dest-img{
      width: 445px;
      height: 445px;
      padding-top: 7vh;
    }

  .dest-details{
    width: 470px;
    height: 472px;
    .dest-name {
        height: 115px;
        margin-top: 7vh;
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
        margin-top: 7vh;
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
        margin-top: 7vh;
      }
      .dest-info{
        width: 370px;
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
          padding-left: 3vw;
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

@media screen and (max-width:1200px){
  .container{
    .dest-content{
      margin: 16vh auto 0 auto;
      max-width: 574px;
      justify-content: center;
      .dest-img{
        max-width: 350px;
        max-height: 350px;
        padding-top: 0;
        img{
          width: 350px;
          height: 350px;
        }
      }
      .dest-details{
        width: 573px;
        height: fit-content;
        margin-top: 5vh;
        .dest-nav{
          display: flex;
          justify-content: center;
        }
        .dest-name{
          margin-top: 4vh;
          p{
            font-size: 80px;
            line-height: 92px;
            text-align: center;
          }
        }
        .dest-description{
          margin-top: 3vh;
          p{
            height: 84px;
            font-size: 16px;
            line-height: 28px;
            text-align: center;
          }
        }
        .line{
          margin: 2vh auto 0 auto;
          width: 572px;
        }
        .dest-info{
          width: 572px;
          .distance{
            justify-content: center;
            .dest-distance{
              text-align: center;
            }
            .dest-time{
              text-align: center;
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width:992px){
  .container{
    .dest-content{
      .dest-img{
        max-width: 330px;
        max-height: 330px;
        img{
          width: 320px;
          height: 320px;
        }
      }
    }
  }
}

@media screen and (max-width:768px){
  .container{
    .dest-content{
      .dest-img{

      }
      .dest-details{
        
      }
    }
  }
}

</style>