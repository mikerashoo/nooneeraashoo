import {TOCHOO_ACTION_CONSTANTS} from '../constants/tochooActionConstants'
const INITIAL_STATE = {
    tochoos: [],
    loading: false,
    error: null,
    selected_tochoo : null
}

const tochooReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TOCHOO_ACTION_CONSTANTS.FETCH_TOCHOOS_ACTION:
            return {
                ...state,
                loading: true        
            }; 

        case TOCHOO_ACTION_CONSTANTS.SHOW_TOCHOOS_ACTION:
            return {
                ...state,
                loading: false,
                tochoos : action.tochoos,
                selected_tochoo: action.tochoos[0]      
            }; 

        case TOCHOO_ACTION_CONSTANTS.SHOW_TOCHOOS_ERROR_ACTION:
            return {
                ...state,
                error: action.error
            }    

        case TOCHOO_ACTION_CONSTANTS.SELECT_TOCHOO_ACTION:
            return {
                ...state,
                loading: true,
            }    

        case TOCHOO_ACTION_CONSTANTS.SET_TOCHOO_ACTION:
            return {
                ...state,
                loading: false,
                selected_tochoo: action.tochoo
            }
    
        default:
            return state;
    }
}

export default tochooReducer;