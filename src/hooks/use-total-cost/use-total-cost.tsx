import { useState, useEffect } from 'react';
import { useAppSelector } from '../../redux/hooks';
import { getProxysState } from '../../redux/selectors/proxys';

export const useTotalCost = () => {
    const { proxys } = useAppSelector(getProxysState);
    const [totalCost, setTotalCost] = useState(0);

    useEffect(() => {
        let fullCost = 0;
        proxys.forEach((proxy) => {
            if (
                !!proxy.purposeType.text &&
                !!proxy.countryType.text &&
                !!proxy.proxyType.text &&
                !!proxy.countProxyType.text &&
                !!proxy.periodType.text
            ) {
                let total = proxy.countryType.tarifs?.find(
                    (item) => item.text === proxy.periodType.text,
                )?.cost;
                if (total) {
                    total = total * Number(proxy.countProxyType.text);
                    fullCost = fullCost + total;
                }
            }
        });
        if (fullCost !== totalCost) {
            setTotalCost(fullCost);
        }
    }, [proxys]);

    return { totalCost };
};
