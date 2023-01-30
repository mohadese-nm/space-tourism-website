<template>
    <div class="container-fluid">
        <div class=" row navigation">
            <div class="col nav-logo">
                <img src="../assets/shared/logo.svg">
            </div>
            <div class="col nav-line">
                <div class="line"></div>
            </div>
            <div class="col nav-blur">
                <div class="nav-links">
                    <div class="row align-items-center justify-content-center">
                        <div class="col link-column me-2">
                            <router-link :to="{name: 'home'}" class="page-link">
                                <span>00</span> HOME
                                <div class="underline"></div>
                            </router-link>

                        </div>

                        <div class="col link-column me-2">
                            <router-link :to="{name: 'destination'}" class="page-link">
                                <span>01</span> DESTINATION
                                <div class="underline"></div>
                            </router-link>
                            
                        </div>

                        <div class="col link-column me-2">
                            <router-link :to="{name: 'crew'}" class="page-link">
                                <span>02</span> CREW
                                <div class="underline"></div>
                            </router-link>
                            
                        </div>

                        <div class="col link-column">
                            <router-link :to="{name: 'technology'}" class="page-link">
                                <span>03</span> TECHNOLOGY
                                <div class="underline"></div>
                            </router-link>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default{
    name: 'navigationBar'
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/-variables.scss' as *;
.navigation{
    position: relative;
    height: 96px;
    left: 0;
    top: 40px;

    .nav-logo{
        max-width: 48px;
        max-height: 48px;
        margin-top: 24px;
        margin-left: 20px;
        img{
            width: 48px;
            height: 48px;
            background: #0B0D17;
        }
    }
    .nav-line{
        display: flex;
        justify-content: end;
        .line{
            margin: 43px -16px 0 0;
            width: 400px;
            height: 1px;
            background-color: white;
            mix-blend-mode: normal;
            opacity: 0.25;
        }
    }
    .nav-blur{
        max-width: 840px;
        height: 96px;
        background: rgba(255, 255, 255, 0.04);
        backdrop-filter: blur(40px);

        .nav-links{
            width: 555px;
            height: 19px;
            margin-left: 80px;
            margin-top: 39px;

            .link-column{
                text-align: center;
                padding: 0;
                .page-link {
                    display: block;
                    height: 19px;
                    font-family: $barlow;
                    font-style: normal;
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 19px;
                    letter-spacing: 2.7px;
                    color: white;

                    .underline {
                        margin-top: 35px;
                        height: 3px;
                        background-color: white;
                        display: none;
                    }
                    &:hover {
                        .underline {
                            display: block;
                            opacity: 0.5;
                        }
                    }
                    &.router-link-active{
                        .underline{
                            display: block;
                            opacity: 1;
                        }
                    }
                }
            }
        }
    }
}

@media screen and (max-width: 992px){
    .navigation{
        display: flex;
        justify-content: space-between;
        top: 0;
        .nav-line{
            display: none;
        }
        .nav-blur{
            width: 63%;
            left: auto;
            right: -12px;
            .nav-links{
                width: 395px;
                left: 0;
                top: 38px;
                bottom: 0;
                right: 0;
                margin-right: auto;
                margin-left: auto;
                .page-link{
                    font-family: $barlowCond;
                    font-size: 12px;
                    line-height: 17px;
                    letter-spacing: 2.3625px;
                    font-weight: lighter;
                    span{
                        display: none;
                    }

                }
            }
        }
    }
}
</style>