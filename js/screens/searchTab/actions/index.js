export const allAlbums = (data) => {
    return {
        type: 'ALL_ALBUMS',
        data,
    };
};

export const filterAlbums = (data) => {
    return {
        type: 'FILTER_ALBUMS',
        data,
    };
};
