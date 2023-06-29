import styled from "styled-components/native";
import { isAndroid } from "../../utils/checkPlatform";

export const CategoryContainer = styled.TouchableOpacity`
  align-items: center;
  margin-left: 24px;
`;

export const Icon = styled.View`
  background: #ffffff;
  width: 44px;
  height: 44px;
  border-radius: 22px;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
  box-shadow: 8px 2px 1px rgba(0, 0, 0, ${isAndroid ? 0.4 : 0.1});
`;
