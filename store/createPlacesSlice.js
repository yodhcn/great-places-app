import Place from "../models/place";
import * as FileSystem from "expo-file-system";
import { insertPlace, fetchPlaces } from "../helpers/db";

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
      const dbResult = await insertPlace(
        title,
        newPath,
        "Dummy address",
        15.6,
        12.3
      );
      const newPlace = new Place(dbResult.insertId, title, newPath);
      set((state) => {
        state.places.push(newPlace);
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
  loadPlaces: async () => {
    try {
      const dbResult = await fetchPlaces();
      set((state) => {
        state.places = dbResult.rows._array.map(
          ({ id, title, imageUri, address, lat, lng }) =>
            new Place(id, title, imageUri)
        );
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
});
