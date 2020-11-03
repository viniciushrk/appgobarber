import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  /* align-items: center; */
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 10 : 40}px;
`;

export const Content = styled.ScrollView``;
export const Title = styled.Text`
  font-size: 20px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin: 24px 0;
  text-align: left;
`;

export const UserAvatarButton = styled.TouchableOpacity`
  margin-top: 40px;
`;
export const UserAvatar = styled.Image`
  width: 186px;
  height: 186px;
  border-radius: 98px;

  align-self: center;
`;
export const BackButton = styled.TouchableOpacity`
  margin-top: 40px; ;
`;
