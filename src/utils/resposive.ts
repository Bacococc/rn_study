// utils/responsive.ts
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const wp = (percentage: number) => (width * percentage) / 100;
export const hp = (percentage: number) => (height * percentage) / 100;

// const styles = StyleSheet.create({
//   button: {
//     width: wp(60),
//     height: hp(7),
//     borderRadius: wp(3),
//   },
// });

//위와 같은 형태로 사용!!