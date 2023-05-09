import { useState } from "react";
import {
  View,
  Button,
  Text,
  ActivityIndicator,
  Alert,
  StyleSheet,
  Image,
} from "react-native";
import * as Location from "expo-location";

import Colors from "../constants/Colors";
import MapPreview from "./MapPreview";

// https://stackoverflow.com/questions/76056019/timeout-function-on-location-getcurrentpositionasync-doesnt-timeout
const asyncCallWithTimeout = async (asyncPromise, timeLimit) => {
  let timeoutHandle;

  const timeoutPromise = new Promise((_resolve, reject) => {
    timeoutHandle = setTimeout(
      () => reject(new Error("Async call timeout limit reached")),
      timeLimit
    );
  });

  return Promise.race([asyncPromise, timeoutPromise]).then((result) => {
    clearTimeout(timeoutHandle);
    return result;
  });
};

const LocationPicker = (props) => {
  const [isFetching, setIsFetching] = useState(false);
  const [pickedLocation, setPickedLocation] = useState();

  const getLoactionHandler = async () => {
    let permissionResponse = await Location.getForegroundPermissionsAsync();

    if (!permissionResponse.granted) {
      permissionResponse = await Location.requestForegroundPermissionsAsync();
      if (!permissionResponse.granted) {
        return;
      }
    }

    try {
      setIsFetching(true);
      setPickedLocation(null);
      const location = await asyncCallWithTimeout(
        Location.getCurrentPositionAsync({}),
        5000
      );
      setPickedLocation({
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      });
    } catch (err) {
      console.log(err);
      Alert.alert(
        "Could not fetch location!",
        "Please try again later or pick a location on the map."
      );
      // default location
      setPickedLocation({
        lat: 39.990464,
        lng: 116.481485,
      });
    }
    setIsFetching(false);
  };

  return (
    <View style={styles.locationPicker}>
      <MapPreview style={styles.mapPreview} location={pickedLocation}>
        {isFetching ? (
          <ActivityIndicator size="large" color={Colors.primary} />
        ) : (
          <Text>No location chosen yet!</Text>
        )}
      </MapPreview>
      <Button
        title="Get User Location"
        color={Colors.primary}
        onPress={getLoactionHandler}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  locationPicker: {
    marginBottom: 15,
  },
  mapPreview: {
    marginBottom: 10,
    width: "100%",
    height: 150,
    borderColor: "#ccc",
    borderWidth: 1,
  },
});

export default LocationPicker;
