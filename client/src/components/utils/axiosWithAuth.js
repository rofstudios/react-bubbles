import axios from 'axios'

export let axiosWithAuth = () => {
    let token = localStorage.getItem('token');
    return axios.create({
        headers: {
            Authorization: token
        },
        baseURL: 'http://localhost:5000'
    })
}