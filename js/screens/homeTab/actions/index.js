export const fetchHomeData = () => {
    return {
        type: 'FETCH_HOME_DATA',
    };
};

export const fetchHomeDataSuccess = (data) => {
    return {
        type: 'FETCH_HOME_DATA_SUCCESS',
        data,
    };
};

export const fetchHomeDataFailure = (message, errorType) => {
    return {
        type: 'FETCH_HOME_DATA_FAILURE',
        message,
        errorType,
    };
};
