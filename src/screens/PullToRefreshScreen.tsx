import React, {useContext, useState} from 'react';
import {View, ScrollView, RefreshControl} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {HeaderTitle} from '../components/HeaderTitle';
import {ThemeContext} from '../context/theme/ThemeContext';
import {appStyles} from '../theme/appTheme';

export const PullToRefreshScreen = () => {
  const {top} = useSafeAreaInsets();
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState<string>();
  const {
    theme: {colors},
  } = useContext(ThemeContext);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      console.log('Termino');
      setRefreshing(false);
      setData('Hola mundo');
    }, 1500);
  };
  return (
    <ScrollView
      style={{marginTop: refreshing ? top : 0}}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          progressBackgroundColor={colors.primary}
          colors={['white', 'red', 'orange']}
          style={{
            backgroundColor: colors.primary,
          }}
          tintColor="white"
          title="Refreshing"
          titleColor="white"
        />
      }>
      <View style={appStyles.globalMargin}>
        <HeaderTitle title="Pull to Refresh" />
        {data && <HeaderTitle title={data} />}
      </View>
    </ScrollView>
  );
};
