import * as React from 'react';
import {View, Text, TextInput} from 'react-native';

const PointSection = (props) => {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        height: 75,
        width: '100%',
        padding: 15,
        justifyContent: 'space-between',
        flexDirection: 'row',
      }}>
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '50%',
        }}>
        <Text>35.50</Text>
      </View>
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '50%',
        }}>
        <Text>3000 points</Text>
      </View>
    </View>
  );
};

export default PointSection;
