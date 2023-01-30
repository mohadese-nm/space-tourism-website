<template>
    <div class="content">
        <navigation-bar></navigation-bar>
        <div class="container">
            <div class="row">
                <div class="col home-text">
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
          
                <div class="col home-explore">
                    <div class="explore-hover">
                        <div class="explore-oval">
                            <p class="explore-text">
                                EXPLORE
                            </p>
                        </div>
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
    .home-text{
        position: absolute;
        width: 450px;
        height: 382px;
        left: 165px;
        top: 387px;
        .home-p1{
            position: absolute;
            height: 34px;
            width: 385px;
            left: 0.11%;
            right: 15.67%;
            top: calc(50% - 34px/2 - 174px);
            font-family: $barlowCond;
            font-style: normal;
            font-weight: 400;
            font-size: 28px;
            line-height: 34px;
            letter-spacing: 4.725px;
            color: $lightGray;
        }
        .home-p2{
            position: absolute;
            height: 172px;
            left: 0%;
            right: 1.11%;
            top: calc(50% - 172px/2 - 47px);
            font-family: $belle;
            font-style: normal;
            font-weight: 400;
            font-size: 150px;
            line-height: 172px;
            color: white;
        }
        .home-p3{
            position: absolute;
            height: 128px;
            left: 0.11%;
            right: 1.22%;
            top: calc(50% - 128px/2 + 127px);
            font-family: $barlow;
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            line-height: 32px;
            color: $lightGray;
        }

    }
    .home-explore{
        position: absolute;
        width: 274px;
        height: 274px;
        left: 1001px;
        top: 495px;
        .explore-oval {
            position: absolute;
            left: 19.56%;
            right: 19.56%;
            top: 19.56%;
            bottom: 19.56%;
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
                position: absolute;
                height: 37px;
                left: 22.63%;
                right: 23.36%;
                top: calc(50% - 37px/2 + 0.5px);
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

@media screen and (max-width:768px) {
    .content{
        background-image: url(../assets/home/background-home-tablet.jpg);
    }
}
</style>