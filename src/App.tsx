import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./assets/styles/themes/default";
import { GlobalStyled } from "./assets/styles/global";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyled />
      <h1>Dt money</h1>
    </ThemeProvider>
  );
}
