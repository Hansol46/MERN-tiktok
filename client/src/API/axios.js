import Axios from 'axios'

const instance = Axios.create({
    baseURL: "https://tiktok-clo.herokuapp.com/",
})

export default instance