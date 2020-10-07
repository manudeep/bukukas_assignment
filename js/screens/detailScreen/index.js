import React from 'react';
import {Image, Text, View} from 'react-native';
import {Styles} from './styles';

export default function detailScreen(props) {

    // console.log('props -- ', JSON.stringify(props.route.params))
    let data = props.route.params;

    let info = (label, info) => {
        return <Text style={Styles.labelTxt}>{label}- <Text style={Styles.infoTxt}>{info}</Text></Text>;
    };

    return (
        <View style={Styles.padding_16}>
            <Text style={Styles.title}>{data['im:name']?.label}</Text>

            <View style={Styles.subParent}>
                <Image
                    style={[Styles.songImg, {
                        width: parseInt(data['im:image'][2]?.attributes?.height),
                        height: parseInt(data['im:image'][2]?.attributes?.height),
                    }]}
                    resizeMode={'contain'}
                    source={{uri: data['im:image'][2]?.label}}
                />

                <View style={Styles.songInfoSection}>
                    {
                        info('Artist', data['im:artist']?.label)
                    }
                    {
                        info('Release Date', data['im:releaseDate']?.attributes?.label)
                    }
                    {
                        info('Category', data.category?.attributes?.term)
                    }
                    {
                        info('Price', data['im:price']?.label)
                    }
                </View>
            </View>
        </View>
    );
}
