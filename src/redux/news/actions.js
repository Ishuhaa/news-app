import axios from 'axios'
import { NEWS_FETCH_SUCCESS, NEWS_FETCH_FAILURE, NEWS_FETCH_REQUEST } from './types'

export const fetchNewsRequest = (page) => {
  return {
    type: NEWS_FETCH_REQUEST,
    page
  }
}

export const fetchNewsSuccess = (payload,page) => {
  return {
    type: NEWS_FETCH_SUCCESS,
    payload,
    page
  }
}

export const fetchNewsFailure = (payload) => {
  return {
    type: NEWS_FETCH_FAILURE,
    payload
  }
}

export const fetchNews = ({country,search,category,page}) => {
  
  const setPage = page+1 
  return (dispatch) =>{
    dispatch(fetchNewsRequest(setPage))
    axios.get("https://newsapi.org/v2/top-headlines",{
      params:{
        country,
        q: search,
        category,
        apiKey:"b71f0a2cc06d46d696447388aef19019",
        page: setPage ,
        pageSize:10
      }
    })
    .then( res=>{ 
      const news = res?.data
      dispatch(fetchNewsSuccess(news,setPage))
    })
    .catch(err=>{
      const error = err.message
      dispatch(fetchNewsFailure(error))
    })
    // axios.get("https://jsonplaceholder.typicode.com/todos").then((res)=>{
    //   dispatch(fetchNewsSuccess(res.data))
    // }).catch((err)=>{
    //   dispatch(fetchNewsFailure(err.message))
    // })
  }
}