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
import { getProxysState } from '../../../redux/selectors/proxys';
import { setInitProxysState, setProxys } from '../../../redux/slices/proxys';

export type TProxyItemProps = {
    proxyId: number;
    isInit: boolean;
    handlerIsInit: (isInit: boolean) => void;
};

export const ProxyItem = ({
    proxyId,
    isInit,
    handlerIsInit,
}: TProxyItemProps) => {
    const dispatch = useAppDispatch();
    const { step } = useAppSelector(getCalculatorState);
    const { proxys } = useAppSelector(getProxysState);

    const [isDisableDropDowns, setIsDisabledDropDowns] = useState(true);

    const [purposeType, setPurposeType] = useState<TDropDownItem>(
        proxys[proxyId].purposeType,
    );
    const [proxyType, setProxyType] = useState<TDropDownItem>(
        proxys[proxyId].proxyType,
    );
    const [periodType, setPeriodType] = useState<TDropDownItem>(
        proxys[proxyId].periodType,
    );
    const [periodTypes, setPeriodTypes] = useState<TDropDownItem[]>(periods);
    const [countryType, setCountryType] = useState<TDropDownItem>(
        proxys[proxyId].countryType,
    );
    const [countProxyType, setCountProxyType] = useState<TDropDownItem>(
        proxys[proxyId].countProxyType,
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
                    setIsDisabledDropDowns(true);
                    dispatch(setTotalCost(0));
                    dispatch(setInitProxysState());
                }
            }
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
            !!purposeType.text &&
            !!countryType.text &&
            !!proxyType.text &&
            !!countProxyType.text &&
            !!periodType.text
        ) {
            const arrFilter = proxys.filter((item) => item.id !== proxyId);
            dispatch(
                setProxys([
                    ...arrFilter,
                    {
                        id: proxyId,
                        purposeType,
                        proxyType,
                        periodType,
                        countryType,
                        countProxyType,
                    },
                ]),
            );
        }
    }, [countryType, proxyType, countProxyType, periodType, purposeType]);

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
