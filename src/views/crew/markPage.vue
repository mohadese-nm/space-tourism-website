<template>
    <div class="container">
        <div class="row crew-content">
            <div class="col-lg crew-image">
                <img src="../../assets/crew/image-mark-shuttleworth.webp">
            </div>
            <div class="col-lg crew-info order-md-first">
                <div class="row">
                    <div class="col-12 crew-nav order-md-last">
                    <crew-nav></crew-nav>
                    </div>
                    <div class="col-12 crew-role">
                        <p>Mission Specialist</p>
                    </div>
                    <div class="col-12 crew-name">
                        <p>Mark Shuttleworth</p>
                    </div>
                    <div class="col-12 crew-about mt-2">
                        <p class="about-text">
                            Mark Richard Shuttleworth is the founder and CEO of Canonical, 
                            the company behind the Linux-based Ubuntu operating system. 
                            Shuttleworth became the first South African to travel to space as a space tourist.
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
  name: 'markPage',
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
            max-width: 530px;
            img{
                position: absolute;
                bottom: 0;
                
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
                    height:610px;
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
                    width: 300px;
                    height: 460px;
                    left: 50%;
                    margin-left: -180px;
                }
            }
        }
    }
}
</style>