import { View, Image, StyleSheet } from "react-native";

import ENV from "../env";

const MapPreview = (props) => {
  let imagePreviewUrl;
  if (props.location) {
    // https://lbs.amap.com/api/webservice/guide/api/staticmaps/
    imagePreviewUrl = `https://restapi.amap.com/v3/staticmap?location=${props.location.lng},${props.location.lat}&zoom=14&size=400*200&markers=mid,,A:${props.location.lng},${props.location.lat}&key=${ENV.amapApiKey}`;
    console.log(imagePreviewUrl);
  }
  testImageUrl =
    "https://restapi.amap.com/v3/staticmap?location=116.481485,39.990464&zoom=14&size=400*200&markers=mid,,A:116.481485,39.990464&key=ee95e52bf08006f63fd29bcfbcf21df0";

  return (
    <View style={{ ...styles.mapPreview, ...props.style }}>
      {/* <Image
        style={styles.mapImage}
        source={{
          uri: testImageUrl,
        }}
      /> */}
      {imagePreviewUrl ? (
        <Image
          style={styles.mapImage}
          source={{
            uri: imagePreviewUrl,
          }}
        />
      ) : (
        props.children
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mapPreview: {
    justifyContent: "center",
    alignItems: "center",
  },
  mapImage: {
    width: "100%",
    height: "100%",
  },
});

export default MapPreview;
