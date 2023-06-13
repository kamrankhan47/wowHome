import {View, Text} from 'react-native';
import React from 'react';

import Home from './Screens/Tabs/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import TabScreen from './Screens/Tab';
import Details from './Screens/Details';
import Onboarding from './src/Components/Onboarding';
import { Provider } from 'react-redux';
import store from './Redux/store';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Onboarding' component={Onboarding} />
        <Stack.Screen name="Tabs" component={TabScreen} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
      </Provider>
    </NavigationContainer>
    // <Onboarding/>
  );
};

export default App;
