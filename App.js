import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";

import PlacesNavigator from "./navigation/PlacesNavigator";
import { init } from "./helpers/db";

init()
  .then(() => {
    console.log("Initialized database");
  })
  .catch((err) => {
    console.log("Initializing db failed.");
    console.log(err);
  });

export default function App() {
  return (
    <NavigationContainer>
      <PlacesNavigator />
    </NavigationContainer>
  );
}
