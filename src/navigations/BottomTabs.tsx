// src/navigation/BottomTabs.tsx

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import DeliveryHomeScreen from '../screens/DeliveryHomeScreen';
import TaxiHomeScreen from '../screens/TaxiHomeScreen';
import ProfileScreen from '../screens/ProfileScreen'; // 추가 필요
import CustomTabBar from '../components/CustomTabBar';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="DeliveryHome" component={DeliveryHomeScreen} />
      <Tab.Screen name="Add" component={() => null} />
      <Tab.Screen name="TaxiHome" component={TaxiHomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabs;