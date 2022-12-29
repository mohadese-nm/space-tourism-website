<template>
  
  <div class="container">
    <destination-nav></destination-nav>
    you are on moon
  </div>
</template>

<script>
import destinationNav from './destinationNav.vue';
export default {
  name: 'moonPage',
  components: {
    destinationNav,
  }
}
</script>

<style>
div{
    font-size: 36px;
    color:brown
}
</style>