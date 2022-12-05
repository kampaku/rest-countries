import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from 'src/redux/store';
import type { Region } from 'src/types/types';

const initialState = 'all' as Region;

const selectSlice = createSlice({
  name: 'selectSlice',
  initialState,
  reducers: {
    setSelect: (_, action: PayloadAction<Region>) => {
      return action.payload;
    },
  },
});

export const selectedRegion = (state: RootState) => state.selectedRegion;
export const { setSelect } = selectSlice.actions;
export const selectReducer = selectSlice.reducer;
