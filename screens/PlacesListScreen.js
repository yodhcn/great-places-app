import { useLayoutEffect } from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../components/HeaderButton";

const PlacesListScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            iconName={Platform.OS === "android" ? "md-add" : "ios-add"}
            onPress={() => {
              navigation.navigate("NewPlace");
            }}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation]);

  return (
    <View>
      <Text>PlacesListScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default PlacesListScreen;
