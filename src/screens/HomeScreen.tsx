import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import Icon from 'react-native-vector-icons/Ionicons';
import {FlatListMenuItem} from '../components/FlatListMenuItem';
import {MenuItem} from '../interfaces/appInterfaces';
import {appStyles} from '../theme/appTheme';

const menuItems: MenuItem[] = [
  {
    name: 'Animation 101',
    icon: 'cube-outline',
    component: 'Animation101Screen',
  },
  {
    name: 'Animation 102',
    icon: 'albums-outline',
    component: 'Animation102Screen',
  },
];

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();

  const renderListHeader = () => {
    return (
      <View style={{marginTop: top + 20, marginBottom: 20}}>
        <Text style={appStyles.title}>Opciones de Menú</Text>
      </View>
    );
  };

  const itemSeparator = () => {
    return (
      <View
        style={{borderBottomWidth: 1, opacity: 0.4, marginVertical: 8}}></View>
    );
  };

  return (
    <View style={{flex: 1, ...appStyles.globalMargin}}>
      <FlatList
        data={menuItems}
        // Recibé como objecto las propiedades  item y index
        renderItem={({item}) => <FlatListMenuItem menuItem={item} />}
        // Simpre poner el key estractor retornando algo unico de tipo string
        keyExtractor={item => item.name}
        // Encezado de la flatlist
        ListHeaderComponent={() => renderListHeader()}
        // Recuerda podemos asumir arrow function suponiendo el argumento
        ItemSeparatorComponent={itemSeparator}
      />
    </View>
  );
};
