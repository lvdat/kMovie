<script setup>
import Vue3VideoPlayer from '@cloudgeek/vue3-video-player'
import '@cloudgeek/vue3-video-player/dist/vue3-video-player.css'
import HLSCore from '@cloudgeek/playcore-hls'
</script>
<template>
    <div class="row">
        <div class="col-12 col-sm-8" v-if="datasv">
            <div class="responsive-iframe-container">
                <iframe
                    class="responsive-iframe"
                    :src="datasv.link_embed"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            </div>
        </div>
    </div>
</template>
<script>
import movieService from '../service/movie.service'
import { useRoute } from 'vue-router'

export default {
    data: () => ({
        movie: null,
        datasv: null,
    }),
    methods: {
        fetchMovieData() {
            this.movie = {}
            const route = useRoute()
            const slug = route.params.slug
            const play = route.params.play
            movieService.getMovie(slug).then(res => {
                console.log(res.data.episodes[0].server_data)
                this.movie = res.data
                for (
                    let i = 0;
                    i < res.data.episodes[0].server_data.length;
                    i++
                ) {
                    if (res.data.episodes[0].server_data[i].slug === play) {
                        this.datasv = res.data.episodes[0].server_data[i]
                        break
                    }
                }
            })
        },
    },
    created() {
        this.fetchMovieData()
    },
    watch: {
        $route() {
            this.fetchMovieData()
        },
    },
}
</script>
<style>
.responsive-iframe-container {
    position: relative;
    width: 100%; /* Chiều rộng đầy đủ */
    padding-bottom: 56.25%; /* 16:9 = 9/16 = 0.5625 => 56.25% */
    height: 0; /* Đặt chiều cao là 0 để sử dụng padding */
    overflow: hidden; /* Ẩn nội dung tràn ra ngoài */
}

.responsive-iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%; /* Chiều rộng đầy đủ */
    height: 100%; /* Chiều cao bằng padding */
    border: none; /* Không có viền */
}
</style>
