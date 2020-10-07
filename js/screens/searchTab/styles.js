import {Dimensions, StyleSheet} from 'react-native';

export const Styles = StyleSheet.create({
    fill: {flex: 1},
    songThumbnail: {
        backgroundColor: 'darkgrey', alignSelf: 'center',
        marginTop: 16,
        marginLeft: 8,
        marginRight: 8,
        borderRadius: 4,
    },
    emptyStateParent: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: 'darkgrey',
        alignItems: 'center',
    },
    emptyStateTxt: {marginTop: 64, fontSize: 24, color: 'black', textAlign: 'center'},
    horPadding_8: {paddingHorizontal: 8},
    inputTxt: {
        height: 32,
        paddingTop: 4,
        paddingLeft: 4,
        marginRight: 16,
        borderBottomColor: 'black',
        paddingVertical: 0,
        borderBottomWidth: 1,
    },
    list: {marginTop: 8},
    contentContainer: {alignItems: 'center'},
});
