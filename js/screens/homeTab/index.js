import React, {useEffect} from 'react';
import {Button, FlatList, Image, SafeAreaView, StatusBar, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Loader from '../../commonComponents/loader';
import {fetchHomeData} from './actions';
import {Styles} from './styles';

export default function HomeTab(props) {

    const dispatch = useDispatch();
    const reduxState = useSelector(state => state.HomeTabReducer);

    useEffect(() => {
        dispatch(fetchHomeData());
        return () => {
            // CLEAN UP
        };
    }, []);

    let getAlbumThumbnail = ({item}) => {
        return (
            <TouchableOpacity activeOpacity={1} onPress={_ => props.navigation.navigate('PDP', item)}>
                <Image
                    style={[Styles.songImg, {
                        width: parseInt(item['im:image'][2]?.attributes?.height),
                        height: parseInt(item['im:image'][2]?.attributes?.height),
                    }]}
                    resizeMode={'contain'}
                    source={{uri: item['im:image'][2]?.label}}
                />
            </TouchableOpacity>
        );
    };

    let getGenreFlatList = ({item}) => {
        return (
            <View>
                <Text style={Styles.genreTxt}>{item} ({reduxState.genreList[item]?.length})</Text>

                <FlatList
                    style={Styles.horizontalListStyle}
                    ItemSeparatorComponent={_ => <View style={Styles.horizontalListItemSeparator}/>}
                    bounces={false}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={reduxState.genreList[item]}
                    keyExtractor={(item, index) => `${reduxState.genreList[item]?.id?.attributes['im:id']} + ${index}`}
                    renderItem={getAlbumThumbnail}
                />
            </View>

        );
    };

    let getEmptyState = () => {
        return (
            <View style={Styles.emptyParent}>
                <Text style={Styles.emptyTxt}>No Data To Show</Text>
                <Button onPress={_ => dispatch(fetchHomeData())} title="Retry" color="cyan"/>
            </View>
        );
    };

    let getErrorView = () => {
        return (
            <View style={Styles.errorParent}>
                <Text
                    style={Styles.errorTxt}>{reduxState.errorMsg ? reduxState.errorMsg : 'Something Went Wrong'}</Text>
                <Button onPress={_ => dispatch(fetchHomeData())} title="Retry" color="cyan"/>
            </View>
        );
    };

    return (
        <>
            <StatusBar barStyle="dark-content"/>
            <SafeAreaView style={Styles.parent}>
                {
                    !Boolean(reduxState.isNetworkCallInProgress) && !Boolean(reduxState.isError) &&
                    <FlatList
                        ListEmptyComponent={getEmptyState}
                        style={Styles.fill}
                        bounces={false}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(item, index) => `${item} + ${index}`}
                        data={Object.keys(reduxState.genreList)}
                        renderItem={getGenreFlatList}
                    />
                }

                {
                    reduxState.isNetworkCallInProgress ?
                        <View style={Styles.loader}>
                            <Loader size={44}/>
                        </View> : null
                }

                {
                    Boolean(reduxState.isError) && getErrorView()
                }
            </SafeAreaView>
        </>
    );
};
