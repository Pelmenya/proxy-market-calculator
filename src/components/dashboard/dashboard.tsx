import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getCalculatorState } from '../../redux/selectors/calculator';
import { setCalculatorStep } from '../../redux/slices/calculator';
import { TBaseProps } from '../../types/t-base-props';
import { BackIcon } from '../icons/back-icon';
import { DashboardStepOne } from './dashboard-step-one/dashboard-step-one';
import { DashboardStepTwo } from './dashboard-step-two/dashboard-step-two';
import styles from './dashboard.module.css';

export type TDashBoard = TBaseProps & {
    title: string;
};

export const Dashboard = ({ title }: TDashBoard) => {
    const dispatch = useAppDispatch();
    const { step } = useAppSelector(getCalculatorState);

    return (
        <div className={styles.dashboard}>
            <div className="d-flex justify-content-between">
                <h1 className={styles.title}>{title}</h1>
                {step === 2 && (
                    <button
                        onClick={() => dispatch(setCalculatorStep(1))}
                        className={styles.back__button}
                    >
                        <BackIcon className={styles.back__icon} />
                        <span className={styles.back__link}>Назад</span>
                    </button>
                )}
            </div>

            {step === 1 && <DashboardStepOne />}
            {step === 2 && <DashboardStepTwo />}
        </div>
    );
};
