import {
    Children,
    forwardRef,
    LegacyRef,
    ReactNode,
    SyntheticEvent,
    useState,
    useEffect,
} from 'react';

import cn from 'classnames';
import { Form } from 'react-bootstrap';
import styles from './menu.module.css';

// forwardRef again here!
// Dropdown needs access to the DOM of the Menu to measure it
export type TMenu = {
    children: ReactNode | ReactNode[];
    style: React.CSSProperties | undefined;
    className: string;
    'aria-labelledby': string;
    onClick: (e: SyntheticEvent<HTMLElement>) => void;
};

export const Menu = forwardRef(
    (
        {
            children,
            style,
            className,
            'aria-labelledby': labeledBy,
            onClick,
        }: TMenu,
        ref: LegacyRef<HTMLDivElement> | undefined,
    ) => {
        const [isOpenMenu, setIsOpenMenu] = useState(false);
        const [value, setValue] = useState('');

        useEffect(() => {
            console.log(value);
        }, [value]);

        return (
            <div
                ref={ref}
                style={{ ...style, transform: 'translate(0, 16px)' }}
                className={`${className} ${styles.menu}`}
                aria-labelledby={labeledBy}
            >
                <Form.Control
                    autoFocus
                    className={cn(
                        styles.toggle,
                        isOpenMenu && styles.toggle_noborder,
                    )}
                    placeholder="Выберите цель"
                    onFocus={() => {
                        setIsOpenMenu(true);
                    }}
                    onClick={() => {
                        setIsOpenMenu(!isOpenMenu);
                    }}
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                />
                {isOpenMenu && (
                    <ul
                        className={cn('list-unstyled', styles.menu__list)}
                        onClick={onClick}
                    >
                        {Children.toArray(children).filter(
                            (child: any) =>
                                !value ||
                                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
                                child.props.children
                                    .toLowerCase()
                                    .startsWith(value),
                        )}
                    </ul>
                )}
            </div>
        );
    },
);
