import {GENERAL_ERROR, HOST_URL, NOT_FOUND_ERROR, SERVER_ERROR, SUCCESS} from '../util/Constants';
import ServerError from '../util/ServerError';

const RequestMethod = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE',
};

const get = (url, headers) => {
    return callApi(RequestMethod.GET, url, headers);
};

const getHeaders = () => {
    let customHeaders = {
        'Content-Type': 'application/json',
        'Connection': 'keep-alive',
    };
    return Object.assign(customHeaders, {});
};


const callApi = (requestMethod, url, headers = getHeaders(), data) => {

    console.log(requestMethod + ' URL - ', `${HOST_URL}${url} headers - ${JSON.stringify(headers)}`);

    let requestInit = {
        headers: headers,
        method: requestMethod,
        credentials: 'same-origin',
    };

    if (requestMethod === RequestMethod.POST || requestMethod === RequestMethod.PUT) {
        requestInit.body = JSON.stringify(data);
        console.log(requestMethod + ' Params - ', JSON.stringify(data));
    }

    return fetch(`${HOST_URL}${url}`, requestInit)
        .then(response => {
            const statusCode = response.status;
            console.log('Response status-->', statusCode);
            // const header = {};
            // response.headers.forEach((value, key) => header[key] = value);
            // console.log('Response Header-->', header);
            return new Promise((resolve, reject) => {
                response.json().then((response) => {
                    console.log('response', response);
                    if (statusCode === SUCCESS) {
                        resolve(response);
                    } else {
                        checkResponseStatus(statusCode);
                    }
                }).catch((error) => {
                    console.log('error - ', error);
                    reject(error);
                });
            });
        });
};

const checkResponseStatus = (status) => {
    if (status >= GENERAL_ERROR && status < GENERAL_ERROR + 100 || status === NOT_FOUND_ERROR) {
        throw new ServerError(SERVER_ERROR, status);
    }
};

export default {
    get: get,
};
