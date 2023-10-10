<template>
  <div class="card lg:card-side bg-base-100 shadow-xl">
    <div class="card-body">
      <div v-if="playlist && playlist.length === 0">
        <h2 class="card-title">Sua playlitinha!</h2>
        <p>Você ainda não tem nenhuma musica. Clique em adicionar!</p>
      </div>
      <div v-else>
        <div
            v-for="(video, index) in playlist"
            :key="index"
            class="hover:bg-base-200 rounded-md group"
        >
          <playlist-item :video="video" />
        </div>
      </div>
      <div class="card-actions justify-end">
        <add-url-collapse />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import AddUrlCollapse from "@/views/player/components/playlist/add-url-collapse.vue";
import {mapActions, mapState} from "pinia";
import {useVideoStore} from "@/stores/player/video-store";
import PlaylistItem from "@/views/player/components/playlist/playlist-item.vue";

export default {
  name: "playlist-container",
  computed: {
    ...mapState(useVideoStore, ['playlist'])
  },
  components: {PlaylistItem, AddUrlCollapse}
}
</script>


<style scoped>

</style>