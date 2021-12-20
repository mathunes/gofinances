import React from 'react';
import { ThemeProvider } from 'styled-components';
import AppLoading from 'expo-app-loading';

import { Dashboard } from './src/screens/Dashboard';
import theme from './src/global/styles/theme';
import { 
  useFonts, 
  Poppins_400Regular, 
  Poppins_500Medium, 
  Poppins_700Bold 
} from '@expo-google-fonts/poppins';

export default function App() {

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  //Aguardando carregamento das fontes
  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    //Disponibilizar tema para toda a aplicação

    <ThemeProvider theme={theme}>
      <Dashboard />
    </ThemeProvider>
  );
}