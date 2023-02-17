<template>
    <div class="container-fluid">
        <div class=" row navigation">
            <div class="col nav-logo">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fill-rule="evenodd">
                    <circle cx="24" cy="24" r="24" fill="#FFF"/>
                    <path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/></g>
                </svg>
            </div>
            <div class="col nav-line">
                <div class="line"></div>
            </div>
            <button class="burger" :class="{'d-none': navVisible}" @click="openMenu">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21" aria-label="menu">
                    <g fill="#D0D6F9" fill-rule="evenodd">
                    <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z"/></g>
                </svg>
            </button>
            <button class="close" :class="{'d-block':navVisible}" @click="closeMenu">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21"><g fill="#D0D6F9" 
                fill-rule="evenodd" aria-label="close menu">
                    <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z"/>
                    <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z"/></g>
                </svg>
            </button>
            <div class="col nav-blur" :class="{'nav-visible': navVisible}">
                <div class="nav-links">
                    
                    <div class="row links-row align-items-center justify-content-center">
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
        name: 'navigationBar',
        data()
        {
            return {
                navVisible: false,
                navBlur: document.querySelector('.nav-blur'),
                burgerel: document.querySelector('.burger'),
                close: document.querySelector('.close')
            }
        },

        methods:{
            openMenu() {
                this.navVisible = true;
            },
            closeMenu() {
                this.navVisible = false;
            }
        }
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
        justify-content: flex-end;
        .line{
            margin: 43px -16px 0 0;
            width: 400px;
            height: 1px;
            background-color: white;
            mix-blend-mode: normal;
            opacity: 0.25;
        }
    }

    .burger{
        display: none;
        width: 25px;
        height: 22px;
        padding: 0;
        background: none;
    }

    .close{
        display: none;
        width: 25px;
        height: 22px;
        padding: 0;
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

@media screen and (max-width: 1200px){
    .navigation{
        display: flex;
        justify-content: space-between;
        top: 0;
        .nav-line{
            display: none;
        }
        .nav-blur{
            max-width: 60%;
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

@media screen and (max-width: 768px){
    .navigation{
        height: 80px;
        .nav-logo{
            width: 40px;
            height: 40px;
        }
        .burger{
            display: block;
            z-index: 10;
            cursor: pointer;
            border: none;
            position: absolute;
            left: 90vw;
            top: 24px;
        }
        .close{
            z-index: 10;
            display: none;
            border: none;
            background: none;
            cursor: pointer;
            position: absolute;
            left: 90vw;
            top: 24px;
        }
        .nav-blur{
            max-width: 70%;
            height: 100vh;
            transform: translateX(100%);
            transition: transform 350ms ease-out;
            .nav-links{
                .links-row{
                    display: flex;
                    flex-direction: column;
                    padding-top: 17%;
                    padding-left: 12%;
                    max-width: fit-content;
                    .link-column{
                        text-align: start;
                        margin-right: 0!important;
                        margin-bottom: 3em;
                        .page-link{
                            color: $lightGray;
                            span{
                                display: inline-block;
                            }
                            &:hover{
                                .underline{
                                    display: none;
                                }
                                opacity: 0.5;
                            }
                            &.router-link-active{
                                .underline{
                                    display: none;
                                }
                                color: white;
                            }
                        }
                    }
                }
            }
        }
        .nav-visible{
            transform: translateX(0%);
        }
    }
}
</style>