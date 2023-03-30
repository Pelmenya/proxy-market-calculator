import { SyntheticEvent } from 'react';
import { ClearIcon } from '../../../../icons/clear-icon';
import styles from './step-one-head.module.css';

export type TStepOneProps = {
    buttonId: string;
    onClick: (e: SyntheticEvent<HTMLElement>) => void;
};

export const StepOneHead = ({ onClick, buttonId }: TStepOneProps) => {
    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>Онлайн-калькулятор</h2>
            <button onClick={onClick} id={buttonId} className={styles.button}>
                <ClearIcon className={styles.svg} id={buttonId}/>
                <span className={styles.button__text} id={buttonId}>Очистить</span>
            </button>
        </div>
    );
};
