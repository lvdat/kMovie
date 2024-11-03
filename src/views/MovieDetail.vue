<template>
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
                                        <i class="fas fa-circle-plus"></i> Tên
                                        khác
                                    </th>
                                    <th scope="col">
                                        {{ movie.movie.origin_name }}
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row" style="width: 35%">
                                        Thoi luong
                                    </th>
                                    <td style="width: 65%">
                                        {{ movie.movie.time }}
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row" style="width: 35%">
                                        Chat luong
                                    </th>
                                    <td style="width: 65%">
                                        {{ movie.movie.lang }} -
                                        {{ movie.movie.quality }}
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row" style="width: 35%">Nam</th>
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
            <div class="card" style="border-radius: 0%">
                <div class="card-header">Danh sach tap phim</div>
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
import { useRoute } from 'vue-router'

export default {
    data: () => ({
        movie: null,
    }),
    methods: {
        fetchMovieData() {
            this.movie = {}
            const route = useRoute()
            const slug = route.params.slug
            movieService.getMovie(slug).then(res => {
                console.log(res.data)
                this.movie = res.data
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
