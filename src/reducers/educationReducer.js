import {
    EDUCATION_ACTIONS
} from '../constants/educationActionConstants'

const initialState = {
    categories: {
        loading: false,
        data: [],
        error: null
    },
    selected_category_id: null,
    communications: {
        loading: false,
        data: [],
        error: null
    },
    months: {
        loading: false,
        data: [],
        error: null
    },
    dates: {
        loading: false,
        data: [],
        error: null
    } 
} 

const educationReducer = (state = initialState, action) => {
    switch (action.type) {
        case EDUCATION_ACTIONS.FETCH_COMMUNICATION_CATEGORIES_ACTION:
            return {
                ...state,
                categories: {
                    ...state.categories,
                    loading: true
                }
            } 

        case EDUCATION_ACTIONS.SET_COMMUNICATION_CATEGORIES_ACTION: 
            let _categories = action.categories; 
            console.log("state on set categories", state);

            return {
                ...state,
                categories: { 
                    loading: false,
                    data: _categories
                },
                selected_category_id: _categories[0].id,

            } 

        case EDUCATION_ACTIONS.SET_COMMUNICATION_CATEGORIES_ERROR_ACTION:
            return {
                ...state,
                categories: {
                    ...state.categories,
                    loading: false,
                    error: action.error
                }
            }
        
        case EDUCATION_ACTIONS.FETCH_COMMUNICATIONS_ACTION:
            return {
                ...state, 
                selected_category_id: action.category_id,
                communications: {
                    loading: true
                }
            }

        case EDUCATION_ACTIONS.SET_COMMUNICATIONS_ACTION:
            return {
                ...state,  
                communications: {
                    loading: false,
                    data: action.communications
                }
            }
            
        case EDUCATION_ACTIONS.FETCH_MONTHS_ACTION:
            return {
                ...state, 
                months: {
                    loading: true
                }
            }

        case EDUCATION_ACTIONS.SET_MONTHS_ACTION:
            return {
                ...state,  
                months: {
                    loading: false,
                    data: action.months
                }
            }
        case EDUCATION_ACTIONS.SET_MONTHS_ERROR_ACTION:
            return {
                ...state,  
                months: {
                    loading: false,
                    error: action.error
                }
            }
             
        case EDUCATION_ACTIONS.FETCH_DATES_ACTION:
            return {
                ...state, 
                dates: {
                    loading: true
                }
            }

        case EDUCATION_ACTIONS.SET_DATES_ACTION:
            console.log("state on set dates", state);
            return {
                ...state,  
                dates: {
                    loading: false,
                    data: action.dates
                }
            }
        case EDUCATION_ACTIONS.SET_DATES_ERROR_ACTION:
            return {
                ...state,  
                dates: {
                    loading: false,
                    error: action.error
                }
            }
            
        default:
            return state;
    }
}

export default educationReducer; 