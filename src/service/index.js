import axios from '../components/axios'

export default class Service {
    static getCall(url) {
        return axios.get(url)
    }
    static postCall(url, body) {
        return axios.post(url, body)
    }
}