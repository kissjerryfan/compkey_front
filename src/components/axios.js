import axios from 'axios'

axios.defaults.timeout = 5000

const service = axios.create({
    baseUrl: 'http://localhost:8080',
    timeout: 60000,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    },
})

export default service