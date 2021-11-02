import styled from "styled-components/native";

import { CustomSwitch } from "../Switch";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 30px;
  margin-left: 20px;
`;

export const Switch = styled(CustomSwitch).attrs(({ theme, isEnabled }) => ({
  trackColor: {
    false: theme.switch_background,
    true: theme.switch_background,
  },
  thumbColor: isEnabled ? theme.switch_circle : theme.text_basic,
}))``;

export const Image = styled.Image`
  width: 25px;
  height: 25px;
`;
