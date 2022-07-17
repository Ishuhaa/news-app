import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useSelector, useDispatch } from 'react-redux';
import { closeDialog } from '../redux/detailsDialog/actions';

export default function DetailsDialog () {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const state = useSelector(state=>state.detailsDialog)
  const dispatch = useDispatch()
  function handleClose(){
    dispatch(closeDialog())
  }

  return<Dialog
  fullScreen={fullScreen}
  open={state.show}
  onClose={handleClose}
  aria-labelledby="responsive-dialog-title"
>

  <DialogContent>
    <DialogContentText>
      Description:
    </DialogContentText>
    <div>
      {state.description || "Not Available"}
    </div>
  </DialogContent>
  <DialogActions>
    <Button autoFocus onClick={handleClose}>
      Close
    </Button>
    <Button onClick={()=>{window.open(state?.link);handleClose()}} autoFocus>
      Full News
    </Button>
  </DialogActions>
</Dialog>
}