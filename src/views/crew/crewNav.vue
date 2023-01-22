<template>
  <div class="container">
        <div class="row align-items-center justify-content-center nav-links">
            <div class="col link-column me-3">
                <router-link :to="{ name: 'douglas' }">
                    <div class="circle"></div>
                </router-link>

            </div>

            <div class="col link-column me-3">
                <router-link :to="{ name: 'mark' }">
                    <div class="circle"></div>
                </router-link>

            </div>

            <div class="col link-column me-3">
                <router-link :to="{ name: 'victor' }">
                    <div class="circle"></div>
                </router-link>

            </div>

            <div class="col link-column">
                <router-link :to="{ name: 'anousheh' }">
                    <div class="circle"></div>
                </router-link>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'crewNav'
}
</script>

<style lang="scss" scoped>
@use '@/assets/styles/-variables.scss' as *;
.nav-links{
    width: 9vw;
    height: 1vh;
    .link-column{
        text-align: center;
        padding: 0;

        .circle{
            border-radius: 50%;
            width: 15px;
            height: 15px;
            background-color: white;
            opacity: 0.17;

            &:hover {
                opacity: 0.5;
            }
            
            &.router-link-active {
                opacity: 1;
            }
        }
    }
}
</style>