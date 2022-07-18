import React, {useState} from 'react';
import {
  ActivityIndicator,
  Animated,
  ImageStyle,
  StyleProp,
  View,
} from 'react-native';
import {useAnimation} from '../hooks/useAnimation';

interface Props {
  uri: string;
  style?: StyleProp<ImageStyle>;
}

export const FadeInImage = ({
  uri,
  style = {width: '100%', height: 400},
}: Props) => {
  const {opacity, fadeIn} = useAnimation();
  const [isLoading, setIsLoading] = useState(true);

  const finishLoading = () => {
    setIsLoading(false);
    fadeIn();
  };
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {isLoading && (
        <ActivityIndicator
          style={{position: 'absolute'}}
          size={30}
          color="#5856d6"
        />
      )}
      <Animated.Image
        source={{uri}}
        style={
          // {
          // width: '100%',
          // height: 400,
          // opacity,
          // }
          [style, {opacity}]
        }
        onLoadEnd={finishLoading}
      />
    </View>
  );
};
