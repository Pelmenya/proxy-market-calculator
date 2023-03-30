import { TBaseProps } from '../../types/t-base-props';
import { DashboardStepOne } from './dashboard-step-one/dashboard-step-one';
import styles from './dashboard.module.css';

export type TDashBoard = TBaseProps & {
    title: string;
};

export const Dashboard = ({ title }: TDashBoard) => (
    <div className={styles.dashboard}>
        <h1 className={styles.title}>{title}</h1>
        <DashboardStepOne />
    </div>
);
