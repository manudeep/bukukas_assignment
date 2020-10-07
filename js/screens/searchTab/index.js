import React from 'react';
import {FlatList, Image, SafeAreaView, StatusBar, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {filterAlbums} from './actions';
import {Styles} from './styles';

export default function SearchTab(props) {

    const dispatch = useDispatch();
    const reduxState = useSelector(state => state.SearchTabReducer);

    let getAlbumThumbnailView = ({item}) => {
        return (
            <TouchableOpacity activeOpacity={1} onPress={() => props.navigation.navigate('PDP', item)}>
                <Image
                    style={[Styles.songThumbnail, {
                        width: parseInt(item['im:image'][2]?.attributes?.height),
                        height: parseInt(item['im:image'][2]?.attributes?.height),
                    }]}
                    resizeMode={'contain'}
                    source={{uri: item['im:image'][2]?.label}}
                />
            </TouchableOpacity>
        );
    };

    let getEmptyState = () => {
        return (
            <View style={Styles.emptyStateParent}>
                <Text style={Styles.emptyStateTxt}>No Data To Show</Text>
            </View>
        );
    };

    let onChangeText = (input) => {
        dispatch(filterAlbums(input));
    };

    return (
        <>
            <StatusBar barStyle="dark-content"/>
            <SafeAreaView style={Styles.horPadding_8}>

                <TextInput
                    placeholder={'Search by Artist/Album title'}
                    returnKeyType={'done'}
                    onChangeText={onChangeText}
                    onSubmitEditing={(event) => {
                    }}
                    style={Styles.inputTxt}
                />

                <FlatList
                    ListEmptyComponent={getEmptyState}
                    style={Styles.list}
                    bounces={false}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => `${item} + ${index}`}
                    data={reduxState.filteredAlbums}
                    renderItem={getAlbumThumbnailView}
                    contentContainerStyle={Styles.contentContainer}
                    numColumns={2}
                />
            </SafeAreaView>
        </>
    );
};

