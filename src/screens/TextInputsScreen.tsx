import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {appStyles} from '../theme/appTheme';

export const TextInputsScreen = () => {
  return (
    <View style={appStyles.globalMargin}>
      <HeaderTitle title="TextInputs" />
      <TextInput style={style.textInputStyle} />
    </View>
  );
};

const style = StyleSheet.create({
  textInputStyle: {
    borderWidth: 2,
    borderColor: 'rgba(0,0,0,0.3)',
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
});
