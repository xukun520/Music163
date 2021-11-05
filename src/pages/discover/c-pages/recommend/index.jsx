import React,{memo} from 'react'

import HYTopBanner from './c-cpns/top-banner'
import {RecommendWrapper} from './style'

function WYYRecommend(props) {
    

    return (
        <RecommendWrapper>
      {/* 轮播图 */}
      <HYTopBanner />
      {/* 主体内容 */}
        {/* <Content className="w980"> */}
          {/* 主体推荐页左侧 */}
          {/* <RecommendLeft> */}
            {/* 热门推荐 */}
            {/* <HotRecommend /> */}
           
          {/* </RecommendLeft> */}
          {/* 主体推荐页右侧 */}
          {/* <RecommendRight>
           
          </RecommendRight> */}
        {/* </Content> */}
    </RecommendWrapper>
    )
}


export default memo(WYYRecommend)