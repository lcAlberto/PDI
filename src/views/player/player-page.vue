<template>
  <div>
    <navbar />
    <div class="p-5 w-11/12 mx-auto">
      <div class="grid grid-cols-12 items-start gap-3">
        <div class="col-span-6">
          <div class="card lg:card-side bg-base-100 shadow-xl">
            <div class="card-body items-center">
              <img
                  src="../../assets/img/albun-art.png"
                  class="w-1/2 mx-auto my-5"
              />
              <h2 class="card-title">Whitney Huston</h2>
              <p>I Have Nothing</p>
              <progress class="progress progress-primary w-10/12 mx-auto" value="50" max="100" />
              <div class="card-actions mt-5 items-center justify-center">
                <button class="btn btn-sm btn-circle btn-outline">
                  <font-awesome-icon :icon="['fas', 'backward']" />
                </button>
                <button class="btn btn-circle btn-outline">
                  <font-awesome-icon :icon="['fas', 'play']" />
                </button>
                <button class="btn btn-sm btn-circle btn-outline">
                  <font-awesome-icon :icon="['fas', 'forward']" />
                </button>
              </div>
            </div>
          </div>
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

export default{
  name: "player-page",
  components: {PlaylistContainer, Navbar}
}
</script>


<style scoped>

</style>