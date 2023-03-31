import { TBaseProps } from '../../../../types/t-base-props';
import styles from '../../dashboard.module.css';

export const DashboardBody = ({ children }: TBaseProps) => (
    <div className={styles.body}>{children}</div>
);
