import React, {useState} from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {CustomeSwitch} from '../components/CustomeSwitch';
import {HeaderTitle} from '../components/HeaderTitle';
import {useForm} from '../hooks/useForm';
import {appStyles} from '../theme/appTheme';

export const TextInputsScreen = () => {
  const {form, onChange} = useForm({
    name: '',
    email: '',
    phone: '',
    isSubscribed: false,
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        {/* NO ES NECESARIO PERO EN CASO DE QUE NO SE CIERRE EL TECALDO AL QUITAR EL FOCUS */}
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          {/* END LOGICA CLOSE TECLADO */}
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
            {/* Cusome switch */}
            <View style={appStyles.switchRow}>
              <Text style={appStyles.switchText}>Subscribirse</Text>
              <CustomeSwitch
                onChange={isEnabled => onChange(isEnabled, 'isSubscribed')}
                isOn={form.isSubscribed}
              />
            </View>
            <HeaderTitle title={JSON.stringify(form, null, 2)} />
            <TextInput
              style={style.textInputStyle}
              placeholder="Ingrese su teléfono"
              onChangeText={value => onChange(value, 'phone')}
              keyboardType="phone-pad"
            />
            <View style={{height: 100}} />
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
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
