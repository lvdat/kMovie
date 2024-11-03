import api from './api.service.js'

class MovieService {
    getNewMovie(page = 1) {
        return api().get(`/danh-sach/phim-moi-cap-nhat?page=${page}`)
    }
}

export default new MovieService()
