<template>
  <navbar />
  <div class="flex">
  <sidebar />
  <router-view />
  </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue'
import Sidebar from "@/views/player/authenticated/components/sidebar.vue";
import Navbar from "@/views/player/authenticated/components/navbar.vue";

export default defineComponent({
  name: "default-layout",
  components: {Navbar, Sidebar}
})
</script>


<style scoped>

</style>