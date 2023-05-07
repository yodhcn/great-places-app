import { Platform } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import PlacesListScreen from "../screens/PlacesListScreen";
import PlaceDetailScreen from "../screens/PlaceDetailScreen";
import NewPlaceScreen from "../screens/NewPlaceScreen";
import MapScreen from "../screens/MapScreen";
import Colors from "../constants/Colors";

const Stack = createStackNavigator();

const PlacesNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor:
            Platform.OS === "android" ? Colors.primary : undefined,
        },
        headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
      }}
    >
      <Stack.Screen
        name="Places"
        component={PlacesListScreen}
        options={{ title: "All Places" }}
      />
      <Stack.Screen
        name="PlaceDetail"
        component={PlaceDetailScreen}
        options={({ route }) => ({
          title: route.params.placeTitle,
        })}
      />
      <Stack.Screen
        name="NewPlace"
        component={NewPlaceScreen}
        options={{ title: "Add Place" }}
      />
      <Stack.Screen name="Map" component={MapScreen} />
    </Stack.Navigator>
  );
};

export default PlacesNavigator;
