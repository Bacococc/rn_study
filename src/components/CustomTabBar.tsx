// components/CustomTabBar.tsx
import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { wp, hp } from '../utils/resposive';


const CustomTabBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        if (route.name === 'Add') {
          return (
            <TouchableOpacity
              key={route.key}
              onPress={() => navigation.navigate(route.name)}
              style={styles.addButton}>
              <Ionicons name="add" size={32} color="black" />
            </TouchableOpacity>
          );
        }

        const iconNameMap = {
          Home: 'home-outline',
          DeliveryHome: 'cart-outline',
          TaxiHome: 'car-outline',
          Profile: 'person-outline',
        };

        return (
          <TouchableOpacity
            key={route.key}
            onPress={() => navigation.navigate(route.name)}
            style={styles.tab}
            >
            <Ionicons
              name={iconNameMap[route.name]}
              size={wp(6)}
              color={isFocused ? 'black' : '#aaa'}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: hp(8),
    backgroundColor: '#fff',
    borderRadius: wp(9), 
    margin: wp(4),      
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: hp(2.5),     
    left: wp(4),        
    right: wp(4),      
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: hp(0.25) }, 
    shadowRadius: wp(2.5), 
    elevation: 5,
  },
  tab: {
    alignItems: 'center',
    marginHorizontal: wp(7.5), 
  },
  addButton: {
    position: 'absolute',
    top: -hp(4),            
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderRadius: wp(9),     
    width: wp(16),           
    height: wp(16),         
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: wp(0.5),
    borderColor: 'orange',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: hp(0.25) }, // 2 -> hp(0.25)
    shadowRadius: wp(2.5),   // 10 -> wp(2.5)
    elevation: 6,
  },
});

export default CustomTabBar;