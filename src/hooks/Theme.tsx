import React, { createContext, useState, Context, useContext } from "react";

import { ThemeProvider } from "styled-components";
import { theme } from "../global/theme/theme";

type ThemeProps = typeof theme.dark;

interface AppThemeProps {
  children: React.ReactNode;
}

interface ThemeContextProps {
  updateTheme: (style?: "dark" | "light") => void;
}

const ThemeContext = createContext({} as ThemeContextProps);

function AppTheme({ children }: AppThemeProps) {
  const [themeStyle, setThemeStyle] = useState<ThemeProps>(theme.light);

  function updateTheme(style?: "dark" | "light") {
    if (style === "dark") setThemeStyle(theme.dark);
    else setThemeStyle(theme.light);
  }

  return (
    <ThemeContext.Provider value={{ updateTheme }}>
      <ThemeProvider theme={themeStyle}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}

function useTheme() {
  const context = useContext(ThemeContext);

  return context;
}

export { AppTheme, useTheme };
