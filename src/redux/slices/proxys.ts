import { createSlice } from '@reduxjs/toolkit';

export interface IProxysState {
    totalCost: number;
}

const initialState: IProxysState = {
    totalCost: 0,
};

export const proxysSlice = createSlice({
    name: 'proxys', initialState,
    reducers: {
        setFirstProxy(state, action) {
            state.totalCost = action.payload;
        },
    },
},
);

export const { setFirstProxy } =  proxysSlice.actions;