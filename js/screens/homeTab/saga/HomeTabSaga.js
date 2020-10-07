import {put, takeLatest} from '@redux-saga/core/effects';
import {Api} from './Api';
import {fetchHomeDataFailure, fetchHomeDataSuccess} from '../actions';
import {allAlbums} from '../../searchTab/actions';

function* fetchHomeData(action) {
    try {
        const receivedData = yield Api.getHomeData();
        yield put(allAlbums(receivedData));

        const resultJSON = {};
        receivedData.feed?.entry?.forEach(data => {
            let requiredKey = data.category?.attributes?.term;
            if (!(requiredKey in resultJSON)) {
                resultJSON[requiredKey] = [];
            }
            resultJSON[requiredKey].push(data);
        });

        // console.log('resultJSON = ', JSON.stringify(resultJSON))
        // console.log('Object.keys(resultJSON).length = ', Object.keys(resultJSON).length)
        // let totalGenres = 0;
        // let totalSongs = 0;
        // Object.keys(resultJSON).forEach(data => {
        //     totalGenres++;
        //     console.log('genre length is - ' + resultJSON[data].length)
        //     totalSongs += resultJSON[data].length;
        // })
        // console.log('totalGenres = ' + totalGenres)
        // console.log('totalSongs = ' + totalSongs)

        yield put(fetchHomeDataSuccess(resultJSON));
    } catch (error) {
        if (!error.type) {
            yield put(fetchHomeDataFailure());
        } else {
            yield put(fetchHomeDataFailure(error.message, error.name));
        }
    }
}

export function* watchHomeData() {
    yield takeLatest('FETCH_HOME_DATA', fetchHomeData);
}
