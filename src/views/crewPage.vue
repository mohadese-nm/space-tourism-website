<template>
  <div>
    <navigation-bar></navigation-bar>
  </div>
</template>

<script>
import navigationBar from './navigationBar.vue';
export default {
  name: 'crewPage',
  components: {
    navigationBar,
  }
}
</script>

<style lang="scss" scoped>
div {
  position: relative;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}
</style>