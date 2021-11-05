import React from 'react'
import JMDiscover from '@/pages/discover'
import JMFriend from '@/pages/friend'
import JMMine from '@/pages/mine'
import { Redirect } from 'react-router-dom'

import WYYRecommend from '../pages/discover/c-pages/recommend'
import WYYAlbum from '../pages/discover/c-pages/album'
import WYYArtist from '../pages/discover/c-pages/artist'
import WYYDj from '../pages/discover/c-pages/djradio'
import WYYRanking from '../pages/discover/c-pages/ranking'
import WYYSongs from '../pages/discover/c-pages/songs'

const routes = [
  // { path: '/', exact: true, render: () => <Redirect to="/discover" /> },
  {
    path: '/',
    exact: true,
    render: () => <Redirect to="/discover" />

  },
  { path: '/discover', component: JMDiscover,
    routes:[
      {
        path: '/discover',
        exact: true,
        render: () => <Redirect to="/discover/recommend" />
    
      },
      {
        path:'/discover/recommend',
        component:WYYRecommend
      },
      {
        path:'/discover/album',
        component:WYYAlbum
      },
      {
        path:'/discover/djradio',
        component:WYYDj
      },
      {
        path:'/discover/ranking',
        component:WYYRanking
      }
      ,
      {
        path:'/discover/songs',
        component:WYYSongs
      }
    ]
},
  { path: '/mine', component: JMMine },
  { path: '/friend', component: JMFriend },
]

export default routes