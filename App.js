import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";

import PlacesNavigator from "./navigation/PlacesNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <PlacesNavigator />
    </NavigationContainer>
  );
}
