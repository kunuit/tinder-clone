import * as React from 'react';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';

import Carousel, { Pagination } from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Ionicons';

export default class CarouselSlide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: [
        {
          icon: 'flame-sharp',
          color: 'red',
          title: 'Mua Tinder Gold',
          text: 'Vô cực like và nhìu tiện ích',
        },
        {
          icon: 'flash',
          color: 'purple',
          title: 'Được tương hợp nhanh hơn',
          text: 'Hiểu rồi chớ',
        },
        {
          icon: 'star',
          color: '#2099f2',
          title: 'Nổi bật nhờ Super like',
          text: 'Tăng gấp 3 lần cơ hội gặp bạn',
        },
        {
          icon: 'location-sharp',
          color: '#2099f2',
          title: 'Vuốt chọn khắp thế giới',
          text: 'Hộ chiếu đi khắp nơi với Tinder Plus',
        },
        {
          icon: 'ios-key',
          color: 'yellow',
          title: 'Kiểm soát hồ sơ của bạn',
          text: 'Dễ dàng nâng cấp để kết bạn',
        },
        {
          icon: 'refresh',
          color: 'yellow',
          title: 'Ý tôi là vuốt phải cơ',
          text: 'Chứ ý bạn muốn sao nếu ko có Tinder',
        },

        {
          icon: 'heart',
          color: 'blue',
          title: 'Tăng cơ hội của bạn',
          text: 'Nhận lượt thích vô hạn với Tinder Plus',
        },
      ],
    };
  }

  _renderItem({ item, index }) {
    return (
      <View
        style={{
          backgroundColor: 'rgba(86,92,83,0.59)',
          borderRadius: 15,
          height: 80,
          padding: 15,
          marginLeft: 25,
          marginRight: 25,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            // justifyContent: 'space-between',
            textAlign: 'center',
          }}>
          <Icon
            // style={styles.iconCard}
            name={item.icon}
            size={30}
            color={item.color}
          />
          <Text style={{ fontSize: 15, fontWeight: 'bold', marginLeft: 10 }}>
            {item.title}
          </Text>
        </View>
        <Text style={{ textAlign: 'center' }}>{item.text}</Text>
      </View>
    );
  }

  get pagination() {
    const { carouselItems, activeIndex } = this.state;
    return (
      <Pagination
        dotsLength={carouselItems.length}
        activeDotIndex={activeIndex}
        // containerStyle={{ backgroundColor: 'rgba(255, 200, 255, 0.96)' }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: 'rgba(86,92,83,0.59)',
        }}
        inactiveDotStyle={
          {
            // Define styles for inactive dots here
          }
        }
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  }

  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          display: 'flex',
          // backgroundColor: '#f5f6f7',
          paddingTop: 50,
          height: 50,
        }}>
        <View
          style={{
            // flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Carousel
            layout={'default'}
            // layoutCardOffset={`18`}
            // ref={(ref) => (this._carousel = ref)}
            data={this.state.carouselItems}
            sliderWidth={300}
            itemWidth={300}
            renderItem={this._renderItem}
            onSnapToItem={(index) => this.setState({ activeIndex: index })}
            loop={true}
            autoplay={true}
            autoplayDelay={500}
          />
        </View>
        {this.pagination}
      </SafeAreaView>
    );
  }
}
// const styles = StyleSheet.create({
//   point: {},
// });
