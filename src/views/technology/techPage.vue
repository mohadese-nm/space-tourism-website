<template>
  <div class="content">
    <navigation-bar></navigation-bar>
    <div class="container">
        <div class="tech-info">
          <router-view></router-view>
        </div>
    </div>
  </div>
</template>

<script>
import navigationBar from '../navigationBar.vue';
export default {
  name: 'techPage',
  components: {
    navigationBar,
  }
}
</script>

<style lang="scss" scoped>
@use '@/assets/styles/-variables.scss' as *;

.content {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 900px;
  background-image: url(@/assets/technology/background-technology-desktop.jpg);
  background-size: cover;
}
</style>