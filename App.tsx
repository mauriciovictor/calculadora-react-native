import React from "react";
import { AppTheme } from "./src/hooks/Theme";
import { Principal } from "./src/screens/Principal";

export default function App() {
  return (
    <AppTheme>
      <Principal />
    </AppTheme>
  );
}
