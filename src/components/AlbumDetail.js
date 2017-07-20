import React from 'react';
import { View, Text } from 'react-native';

const AlbumDetail = (props) => {
  console.log('Inside AlbumDetail');
  console.log(props);

  return (
    <View>
      <Text>{props.alnum.title}</Text>
    </View>
  );
};

export default AlbumDetail;
