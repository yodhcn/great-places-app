import { View, Button, Image, Text, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";

import Colors from "../constants/Colors";

const ImgPicker = (props) => {
  const takeImageHandler = async () => {
    let permissionResponse = await ImagePicker.getCameraPermissionsAsync();

    if (!permissionResponse.granted) {
      permissionResponse = await ImagePicker.requestCameraPermissionsAsync();
      if (!permissionResponse.granted) {
        return;
      }
    }

    await ImagePicker.launchCameraAsync();
  };

  return (
    <View style={styles.imagePicker}>
      <View style={styles.imagePreview}>
        <Text>No image picked yet.</Text>
        <Image style={styles.image} />
      </View>
      <Button
        title="Take image"
        color={Colors.primary}
        onPress={takeImageHandler}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imagePicker: {
    alignItems: "center",
  },
  imagePreview: {
    width: "100%",
    height: 200,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#ccc",
    borderWidth: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ImgPicker;
