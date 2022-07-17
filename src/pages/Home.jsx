import { useMemo, useState, useRef, useEffect } from "react";
import NewsCard from "../components/NewsCard"
import DetailsDialog from "../components/DetailsDialog";
import { useSelector, useDispatch } from "react-redux"
import { fetchNews } from "../redux/news/actions"
import { Select, MenuItem, Button } from "@mui/material";
import countryList from 'react-select-country-list'
import InfiniteScroll from "react-infinite-scroll-component";

import { Grid, TextField, CircularProgress } from '@mui/material';

const categoriesList = [ "business", "entertainment", "general", "health", "science", "sports", "technology" ]
const countryOptions= ["ae","ar","at","au","be","bg","br","ca","ch","cn","co","cu","cz","de","eg","fr","gb","gr","hk","hu","id","ie","il","in","it","jp","kr","lt","lv","ma","mx","my","ng","nl","no","nz","ph","pl","pt","ro","rs","ru","sa","se","sg","si","sk","th","tr","tw","ua","us","ve","za"]

export default function Home (params) {

  const search = useRef("")
  const options = useMemo(() => countryList().getData().filter((country)=>countryOptions.includes(country.value.toLowerCase())), [])
  const [value, setValue] = useState('IN')
  const [category, setCategory] = useState('')
  const state = useSelector((state) => state.news);
  const dispatch = useDispatch();

  // useEffect(()=>{
  //   getNews()
  // },[value,category])

  window.state= state
  const changeHandler = e => {
    setValue(e.target.value);
  }

  function getNews(page=0) {
    dispatch(
      fetchNews(
        {
          country:value,
          search:search.current.value,
          category,
          page
        }
      )
    )
  }

  return<>
    <div className="container">
      <div className="item1">
        <h3>Country <br/>
          <Select className="mt-6" value={value} onChange={changeHandler} >
            {options && options.map((option)=><MenuItem value={option.value}>{option.label}</MenuItem>) }
          </Select>
        </h3>
        <p style={{textAlign:"center"}} >
          <TextField placeholder="Search" inputRef={search} />
          <Button variant="contained" className="mt-6" onClick={()=>getNews()} >Search</Button>
        </p>
        <div >
          <h3>Categories</h3>
          <ul id='category-list' >

            { categoriesList?.map((item,ind) => <li className={`category-item ${category===item && "active-category"}`} onClick={()=>category===item?setCategory(""):setCategory(item)} key={ind}> {item} </li>) }

          </ul>
          </div>
          </div>
          <div className="item2">
          <InfiniteScroll
                dataLength={state?.news?.length}
                next={()=>getNews(state.page)}
                hasMore={state?.news?.length!==state?.total}
                loader={<CircularProgress />}
                >
          <Grid container spacing={3} style={{margin:"0px",width:"100%"}}>
          
            { 
              state && state.loading    
              ?
                <div style={{position: "absolute", top: "50%", left: "50%"}}><CircularProgress /></div>
              : 
                state && state?.news && state?.news?.map((item,ind) => <NewsCard item={item} key={ind} />)
              }
          </Grid>
              </InfiniteScroll>
        </div>
    </div>
    <DetailsDialog />
  </>
};
