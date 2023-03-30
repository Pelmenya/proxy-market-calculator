import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { calculatorSlice } from './slices/calculator';
import { proxysSlice } from './slices/proxys';
import { totalCostSlice } from './slices/total-cost';
import logger from 'redux-logger';


const isDev = process.env.NODE_ENV !== 'production';
const middlewares = isDev ? [logger] : [];


export const store = configureStore({
    reducer: {
        [calculatorSlice.name]: calculatorSlice.reducer,
        [totalCostSlice.name]: totalCostSlice.reducer,
        [proxysSlice.name]: proxysSlice.reducer,
    },
    devTools: isDev,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middlewares),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
ReturnType,
RootState,
unknown,
Action<string>
>;
