import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  Dimensions,
  Image,
  ImageSourcePropType,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ScreenStackProps} from 'react-native-screens';

import Carousel, {Pagination} from 'react-native-snap-carousel-v4';
import Icon from 'react-native-vector-icons/Ionicons';
import {useAnimation} from '../hooks/useAnimation';

const {width: screenWidth} = Dimensions.get('window');

interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}

const items: Slide[] = [
  {
    title: 'Titulo 1',
    desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
    img: require('../assets/slide-1.png'),
  },
  {
    title: 'Titulo 2',
    desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
    img: require('../assets/slide-2.png'),
  },
  {
    title: 'Titulo 3',
    desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
    img: require('../assets/slide-3.png'),
  },
];

interface Props extends StackScreenProps<any, any> {}

export default function SlidesScreen({navigation}: Props) {
  const [activeIndex, setActiveIndex] = useState(0);

  const {opacity, fadeIn, fadeOut} = useAnimation();
  const isVisible = useRef(false);
  const renderItem = (item: Slide) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          borderRadius: 5,
          padding: 40,
          justifyContent: 'center',
        }}>
        <Image
          source={item.img}
          style={{width: 350, height: 400, resizeMode: 'center'}}
        />
        <Text style={styles.title}>{item.title}</Text>

        <Text style={styles.subTitle}>{item.desc}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: 50,
      }}>
      <Carousel
        data={items}
        renderItem={({item}: any) => renderItem(item)}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        vertical={false}
        onSnapToItem={index => {
          setActiveIndex(index);
          if (index === items.length - 1) {
            fadeIn();
            isVisible.current = true;
          }
        }}
      />
      {/* Pagination */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginHorizontal: 20,
        }}>
        <Pagination
          dotsLength={items.length}
          activeDotIndex={activeIndex}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 10,
            backgroundColor: '#5856D6',
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
        <Animated.View
          style={{
            opacity,
          }}>
          <TouchableOpacity
            activeOpacity={0.9}
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#5856D6',
              width: 125,
              height: 45,
              borderRadius: 10,
            }}
            onPress={() => {
              if (isVisible.current) {
                navigation.pop();
              }
            }}>
            <Text
              style={{
                fontSize: 25,
                color: 'white',
              }}>
              Entrar
            </Text>
            <Icon name="chevron-forward-outline" color="white" size={30} />
          </TouchableOpacity>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#5856D6',
  },
  subTitle: {
    fontSize: 16,
  },
});
