import { TBaseProps } from '../../types/t-base-props';
import style from './dashboard.module.css';

export type TDashBoard = TBaseProps & {
    title: string;
    subTitle?: string;
};

export const Dashboard = ({ children, title, subTitle }: TDashBoard) => (
    <div className={style.dashboard}>
        <h1 className={style.title}>{title}</h1>
        <div className={style.title}>
            
        </div>
        {children}
    </div>
);
