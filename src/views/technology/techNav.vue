<template>
  <div class="container">
        <div class="row align-items-center justify-content-center nav-links">
            <div class="col-4 col-lg-12 link-column  mb-3">   
                <router-link :to="{ name: 'launchVehicle' }" class="tech-link">
                    <div class="circle">
                        <p>1</p>
                    </div>
                </router-link>
            </div>

            <div class="col-4 col-lg-12 link-column  mb-3">
                <router-link :to="{ name: 'spacePort' }" class="tech-link">
                    <div class="circle">
                        <p>2</p>
                    </div>
                </router-link>
            </div>

            <div class="col-4 col-lg-12 link-column mb-3">
                <router-link :to="{ name: 'spaceCapsule' }" class="tech-link">
                    <div class="circle">
                        <p>3</p>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'techNav'
}
</script>

<style lang="scss" scoped>
@use '@/assets/styles/-variables.scss' as *;
.container{
    margin-top: 0 !important;
    .nav-links{
    min-width: 135px;
    max-width: 305px;
    max-height: 305px;
    min-height: 100px;
        .link-column{
            padding: 0;
            .tech-link{
                .circle{
                    border-radius: 50%;
                    width: 80px;
                    height: 80px;
                    opacity: 0.25;
                    border: 1px solid #FFFFFF;
                    color: white;
                    text-align: center;
                    position: relative;
                    p{
                        position: absolute;
                        height: 37px;
                        width: 16px;
                        left: 32.5px;
                        top: 22px;
                        font-family: $belle;
                        font-style: normal;
                        font-weight: 400;
                        font-size: 32px;
                        line-height: 37px;
                        text-align: center;
                        letter-spacing: 2px;
                    }
                }

                &:hover {
                    .circle{
                        opacity: 1;
                    }
                }

                &.router-link-active {
                    .circle{
                        opacity: 1;
                        background-color: white;
                        color: $navyBlue;
                    }
                }
            
            }
            
        }
    }
}

@media screen and (max-width:992px){
    .nav-links{
        margin-right: auto;
        margin-left: auto;
    }
}

@media screen and (max-width:768px){
    .container{
        .nav-links{
            max-width: 235px;
            max-height: 90px;
            min-height: 70px;
            .link-column{
                .tech-link{
                    .circle{
                        width: 60px;
                        height: 60px;
                        margin-right: auto;
                        margin-left: auto;
                        p{
                            font-size: 20px;
                            line-height: 28px;
                            left: 23px;
                            top: 16px;
                        }
                    }
                }
            }
        }
    }
}

@media screen and (max-width:576px){
    .container{
        .nav-links{
            max-width: 175px;
            max-height: 60px;
            min-height: 50px;
            .link-column{
                .tech-link{
                    .circle{
                        width: 45px;
                        height: 45px;
                        margin-right: auto;
                        margin-left: auto;
                        p{
                            font-size: 18px;
                            line-height: 20px;
                            left: 15px;
                            top: 13px;
                        }
                    }
                }
            }
        }
    }
}
</style>