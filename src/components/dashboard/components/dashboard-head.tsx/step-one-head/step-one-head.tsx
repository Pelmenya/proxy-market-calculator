import { ClearIcon } from '../../../../icons/clear-icon';
import styles from './step-one-head.module.css';

export const StepOneHead = () => {
    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>Онлайн-калькулятор</h2>
            <button className={styles.button}>
                <ClearIcon className={styles.svg}/>
                <span className={styles.button__text}>Очистить</span>
            </button>
        </div>
    );
};
