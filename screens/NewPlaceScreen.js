import { useState } from "react";
import {
  ScrollView,
  View,
  Button,
  Text,
  TextInput,
  StyleSheet,
} from "react-native";

import Colors from "../constants/Colors";
import { useBoundStore } from "../store/useBoundStore";

const NewPlaceScreen = ({ navigation }) => {
  const [titleValue, setTitleValue] = useState("");

  const addPlace = useBoundStore((state) => state.addPlace);

  const titleChangeHandler = (text) => {
    setTitleValue(text);
  };

  const savePlaceHandler = () => {
    addPlace(titleValue);
    navigation.goBack();
  };

  return (
    <ScrollView>
      <View style={styles.form}>
        <Text style={styles.lable}>Title</Text>
        <TextInput
          style={styles.textInput}
          value={titleValue}
          onChangeText={titleChangeHandler}
        />
        <Button
          title="Save Place"
          color={Colors.primary}
          onPress={savePlaceHandler}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  form: {
    margin: 30,
  },
  lable: {
    fontSize: 18,
    marginBottom: 15,
  },
  textInput: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginBottom: 15,
    paddingVertical: 4,
    paddingHorizontal: 2,
  },
});

export default NewPlaceScreen;
