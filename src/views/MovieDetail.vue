<template>
    <Loading v-show="loading" />
    <div class="row">
        <div class="col-md-8" v-if="movie">
            <div class="movie-info pb-1">
                <div class="text-center pt-2">
                    <h2 class="comic-title">{{ movie.movie.name }}</h2>
                    <p class="text-secondary small">
                        [Cập nhật mới nhất: 04:30 19/09/2023]
                    </p>
                </div>
                <div class="row mb-3">
                    <div class="col-12 col-sm-4 text-center">
                        <img
                            :src="movie.movie.poster_url"
                            style="max-width: 90%; height: auto"
                            alt=""
                        />
                    </div>
                    <div class="col-12 col-sm-8">
                        <table class="table movie-info-table">
                            <thead>
                                <tr>
                                    <th scope="col">
                                        <i
                                            class="fa-solid fa-earth-americas"
                                        ></i>
                                        Tên khác
                                    </th>
                                    <th scope="col">
                                        {{ movie.movie.origin_name }}
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row" style="width: 35%">
                                        <i class="fa-solid fa-clock"></i> Thời
                                        lượng
                                    </th>
                                    <td style="width: 65%">
                                        {{ movie.movie.time }}
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row" style="width: 35%">
                                        <i class="fa-solid fa-star"></i> Chất
                                        lượng
                                    </th>
                                    <td style="width: 65%">
                                        {{ movie.movie.lang }} -
                                        {{ movie.movie.quality }}
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row" style="width: 35%">
                                        <i class="fa-regular fa-calendar"></i>
                                        Năm
                                    </th>
                                    <td style="width: 65%">
                                        {{ movie.movie.year }}
                                    </td>
                                </tr>
                                <tr></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="movie-des">
                    {{ movie.movie.content }}
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card border-primary" style="border-radius: 0%">
                <div
                    class="card-header bg-primary text-white"
                    style="border-radius: 0%"
                >
                    Danh sach tap phim
                </div>
                <div class="card-body">
                    <router-link
                        class="btn btn-primary m-1"
                        v-for="item in movie.episodes[0].server_data"
                        :key="item.slug"
                        :to="'/phim/' + movie.movie.slug + '/' + item.slug"
                    >
                        {{ item.name }}
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import movieService from '../service/movie.service'
import Loading from '../components/Loading.vue'
import { useRoute } from 'vue-router'

export default {
    components: {
        Loading,
    },
    data: () => ({
        movie: null,
        loading: true,
    }),
    methods: {
        fetchMovieData() {
            this.loading = true
            this.movie = {}
            const route = useRoute()
            const slug = route.params.slug
            movieService.getMovie(slug).then(res => {
                console.log(res.data)
                this.movie = res.data
                this.loading = false
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
.movie-info {
    background: #000;
    color: #fff;
}
table.movie-info-table {
    border: none;
}
table.movie-info-table > :not(caption) > * > * {
    color: unset;
    background-color: unset;
    border: none;
    font-size: 16px;
}
.movie-des {
    border: 1px solid #fff;
    margin: 10px;
    padding: 10px;
}
</style>
