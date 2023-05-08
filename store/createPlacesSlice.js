import Place from "../models/place";
import * as FileSystem from "expo-file-system";

export const createPlacesSlice = (set) => ({
  places: [],
  addPlace: async (title, imageUri) => {
    const fileName = imageUri.split("/").pop();
    const newPath = FileSystem.documentDirectory + fileName;

    try {
      await FileSystem.moveAsync({
        from: imageUri,
        to: newPath,
      });
    } catch (err) {
      console.log(err);
      throw err;
    }

    const newPlace = new Place(new Date().toString(), title, newPath);
    set((state) => {
      state.places.push(newPlace);
    });
  },
});
