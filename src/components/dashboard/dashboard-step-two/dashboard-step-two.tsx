import { useCallback, useState, useEffect } from 'react';
import { DashboardHead } from '../components/dashboard-head.tsx/dashboard-head';

import styles from '../dashboard.module.css';
import { TotalCost } from '../../total-cost/total-cost';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { getProxysState } from '../../../redux/selectors/proxys';
import { ButtonLink } from '../components/button-link/button-link';
import { setCalculatorStep } from '../../../redux/slices/calculator';
import {
    addInitProxy,
    setInitProxysState,
    setProxys,
} from '../../../redux/slices/proxys';
import { ProxyItem } from '../proxy-item/proxy-item';
import { useTotalCost } from '../../../hooks/use-total-cost/use-total-cost';
import { setTotalCost } from '../../../redux/slices/total-cost';
import { getTotalCostState } from '../../../redux/selectors/total-cost';
import { ProxyReady } from '../proxy-ready/proxy-ready';

export const DashboardStepTwo = () => {
    const dispatch = useAppDispatch();
    const { totalCost: globalTotalCost } = useAppSelector(getTotalCostState);
    const { totalCost } = useTotalCost();
    const { proxys } = useAppSelector(getProxysState);
    const [readyOrders, setReadyOrders] = useState(1);

    const handlerAddProxy = () => {
        dispatch(addInitProxy());
        dispatch(setTotalCost(totalCost));
        setReadyOrders(readyOrders + 1);
    };

    const handlerSetInitProxysState = useCallback(() => {
        dispatch(setInitProxysState());
        dispatch(setCalculatorStep(1));
    }, []);

    const handlerDeleteProxy = (id: number) => {
        const filterProxys = proxys
            .filter((proxy) => proxy.id !== id)
            .map((proxy, idx) => ({ ...proxy, id: idx }));
        const last = filterProxys[filterProxys.length - 1];

        dispatch(setProxys(filterProxys));
        setReadyOrders(readyOrders - 1);
    };

    useEffect(() => {
        if (totalCost !== globalTotalCost && readyOrders === 1) {
            dispatch(setTotalCost(totalCost));
        }
    }, [totalCost]);

    useEffect(() => {
        if (
            readyOrders === 0 ||
            proxys[0].purposeType.text === '' ||
            proxys[0].proxyType.text === '' ||
            proxys[0].countProxyType.text === '' ||
            proxys[0].periodType.text === ''
        ) {
            handlerSetInitProxysState();
        }
    }, [readyOrders, proxys[0]]);

    return (
        <div className={styles.wrapper}>
            <DashboardHead>
                {readyOrders === 1 ? (
                    <div className="d-flex flex-column gap-4">
                        <div className="d-flex justify-content-between align-items-center">
                            <ProxyReady proxy={proxys[0]} />
                            <ButtonLink
                                icon="delete"
                                onClick={() => {
                                    setReadyOrders(readyOrders - 1);
                                    handlerSetInitProxysState();
                                }}
                            >
                                <>Удалить</>
                            </ButtonLink>
                        </div>
                        <ButtonLink icon="plus" onClick={handlerAddProxy}>
                            <>Добавить позицию</>
                        </ButtonLink>
                    </div>
                ) : (
                    <div className="d-flex flex-column gap-4">
                        {proxys.map((proxy, idx) => {
                            if (idx < readyOrders - 1)
                                return (
                                    <div
                                        key={proxy.id}
                                        className="d-flex justify-content-between align-items-center"
                                    >
                                        <ProxyReady proxy={proxy} />
                                        <ButtonLink
                                            icon="delete"
                                            onClick={() => {
                                                setReadyOrders(readyOrders - 1);
                                                handlerDeleteProxy(proxy.id);
                                            }}
                                        >
                                            <>Удалить</>
                                        </ButtonLink>
                                    </div>
                                );
                        })}
                        {proxys.map((proxy, idx) => {
                            if (idx >= readyOrders - 1) {
                                return (
                                    <ProxyItem
                                        key={proxy.id}
                                        proxyId={proxy.id}
                                        isInit={false}
                                        handlerIsInit={() => {}}
                                    />
                                );
                            }
                        })}
                        <ButtonLink
                            icon="plus"
                            onClick={
                                totalCost !== globalTotalCost
                                    ? handlerAddProxy
                                    : undefined
                            }
                        >
                            <>Добавить позицию</>
                        </ButtonLink>
                    </div>
                )}
            </DashboardHead>
            <div className={styles.body}>
                <TotalCost />
            </div>
        </div>
    );
};
