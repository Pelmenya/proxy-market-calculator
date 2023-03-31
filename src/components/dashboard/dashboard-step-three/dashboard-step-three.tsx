import { useEffect } from 'react';
import { DashboardHead } from '../components/dashboard-head.tsx/dashboard-head';
import styles from '../dashboard.module.css';
import { DashboardBody } from '../components/dashboard-body/dashbord-body';
import { TotalCost } from '../../total-cost/total-cost';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { getProxysState } from '../../../redux/selectors/proxys';
import { ProxyReady } from '../proxy-ready/proxy-ready';
import { setProxys } from '../../../redux/slices/proxys';

export const DashboardStepTree = () => {
    const dispatch = useAppDispatch();
    const { proxys } = useAppSelector(getProxysState);

    useEffect(() => {
        const filterProxy = proxys.filter(
            (proxy) =>
                proxy.purposeType.text !== '' &&
                proxy.proxyType.text !== '' &&
                proxy.countProxyType.text !== '' &&
                proxy.periodType.text !== '',
        );

        dispatch(setProxys(filterProxy));
    }, []);

    return (
        <div className={styles.wrapper}>
            <DashboardHead>
                <div className="d-flex flex-column gap-4">
                    {proxys.map((proxy) => (
                        <ProxyReady
                            key={proxy.id}
                            proxy={proxy}
                            isDeleteButton={false}
                        />
                    ))}
                </div>
            </DashboardHead>
            <DashboardBody>
                <TotalCost />
            </DashboardBody>
        </div>
    );
};
