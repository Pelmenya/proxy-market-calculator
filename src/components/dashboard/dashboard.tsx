import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getCalculatorState } from '../../redux/selectors/calculator';
import { getProxysState } from '../../redux/selectors/proxys';
import { setCalculatorStep } from '../../redux/slices/calculator';
import { setProxys } from '../../redux/slices/proxys';
import { TBaseProps } from '../../types/t-base-props';
import { BackIcon } from '../icons/back-icon';
import { DashboardStepOne } from './dashboard-step-one/dashboard-step-one';
import { DashboardStepTree } from './dashboard-step-three/dashboard-step-three';
import { DashboardStepTwo } from './dashboard-step-two/dashboard-step-two';
import styles from './dashboard.module.css';

export type TDashBoard = TBaseProps & {
    title: string;
};

export const Dashboard = ({ title }: TDashBoard) => {
    const dispatch = useAppDispatch();
    const { proxys } = useAppSelector(getProxysState);
    const { step } = useAppSelector(getCalculatorState);

    return (
        <div className={styles.dashboard}>
            <div className="d-flex justify-content-between">
                <h1 className={styles.title}>{title}</h1>
                {step === 2 && (
                    <button
                        onClick={() => {
                            const arrProxy = proxys.find(
                                (proxy) => proxy.id === 0,
                            );
                            if (arrProxy) {
                                dispatch(setProxys([arrProxy]));
                            }
                            dispatch(setCalculatorStep(1));
                        }}
                        className={styles.back__button}
                    >
                        <BackIcon className={styles.back__icon} />
                        <span className={styles.back__link}>Назад</span>
                    </button>
                )}
            </div>

            {step === 1 && <DashboardStepOne />}
            {step === 2 && <DashboardStepTwo />}
            {step === 3 && <DashboardStepTree />}
        </div>
    );
};
