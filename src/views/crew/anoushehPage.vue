<template>
  <div class="container">
    <div class="row">
        <div class="col crew-info">
            <div class="row">
                <div class=" col crew-header">
                    <span>02</span>
                    <p class="crew-text">meet your crew</p>
                </div>
            </div>
            <div class="row">
                <div class="col crew-role">
                    <p>Flight Engineer</p>
                </div>
            </div>
            <div class="row">
                <div class="col crew-name">
                    <p>Anousheh Ansari</p>
                </div>
            </div>
            <div class="row">
                <div class="col crew-about mt-2">
                    <p>
                        Anousheh Ansari is an Iranian American engineer and co-founder of 
                        Prodea Systems. Ansari was the fourth self-funded space tourist, the 
                        first self-funded woman to fly to the ISS, and the first Iranian in space.
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="col crew-nav">
                    <crew-nav></crew-nav>
                </div>
            </div>
        </div>

        <div class="col crew-image">
            <img src="../../assets/crew/image-anousheh-ansari.webp">
        </div>
    </div>
  </div>
</template>

<script>
import crewNav from './crewNav.vue';
export default {
  name: 'markPage',
  components: {
    crewNav
  }
}
</script>

<style lang="scss" scoped>
@use '@/assets/styles/-variables.scss' as *;
.container{
    .crew-info{
        margin-top: 16vh;
        margin-left: 7vw;
        .crew-header{
            span{
            font-family: $barlowCond;
            font-style: normal;
            font-weight: 700;
            font-size: 28px;
            line-height: 34px;
            letter-spacing: 4.725px;
            color: white;
            mix-blend-mode: normal;
            opacity: 0.25;
            }

            .crew-text{
                display: inline-block;
                position: relative;
                left: 2vw;
                font-family: $barlowCond;
                font-style: normal;
                font-weight: 400;
                font-size: 28px;
                line-height: 34px;
                letter-spacing: 4.725px;
                text-transform: uppercase;
                color: white;
            }
        }
        .crew-role{
            margin-top: 15vh;
            font-family: $belle;
            font-style: normal;
            font-weight: 400;
            font-size: 32px;
            line-height: 37px;
            text-transform: uppercase;
            color: #FFFFFF;
            mix-blend-mode: normal;
            opacity: 0.5;
        }

        .crew-name{
            font-family: $belle;
            font-style: normal;
            font-weight: 400;
            font-size: 56px;
            line-height: 64px;
            text-transform: uppercase;
            color: #FFFFFF;
        }

        .crew-about{
            p{
                width: 29.4vw;
                font-family: 'Barlow';
                font-style: normal;
                font-weight: 400;
                font-size: 18px;
                line-height: 32px;
                /* or 178% */
                color: #D0D6F9;
            }
        }

        .crew-nav{
            margin-top: 17vh;
        }
    }

    .crew-image{
        
        img{
            position: absolute;
            bottom: 0;
        }
    }
}
</style>