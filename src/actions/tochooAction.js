import {TOCHOO_ACTION_CONSTANTS} from '../constants/tochooActionConstants';

export const fetchTochoosAction = () => ({
    type: TOCHOO_ACTION_CONSTANTS.FETCH_TOCHOOS_ACTION
});

export const showTochoosAction = (tochoos) => ({
    type: TOCHOO_ACTION_CONSTANTS.SHOW_TOCHOOS_ACTION,
    tochoos
});

export const showTochoosErrorAction = (error) => ({
    type: TOCHOO_ACTION_CONSTANTS.SHOW_TOCHOOS_ERROR_ACTION,
    error
});

export const selectTochooAction = (tochoo) => ({
    type: TOCHOO_ACTION_CONSTANTS.SELECT_TOCHOO_ACTION,
    tochoo
});

export const setTochooAction = (tochoo) => ({
    type: TOCHOO_ACTION_CONSTANTS.SET_TOCHOO_ACTION,
    tochoo
});