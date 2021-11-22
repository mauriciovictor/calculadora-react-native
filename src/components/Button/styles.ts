import styled, { css } from "styled-components/native";
import { BorderlessButton } from "react-native-gesture-handler";

interface ContainerProps {
  isLarge: boolean;
  isDelete: boolean;
}

interface TitleProps {
  isOperation: boolean;
  isDelete: boolean;
}

export const Container = styled(BorderlessButton)<ContainerProps>`
  width: ${({ isLarge }) => (isLarge ? 24.8 * 2 : 24.7)}%;

  height: 20%;

  justify-content: center;
  align-items: center;

  margin: 0.5px;

  background-color: ${({ theme, ...props }) =>
    !props.isDelete ? theme.primary_dark : theme.quarter};

  border-radius: 2px;
`;

export const Title = styled.Text<TitleProps>`
  color: ${({ theme, ...props }) =>
    !props.isOperation ? theme.text_basic : theme.tertiary};

  ${({ isDelete, theme }) =>
    isDelete
      ? css`
          color: ${theme.text_basic};
        `
      : ""}

  font-size: 28px;
  font-weight: bold;
`;
