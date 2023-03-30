import { SyntheticEvent, useState } from 'react';
import { DashboardHead } from '../components/dashboard-head.tsx/dashboard-head';
import { StepOneHead } from '../components/dashboard-head.tsx/step-one-head/step-one-head';
import { ProxyItem } from '../proxy-item/proxy-item';

import styles from '../dashboard.module.css';
import { TotalCost } from '../../total-cost/total-cost';

export const DashboardStepTwo = () => {
    const clearBtnId = 'clear-button';
    const [isInit, setIsInit] = useState(false);

    const handlerOnClickClearBtn = (e: SyntheticEvent<HTMLElement>) => {
        if (e.target instanceof HTMLElement) {
            const id = e.target.id;
            if (id === clearBtnId) {
                setIsInit(true);
            }
        }
    };

    return (
        <div className={styles.wrapper}>
            <DashboardHead>
                <>
                    <StepOneHead
                        buttonId={clearBtnId}
                        onClick={handlerOnClickClearBtn}
                    />
                    <ProxyItem
                        handlerIsInit={setIsInit}
                        isInit={isInit}
                        proxyId={0}
                    />
                </>
            </DashboardHead>
            <div className={styles.body}>
                <TotalCost />
            </div>
        </div>
    );
};
