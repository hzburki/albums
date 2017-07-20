import React from 'react';
import { Text, View, Image, Linking } from 'react-native';

import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
  const {
    textContainerStyle,
    ImageStyle,
    ImageContainerStyle,
    TextStyle,
    CoverImageStyle
  } = styles;
  const { title, thumbnail_image, artist, image, url } = album;

  return (
    <Card>
      <CardSection>
        <View style={ImageContainerStyle}>
          <Image style={ImageStyle} source={{ uri: thumbnail_image }} />
        </View>
        <View style={textContainerStyle}>
          <Text style={TextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image style={CoverImageStyle} source={{ uri: image }} />
      </CardSection>

      <CardSection>
        <Button onPress={() => Linking.openURL(url)}>
          Buy Now
        </Button>
      </CardSection>
    </Card>
  );
};

const styles = {
  textContainerStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  TextStyle: {
    fontSize: 18
  },
  ImageStyle: {
    width: 50,
    height: 50
  },
  ImageContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  CoverImageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default AlbumDetail;
