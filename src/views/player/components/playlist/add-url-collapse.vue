<template>
  <button
      :class="{ 'btn-outline': !toggleCollapse }"
      class="btn btn-sm btn-primary"
      @click="toggleCollapse = !toggleCollapse"
  >
    <font-awesome-icon v-if="!toggleCollapse" :icon="['fas', 'plus']" />
    <font-awesome-icon v-else :icon="['fas', 'xmark']" />
    URL
  </button>
  <div
      :class="{ 'hidden': !toggleCollapse }"
      class="collapse bg-base-200 pt-5"
  >
    <input
        v-model="toggleCollapse"
        type="checkbox"
        class="hidden"
    />
    <div class="collapse-content py-2">
      <div class="join flex items-center py-3">
        <input
            v-model="videoUrl"
            type="text"
            placeholder="Cole a URL aqui"
            :class="{ 'is-invalid': errorMessage && errorMessage.length > 0 }"
            class="input input-ghost w-full me-3"
            @focusout="checkVideo"
        />
<!--        <button class="btn btn-ghost">-->
<!--          <font-awesome-icon :icon="['fas', 'link']" />-->
<!--        </button>-->
        <button
            v-if="Object.values(videoDetails).length"
            class="btn btn-ghost text-warning"
            @click="clearVideoLoaded"
        >
          <font-awesome-icon :icon="['fas', 'backspace']" />
        </button>
        <button
            v-if="Object.values(videoDetails).length"
            class="btn btn-ghost text-success"
            @click="addVideoInPlaylist"
        >
          <font-awesome-icon :icon="['fas', 'plus']" />
        </button>
      </div>
      <small
          v-if="errorMessage && errorMessage.length > 0"
          class="text-red-500"
      />
      <div v-if="videoDetails">
        <div class="card grid grid-cols-12 gap-3 items-center px-5">
          <div class="col-span-2">
            <img :src="videoDetails.largeThumbnailUrl"/>
          </div>
          <div class="col-span-10">
            <h2 class="card-title">{{ videoDetails.title }}</h2>
            <div class="flex flex-row">
              <p>{{  videoDetails.channelTitle }}</p>
              <small>{{ videoDuration(videoDetails.duration) }}</small>
            </div>
            <div class="flex gap-5">
              <ul
                  v-if="videoDetails.tags"
                  class="flex gap-2 overflow-auto"
              >
                <li
                    v-for="(tag, index) in videoDetails.tags"
                    :key="index"
                    :class="getRandomColorClass(tag)"
                    class="badge flex flex-wrap text-ellipsis overflow-hidden min-w-max"
                >
                  {{tag}}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <button
            class="btn btn-link text-sm"
            @click="videoDescriptionCollapse = !videoDescriptionCollapse"
        >
          Mais detalhes:
        </button>
        <div
            v-if="videoDetails.description"
            :class="{ 'bg-base-100': videoDescriptionCollapse }"
            class="collapse"
        >
          <input
              v-model="videoDescriptionCollapse"
              type="checkbox"
              class="hidden"
          />
          <div class="collapse-content flex flex-col py-2">
            <span class="font-bold">Descrição</span>
            {{videoDetails.description}}
          </div>
        </div>
    </div>
    </div>
  </div>
</template>
<script lang="ts">
import {mapActions, mapState} from "pinia";
import {useVideoStore} from "@/stores/player/video-store";
import { formatDurationVideo } from "@/services/format-time";
import {randomizeColorClass} from "@/services/randon-tag-colors";

export default {
  name: "add-url-collapse",
  data () {
    return {
      toggleCollapse: false,
      videoDescriptionCollapse: false,
      videoUrl: '',
      colorClasses: {}
    }
  },
  computed: {
    ...mapState(useVideoStore, ['videoDetails'])
  },
  methods: {
    ...mapActions(useVideoStore, [
        'fetchVideoInfo',
        'addNewVideoInList',
        'clearVideoDetails',
    ]),

    checkVideo () {
      return this.videoUrl.length > 0 ? this.fetchVideoDetails() : this.errorMessage = 'Video inválido'
    },
    async fetchVideoDetails() {
      const videoIdMatch = this.videoUrl.match(/v=([^&]+)/)
      if (!videoIdMatch)
        throw new Error('URL do YouTube inválida');
      const videoId = videoIdMatch[1];
      await this.fetchVideoInfo({
        video_id: videoId,
        video_url: this.videoUrl
      })
      this.videoUrl = ''
    },
    addVideoInPlaylist () {
      if (this.videoDetails) {
        this.addNewVideoInList()
      }
    },
    clearVideoLoaded () {
      this.videoUrl = ''
      this.clearVideoDetails()
    },
    videoDuration (duration: string) {
      return formatDurationVideo(duration);
    },
    getRandomColorClass (tag: string) {
      return randomizeColorClass(tag);
    },
  }
}
</script>


<style scoped>

</style>