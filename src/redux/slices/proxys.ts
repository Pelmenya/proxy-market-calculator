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
        setInitState(state) {
            state.proxys = initialState.proxys;
        },

    },
},
);

export const { setProxys, setInitState } = proxysSlice.actions;