import React, {useContext, useRef} from 'react';
import {Animated, PanResponder, StyleSheet, View} from 'react-native';
import {ThemeContext} from '../context/theme/ThemeContext';

export const Animation102Screen = () => {
  // pan animmated
  const pan = useRef(new Animated.ValueXY()).current;
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  // panresponsender

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event(
      [
        null,
        {
          dx: pan.x, // x,y are Animated.Value
          dy: pan.y,
        },
      ],
      {
        useNativeDriver: false, // Es necesario pasarlo para no generar un warining
      },
    ),
    onPanResponderRelease: () => {
      Animated.spring(
        pan, // Auto-multiplexed ///// el driver debe estar el false
        {toValue: {x: 0, y: 0}, useNativeDriver: false}, // Back to zero
      ).start();
    },
  });
  return (
    <View style={styles.container}>
      <Animated.View
        {...panResponder.panHandlers}
        style={[
          pan.getLayout(),
          styles.purpleBox,
          {backgroundColor: colors.primary},
        ]}
      />
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
    width: 150,
    height: 150,
  },
});
