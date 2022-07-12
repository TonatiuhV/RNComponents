import React, {useRef} from 'react';
import {Animated, Button, StyleSheet, View} from 'react-native';

export const Animation101Screen = () => {
  //no renderia el componente
  const opacity = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start(() =>
      // Puede resbir un callback al finalizar la animacion
      console.log('La animacion termino'),
    ); //  para que la animacion empieze
  };

  const fadeOut = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(); //  para que la animacion empieze
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.purpleBox, {opacity: opacity}]} />
      <Button title="FadeIn" onPress={fadeIn} />
      <Button title="FadeOut" onPress={fadeOut} />
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
    backgroundColor: '#5856d6',
    marginBottom: 20,
    width: 150,
    height: 150,
  },
});
