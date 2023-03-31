import { TBaseProps } from '../../../../types/t-base-props';
import { DeleteIcon } from '../../../icons/delete-icon';
import { PlusIcon } from '../../../icons/plus-icon';
import styles from './button-link.module.css';

export type  TButtonLinkProps = TBaseProps & {
    icon: 'delete' | 'plus';
};

export const ButtonLink = ({ children, onClick, icon }: TButtonLinkProps) => (
    <button className={styles.button} onClick={onClick}>
        {icon === 'delete' && <DeleteIcon className={styles.icon}/>}
        {icon === 'plus' && <PlusIcon className={styles.icon}/>}
        <span className={styles.link}>
            {children} 
        </span>
    </button>
);
