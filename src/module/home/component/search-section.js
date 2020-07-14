import * as React from 'react';
import {View, Text, TextInput} from 'react-native';

const SearchSection = (props) => {
  return (
    <View
      style={{
        backgroundColor: '#00B24C',
        height: 75,
        width: '100%',
        padding: 15,
      }}>
      <TextInput
        placeholder="Type a location or restaurant"
        style={{
          borderColor: '#6DC895',
          borderWidth: 1,
          backgroundColor: '#fff',
          borderRadius: 5,
          textAlign: 'center',
        }}
        editable
      />
    </View>
  );
};

export default SearchSection;
