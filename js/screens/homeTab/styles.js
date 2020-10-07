import {Dimensions, StyleSheet} from 'react-native';

export const Styles = StyleSheet.create({
    fill: {flex: 1},
    parent: {flex: 1, width: '100%', height: '100%', paddingHorizontal: 16, paddingVertical: 16},
    errorTxt: {fontSize: 24, color: 'black', textAlign: 'center'},
    emptyTxt: {fontSize: 24, color: 'black', textAlign: 'center'},
    horizontalListStyle: {marginTop: 8, marginBottom: 32},
    horizontalListItemSeparator: {width: 16, flex: 1},
    genreTxt: {fontSize: 16, color: 'black', textAlign: 'left'},
    songImg: {backgroundColor: 'darkgrey', alignSelf: 'center'},
    loader: {
        flex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'gainsboro',
    },
    errorParent: {
        width: '100%',
        height: '100%',
        backgroundColor: 'crimson',
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptyParent: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: 'darkgrey',
        justifyContent: 'center',
        alignItems: 'center',
    },

});
