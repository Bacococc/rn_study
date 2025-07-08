import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { wp, hp } from '../utils/resposive';
import { formatDeadline } from '../utils/formatDeadline';

interface CustomCardProps {
  room: any;
  onPress: () => void;
  width?: string | number;
  height?: string | number;
}

const CustomCard = ({
  room,
  onPress,
  width = 320,
  height = 100,
}: CustomCardProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.card,
        { width, height }
      ]}
      onPress={onPress}
      activeOpacity={0.85}
    >
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>
          {room.restaurant?.restaurantName}
        </Text>
        {room.restaurant?.deliveryFee && (
          <Text style={styles.fee}>
            배달비 {(room.restaurant.deliveryFee / room.maxMembers).toLocaleString()}원
          </Text>
        )}
        {room.deadline && (
          <Text style={styles.deadline}>
            🏍️ {formatDeadline(room.deadline)}
          </Text>
        )}
        <View style={styles.memberRow}>
          <Text style={styles.member}>👤 
            {/* currentMembers가 '0'아라면 '∞'(가정) */}
            {room.maxMembers ? `${room.currentMembers}/${room.maxMembers}` : '∞'}
          </Text>
        </View>
      </View>
      <View style={styles.imageBox}>
        <Image
          source={{ uri: room.restaurant?.imageUrl ?? 'https://via.placeholder.com/80' }}
          style={styles.image}
        />
        <View style={styles.discountBadge}>
          <Text style={styles.discountText}>{100 - Math.floor((room.restaurant.deliveryFee / room.maxMembers / room.restaurant.deliveryFee) * 100)}%</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    borderRadius: wp(4),
    padding: wp(6),
    marginBottom: hp(2),
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: wp(4),
    elevation: 2,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: wp(5.4),
    fontWeight: 'bold',
    marginBottom: wp(2),
    color: 'black',

  },
  fee: {
    fontSize: wp(4),
    color: '#555',
    marginBottom: hp(2),
  },
  deadline: {
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: wp(4),
    marginBottom: hp(1),
  },
  memberRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  member: {
    fontSize: wp(4),
    marginRight: 4,
  },
  imageBox: {
    marginLeft: wp(4),
    right: wp(-2.8),
    position: 'relative',
  },
  image: {
    width: wp(34),
    height: hp(16),
    borderRadius: 12,
    backgroundColor: '#f0f0f0',
  },
  discountBadge: {
    position: 'absolute',
    justifyContent: 'center',
    height: hp(3),
    paddingHorizontal: wp(2),
    top: hp(1),
    right: wp(2),
    backgroundColor: '#fff',
    borderRadius: wp(6),
    elevation: 2,
  },
  discountText: {
    fontWeight: 'bold',
    color: '#222',
    fontSize: wp(3),
  },
});

export default CustomCard;