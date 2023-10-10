<template>
  <div>
    <navbar />
    <div class="p-5 w-11/12 mx-auto">
      <div class="grid grid-cols-12 items-start gap-3">
        <div class="col-span-6">
          <main-player />
        </div>
        <div class="col-span-6">
          <playlist-container />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">

import Navbar from "@/views/player/components/navbar.vue";
import PlaylistContainer from "@/views/player/components/playlist/playlist-container.vue";
import MainPlayer from "@/views/player/components/player/main-player.vue";

export default{
  name: "player-page",
  components: {MainPlayer, PlaylistContainer, Navbar}
}
</script>


<style scoped>

</style>