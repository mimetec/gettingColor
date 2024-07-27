import * as React from 'react';
import { AppRegistry } from 'react-native';
import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';
import { name as appName } from './app.json';
import { StatusBar } from 'expo-status-bar';
import App from './src/App';

const theme = {
  ...DefaultTheme,
  roundness: 0,
  colors: {
    ...DefaultTheme.colors,
    primary: "rgb(206, 189, 255)",
    onPrimary: "rgb(57, 5, 144)",
    primaryContainer: "rgb(80, 43, 167)",
    onPrimaryContainer: "rgb(232, 221, 255)",
    secondary: "rgb(130, 219, 126)",
    onSecondary: "rgb(0, 57, 10)",
    secondaryContainer: "rgb(0, 83, 18)",
    onSecondaryContainer: "rgb(157, 248, 152)",
    tertiary: "rgb(255, 177, 194)",
    onTertiary: "rgb(102, 0, 43)",
    tertiaryContainer: "rgb(143, 0, 63)",
    onTertiaryContainer: "rgb(255, 217, 223)",
    error: "rgb(255, 180, 171)",
    onError: "rgb(105, 0, 5)",
    errorContainer: "rgb(147, 0, 10)",
    onErrorContainer: "rgb(255, 180, 171)",
    background: "rgb(28, 27, 30)",
    onBackground: "rgb(230, 225, 230)",
    surface: "rgb(28, 27, 30)",
    onSurface: "rgb(230, 225, 230)",
    surfaceVariant: "rgb(72, 69, 78)",
    onSurfaceVariant: "rgb(202, 196, 207)",
    outline: "rgb(148, 143, 153)",
    outlineVariant: "rgb(72, 69, 78)",
    shadow: "rgb(0, 0, 0)",
    scrim: "rgb(0, 0, 0)",
    inverseSurface: "rgb(230, 225, 230)",
    inverseOnSurface: "rgb(49, 48, 51)",
    inversePrimary: "rgb(104, 71, 192)",
    elevation: {
      level0: "transparent",
      level1: "rgb(37, 35, 41)",
      level2: "rgb(42, 40, 48)",
      level3: "rgb(48, 45, 55)",
      level4: "rgb(49, 46, 57)",
      level5: "rgb(53, 50, 62)"
    },
    surfaceDisabled: "rgba(230, 225, 230, 0.12)",
    onSurfaceDisabled: "rgba(230, 225, 230, 0.38)",
    backdrop: "rgba(50, 47, 56, 0.4)"
  },
};

export default function Main() {
  return (
    <PaperProvider>
      <App />
      <StatusBar style="auto" />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
