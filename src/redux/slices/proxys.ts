import { createSlice } from '@reduxjs/toolkit';
import { countTypes, initItem, TDropDownItem } from '../../constants/mock';

export type TProxy =
    {
        id: number;
        purposeType: TDropDownItem;
        proxyType: TDropDownItem;
        periodType: TDropDownItem;
        countryType: TDropDownItem;
        countProxyType: TDropDownItem;
    };

export type TProxysState = {
    proxys: TProxy[];
};

const initialState: TProxysState = {
    proxys: [
        {
            id: 0,
            purposeType: { ...initItem },
            proxyType: { ...initItem },
            periodType: { ...initItem },
            countryType: { ...initItem },
            countProxyType: countTypes[0],

        },
    ],
};

export const proxysSlice = createSlice({
    name: 'proxys', initialState,
    reducers: {
        setProxys(state, action) {
            state.proxys = action.payload;
        },
        setInitProxysState(state) {
            state.proxys = [ ...initialState.proxys];
        },
        addInitProxy(state) {
            state.proxys = [...state.proxys, { ...initialState.proxys[0], id: state.proxys.length }];
        },

    },
},
);

export const { setProxys, setInitProxysState, addInitProxy } = proxysSlice.actions;