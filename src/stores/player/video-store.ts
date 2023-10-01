import { defineStore } from 'pinia'
import * as process from "process";
import axios from "axios";

export const useVideoStore = defineStore('video', {
    state: () => ({
        videoDetails: {},
        playlist: []
    }),
    actions: {
        fetchVideoInfo({videoId}) {
            console.log(videoId);
            const test = import.meta.env.VITE_YOUTUBEKEY
            axios.get(`https://www.googleapis.com/youtube/v3/videos?key=${test}&part=snippet,contentDetails&id=${videoId}`)
                .then((response) => {
                    const videoData = response.data.items[0]
                    if (!videoData) {
                        throw new Error('Vídeo não encontrado');
                    }
                    console.log(videoData);
                    this.videoDetails = {
                        title: videoData.snippet.title,
                        channelTitle: videoData.snippet.channelTitle,
                        duration: videoData.contentDetails.duration,
                        largeThumbnailUrl: videoData.snippet.thumbnails.maxres.url,
                        defaultThumbnailUrl: videoData.snippet.thumbnails.default.url,
                        tags: videoData.snippet.tags,
                        publishedAt: videoData.snippet.publishedAt,
                        description: videoData.snippet.description,
                    }
                }).catch((error) => {
                console.log(error);
            })
        },
        addNewVideoInList () {
            if (this.playlist.indexOf(this.videoDetails) === -1) {
                this.playlist.push(this.videoDetails)
                this.videoDetails = {}
            }
        },
        clearVideoDetails () {
            if (Object.keys(this.videoDetails).length > 0)
            this.videoDetails = {}
        },
        clearPlaylist () {
            if (this.playlist.length > 0)
                this.playlist = []
        },
        removeItemInPlaylist (item) {
          const index = this.playlist.indexOf((item))
          if (index !== -1)
              this.playlist.splice(index, 1)
        },
    },
    getters: {
        doubleCounter(state) {
            return state.counter * 2;
        },
    },
});