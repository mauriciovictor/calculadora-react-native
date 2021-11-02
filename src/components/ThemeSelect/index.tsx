import React, { useState } from "react";

import { Container, Switch, Image } from "./styles";

import SunImage from "../../assets/img/sun.png";
import MoonImage from "../../assets/img/moon.png";

import SunActiveImage from "../../assets/img/sun_active.png";
import MoonActiveImage from "../../assets/img/moon_active.png";
import { useTheme } from "../../hooks/Theme";

export function ThemeSelect() {
  const { updateTheme } = useTheme();

  const [isEnabled, setIsEnabled] = useState(false);

  function handleToggleSwitch() {
    setIsEnabled((oldState) => !oldState);

    if (isEnabled) updateTheme("light");
    else updateTheme("dark");
  }

  return (
    <Container>
      <Image source={isEnabled ? SunActiveImage : SunImage} width={200} />
      <Switch
        isEnabled={isEnabled}
        onValueChange={handleToggleSwitch}
        value={isEnabled}
      />
      <Image source={isEnabled ? MoonActiveImage : MoonImage} />
    </Container>
  );
}
