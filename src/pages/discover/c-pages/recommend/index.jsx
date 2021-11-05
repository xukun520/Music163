import React,{memo, useEffect} from 'react'

import {connect,useDispatch,useSelector,shallowEqual} from 'react-redux'

import { getTopBannerAction } from './store/actionCreators'

function WYYRecommend(props) {
    //Allows you to extract data from the Redux store state
    const {topBanners}=useSelector(state=>({
        // topBanners:state.recommend.topBanners
        // topBanners:state.get("recommend").get("topBanners")
        topBanners:state.getIn(["recommend","topBanners"])
    }),shallowEqual)
    //组件和redux关联 获取数据进行操作;
     const dispatch =useDispatch()
     //You may use it to dispatch actions as needed.

    // const {getBanners,topBanners}=props
     //发送网络请求
     //改变的时候不会影响组件重新渲染
    useEffect(()=>{
       dispatch(getTopBannerAction())
    },[dispatch])

    return (
        <div>
            WYYRecommend:{topBanners.length}
        </div>
    )
}

// const mapStateToProps=state=>({
//     topBanners:state.recommend.topBanners
// })
// const mapDispatchTop=dispatch=>({
//     getBanners:()=>{
//         dispatch(getTopBannerAction())
//     }
// })

// export default connect(mapStateToProps,mapDispatchTop)(memo(WYYRecommend))

export default memo(WYYRecommend)