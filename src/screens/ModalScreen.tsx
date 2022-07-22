import React, {useContext, useState} from 'react';
import {Button, Modal, Text, View} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {ThemeContext} from '../context/theme/ThemeContext';
import {appStyles} from '../theme/appTheme';

export const ModalScreen = () => {
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  const [isVisible, setIsVisible] = useState(false);
  return (
    <View style={appStyles.globalMargin}>
      <HeaderTitle title="Modal Screen" />
      <Button
        color={colors.primary}
        title="Abrir modal"
        onPress={() => setIsVisible(true)}
      />

      <Modal animationType="fade" visible={isVisible} transparent>
        {/* Background de fondo */}
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.5)',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {/* Contenido del modal */}
          <View
            style={{
              backgroundColor: 'white',
              height: 200,
              width: 200,
              justifyContent: 'center',
              alignItems: 'center',
              elevation: 10,
              borderRadius: 5,
            }}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Modal</Text>
            <Text style={{fontSize: 16, fontWeight: '300', marginBottom: 20}}>
              Cuerpo del modal
            </Text>
            <Button
              color={colors.primary}
              title="Cerrar"
              onPress={() => setIsVisible(false)}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};
