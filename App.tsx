import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { Main } from "./src/Main";

export default function App() {
  const [isFontsLoaded] = useFonts({
    GeneralSans_400: require("./src/assets/fonts/GeneralSans-Regular.otf"),
    GeneralSans_600: require("./src/assets/fonts/GeneralSans-Semibold.otf"),
    GeneralSans_700: require("./src/assets/fonts/GeneralSans-Bold.otf"),
  });

  if (!isFontsLoaded) return null;

  return (
    <>
      <StatusBar style="dark" />
      <Main />
    </>
  );
}
