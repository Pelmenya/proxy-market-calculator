import { SyntheticEvent, useState, useEffect } from 'react';
import styles from './proxy-item.module.css';
import {
    DropDown,
    TDropDownItem,
    TDropDownItems,
} from '../../drop-down/drop-down';
import {
    countryTypes,
    countTypes,
    periodTypes,
    proxyTypes,
    purposeTypes,
} from '../../../constants/mock';

const initItem: TDropDownItem = {
    id: '9999',
    text: '',
    cost: 0,
};

export type TProxyItemProps = { isInit: boolean; handlerIsInit: (a: boolean) => void };

export const ProxyItem = ({ isInit, handlerIsInit }: TProxyItemProps) => {
    const [purposeType, setPurposeType] = useState<TDropDownItem>(initItem);
    const [proxyType, setProxyType] = useState<TDropDownItem>(initItem);
    const [countryType, setCountryType] = useState<TDropDownItem>(initItem);
    const [periodType, setPeriodType] = useState<TDropDownItem>(initItem);
    const [countProxyType, setCountProxyType] = useState<TDropDownItem>(
        countTypes[0],
    );

    useEffect(() => {
        if (isInit) {
            handlerIsInit(false);
            setPurposeType(initItem);
            setProxyType(initItem);
            setCountryType(initItem);
            setPeriodType(initItem);
            setCountProxyType(countTypes[0]);
        }
    }, [isInit]);

    const handlerOnClick = (
        e: SyntheticEvent<HTMLElement>,
        arr: TDropDownItems,
        cb: (i: TDropDownItem) => void,
    ) => {
        if (e.target instanceof HTMLAnchorElement) {
            const id = e.target.id;
            const currentItem = arr.find((item) => id === item.id);
            if (currentItem) {
                cb({ ...currentItem });
            }
        }
    };

    const handlerOnClickPurpose = (e: SyntheticEvent<HTMLElement>) => {
        handlerOnClick(e, purposeTypes, setPurposeType);
    };

    const handlerOnClickProxyType = (e: SyntheticEvent<HTMLElement>) => {
        handlerOnClick(e, proxyTypes, setProxyType);
    };

    const handlerOnClickCountryType = (e: SyntheticEvent<HTMLElement>) => {
        handlerOnClick(e, countryTypes, setCountryType);
    };

    const handlerOnClickCountProxyType = (e: SyntheticEvent<HTMLElement>) => {
        handlerOnClick(e, countTypes, setCountProxyType);
    };

    const handlerOnClickPeriodType = (e: SyntheticEvent<HTMLElement>) => {
        handlerOnClick(e, periodTypes, setPeriodType);
    };

    return (
        <form className={styles.container} name="ProxyItem">
            <DropDown
                placeholder="Выберите цель"
                id="d1"
                labelText="Цель использования"
                activeId={purposeType.id}
                items={purposeTypes}
                onClick={handlerOnClickPurpose}
                currentValue={purposeType.text}
            />
            <DropDown
                placeholder="Выберите тип прокси"
                id="d2"
                labelText="Тип прокси"
                activeId={proxyType.id}
                items={proxyTypes}
                onClick={handlerOnClickProxyType}
                currentValue={proxyType.text}
            />
            <DropDown
                placeholder="Выберите страну"
                id="d3"
                labelText="Страна"
                activeId={countryType.id}
                items={countryTypes}
                onClick={handlerOnClickCountryType}
                currentValue={countryType.text}
            />
            <DropDown
                placeholder="Выберите кол-во прокси"
                id="d4"
                items={countTypes}
                labelText="Количество прокси"
                activeId={countProxyType.id}
                onClick={handlerOnClickCountProxyType}
                currentValue={countProxyType.text}
            />
            <DropDown
                placeholder="Выберите срок"
                id="d5"
                labelText="Срок аренды"
                activeId={periodType.id}
                items={periodTypes}
                onClick={handlerOnClickPeriodType}
                currentValue={periodType.text}
            />
        </form>
    );
};
