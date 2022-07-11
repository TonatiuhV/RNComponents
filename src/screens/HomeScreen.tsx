import React from 'react';
import {FlatList, Text, View} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

interface MenuItem {
  name: string;
  icon: string;
  component: string;
}

const menuItems = [
  {
    name: 'Animation 101',
    icon: 'cube-outline',
    component: 'Animation101Screen',
  },
];

export const HomeScreen = () => {
  const renderMenuItem = (menuItem: MenuItem) => {
    return (
      <View>
        <Text>{menuItem.name}</Text>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={menuItems}
        // Recibé como objecto las propiedades  item y index
        renderItem={({item}) => renderMenuItem(item)}
        // Simpre poner el key estractor retornando algo unico de tipo string
        keyExtractor={item => item.name}
      />
    </View>
  );
};
