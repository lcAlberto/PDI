<template>
  <div class="card grid grid-cols-12 gap-3 items-center px-5 my-2">
    <div class="col-span-2">
      <img :src="video.largeThumbnailUrl"/>
    </div>
    <div class="col-span-10">
      <div class="flex items-center gap-3">
        <font-awesome-icon
            :icon="['fas', 'play']"
            class="hidden group-hover:block"
        />
        <h2 class="card-title">{{ video.title }}</h2>
      </div>
      <div class="flex flex-row">
        <p>{{  video.channelTitle }}</p>
        <small>{{ videoDuration(video.duration) }}</small>
      </div>
<!--      <div class="flex gap-5">-->
<!--        <ul-->
<!--            v-if="video.tags"-->
<!--            class="flex gap-2 overflow-auto"-->
<!--        >-->
<!--          <li-->
<!--              v-for="(tag, index) in video.tags"-->
<!--              :key="index"-->
<!--              :class="getRandomColorClass(tag)"-->
<!--              class="badge flex flex-wrap text-ellipsis overflow-hidden min-w-max"-->
<!--          >-->
<!--            {{tag}}-->
<!--          </li>-->
<!--        </ul>-->
<!--      </div>-->
    </div>
  </div>
  <hr class="opacity-5">
</template>
<script lang="ts">

import moment from "moment";
import { formatDurationVideo } from "@/services/format-time";

export default {
  name: "playlist-item",
  computed: {
    moment() {
      return moment
    }
  },
  props: {
    video: { type: Object, default: null }
  },
  data () {
    return {
      colorClasses: {}
    }
  },
  methods: {
    videoDuration (duration: string) {
      return formatDurationVideo(duration);
    },
    getRandomColorClass(tag) {
      if (!this.colorClasses[tag]) {
        this.colorClasses[tag] = this.generateRandomColorClass();
      }
      return this.colorClasses[tag];
    },
    generateRandomColorClass() {
      const colorClasses = [
        'badge-neutral',
        'badge-primary',
        'badge-secondary',
        'badge-accent',
        'badge-ghost',
      ];
      const randomIndex = Math.floor(Math.random() * colorClasses.length);
      return colorClasses[randomIndex];
    },
  }
}
</script>


<style scoped>

</style>