import React, {useContext, useRef} from 'react';
import {Animated, Button, Easing, StyleSheet, View} from 'react-native';
import {ThemeContext} from '../context/theme/ThemeContext';
import {useAnimation} from '../hooks/useAnimation';

export const Animation101Screen = () => {
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  const {opacity, position, fadeIn, fadeOut, startMovingPosition} =
    useAnimation();

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.purpleBox,
          {
            backgroundColor: colors.primary,
            opacity: opacity,
            transform: [
              {
                translateX: position,
              },
            ],
          },
        ]}
      />

      <Button
        title="FadeIn"
        color={colors.primary}
        onPress={() => {
          fadeIn();
          startMovingPosition(100);
        }}
      />
      <View style={{marginBottom: 10}} />
      <Button title="FadeOut" color={colors.primary} onPress={fadeOut} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  purpleBox: {
    marginBottom: 20,
    width: 150,
    height: 150,
  },
});
