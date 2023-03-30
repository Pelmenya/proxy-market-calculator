import { SyntheticEvent, useState, useEffect } from 'react';
import { DashboardHead } from '../components/dashboard-head.tsx/dashboard-head';
import { StepOneHead } from '../components/dashboard-head.tsx/step-one-head/step-one-head';
import { ProxyItem } from '../proxy-item/proxy-item';

import styles from '../dashboard.module.css';
import { TotalCost } from '../../total-cost/total-cost';

export const DashboardStepOne = () => {
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
                <StepOneHead
                    buttonId={clearBtnId}
                    onClick={handlerOnClickClearBtn}
                />
            </DashboardHead>
            <div className={styles.body}>
                <ProxyItem
                    handlerIsInit={setIsInit}
                    isInit={isInit}
                />
                <TotalCost />
            </div>
        </div>
    );
};
