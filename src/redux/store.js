import {createStore, combineReducers , applyMiddleware} from 'redux'
import newsReducer from './news/reducer' 
import dialogReducer from "./detailsDialog/reducer"
import thunk from 'redux-thunk'

const combineReducer = combineReducers({
    // cake: cakeReducer,
    // icecream: icecreamReducer,
    news: newsReducer,
    detailsDialog:dialogReducer
})

const store = createStore(combineReducer, applyMiddleware(thunk))

export default store