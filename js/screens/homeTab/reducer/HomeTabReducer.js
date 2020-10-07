const initialState = {
    genreList: {},
    isNetworkCallInProgress: false,
    isError: false,
    errorType: null,
    errorMsg: null,
};

const HomeTabReducer = (state = initialState, action) => {
    console.log('myDebug action.type -> ', action.type);
    switch (action.type) {
        case 'FETCH_HOME_DATA':
            return {
                ...state,
                isNetworkCallInProgress: true,
                isError: false,
                errorType: null,
                errorMsg: null,
            };

        case 'FETCH_HOME_DATA_SUCCESS':
            return {
                ...state,
                genreList: action.data,
                isNetworkCallInProgress: false,
            };

        case 'FETCH_HOME_DATA_FAILURE':
            return {
                ...state,
                isError: true,
                errorType: action.errorType,
                errorMsg: action.message,
                isNetworkCallInProgress: false,
            };

        default:
            return state;
    }
};

export default HomeTabReducer;
