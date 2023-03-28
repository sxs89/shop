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

// 根据类型获取商品，也需要第几页的数据
export function getHomeGoods(type ='sales', page=1){
    return request({
        url: '/api/index?' + type + '=1&page=' + page,
        // url:'/api/index',
    })
}

