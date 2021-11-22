import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";

import { Container, Title } from "./styles";

interface ButtonProps extends RectButtonProps {
  title: string;
  large?: boolean;
}

export function Button({ title, large, ...rest }: ButtonProps) {
  return (
    <Container large={large}>
      <Title> {title} </Title>
    </Container>
  );
}
