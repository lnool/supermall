import {request} from './request'

export function findMulti(){
  return request({
    url:'/home/multidata'
  })
}