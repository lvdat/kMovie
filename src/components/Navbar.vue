<template>
    <nav
        class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top main__navbar"
    >
        <div class="container">
            <router-link class="navbar-brand" to="/"
                ><b><i class="fa-solid fa-film"></i> kMovie</b></router-link
            >
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link
                            class="nav-link active"
                            aria-current="page"
                            to="/"
                        >
                            <b class="text-warning"
                                ><i class="fa-solid fa-arrow-trend-up"></i> PHIM
                                MỚI
                            </b>
                        </router-link>
                    </li>
                    <!-- <li class="nav-item dropdown">
                        <a
                            class="nav-link dropdown-toggle"
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Thể loại
                        </a>
                        <ul class="dropdown-menu">
                            <li>
                                <a class="dropdown-item" href="#">Phim lẻ</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#">Phim bộ</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#">Hoạt hình</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#">TV Shows</a>
                            </li>
                        </ul>
                    </li> -->
                </ul>
                <form class="d-flex" role="search" @submit.prevent="onSearch">
                    <input
                        class="form-control me-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        v-model="searchQuery"
                        minlength="3"
                    />
                    <button class="btn btn-outline-success" type="submit">
                        Tim
                    </button>
                </form>
            </div>
        </div>
    </nav>
</template>
<script>
export default {
    data: () => ({
        searchQuery: '',
    }),
    methods: {
        onSearch() {
            if (this.searchQuery) {
                this.$router.push({
                    name: 'search',
                    params: {
                        key: this.searchQuery,
                    },
                })
            }
        },
    },
}
</script>
<style scoped>
.nav-item {
    margin-right: 5px;
}
a.nav-link.active:hover {
    color: rgb(0, 255, 133);
}
.navbar-brand {
    color: rgb(0, 255, 133) !important;
}
.main__navbar {
    color: rgb(232, 231, 228);
    background-color: #000;
}
</style>
