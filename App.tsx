import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { useFonts } from "expo-font";
import { Text } from "./src/components/Text";

export default function App() {
  const [isFontsLoaded] = useFonts({
    GeneralSans_400: require("./src/assets/fonts/GeneralSans-Regular.otf"),
    GeneralSans_600: require("./src/assets/fonts/GeneralSans-Semibold.otf"),
    GeneralSans_700: require("./src/assets/fonts/GeneralSans-Bold.otf"),
  });

  if (!isFontsLoaded) return null;

  return (
    <View>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="dark" />
    </View>
  );
}
