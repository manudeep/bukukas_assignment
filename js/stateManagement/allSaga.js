import {all, call} from '@redux-saga/core/effects';

export default function* rootSaga() {

    const HomeTabSaga = require('./../screens/homeTab/saga/HomeTabSaga').watchHomeData;

    return yield all([
        call(HomeTabSaga),
    ]);
}
