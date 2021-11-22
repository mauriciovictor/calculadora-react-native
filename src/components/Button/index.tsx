import React from "react";
import {
  BorderlessButton,
  BorderlessButtonProps,
} from "react-native-gesture-handler";

import { Container, Title } from "./styles";

interface ButtonProps extends BorderlessButtonProps {
  name: string;
  isLarge?: boolean;
  isOperation?: boolean;
  isDelete?: boolean;
}

export function Button({
  name,
  isLarge,
  isOperation,
  isDelete,
  ...rest
}: ButtonProps) {
  return (
    <Container isDelete={isDelete!} isLarge={isLarge!} {...rest}>
      <Title isDelete={isDelete!} isOperation={isOperation!}>
        {" "}
        {name}{" "}
      </Title>
    </Container>
  );
}
