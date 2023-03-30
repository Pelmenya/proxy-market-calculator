import { createSlice } from '@reduxjs/toolkit';

export interface ITotalCostState {
    totalCost: number;
}

const initialState: ITotalCostState = {
    totalCost: 0,
};

export const totalCostSlice = createSlice({
    name: 'totalCost', initialState,
    reducers: {
        setTotalCost(state, action) {
            state.totalCost = action.payload;
        },
    },
},
);

export const { setTotalCost } =  totalCostSlice.actions;
