<template>
  <div class="container">
    <div class="row technology-content">
        <div class="col-lg-4 tech-image">
            <img class="pic">
        </div>
        <div class="col-lg-7 tech-txt align-items-center order-lg-first">
            <div class="row">
                <div class="col-lg-3 tech-nav">
                    <tech-nav></tech-nav>
                </div>
                <div class="col-lg-9 tech-description">
                    <div class="row tech-info">
                        <div class="col-12 terminology">
                            <p>the terminology ...</p>
                        </div>
                        <div class="col-12 tech-name">
                            <p>Space capsule</p>
                        </div> 
                        <div class="col-12 tech-about">
                            <p>A space capsule is an often-crewed spacecraft that uses a blunt-body reentry 
                                capsule to reenter the Earth's atmosphere without wings. Our capsule is where 
                                you'll spend your time during the flight. It includes a space gym, cinema, 
                                and plenty of other activities to keep you entertained.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
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
        .technology-content{
            .tech-txt{
                margin-left: 7vw;
                .tech-nav{
                    margin-top: auto;
                    margin-bottom: auto;
                }
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

            .tech-image{
                .pic{
                    position: absolute;
                    top: 40vh;
                    right: 0;
                    content: url(@/assets/technology/image-space-capsule-portrait.jpg);
                }

            }
        }
        
}

@media screen and (max-width:1200px){
    .container{
        margin-top: 19vh;
        .technology-content{
            .tech-txt{
                margin-left: 2vw;
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
                            font-size: 52px;
                            line-height: 60px;
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
                            font-size: 17px;
                            line-height: 30px;
                            color: $lightGray;
                        }
                    }
                }
            }

            .tech-image{
                .pic{
                    width: 450px;
                    position: absolute;
                    top: 38vh;
                    right: 0;
                }

            }
        }
    }
}

@media screen and (max-width:992px){
    .container{
        margin-top: 8vh;
        .technology-content{
            .tech-image{
                max-width: 990px;
                height: 350px;
                .pic{
                    left: 0;
                    right: 0;
                    top: 31vh;
                    content: url(@/assets/technology/image-space-capsule-landscape.jpg);
                    width: 100%;
                }
            }
            .tech-txt{
                .tech-nav{
                    display: flex;
                    justify-content: center;
                    margin-top: 50px;
                }
                .tech-description{
                    margin-top: 20px;
                    .tech-info{
                    display: flex;
                    justify-content: center;
                        .terminology{
                            text-align: center;
                        }
                        .tech-name{
                            p{
                                font-size: 42px;
                                line-height: 46px;
                                text-align: center;
                            }
                        }
                        .tech-about{
                            p{
                                font-size: 16px;
                                text-align: center;
                                line-height: 28px;
                                max-width: 520px;
                                margin-right: auto;
                                margin-left: auto;
                            }
                        }
                    }
                }
            }

        }
    }
}
@media screen and (max-width:768px){
    .container{
        margin-top: 4vh;
        .technology-content{
            .tech-image{
                max-width: 770px;
                height: 290px;
                .pic{
                    left: 0;
                    right: 0;
                    top: 22vh;
                    width: 100%;
                    height: 280px;
                }
            }
            .tech-txt{
                .tech-nav{

                }
                .tech-description{
                    .tech-info{
                        .terminology{
                            p{
                                font-size: 15px;
                                line-height: 18px;
                            }
                        }
                        .tech-name{
                            p{
                                font-size: 36px;
                                line-height: 38px;
                            }
                        }
                        .tech-about{
                            p{
                                font-weight: 300;
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
        margin-top: 4vh;
        .technology-content{
            .tech-image{
                max-width: 770px;
                height: 260px;
                .pic{
                    left: 0;
                    right: 0;
                    top: 22vh;
                    width: 100%;
                    height: 250px;
                }
            }
            .tech-txt{
                .tech-description{
                    .tech-info{
                        .terminology{
                            p{
                                font-size: 14px;
                                line-height: 17px;
                            }
                        }
                        .tech-name{
                            p{
                                font-size: 26px;
                                line-height: 30px;
                            }
                        }
                        .tech-about{
                            p{
                                font-weight: 300;
                                font-size: 15px;
                                line-height: 25px;
                            }
                        }
                    }
                }
            }
        }
    }
}

</style>