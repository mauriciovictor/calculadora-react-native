import styled, { DefaultTheme } from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.primary};
`;

export const Led = styled.View`
  width: 100%;
  height: 180px;

  align-items: flex-end;

  padding-right: 15px;
`;

export const Description = styled.Text`
  font-size: 40px;
  color: ${({ theme }) => theme.text_regular};
  font-weight: bold;

  margin-bottom: 40px;
`;

export const Result = styled.Text`
  font-size: 40px;
  color: ${({ theme }) => theme.text_medium};
  font-weight: bold;
`;

export const Header = styled.View`
  width: 100%;
  height: 20px;
`;

export const Buttons = styled.View`
  flex-direction: row;
  flex-wrap: wrap;

  flex: 1;
  align-items: flex-end;
  justify-content: flex-start;

  padding: 2px;
  margin-bottom: 4px;
`;
