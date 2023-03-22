import request from "./request";

export function Get(url, params){
    return request({
        url:url,
        method:'get',
        params:params
    })
}


// 登录页获取token信息
export function getLogin(){
    return request({
        url: '/api/auth/login',
        method: 'post',
    })
}


// 获取首页数据全部信息
export function getHomeAllData(){
    return request({
        url:'/api/index',
        method:'get',
    })
}

