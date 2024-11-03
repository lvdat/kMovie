import axios from 'axios'

const API_HOST = 'https://phimapi.com'

const config = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
}

export default () => {
    return axios.create({
        baseURL: API_HOST,
        headers: config,
    })
}
