// src/components/CustomHeader.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

interface CustomHeaderProps {
  title: string;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({ title }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back" size={28} color="#000" marginTop="50" />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <View style={{ width: 28 }} /> {/* 오른쪽 공간 정렬용 */}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 110,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    top: 0,
    position: 'absolute',
    width: '100%',
  },
  title: {
    marginTop: 50,
    fontSize: 18,
    fontWeight: '600',
  },
});

export default CustomHeader;