import { View, Image, StyleSheet } from "react-native";

import ENV from "../env";

const MapPreview = (props) => {
  let imagePreviewUrl;
  if (props.location) {
    // https://lbs.amap.com/api/webservice/guide/api/staticmaps/
    imagePreviewUrl = `https://restapi.amap.com/v3/staticmap?location=${props.location.lng},${props.location.lat}&zoom=14&size=400*200&markers=mid,,A:${props.location.lng},${props.location.lat}&key=${ENV.amapApiKey}`;
  }

  return (
    <View style={{ ...styles.mapPreview, ...props.style }}>
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
