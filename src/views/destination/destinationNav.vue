<template>
    <div class="container nav-links">
        <div class="row align-items-center justify-content-center">
            <div class="col link-column me-3">
                <router-link :to="{ name: 'moon' }" class="dest-link">
                    MOON
                    <div class="underline"></div>
                </router-link>

            </div>

            <div class="col link-column me-3">
                <router-link :to="{ name: 'mars' }" class="dest-link">
                    MARS
                    <div class="underline"></div>
                </router-link>

            </div>

            <div class="col link-column me-3">
                <router-link :to="{ name: 'europa' }" class="dest-link">
                    EUROPA
                    <div class="underline"></div>
                </router-link>

            </div>

            <div class="col link-column">
                <router-link :to="{ name: 'titan' }" class="dest-link">
                    TITAN
                    <div class="underline"></div>
                </router-link>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'destinationNav'
}
</script>

<style lang="scss" scoped>
@use '@/assets/styles/-variables.scss' as *;
.nav-links{
    position: absolute;
    width: 286px;
    height: 34px;
    left: 0;
    top: 0;
    .link-column{
        text-align: center;
        padding: 0;
        .dest-link{
            display: block;
            height: 19px;
            font-family: $barlowCond;
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
            letter-spacing: 2.7px;
            color: $lightGray;
            text-decoration: none;
            .underline {
                    margin-top: 15px;
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
            
                &.router-link-active {
                    .underline {
                        display: block;
                        opacity: 1;
                    }
                }
        }
    }
}
</style>