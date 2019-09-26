import axios from 'axios'
axios.defaults.baseURL = 'http://api.duyiedu.com';
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    config.params={
        ...config.params,
        // appkey:'yongge123_1547734951398'
        appkey:'leebin19851001_1547731445676'
    }
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

  export default axios