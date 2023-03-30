
import { TBaseProps } from '../../../../types/t-base-props';
import styles from './dashboard-head.module.css';


export const DashboardHead = ({ children } : TBaseProps ) => (
    <div className={styles.head}>
        {children}
    </div>
);
