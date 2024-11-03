<template>
    <div class="container">
        <div class="col-md-8 pt-3">
            <MovieGrid :movies="movies" />
        </div>
        <div class="col-md-4 pt-3"></div>
    </div>
</template>
<script>
import MovieService from '../service/movie.service'
import MovieGrid from '../components/MovieGrid.vue'

export default {
    components: {
        MovieGrid,
    },
    data: () => ({
        movies: {
            title: 'Phim moi cap nhat',
            items: [],
        },
    }),
    methods: {
        fetchNewMovies() {
            MovieService.getNewMovie().then(res => {
                this.movies.items = res.data.items
            })
        },
    },
    created() {
        this.fetchNewMovies()
    },
}
</script>
