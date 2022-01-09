import { combineReducers } from 'redux';
import mainpageReducer from "./mainpageReducer";

const reducers = combineReducers (
    {
       currInventories: mainpageReducer
    }
);

export default reducers;