import * as React from 'react';
import {View, Text, TextInput} from 'react-native';

const NewsSection = (props) => {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        width: '100%',
        padding: 15,
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>
      {props.renderNews()}
    </View>
  );
};

export default NewsSection;
