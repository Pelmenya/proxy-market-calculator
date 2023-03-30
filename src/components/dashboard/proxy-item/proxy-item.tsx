import { SyntheticEvent, useState, useEffect } from 'react';
import styles from './proxy-item.module.css';
import { DropDown } from '../../drop-down/drop-down';
import {
    countryTypes,
    countTypes,
    periodTypes as periods,
    proxyTypes,
    purposeTypes,
    TDropDownItem,
    TDropDownItems,
} from '../../../constants/mock';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { getCalculatorState } from '../../../redux/selectors/calculator';
import { setTotalCost } from '../../../redux/slices/total-cost';

const initItem: TDropDownItem = {
    id: '999999999',
    text: '',
};

export type TProxyItemProps = {
    isInit: boolean;
    handlerIsInit: (isInit: boolean) => void;
};

export const ProxyItem = ({
    isInit,
    handlerIsInit,
}: TProxyItemProps) => {
    const dispatch = useAppDispatch();
    const  { step } = useAppSelector(getCalculatorState);

    const [isDisableDropDowns, setIsDisabledDropDowns] = useState(true);
    const [purposeType, setPurposeType] = useState<TDropDownItem>(initItem);
    const [proxyType, setProxyType] = useState<TDropDownItem>(initItem);
    const [periodType, setPeriodType] = useState<TDropDownItem>(initItem);
    const [periodTypes, setPeriodTypes] = useState<TDropDownItem[]>(periods);
    const [countryType, setCountryType] = useState<TDropDownItem>(initItem);
    const [countProxyType, setCountProxyType] = useState<TDropDownItem>(
        countTypes[0],
    );

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

    useEffect(() => {
        if (isInit) {
            if (typeof handlerIsInit === 'function') {
                handlerIsInit(false);
                if (step === 1) {
                    dispatch(setTotalCost(0));
                }
            }
            setIsDisabledDropDowns(true);
            setPurposeType(initItem);
            setProxyType(initItem);
            setCountryType(initItem);
            setPeriodType(initItem);
            setCountProxyType(countTypes[0]);
        }
    }, [isInit]);

    useEffect(() => {
        if (purposeType.text) {
            setIsDisabledDropDowns(false);
        }
    }, [purposeType]);

    // Фильтр
    useEffect(() => {
        if (countryType.tarifs) {
            if (proxyType.text === '') {
                if (countryType.tarifs) {
                    setPeriodType(countryType.tarifs[0]);
                }
                setPeriodTypes(countryType.tarifs);
            } else {
                const filtredTarifs = countryType.tarifs.filter(
                    (item) => item.proxy === proxyType.text,
                );

                if (filtredTarifs) {
                    setPeriodType(filtredTarifs[0]);
                }
                setPeriodTypes(filtredTarifs);
            }
        }
    }, [countryType, proxyType]);

    useEffect(() => {
        if (
            step === 1 &&
            !!countryType.text &&
            !!proxyType.text &&
            !!countProxyType.text &&
            !!periodType.text
        ) {
            let total = countryType.tarifs?.find(
                (item) => item.text === periodType.text,
            )?.cost;
            if (total) {
                total = total * Number(countProxyType.text);
                dispatch(setTotalCost(total));
            }
        }
    }, [step, countryType, proxyType, countProxyType, periodType]);

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
            {!isDisableDropDowns && (
                <>
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
                </>
            )}
        </form>
    );
};
