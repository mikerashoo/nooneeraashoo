import {
    EDUCATION_ACTIONS
} from '../constants/educationActionConstants';

export const fetchCommunicationCategoriesAction = () => ({
    type: EDUCATION_ACTIONS.FETCH_COMMUNICATION_CATEGORIES_ACTION
});
 
export const setCommunicationCategoriesAction = (categories) => ({
    type: EDUCATION_ACTIONS.SET_COMMUNICATION_CATEGORIES_ACTION,
    categories
});
 
export const setCommunicationCategoriesErrorAction = (error) => ({
    type: EDUCATION_ACTIONS.SET_COMMUNICATION_CATEGORIES_ERROR_ACTION,
    error
});
 
export const fetchCommunicationsAction = (category_id) => ({
    type: EDUCATION_ACTIONS.FETCH_COMMUNICATIONS_ACTION,
    category_id
});
 
export const setCommunicationsAction = (communications) => ({
    type: EDUCATION_ACTIONS.SET_COMMUNICATIONS_ACTION,
    communications
});
 
export const setCommunicationsErrorAction = (error) => ({
    type: EDUCATION_ACTIONS.SET_COMMUNICATIONS_ERROR_ACTION,
    error
});

//For fetching and setting months
export const fetchMonthsAction = () => ({
    type: EDUCATION_ACTIONS.FETCH_MONTHS_ACTION
});
 
export const setMonthsAction = (months) => ({
    type: EDUCATION_ACTIONS.SET_MONTHS_ACTION,
    months
});
 
export const setMonthsErrorAction = (error) => ({
    type: EDUCATION_ACTIONS.SET_MONTHS_ERROR_ACTION,
    error
});
//For fetching and setting DATES
export const fetchDatesAction = () => ({
    type: EDUCATION_ACTIONS.FETCH_DATES_ACTION
});
 
export const setDatesAction = (dates) => ({
    type: EDUCATION_ACTIONS.SET_DATES_ACTION,
    dates
});
 
export const setDatesErrorAction = (error) => ({
    type: EDUCATION_ACTIONS.SET_DATES_ERROR_ACTION,
    error
});
 