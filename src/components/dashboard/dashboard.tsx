import { TBaseProps } from '../../types/t-base-props';
import { DashboardHead } from './components/dashboard-head.tsx/dashboard-head';
import { StepOneHead } from './components/dashboard-head.tsx/step-one-head/step-one-head';
import styles from './dashboard.module.css';
import { ProxyItem } from './proxy-item/proxy-item';

export type TDashBoard = TBaseProps & {
    title: string;
};

export const Dashboard = ({ title }: TDashBoard) => (
    <div className={styles.dashboard}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.wrapper}>
            <DashboardHead>
                <StepOneHead />
            </DashboardHead>
            <div className={styles.body}>
                <ProxyItem />
            </div>
        </div>
    </div>
);
