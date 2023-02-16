import { StatusBar } from "react-native";
import styled from "styled-components/native";
import { isAndroid } from "../utils/checkPlatform";

export const Container = styled.SafeAreaView`
  margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` : "0"};
  flex: 1;
  background: #fafafa;
`;

export const CategoriesContainer = styled.View`
  height: 73px;
  margin-top: 24px;
`;

export const MenuContainer = styled.View`
  flex: 1;
`;

export const Footer = styled.View`
  min-height: 110px;
  background: #ffffff;
  padding: 16px 24px;
  justify-content: center;
`;

export const FooterContent = styled.SafeAreaView``;
