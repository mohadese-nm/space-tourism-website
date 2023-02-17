<template>
  <div class="container">
    <div class="row dest-content">
      <div class="col-12 col-xl-7 dest-img">
        <img src="../../assets/destination/image-europa.webp">
      </div>

      <div class="col-12 col-xl-5 dest-details">
        <div class="row">
          <div class="col-12 dest-nav">
            <destination-nav></destination-nav>
          </div>

          <div class="col-12 dest-name">
            <p>EUROPA</p>
          </div>

          <div class="col-12 dest-description">
            <p>The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter 
            lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, 
            curling, hockey, or simple relaxation in your snug wintery cabin.</p>
          </div>
          <div class="col-12 line"></div>

          <div class="col-12 dest-info">
            <div class="row distance">
              <div class="col-12 col-md-6 dest-distance">
                <p class="info-title">AVG. DISTANCE</p>
                <p class="info-number">628 MIL. km</p>
              </div>

              <div class="col-12 col-md-6 dest-time">
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

.container{
  .dest-content{
    display: flex;
    justify-content: space-between;
    margin: 10vh auto 0 6vw;
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
        max-height: 128px;
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
        max-width: 420px;
        margin-top: 3vh;
        .distance{
          .dest-distance{
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
}

@media screen and (max-width:1200px){
  .container{
    .dest-content{
      margin: 6vh auto 0 auto;
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
        margin-top: 3vh;
        .dest-nav{
          display: flex;
          justify-content: center;
        }
        .dest-name{
          margin-top: 3vh;
          p{
            font-size: 80px;
            line-height: 92px;
            text-align: center;
          }
        }
        .dest-description{
          margin-top: 2vh;
          p{
            height: 84px;
            font-size: 16px;
            line-height: 28px;
            text-align: center;
          }
        }
        .line{
          margin: 1vh auto 0 auto;
          width: 572px;
        }
        .dest-info{
          max-width: 390px;
          margin-left: auto;
          margin-right: auto;
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
    padding: 0;
    .dest-content{
      margin: 2vh auto 0 auto;
      max-width: 538px;
      .dest-img{
        max-width: 260px;
        max-height: 230px;
        img{
          width: 230px;
          height: 230px;
        }
      }
      .dest-details{
        padding: 0;
        .dest-name{
          margin-top: 4vh;
          height: 65px;
          p{
            font-size: 75px;
            line-height: 70px;
          }
        }
        .dest-description{
          max-width: fit-content;
          margin-top: 3vh;
          p{
            font-size: 16px;
            line-height: 28px;
          }
        }
        .line{
          margin: 3vh auto 0 auto;
          padding: 0 24px 0 24px;
          width: 100%;
        }
        .dest-info{
          height: 180px;
          margin-top: 30px;
            .distance{
              height: 180px;
              display: flex;
              justify-content: space-between;
              .dest-distance{
                height: 62px;
                .info-title{
                  letter-spacing: 2.36px;
                }
              }
              .dest-time{
                height: 62px;
                .info-title{
                  letter-spacing: 3.36px;
                }
              }
            }
          }
      }
    }
  }
}

@media screen and (max-width:576px){
  .container{
    .dest-content{
      margin: 7vh auto 0 auto;
      max-width: 400px;
      .dest-img{
        max-width: 208px;
        max-height: 183px;
        img{
          width: 180px;
          height: 180px;
        }
      }
      .dest-details{
        .dest-nav{
          margin-top: 2vh;
        }
        .dest-name{
          height: 65px;
          p{
            font-size: 56px;
            line-height: 64px;
          }
        }
        .dest-description{
          margin-top: 1vh;
          p{
            font-size: 15px;
            line-height: 25px;
          }
        }
        .line{
          margin: 3vh auto 0 auto;
          padding: 0 24px 0 24px;
          width: 100%;
        }
        .dest-info{
          height: 180px;
          margin-top: 30px;
            .distance{
              height: 180px;
              display: flex;
              justify-content: space-between;
              .dest-distance{
                height: 62px;
                .info-title{
                  letter-spacing: 2.36px;
                }
              }
              .dest-time{
                height: 62px;
                .info-title{
                  letter-spacing: 3.36px;
                }
              }
            }
          }
      }
    }
  }
}
</style>