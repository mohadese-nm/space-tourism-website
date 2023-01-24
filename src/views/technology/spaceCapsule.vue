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
                            <p>Space capsule</p>
                        </div>
                    </div> 
                    <div class="row">   
                        <div class="col tech-about">
                            <p>A space capsule is an often-crewed spacecraft that uses a blunt-body 
                              reentry capsule to reenter the Earth's atmosphere without wings. Our 
                              capsule is where you'll spend your time during the flight. It includes 
                              a space gym, cinema, and plenty of other activities to keep you entertained.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col tech-image">
            <img src="../../assets/technology/image-space-capsule-portrait.jpg">
        </div>
    </div>
  </div>
</template>

<script>
import techNav from './techNav.vue'
export default {
    name: 'spaceCapsule',
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