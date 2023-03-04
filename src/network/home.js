import request from "./request";

export function Get(url, params){
    return request({
        url:url,
        method:'get',
        params:params
    })
}
