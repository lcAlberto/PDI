<template>
  <div class="card lg:card-side bg-base-100 shadow-xl">
    <div class="card-body items-center">
      <img
          src="@/assets/img/albun-art.png"
          class="w-1/2 mx-auto my-5"
      />
      <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/FBrdQTbkdJA?si=2dNCK0oKnS3l-_Ud&amp;controls=0"
          title="YouTube video player"
          :allowfullscreen="false"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      />
      <div id="youtube-player"></div>
      <h2 class="card-title">Whitney Huston</h2>
      <p>I Have Nothing</p>
      <progress
          class="progress progress-primary w-10/12 mx-auto"
          :value="currentTime"
          :max="duration"
      />
      <div class="card-actions mt-5 items-center justify-center">
        <button
            class="btn btn-sm btn-circle btn-outline"
            @click="previousVideo"
        >
          <font-awesome-icon :icon="['fas', 'backward']" />
        </button>
        <button
            class="btn btn-circle btn-outline"
            @click="playVideo"
        >
          <font-awesome-icon :icon="['fas', 'play']" />
        </button>
        <button
            class="btn btn-sm btn-circle btn-outline"
            @click="nextVideo"
        >
          <font-awesome-icon :icon="['fas', 'forward']" />
        </button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">

import {mapState} from "pinia";
import {useVideoStore} from "@/stores/player/video-store";

export default {
  name: "main-player",
  data() {
    return {
      ytPlayerInstance: null,
      player: null,
      currentTime: 0,
      duration: 0
    };
  },
  mounted() {
    // Crie um novo player do YouTube
    this.ytPlayerInstance = require('youtube-player')
    this.player = this.ytPlayerInstance('player-1', { videoId: 'videoid' })
  },
  methods: {
    computed: {
      ...mapState(useVideoStore, ['videoDetails']),
    },

    onPlayerReady(event) {
      // Obtenha a duração do vídeo e atualize o estado
      this.duration = event.target.getDuration();
    },
    onPlayerStateChange(event) {
      // Atualize o tempo atual do vídeo
      this.currentTime = event.target.getCurrentTime();
    },
    playVideo() {
      this.player.playVideo();
    },
    pauseVideo() {
      this.player.pauseVideo();
    },
    previousVideo() {
      // Implemente a lógica para ir para o vídeo anterior
    },
    nextVideo() {
      // Implemente a lógica para ir para o próximo vídeo
    },
    seekTo() {
      // Implemente a lógica para buscar para a posição desejada no vídeo
      this.player.seekTo(this.currentTime, true);
    }
  }
}
</script>


<style scoped>

</style>