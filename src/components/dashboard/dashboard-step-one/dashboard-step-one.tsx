import { SyntheticEvent, useState } from 'react';
import { DashboardHead } from '../components/dashboard-head.tsx/dashboard-head';
import { StepOneHead } from '../components/dashboard-head.tsx/step-one-head/step-one-head';
import { ProxyItem } from '../proxy-item/proxy-item';

import styles from '../dashboard.module.css';
import { TotalCost } from '../../total-cost/total-cost';

export const DashboardStepOne = () => {
    const clearBtnId = 'clear-button';
    const [ isInit, setIsInit ] = useState(false);
    const [totalCost, setTotalCost] = useState(0);
    
    const handlerOnClickClearBtn = (e: SyntheticEvent<HTMLElement>) => {
        if (e.target instanceof HTMLElement ) {
            const id = e.target.id;
            if (id === clearBtnId) {
                setIsInit(true);
            }
        }
    };

    const handlerTotalHost = (cost: number) => {
        setTotalCost(cost);
    };

    return (
        <div className={styles.wrapper}>
            <DashboardHead>
                <StepOneHead buttonId={clearBtnId} onClick={handlerOnClickClearBtn}/>
            </DashboardHead>
            <div className={styles.body}>
                <ProxyItem handlerTotalCost={handlerTotalHost} handlerIsInit={setIsInit} isInit={isInit}/>
                <TotalCost totalCost={totalCost}/>
            </div>
        </div>
    );
};
