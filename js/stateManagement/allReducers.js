import {combineReducers} from 'redux';

const allReducers = () => {

    const HomeTabReducer = require('./../screens/homeTab/reducer/HomeTabReducer').default;
    const SearchTabReducer = require('./../screens/searchTab/reducer/SearchTabReducer').default;

    return combineReducers({
        HomeTabReducer,
        SearchTabReducer
    });

};

export default allReducers;
