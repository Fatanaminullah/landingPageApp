import * as React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import HomeContainer from '../../module/home/container/home-container';
import imageGrab from '../../../assets/img/icon/grab-image.png';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: [
        'Car',
        'Food',
        'Bike',
        'Grocery',
        'Delivery',
        'Video',
        'Bills',
        'More',
      ],
      allMenu: [
        'Car',
        'Food',
        'Bike',
        'Grocery',
        'Delivery',
        'Video',
        'Bills',
        'Menu',
        'Menu',
        'Menu',
        'Menu',
        'Menu',
        'Menu',
        'Menu',
        'Menu',
        'Menu',
        'Menu',
      ],
      news: [
        'lorem ipsum dolor sit amet ',
        'lorem ipsum dolor sit amet ',
        'lorem ipsum dolor sit amet ',
        'lorem ipsum dolor sit amet ',
        'lorem ipsum dolor sit amet ',
        'lorem ipsum dolor sit amet ',
        'lorem ipsum dolor sit amet ',
        'lorem ipsum dolor sit amet ',
        'lorem ipsum dolor sit amet ',
      ],
      dialog: false,
    };
  }
  onPressMore = () => {
    this.setState({dialog: !this.state.dialog});
  };
  renderMenu = () => {
    return this.state.menu.map((item) => {
      if (item === 'More') {
        return (
          <TouchableOpacity
            onPress={this.onPressMore}
          >
            <View style={{padding: 15}}>
              <View
                style={{
                  borderRadius: 100,
                  backgroundColor: '#00B24A',
                  width: 50,
                  height: 50,
                }}
              />
              <Text> {item} </Text>
            </View>
          </TouchableOpacity>
        );
      } else {
          return (
            <View style={{padding: 15}}>
                <View
                style={{
                    borderRadius: 100,
                    backgroundColor: '#00B24A',
                    width: 50,
                    height: 50,
                }}
                />
                <Text> {item} </Text>
            </View>
          )
      }
    });
  };
  renderMoreMenu = () => {
    return this.state.allMenu.map((item) => (
      <View style={{padding: 15}}>
        <View
          style={{
            borderRadius: 100,
            backgroundColor: '#00B24A',
            width: 50,
            height: 50,
          }}
        />
        <Text> {item} </Text>
      </View>
    ));
  };
  renderNews = () => {
    return this.state.news.map((item) => (
      <View
        style={{
          width: '50%',
          borderRadius: 20,
          height: 300,
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 10,
        }}>
        <View
          style={{
            height: '70%',
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.8,
            shadowRadius: 2,
            elevation: 1,
          }}>
          <Image
            source={imageGrab}
            style={{
              width: '100%',
              height: '100%',
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            }}
            resizeMode="cover"
          />
        </View>
        <View style={{alignItems: 'center', padding: 10}}>
          <Text>{item}</Text>
        </View>
      </View>
    ));
  };
  render() {
    return (
      <HomeContainer
        dialog={this.state.dialog}
        onPressMore={this.onPressMore}
        renderMenu={this.renderMenu}
        renderMoreMenu={this.renderMoreMenu}
        renderNews={this.renderNews}
      />
    );
  }
}

export default HomeScreen;
