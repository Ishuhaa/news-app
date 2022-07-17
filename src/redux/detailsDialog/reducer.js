import { OPEN_DIALOG, CLOSE_DIALOG  } from "./actionTypes";

const initState = {
    show:false,
    description:"Not Available",
    link:""
}

const reducer = ( state=initState, action ) => {
    switch (action.type) {
        case OPEN_DIALOG:
            return {
                show:true,
                description: action?.description,
                link: action?.link,
            }

        case CLOSE_DIALOG:
            return {
                show:false,
                description:"Not Available",
                link:""
            }

        default:
            return state
    }
}

export default reducer