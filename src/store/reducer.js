import {combineReducers, compose} from 'redux'

import {reducer as recommendReducer} from '../pages/discover/c-pages/recommend/store'

const cReducer=combineReducers({
    recommend:recommendReducer
})

export default cReducer