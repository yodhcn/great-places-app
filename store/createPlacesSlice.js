import Place from "../models/place";

export const createPlacesSlice = (set) => ({
  places: [],
  addPlace: (title) => {
    const newPlace = new Place(new Date().toString(), title);
    set((state) => {
      state.places.push(newPlace);
    });
  },
});
