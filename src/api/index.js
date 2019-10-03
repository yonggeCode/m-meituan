import axios from '@/axios.js'

var api =  {
    searchHotWords (params) {
        return axios.get('/api/meituan/header/searchHotWords.json',params)
    },
    getSearchList (params) {
        return axios.get('/api/meituan/header/search.json',params)
    },
    getMenuNav (params) {
        return axios.get('/api/meituan/index/nav.json',params)
    },
    getCityList (params) {
        return axios.get('/api/meituan/city/cityList.json',params)
    },
    getProvince (params) {
        return axios.get('/api/meituan/city/province.json',params)
    },
    getHotCity(params){
        return axios.get('/api/meituan/city/hot.json',params)
    },
    getRecentCity(params){
        return axios.get('/api/meituan/city/recents.json',params)
    },
    login(params){
        return axios.get('/api/meituan/login',params)
    },
    register(params){
        return axios.get('/api/meituan/register',params)
    }

}

export default api