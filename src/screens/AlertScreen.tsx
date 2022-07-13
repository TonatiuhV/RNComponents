import React from 'react';
import {Alert, Button, View} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {appStyles} from '../theme/appTheme';

export const AlertScreen = () => {
  const showAlert = () => {
    Alert.alert(
      'Titulo',
      'Este es el mensaje de a alerta',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {
        cancelable: true,
        onDismiss: () => console.log('onDismiss'),
      },
    );
  };

  const showPrompt = () => {
    Alert.prompt(
      '¿Está seguro?',
      'Esta acción no se puede revertir',
      (valor: string) => console.log('Info: ' + valor),
      'secure-text', // Tipo de testo tambien esta los input login (user,password)
      '', // Default Value
      'numeric', //
    );
  };

  return (
    <View style={appStyles.globalMargin}>
      <HeaderTitle title="Alerts" />
      <Button title="Mostrar Alerta" onPress={showAlert} />
      {/* Solo funciona n IOS */}
      <Button title="Mostrar Prompt" onPress={showPrompt} />
    </View>
  );
};
