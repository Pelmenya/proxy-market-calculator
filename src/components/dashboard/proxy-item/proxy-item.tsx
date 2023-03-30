import { SyntheticEvent, useState } from 'react';
import styles from './proxy-item.module.css';
import { DropDown, TDropDownItem, TDropDownItems } from '../../drop-down/drop-down';
import {
    countryTypes,
    periodTypes,
    proxyTypes,
    purposeTypes,
} from '../../../constants/mock';

const initItem: TDropDownItem = {
    id: '9999',
    text: '',
    cost: 0,
};

export const ProxyItem = () => {
    const [purposeType, setPurposeType] = useState<TDropDownItem>(initItem);
    const [proxyType, setProxyType] = useState<TDropDownItem>(initItem);
    const [countryType, setCountryType] = useState<TDropDownItem>(initItem);
    const [periodType, setPeriodType] = useState<TDropDownItem>(initItem);

    const handlerOnClick = (e: SyntheticEvent<HTMLElement>, arr: TDropDownItems, cb: (i: TDropDownItem) => void) => {
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

    const handlerOnClickPeriodType = (e: SyntheticEvent<HTMLElement>) => {
        handlerOnClick(e, periodTypes, setPeriodType);
    };

    return (
        <form className={styles.container} name="ProxyItem">
            <DropDown
                placeholder="Выберите цель"
                id="d1"
                labelText="Цель использования"
                items={purposeTypes}
                onClick={handlerOnClickPurpose}
                currentValue={purposeType.text}
            />
            <DropDown
                placeholder="Выберите тип прокси"
                id="d2"
                labelText="Тип прокси"
                items={proxyTypes}
                onClick={handlerOnClickProxyType}
                currentValue={proxyType.text}
            />
            <DropDown
                placeholder="Выберите страну"
                id="d3"
                labelText="Страна"
                items={countryTypes}
                onClick={handlerOnClickCountryType}
                currentValue={countryType.text}
            />
            <DropDown
                placeholder="Выберите кол-во прокси"
                id="d4"
                items={[]}
                labelText="Количество прокси"
                onClick={() => {}}
                currentValue={periodType.text}
            />
            <DropDown
                placeholder="Выберите срок"
                id="d5"
                labelText="Срок аренды"
                items={periodTypes}
                onClick={handlerOnClickPeriodType}
                currentValue={periodType.text}
            />
        </form>
    );
};
