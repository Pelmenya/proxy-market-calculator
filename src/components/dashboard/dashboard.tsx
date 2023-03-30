import { useAppSelector } from '../../redux/hooks';
import { getCalculatorState } from '../../redux/selectors/calculator';
import { TBaseProps } from '../../types/t-base-props';
import { DashboardStepOne } from './dashboard-step-one/dashboard-step-one';
import { DashboardStepTwo } from './dashboard-step-two/dashboard-step-two';
import styles from './dashboard.module.css';

export type TDashBoard = TBaseProps & {
    title: string;
};

export const Dashboard = ({ title }: TDashBoard) => {
    const { step } = useAppSelector(getCalculatorState);

    return (
        <div className={styles.dashboard}>
            <h1 className={styles.title}>{title}</h1>
            {step === 1 && <DashboardStepOne />}
            {step === 2 && <DashboardStepTwo />}
        </div>
    );
};
