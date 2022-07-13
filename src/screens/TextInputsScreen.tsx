import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {appStyles} from '../theme/appTheme';

export const TextInputsScreen = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const onChange = (value: string, field: string) => {
    setForm({
      ...form,
      [field]: value,
    });
  };

  return (
    <View style={appStyles.globalMargin}>
      <HeaderTitle title="TextInputs" />
      <TextInput
        style={style.textInputStyle}
        placeholder="Ingrese su nombre"
        autoCorrect={false}
        autoCapitalize="words"
        onChangeText={value => onChange(value, 'name')}
      />
      <TextInput
        style={style.textInputStyle}
        placeholder="Ingrese su email"
        autoCorrect={false}
        autoCapitalize="none"
        onChangeText={value => onChange(value, 'email')}
        keyboardType="email-address"
        keyboardAppearance="dark" // Solo funciona en IOS
      />
      <TextInput
        style={style.textInputStyle}
        placeholder="Ingrese su teléfono"
        onChangeText={value => onChange(value, 'phone')}
        keyboardType="phone-pad"
      />

      <HeaderTitle title={JSON.stringify(form, null, 2)} />
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
    marginVertical: 10,
  },
});
