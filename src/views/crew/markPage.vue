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
                    <p>Mission Specialist</p>
                </div>
            </div>
            <div class="row">
                <div class="col crew-name">
                    <p>Mark Shuttleworth</p>
                </div>
            </div>
            <div class="row">
                <div class="col crew-about mt-2">
                    <p>
                        Mark Richard Shuttleworth is the founder and CEO of Canonical, 
                        the company behind the Linux-based Ubuntu operating system. 
                        Shuttleworth became the first South African to travel to space as a space tourist.
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
            <img src="../../assets/crew/image-mark-shuttleworth.webp">
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