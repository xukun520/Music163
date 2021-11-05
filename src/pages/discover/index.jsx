import React, { memo, useEffect } from 'react'

import {HeaderCategory,CategoryList} from './styled'

import {dicoverMenu} from '@/common/local-data.js'

import request from '@/service/request'

import { NavLink } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
export default memo(
    function WYYDiscover(props) {
        const {route}=props

        // 获取轮播图数据
        useEffect(()=>{
            request({
                url:'/banner'
            }).then(res=>console.log(res))
            
        },[])
        // console.log(route);
        return (
            <HeaderCategory>
                <div className="w1100 top">
                    <CategoryList>
                        {
                            dicoverMenu.map(item=>{
                                return (
                                    <li key={item.title} className="item">
                                        <NavLink to={item.link} activeClassName="menu-active">
                                            {item.title}
                                        </NavLink>
                                    </li>
                                )
                            })
                        }

                    </CategoryList>

                </div>
            {renderRoutes(route.routes)}
            </HeaderCategory>
        )
    }
)
