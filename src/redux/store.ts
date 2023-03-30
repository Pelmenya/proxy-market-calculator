import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { calculatorSlice } from './slices/calculator';
import { proxysSlice } from './slices/proxys';
import { totalCostSlice } from './slices/total-cost';

export const store = configureStore({
    reducer: {
        [calculatorSlice.name]: calculatorSlice.reducer,
        [totalCostSlice.name]: totalCostSlice.reducer,
        [proxysSlice.name]: proxysSlice.reducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
ReturnType,
RootState,
unknown,
Action<string>
>;
