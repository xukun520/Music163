import * as actionTypes from './constants'

import { getTopBanners } from '../../../../../service/recommend'

// 定义action返回一个对象
export const changeTopBannerAction = res => ({
    type: actionTypes.CHANGE_TOP_BANNERS,
    topBanners: res.banners,
  })
//执行一下
// dispatch(getTopBannerAction())
//action 传入dispatch 
export const getTopBannerAction=()=>{
    return dispatch=>{
        //发送网络请求
        getTopBanners().then(res=>{
            console.log(res);
            dispatch(changeTopBannerAction(res))
           
        })
    }
}