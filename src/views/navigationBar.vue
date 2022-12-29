<template>
    <div class="container">
        <div class="navigation">
            <div class="nav-logo">
                <img src="../assets/shared/logo.svg">
            </div>
            <div class="nav-line">
            </div>
            <div class="nav-blur">
                <div class="nav-links">
                    <div class="row align-items-center justify-content-center">
                        <div class="col link-column me-2">
                            <router-link :to="{name: 'home'}" class="page-link">
                                00 HOME
                                <div class="underline"></div>
                            </router-link>

                        </div>

                        <div class="col link-column me-2">
                            <router-link :to="{name: 'destination'}" class="page-link">
                                01 DESTINATION
                                <div class="underline"></div>
                            </router-link>
                            
                        </div>

                        <div class="col link-column me-2">
                            <router-link :to="{name: 'crew'}" class="page-link">
                                02 CREW
                                <div class="underline"></div>
                            </router-link>
                            
                        </div>

                        <div class="col link-column">
                            <router-link :to="{name: 'technology'}" class="page-link">
                                03 TECHNOLOGY
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
        position: absolute;
        width: 48px;
        height: 48px;
        left: 0;
        top: 24px;
        background-color: white;
        img{
            position: absolute;
            width: 48px;
            height: 48px;
            left: 0;
            top: 0;
            background: #0B0D17;
        }
    }
    .nav-line{
        position: absolute;
        width: 500px;
        height: 1px;
        left: 112px;
        top: 48px;
        background-color: white;
        mix-blend-mode: normal;
        opacity: 0.25;
    }
    .nav-blur{
        position: absolute;
        width: 62.3%;
        height: 96px;
        left: 600px;
        top: 0px;
        background: rgba(255, 255, 255, 0.04);
        backdrop-filter: blur(40px);

        .nav-links{
            position: absolute;
            width: 555px;
            height: 19px;
            left: 80px;
            top: 39px;

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
</style>