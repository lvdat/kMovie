<template>
    <div class="row mb-3">
        <div class="row mb-3">
            <span class="grid__title">
                {{ movies.title }}
            </span>
        </div>
        <div class="row" v-if="movies.items.length > 0">
            <div
                v-for="(item, _id) in movies.items"
                :key="_id"
                class="col-6 col-sm-4 col-md-3 mb-3"
            >
                <div
                    class="movie-card"
                    @click="this.$router.push('/phim/' + item.slug)"
                >
                    <img :src="item.thumb_url" :alt="item.name" />
                    <div class="movie-card-info">
                        {{ item.name }}
                    </div>
                </div>
            </div>
        </div>
        <div class="row" v-else>DANG TAI DU LIEU</div>
    </div>
</template>
<script>
export default {
    props: {
        movies: {
            type: Object,
        },
    },
}
</script>
<style>
.movie-card {
    max-width: 100%;
    height: 220px;
    position: relative;
    cursor: pointer;
    transition: transform 0.3s;
}
.grid__title {
    color: rgb(0, 255, 133);
    font-weight: bold;
    text-transform: uppercase;
    font-size: 25px;
}
.movie-card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: filter 0.3s;
}
.movie-card:hover {
    transform: scale(1.1);
}
.movie-card-info {
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgb(0, 0, 0, 0.7);
    color: #fff;
    padding: 10px;
    font-weight: 500;
    font-size: 15px;
    line-height: 1.3em;
}
</style>
