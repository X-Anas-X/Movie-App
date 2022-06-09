import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme, View} from 'react-native';
import Theme from './Theme';
import {ThemeProvider} from 'styled-components/native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import RootStackNavigation from './NavigationStack/RootNavigation';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : '#ffffff',
  };

  return (
    <ThemeProvider theme={Theme}>
      <SafeAreaView style={[backgroundStyle, {flex: 1}]}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <RootStackNavigation />
      </SafeAreaView>
    </ThemeProvider>
  );
};
export default App;
