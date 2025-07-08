import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { wp, hp } from '../utils/resposive';

type CustomButtonProps = {
  navigation: any;
  screenName: string; // 추가
  backgroundColor?: string;
  textColor?: string;
  width?: string | number;
  height?: string | number;
  buttonText?: string;
}; //상위 컴포넌트로부터 받아올 props의 타입 정의

const CustomButton = ({
  navigation,
  screenName, // 추가
  backgroundColor = '#FFFFFF',
  textColor = 'black',
  width = wp(60),
  height = hp(7),
  buttonText = '버튼',
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor, width, height }]}
      onPress={() => navigation.navigate(screenName)} // 수정
    >
      <Text style={[styles.buttonText, { color: textColor }]}>
        {buttonText}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: wp(3),
    borderRadius: wp(4),
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: wp(4),
  },
});

export default CustomButton;