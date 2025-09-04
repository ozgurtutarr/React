import { createSlice, nanoid } from '@reduxjs/toolkit';

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    searchTerm: '',
    data: [],
  },
  reducers: {
    addCar(state, action) {
      state.data.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
      });
    },
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    removeCar(state, action) {
      const updated = state.data.filter((car) => car.id !== action.payload);
      state.data = updated;
    },
  },
});
export const { addCar, changeSearchTerm, removeCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
