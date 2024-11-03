<template>
    <div class="col-md-8 pt-3">
        <MovieGrid :movies="movies" />
    </div>
</template>
<script>
import MovieService from '../service/movie.service'
import MovieGrid from '../components/MovieGrid.vue'
import { useRoute } from 'vue-router'
export default {
    components: {
        MovieGrid,
    },
    data: () => ({
        movies: {
            title: '',
            items: [],
        },
        key: '',
    }),
    methods: {
        searchMovie(key) {
            MovieService.searchMovie(key, 16).then(res => {
                console.log(res.data.data)
                this.movies.items = res.data.data.items
            })
        },
        updateSearchData() {
            this.movies.items = []
            const route = useRoute()
            this.movies.title = 'Ket qua tim kiem "' + route.params.key + '"'
            this.searchMovie(route.params.key)
        },
    },
    created() {
        this.updateSearchData()
    },
    watch: {
        $route() {
            this.updateSearchData()
        },
    },
}
</script>
