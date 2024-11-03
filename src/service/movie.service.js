import api from './api.service.js'

class MovieService {
    getNewMovie(page = 1) {
        return api().get(`/danh-sach/phim-moi-cap-nhat?page=${page}`)
    }
    getMovie(slug) {
        return api().get(`/phim/${slug}`)
    }
    searchMovie(key, limit = 10) {
        return api().get(`/v1/api/tim-kiem?keyword=${key}&limit=${limit}`)
    }
}

export default new MovieService()
