import * as React from 'react';
import {View, Text, TextInput, Image} from 'react-native';
import homeIcon from './../../../../assets/img/icon/footer-home.png';

const MenuSection = (props) => {
  return (
    <View
        style={{
        backgroundColor: '#fff',
        height: 250,
        width: '100%',
        padding: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        overflow: "hidden"
        
      }}>
      {props.renderMenu()}
    </View>
  );
};

export default MenuSection;
