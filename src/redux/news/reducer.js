import { NEWS_FETCH_SUCCESS, NEWS_FETCH_FAILURE, NEWS_FETCH_REQUEST } from './types'

const initState = {
  loading : false,
  news:[],
  total:0,
  page:0,
  error:''
}

const reducer = ( state=initState, action ) => {
  switch (action.type) {
    
      case NEWS_FETCH_REQUEST:
          return { ...state, loading: action.page===1 } 

      case NEWS_FETCH_SUCCESS:
        return { ...state,
                loading:false,
                news: action.page===1 ? action?.payload?.articles : [ ...state.news, ...action?.payload?.articles ] ,
                total:action?.payload?.totalResults,
                page: action.page
              } 

      case NEWS_FETCH_FAILURE:
        return { ...state,
                loading:false,
                error:action.payload,
                total:0,
                page:0
              } 
        
      default:
          return state
  }
}

export default reducer