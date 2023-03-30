import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { calculatorSlice } from './slices/calculator';

export const store = configureStore({
    reducer: {
        [calculatorSlice.name]: calculatorSlice.reducer,
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
