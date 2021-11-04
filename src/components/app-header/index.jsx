import React, { memo } from 'react'
import {NavLink} from 'react-router-dom'

export default memo(function WYYheader() {
        return (
            <div>
               <NavLink to="/">主页</NavLink>
               <NavLink to="/friends">朋友</NavLink>
               <NavLink to="/find">发现</NavLink>
            </div>
        )
    }
)
