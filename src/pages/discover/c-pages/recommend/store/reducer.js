import * as actionTypes from './constants'

// 存放数据
const defaultState={
    topBanners:[]
}

function reducer(state=defaultState,action){
    switch (action.type) {
        case actionTypes.CHANGE_TOP_BANNERS:
            return {...state,topBanners:action.topBanners}
        default:
            return state;
    
       
    }
}

export default reducer