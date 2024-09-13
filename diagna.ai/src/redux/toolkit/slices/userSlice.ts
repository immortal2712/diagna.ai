import { createSlice } from "@reduxjs/toolkit";

export interface PowerplayState {
  stayId: string;
  selectedDate: string;
  selectedType: string;
}

const initialState: PowerplayState = {
  stayId: "",
  selectedDate: "",
  selectedType: "",
};

export const userSlice = createSlice({
  name: "patient",
  initialState,
  reducers: {
    updateStayId: (state, action) => {
      state.stayId = action?.payload;
    },
    updateSelectedDate: (state, action) => {
      state.selectedDate = action?.payload;
    },
    updateSelectedType: (state, action) => {
      state.selectedType = action?.payload;
    },
    resetPatientSlice: (state) => {
      state.selectedDate = initialState.selectedDate;
      state.selectedType = initialState.selectedType;
    },
  },
});

export const {
  updateStayId,
  updateSelectedDate,
  updateSelectedType,
  resetPatientSlice,
} = userSlice.actions;

export default userSlice.reducer;
