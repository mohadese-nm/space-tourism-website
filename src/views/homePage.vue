<template>
    <div class="content">
        <navigation-bar></navigation-bar>
        <div class="container-fluid">
            <div class="row home-content justify-content-center align-items-center">
                <div class="col-xl home-text">
                    <p class="home-p1">
                        SO, YOU WANT TO TRAVEL TO
                    </p>
                    <p class="home-p2">
                        SPACE
                    </p>
                    <p class="home-p3">
                        Let’s face it; if you want to go to space, you might as well genuinely go to 
                        outer space and not hover kind of on theedge of it. Well sit back, and relax 
                        because we’ll give you a truly out of this world experience!
                    </p>
                </div>
          
                <div class="col-xl home-explore">
                        <div class="explore-oval">
                            <p class="explore-text">
                                EXPLORE
                            </p>
                        </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import navigationBar from './navigationBar.vue';
export default {
    name: 'homePage',
    components: {
        navigationBar,
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/styles/-variables.scss' as *;
.content {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 900px;
    background-image: url(../assets/home/background-home-desktop.jpg);
    background-size: cover;

    .home-content{
        margin: 44vh 160px 0 160px;
        .home-text{
            max-width: 450px;
            .home-p1{
                display: flex;
                justify-content: center;
                height: 34px;
                max-width: 446px;
                font-family: $barlowCond;
                font-style: normal;
                font-weight: 400;
                font-size: 28px;
                line-height: 34px;
                letter-spacing: 4.725px;
                color: $lightGray;
            }
            .home-p2{
                display: flex;
                justify-content: center;
                margin-left: -5px;
                max-width: 446px;
                font-family: $belle;
                font-style: normal;
                font-weight: 400;
                font-size: 150px;
                line-height: 172px;
                color: white;
            }
            .home-p3{
                display: flex;
                justify-content: center;
                max-width: 446px;
                font-family: $barlow;
                font-style: normal;
                font-weight: 400;
                font-size: 18px;
                line-height: 32px;
                color: $lightGray;
            }

        }
        .home-explore{
            display: flex;
            justify-content: center;
            padding: 14vh 0  0 26vw;
            .explore-oval {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 274px;
                height: 274px;
                background-color: white;
                border-radius: 50%;
                box-shadow: 0px 0px 0px 1px #ffffff1a;
                transition: box-shadow 0.5s linear;
                &:hover{
                    box-shadow: 0px 0px 0px 80px #ffffff1a;
                }

                .explore-text {
                    text-align: center;
                    margin: auto 0 auto 0;
                    font-family: $belle;
                    font-style: normal;
                    font-weight: 400;
                    font-size: 32px;
                    line-height: 37px;
                    letter-spacing: 2px;
                    color: $navyBlue;
                }
            }
            
        }
    }
    
}

@media screen and (max-width:1444px){
    .content{
        .home-content{
            .home-explore{
                padding-left: 9vw;
            }
        }
    }
}

@media screen and (max-width:1200px){
    .content{
        height: 1024px;
        background-image: url(../assets/home/background-home-tablet.jpg);
        .home-content{
            margin-top: 19vh;
            .home-text{
                top: 200px;
                text-align: center;
                .home-p1{
                    font-size: 20px;
                    line-height: 24px;
                    text-align: center;
                }
            }
            .home-explore{
                padding: 0;
                margin-top: 100px;
                .explore-oval{
                    width: 242px;
                    height: 242px;
                }
            }
        }
    }
}


@media screen and (max-width:768px){
    .content{
        .home-content{
            margin: 10vh 100px 0 100px;
            .home-text{
                .home-p1{
                    letter-spacing: 3.375px;
                }
                .home-p2{
                    line-height: 150px;
                    text-align: center;
                }
                .home-p3{
                    font-size: 16px;
                    line-height: 28px;
                    text-align: center;
                }
            }
        }
    }
}

@media screen and (max-width:600px){
    .content{
        .home-content{
            margin: 10vh 40px 0 40px;
            .home-text{
                .home-p1{
                    font-size: 18px;
                    line-height: 21px;
                    text-align: center;
                    letter-spacing: 2.7px;
                }
                .home-p2{
                    font-size: 95px;
                    line-height: 110px;
                    text-align: center;
                }
                .home-p3{
                    font-size: 15px;
                    line-height: 25px;
                    text-align: center;
                }
            }
        }
    }
}

@media screen and (max-width:450px){
    .content{
        .home-content{
            margin: 10vh 40px 0 40px;
            .home-text{
                .home-p1{
                    font-size: 16px;
                    line-height: 19px;
                    text-align: center;
                    letter-spacing: 2.7px;
                }
                .home-p2{
                    font-size: 80px;
                    line-height: 100px;
                }
                .home-p3{
                    font-size: 15px;
                    line-height: 25px;
                    text-align: center;
                }
            }
        }
    }
}
</style>