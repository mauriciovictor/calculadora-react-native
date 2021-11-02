import { CustomSwitch } from "../../components/Switch";
import styled, { DefaultTheme } from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 10px;
  width: 100%;
  background-color: ${(props) => props.theme.primary};
`;

export const ContainerSwitch = styled.View`
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

export const Header = styled.View`
  width: 100%;
  height: 20px;
`;
