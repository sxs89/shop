import axios from "axios";

let apiUrl = "https://api.shop.eduwork.cn"
const instance = axios.create({
    baseURL:apiUrl,
    headers: {},
    timeout:5000,
})

// 请求拦截器=>请求前处理
instance.interceptors.request.use(config=>{
    //每次请求都携带token
    // let token = localStorage.getItem('access_token')
    // console.log(token)
    // console.log("-----------")
    // let token = JSON.parse(window.localStorage.getItem());
    localStorage.getItem("")
    localStorage.setItem("", JSON.stringify())
    let token = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwaS5zaG9wLmVkdXdvcmsuY24vYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE2ODIwNjE1NDAsImV4cCI6MTY4MjQyMTU0MCwibmJmIjoxNjgyMDYxNTQwLCJqdGkiOiJBTHkwazBNRUJhWWRuc09GIiwic3ViIjoiMiIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.Oxy3L4PZFLrbSn3l-Pf8tC4tw2SHobAjMWpQpexYZoo";
    config.headers.Authorization= token;
    // console.log(config.headers.token, window.localStorage.getItem("token"));
    config.headers
    return config
}, error => {  // 请求失败的处理

})

// 响应拦截=>处理响应数据
instance.interceptors.response.use(response=>{

    return response
}, err => {

})


export default instance

