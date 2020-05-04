import axios from 'axios'
import clientID from '../keys'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID '+clientID
     }
})