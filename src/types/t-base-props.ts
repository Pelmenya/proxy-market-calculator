import { SyntheticEvent } from 'react';

export type TBaseProps = {
    id?: string;
    children?: JSX.Element;
    className?: string;
    onClick?: (e?: SyntheticEvent<HTMLElement>) => void;
};