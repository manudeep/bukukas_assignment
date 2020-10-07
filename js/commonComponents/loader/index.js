import React from 'react';
import PropTypes from 'prop-types';
import {Image as AnimatedImage} from 'react-native-animatable';
import {StyleSheet} from 'react-native';

const loaderImage = require('../../../resources/loader.png');

export default class Loader extends React.PureComponent {

    static propTypes = {
        color: PropTypes.string,
        size: PropTypes.number,
    };

    static defaultProps = {
        size: 32,
    };

    static GET = () => {
        return <Loader/>;
    };

    render() {
        return (
            <AnimatedImage animation="rotate" easing="linear" iterationCount="infinite" duration={500}
                           source={loaderImage} style={[styles.loader, {
                tintColor: this.props.color,
                height: this.props.size,
                width: this.props.size,
            }]}>
            </AnimatedImage>
        );
    }
}

const styles = StyleSheet.create({
    loader: {
        height: 32,
        width: 32,
        backgroundColor: 'transparent',
    },
});
