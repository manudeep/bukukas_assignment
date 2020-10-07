import NetworkService from '../../../service/NetworkService';

function getHomeData() {
    return NetworkService.get('/us/rss/topalbums/limit=100/json', undefined);
}

export const Api = {
    getHomeData: getHomeData,
};
