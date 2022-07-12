import {useRef} from 'react';
import {Animated, Easing} from 'react-native';

export const useAnimation = () => {
  //Ref o renderia el componente
  const opacity = useRef(new Animated.Value(0)).current;
  const position = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start(() =>
      // Puede resbir un callback al finalizar la animacion
      console.log('La animacion termino'),
    );
  };

  const fadeOut = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 800,
      useNativeDriver: true,
    }).start(); //  para que la animacion empieze
    //top.setValue(-100); // Resetemos el valor
  };

  const startMovingPosition = (
    initPosition: number,
    duration: number = 300,
  ) => {
    position.setValue(initPosition);
    Animated.timing(position, {
      toValue: 0,
      duration,
      useNativeDriver: true,
      // easing: Easing.bounce, // Nos prove de varias animaciones
    }).start();
  };

  return {
    opacity,
    position,
    fadeIn,
    fadeOut,
    startMovingPosition,
  };
};
