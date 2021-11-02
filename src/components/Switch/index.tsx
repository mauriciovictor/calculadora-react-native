import React from "react";

import { SwitchProps } from "react-native";
import { Switch } from "react-native-gesture-handler";

interface ISwitchProps extends SwitchProps {
  isEnabled: boolean;
}

export function CustomSwitch({ ...rest }: ISwitchProps) {
  return <Switch {...rest} />;
}
