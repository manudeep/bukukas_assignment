const initialState = {
    allAlbums: [],
    filteredAlbums: [],
};

const SearchTabReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ALL_ALBUMS':
            return {
                ...state,
                allAlbums: action.data?.feed?.entry,
                filteredAlbums: action.data?.feed?.entry,
            };

        case 'FILTER_ALBUMS':

            if (!action.data) {
                return {
                    ...state,
                    filteredAlbums: state.allAlbums,
                };
            }

            let filteredAlbums = state.allAlbums.filter((item) => {
                return ((item['im:name']?.label?.includes(action.data)) || ((item['im:artist']?.label?.includes(action.data))));
            });

            return {
                ...state,
                filteredAlbums: filteredAlbums,
            };

        default:
            return state;
    }
};

export default SearchTabReducer;
