import { createSlice } from '@reduxjs/toolkit';

export interface ICalculatorState {
    step: 1 | 2 | 3
}

const initialState: ICalculatorState = {
    step: 1,
};

export const calculatorSlice = createSlice({
    name: 'calculator', initialState,
    reducers: {
        setCalculatorStep(state, action) {
            state.step = action.payload;
        },
    },
},
);

export const { setCalculatorStep } = calculatorSlice.actions;
