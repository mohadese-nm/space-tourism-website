<template>
  <div class="container">
    <div class="row">
        <div class="col-lg-7 tech-info align-items-center">
            <div class="row">
                <div class="col tech-header">
                    <span>03</span>
                    <p class="header-text"> space launch 101</p>
                </div>
            </div>
            <div class="row main-text">
                <div class="col-lg-3 tech-nav">
                    <tech-nav></tech-nav>
                </div>
                <div class="col-lg-9 tech-description">
                    <div class="row">
                        <div class="col terminology">
                            <p>the terminology ...</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col tech-name">
                            <p>launch vehicle</p>
                        </div>
                    </div> 
                    <div class="row">   
                        <div class="col tech-about">
                            <p>A launch vehicle or carrier rocket is a rocket-propelled vehicle used to 
                                carry a payload from Earth's surface to space, usually to Earth orbit or 
                                beyond. Our WEB-X carrier rocket is the most powerful in operation. 
                                Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col tech-image">
            <img src="../../assets/technology/image-launch-vehicle-portrait.jpg">
        </div>
    </div>
  </div>
</template>

<script>
import techNav from './techNav.vue'
export default {
    name: 'launchVehicle',
    components: {
        techNav
    }
}
</script>

<style lang="scss" scoped>
@use '@/assets/styles/-variables.scss' as *;

.container{
        margin-top: 16vh;
        .tech-info{
            margin-left: 7vw;
            .tech-header{
                span{
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

                .header-text{
                    display: inline-block;
                    position: relative;
                    left: 2vw;
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

            .main-text{
                margin-top: 14vh;
                .tech-description{
                .terminology{

                    p{
                        font-family: $barlowCond;
                        font-style: normal;
                        font-weight: 400;
                        font-size: 16px;
                        line-height: 19px;
                        letter-spacing: 2.7px;
                        color: $lightGray;

                    }
                }
                .tech-name{
                    p{
                        font-family: $belle;
                        font-style: normal;
                        font-weight: 400;
                        font-size: 56px;
                        line-height: 64px;
                        color: #FFFFFF;
                        text-transform: uppercase;
                    }
                }

                .tech-about{
                    p{
                        max-width: 30vw;
                        font-family: 'Barlow';
                        font-style: normal;
                        font-weight: 400;
                        font-size: 18px;
                        line-height: 32px;
                        color: $lightGray;
                    }
                }
            }
        }
    }

        .tech-image{
            img{
                position: absolute;
                top: 40vh;
                right: 0;
            }

        }
}

</style>