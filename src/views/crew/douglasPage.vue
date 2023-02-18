<template>
  <div class="container">
    <div class="row crew-content">
        <div class="col-lg crew-image">
            <img src="../../assets/crew/image-douglas-hurley.webp">
            <div class="line"></div>
        </div>
        <div class="col-lg crew-info order-md-first">
            <div class="row">
                <div class="col-12 crew-nav order-md-last">
                    <crew-nav></crew-nav>
                </div>
                <div class="col-12 crew-role">
                    <p>commander</p>
                </div>
                <div class="col-12 crew-name">
                    <p>Douglas Hurley</p>
                </div>
                <div class="col-12 crew-about mt-2">
                    <p class="about-text">
                        Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former 
                        NASA astronaut. He launched into space for the third time as commander of Crew 
                        Dragon Demo-2.
                    </p>
                </div>
            </div> 
        </div>
    </div>
  </div>
</template>

<script>
import crewNav from './crewNav.vue';
export default {
  name: 'douglasPage',
  components: {
    crewNav
  }
}
</script>

<style lang="scss" scoped>
@use '@/assets/styles/-variables.scss' as *;
.container{
    .crew-content{
        margin-top: 16vh;
        .crew-info{
            margin-left: 7vw;
            .crew-role{
                margin-top: 15vh;
                font-family: $belle;
                font-style: normal;
                font-weight: 400;
                font-size: 32px;
                line-height: 37px;
                text-transform: uppercase;
                color: #FFFFFF;
                mix-blend-mode: normal;
                opacity: 0.5;
            }

            .crew-name{
                font-family: $belle;
                font-style: normal;
                font-weight: 400;
                font-size: 56px;
                line-height: 64px;
                text-transform: uppercase;
                color: #FFFFFF;
            }

            .crew-about{
                .about-text{
                    width: 29.4vw;
                    font-family: 'Barlow';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 18px;
                    line-height: 32px;
                    /* or 178% */
                    color: #D0D6F9;
                }
            }

            .crew-nav{
                height: 20px;
                margin-top: 15vh;
            }
        }

        .crew-image{
            img{
                position: absolute;
                bottom: 0;
            }
            .line{
                display: none;
            }
        }
    }
}

@media screen and (max-width:1245px){
    .container{
        .crew-content{
            .crew-info{
                .crew-role{
                    margin-top: 13vh;
                }
                .crew-nav{
                    margin-top: 10vh;
                }
            }
            .crew-image{
                img{
                    width: 440px;
                    height:560px;
                }   
            }
        }
    }
}

@media screen and (max-width:992px){
    .container{
        .crew-content{
            margin: 0 auto 0 auto;
            width: 540px;
            .crew-info{
                margin: 0 auto 0 auto;
                height: fit-content;
                .crew-role{
                    font-size: 27px;
                    line-height: 31px;
                    text-align: center;
                    margin-top: 7vh;
                }
                .crew-name{
                    font-size: 43px;
                    line-height: 49px;
                    text-align: center;
                }
                .crew-about{
                    margin-top:0;
                    .about-text{
                        font-size: 19px;
                        line-height: 29px;
                        text-align: center;
                        width: 535px;
                    }
                }
                .crew-nav{
                    height: fit-content;
                    margin-top: 3vh;
                }

            }
            .crew-image{
                width: 540px;
                img{
                    width: 360px;
                    height: 500px;
                    left: 50%;
                    margin-left: -180px;
                }
            }
        }
    }
}

@media screen and (max-width:768px){
    .container{
        .crew-content{
            margin-top: 40px;
            .crew-info{
                max-width: 516px;
                .crew-role{
                    font-size: 24px;
                    line-height: 28px;
                }
                .crew-name{
                    font-size: 40px;
                    line-height: 38px;
                }
                .crew-about{
                    .about-text{
                        width: 500px;
                        font-size: 16px;
                        line-height: 26px;
                    }
                }
                .crew-nav{
                    margin-top: 35px;
                }
            }
            .crew-image{
                height: 310px;
                text-align: center;
                img{
                    position: static;
                    width: 250px;
                    height: 300px;
                    margin-right: auto;
                    margin-left: auto;
                }
                .line{
                    display: block;
                    max-width: 500px;
                    height: 1px;
                    background: #383B4B;
                    margin-right: auto;
                    margin-left: auto;
                }
            }
        }
    }
}
</style>