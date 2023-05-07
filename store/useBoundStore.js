import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import { createPlacesSlice } from "./createPlacesSlice";

export const useBoundStore = create(
  immer((...a) => ({
    ...createPlacesSlice(...a),
  }))
);
