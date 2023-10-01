<template>
  <header>
    <!-- <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div> -->
  </header>

   <RouterView />
</template>

<script lang="ts">
// import { RouterLink, RouterView } from 'vue-router'
export default {
  name: 'app',
  mounted() {
    console.log('oooi')
  },
}
</script>

<style scoped>

</style>
