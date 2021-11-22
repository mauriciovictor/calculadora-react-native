import styled from "styled-components/native";

import { RectButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

export const Container = styled(RectButton)`
  width: 45px;
  height: 45px;
  align-items: center;
  justify-content: center;
  /* background: #991309; */

  border-radius: 25px;
`;

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.text_basic};
`;
