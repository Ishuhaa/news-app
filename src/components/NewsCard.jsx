import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { useDispatch } from 'react-redux';
import { openDialog } from '../redux/detailsDialog/actions';

export default function NewsCard({item}) {
const dispatch = useDispatch()
  return (
    <Grid item xs={12} sm={4} md={3} >
    <Paper 
      style=
      {{
        padding:'4px', background:"#f1f2f3",
        cursor:"pointer", height: "100%", 
        boxSizing: "border-box"
      }}
      onClick={()=>dispatch(openDialog({description:item.description,link:item.url}))} 
      elevation={4} 
    >
      <img src={item.urlToImage} height={100} style={{width:"-webkit-fill-available"}}  alt="news-image"/>
      <p>title :-
      <span style={{display:"block"}}>
        {item.title || "Not Available"}
      </span>
      </p>
      
      <div>Author: {item.author || "Not Available"}</div>

      
    </Paper>
    </Grid>
  );
}

