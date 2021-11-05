import * as actionTypes from './constants'
// 使用fromJS也可以 稍微影响性能
import {Map} from 'immutable'

// 存放数据
const defaultState=Map(
    {
        topBanners:[]
    }
)

function reducer(state=defaultState,action){
    switch (action.type) {
        case actionTypes.CHANGE_TOP_BANNERS:
            // return {...state,topBanners:action.topBanners}
            return state.set("topBanners",action.topBanners)
        default:
            return state;
    
       
    }
}

export default reducer