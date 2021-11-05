import React,{memo, useEffect} from 'react'

import {connect} from 'react-redux'

import { getTopBannerAction } from './store/actionCreators'

function WYYRecommend(props) {

    const {getBanners,topBanners}=props

    useEffect(()=>{
        getBanners();
    },[getBanners])

    return (
        <div>
            WYYRecommend:{topBanners.length}
        </div>
    )
}

const mapStateToProps=state=>({
    topBanners:state.recommend.topBanners
})
const mapDispatchTop=dispatch=>({
    getBanners:()=>{
        dispatch(getTopBannerAction())
    }
})

export default connect(mapStateToProps,mapDispatchTop)(memo(WYYRecommend))