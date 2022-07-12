import React from 'react';
import {FlatList, View} from 'react-native';
import {FlatListMenuItem} from '../components/FlatListMenuItem';
import {HeaderTitle} from '../components/HeaderTitle';
import {menuItems} from '../data/menuItems';
import {appStyles} from '../theme/appTheme';

export const HomeScreen = () => {
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
        ListHeaderComponent={() => <HeaderTitle title="Opciones de menú" />}
        // Recuerda podemos asumir arrow function suponiendo el argumento
        ItemSeparatorComponent={itemSeparator}
      />
    </View>
  );
};
