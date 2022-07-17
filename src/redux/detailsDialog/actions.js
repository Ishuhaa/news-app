import { OPEN_DIALOG, CLOSE_DIALOG  } from "./actionTypes";

export const openDialog = ({description="Not Available", link=""}) => {
  return {
    type: OPEN_DIALOG,
    description,
    link
  }
}

export const closeDialog = () => {
  return {
    type: CLOSE_DIALOG,
  }
}