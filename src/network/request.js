import axios from "axios";

let apiUrl = "https://api.shop.eduwork.cn"
const instance = axios.create({
    baseURL:apiUrl,
    timeout:5000,
})

// 请求拦截器=>请求前处理
instance.interceptors.request.use(config=>{
    // config.headers
    return config
}, error => {  // 请求失败的处理

})

// 响应拦截=>处理响应数据
instance.interceptors.response.use(response=>{

    return response
}, err => {

})


export default instance

