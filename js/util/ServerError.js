export default class ServerError extends Error {
    constructor(message, id) {
        super(message);
        this.type = 'ServerError';
        this.name = 'ServerError';
        this.constructor = ServerError;
        this.id = id;
    }
}
