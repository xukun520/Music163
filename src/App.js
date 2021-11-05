import React, { memo } from 'react'

import { renderRoutes } from 'react-router-config'
import {Provider} from 'react-redux'
import store from './store'

import routes from './router'

import JMAppHeader from 'components/app-header'
import JMAppFooter from 'components/app-footer'
// import routes from './router'
import { HashRouter } from 'react-router-dom'

export default memo(function App() {
  return (
    <div>
      <Provider store={store}>
      <HashRouter>
        <JMAppHeader />
        {renderRoutes(routes)}
        <JMAppFooter />
      </HashRouter>
      </Provider>
    </div>
  )
})