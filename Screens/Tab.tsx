import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Tabs/Home';
import Bookings from './Tabs/Bookings';
import Profile from './Tabs/Profile';

import Setings from './Tabs/Setings';
import SvgHome from '../src/elements/icons/Home';
import SvgBooking from '../src/elements/icons/Booking';
import SvgMan from '../src/elements/icons/Man';
import SvgVector from '../src/elements/icons/Vector';

const Tab = createBottomTabNavigator();

const TabScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconComponent;
          
          if (route.name === 'Home') {
            iconComponent = <SvgHome width={size} height={size} color={color} />;
          } else if (route.name === 'Bookings') {
            iconComponent = <SvgBooking width={size} height={size} color={color} />;
          } else if (route.name === 'Profile') {
            iconComponent = <SvgMan width={size} height={size} color={color} />;
          } else if (route.name === 'Settings') {
            iconComponent = <SvgVector width={size} height={size} color={color} />;
          }
       
          return iconComponent;
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Bookings" component={Bookings} />
      <Tab.Screen name="Profile" component={Profile} />
      {/* <Tab.Screen name="Settings" component={Setings} /> */}
    </Tab.Navigator>
  );
};

export default TabScreen;
