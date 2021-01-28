import React, { PureComponent } from 'react';
import { Dimensions } from 'react-native';
import Carousel, { getInputRangeFromIndexes } from 'react-native-snap-carousel';

const horizontalMargin = 20;
const slideWidth = 280;

const sliderWidth = Dimensions.get('window').width;
const itemWidth = slideWidth + horizontalMargin * 2;
const itemHeight = 200;

export default class MyCustomCarousel extends PureComponent {
  _scrollInterpolator(index, carouselProps) {
    const range = [3, 2, 1, 0, -1];
    const inputRange = getInputRangeFromIndexes(range, index, carouselProps);
    const outputRange = range;

    return { inputRange, outputRange };
  }

  _animatedStyles(index, animatedValue, carouselProps) {
    const sizeRef = carouselProps.vertical ? itemHeight : itemWidth;
    const translateProp = carouselProps.vertical ? 'translateY' : 'translateX';

    return {
      zIndex: carouselProps.data.length - index,
      opacity: animatedValue.interpolate({
        inputRange: [2, 3],
        outputRange: [1, 0],
      }),
      transform: [
        {
          rotate: animatedValue.interpolate({
            inputRange: [-1, 0, 1, 2, 3],
            outputRange: ['-25deg', '0deg', '-3deg', '1.8deg', '0deg'],
            extrapolate: 'clamp',
          }),
        },
        {
          [translateProp]: animatedValue.interpolate({
            inputRange: [-1, 0, 1, 2, 3],
            outputRange: [
              -sizeRef * 0.5,
              0,
              -sizeRef, // centered
              -sizeRef * 2, // centered
              -sizeRef * 3, // centered
            ],
            extrapolate: 'clamp',
          }),
        },
      ],
    };
  }

  render() {
    return (
      <Carousel
        // other props
        scrollInterpolator={this._scrollInterpolator}
        // slideInterpolatedStyle={this._animatedStyles}
        windowSize={1}
        useScrollView={true}
      />
    );
  }
}
