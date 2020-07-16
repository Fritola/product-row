import axios from 'axios'

const api = axios.create({
    baseURL: 'https://row-products-backend.herokuapp.com/'
})

export default api