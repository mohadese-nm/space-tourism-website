<template>
  <div class="container">
        <div class="row align-items-center justify-content-center nav-links">
            <div class="col link-column  me-3">   
                <router-link :to="{ name: 'douglas' }" class="crew-link">
                    <div class="circle"></div>
                </router-link>
            </div>

            <div class="col link-column  me-3">
                <router-link :to="{ name: 'mark' }" class="crew-link">
                    <div class="circle"></div>
                </router-link>
            </div>

            <div class="col link-column  me-3">
                <router-link :to="{ name: 'victor' }" class="crew-link">
                    <div class="circle"></div>
                </router-link>
            </div>

            <div class="col link-column">
                <router-link :to="{ name: 'anousheh' }" class="crew-link">
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
    width: 135px;
    height: 16px;
    .link-column{
        padding: 0;
        .crew-link{
            .circle{
            border-radius: 50%;
            width: 15px;
            height: 15px;
            background-color: white;
            opacity: 0.17;
            }

            &:hover {
                .circle{
                    opacity: 0.5;
                }
            }

            &.router-link-active {
                .circle{
                    opacity: 1;
                }
            }
        
        }
        
    }
}
</style>