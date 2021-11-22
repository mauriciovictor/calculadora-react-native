import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";

import { Container, Icon } from "./styles";

interface ButtonProps extends RectButtonProps {}

export function ButtonDelete({ ...props }: RectButtonProps) {
  return (
    <Container {...props}>
      <Icon name="x-circle" size={25} />
    </Container>
  );
}
