<script setup>
import { useRoute } from 'vue-router'
import { ref, watch } from 'vue'
const route = useRoute()
</script>
<template>
    <Loading v-show="loading" />
    <div class="row">
        <div class="col-12 p-0" v-if="datasv">
            <div class="responsive-iframe-container mb-2">
                <iframe
                    class="responsive-iframe"
                    :src="datasv.link_embed"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            </div>
            <div class="row mb-3">
                <div class="col-12 col-sm-8">
                    <div class="row">
                        <div class="col-12 col-sm-3 text-center">
                            <img
                                :src="movie.movie.poster_url"
                                style="max-width: 100%; height: auto"
                                alt=""
                            />
                        </div>
                        <div class="col-12 col-sm-9 p-0">
                            <div class="movie-play-info p-2">
                                <h3>
                                    {{ movie.movie.name }} - {{ datasv.name }}
                                </h3>
                                <hr />
                                <div class="movie-des">
                                    {{ movie.movie.content }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-4">
                    <div class="card border-primary" style="border-radius: 0%">
                        <div
                            class="card-header bg-primary text-white"
                            style="border-radius: 0%"
                        >
                            Danh sach tap phim
                        </div>
                        <div class="card-body">
                            <router-link
                                v-for="item in movie.episodes[0].server_data"
                                :key="item.slug"
                                :to="
                                    '/phim/' +
                                    movie.movie.slug +
                                    '/' +
                                    item.slug
                                "
                                :class="
                                    'btn ' +
                                    (item.slug === datasv.slug
                                        ? 'btn-danger'
                                        : 'btn-primary') +
                                    ' m-1'
                                "
                            >
                                {{ item.name }}
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import movieService from '../service/movie.service'
import Loading from '../components/Loading.vue'

export default {
    components: {
        Loading,
    },
    data: () => ({
        movie: null,
        datasv: null,
        loading: true,
    }),
    methods: {
        fetchMovieData() {
            this.loading = true
            this.movie = {}
            const route = useRoute()
            const slug = route.params.slug
            const play = route.params.play
            movieService
                .getMovie(slug)
                .then(res => {
                    console.log(res.data.episodes[0].server_data)
                    this.movie = res.data
                    for (
                        let i = 0;
                        i < res.data.episodes[0].server_data.length;
                        i++
                    ) {
                        if (res.data.episodes[0].server_data[i].slug === play) {
                            this.datasv = res.data.episodes[0].server_data[i]
                            this.loading = false
                            break
                        }
                    }
                })
                .catch(err => {
                    console.error(err) // Log any potential errors for debugging
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
.movie-play-info {
    position: relative;
    width: 100%;
    height: 100%;
    left: 0;
    bottom: 0;
    border: 1px solid #6c757d;
    color: #fff;
}
.movie-play-info > h3 {
    text-transform: uppercase;
    color: rgb(0, 255, 133);
    font-weight: bold;
}
</style>
