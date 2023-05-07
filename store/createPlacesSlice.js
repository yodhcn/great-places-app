import Place from "../models/place";

export const createPlacesSlice = (set) => ({
  places: [],
  addPlace: (title, imageUri) => {
    const newPlace = new Place(new Date().toString(), title, imageUri);
    set((state) => {
      state.places.push(newPlace);
    });
  },
});
