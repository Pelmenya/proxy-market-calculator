import {
    SyntheticEvent,
    forwardRef,
    RefObject,
    DetailedHTMLProps,
    InputHTMLAttributes,
    useState,
    useEffect,
} from 'react';
import { Form } from 'react-bootstrap';
import styles from './toggle.module.css';

export type TToggle = DetailedHTMLProps<
InputHTMLAttributes<HTMLInputElement>,
HTMLInputElement
> & {
    currentValue: string;
    labelText: string;
    onClick?: (e: SyntheticEvent<HTMLElement>) => void;
};

export const Toggle = forwardRef(
    (
        { onClick, placeholder, id, labelText, currentValue }: TToggle,
        ref:
        | ((instance: HTMLInputElement | null) => void)
        | RefObject<HTMLInputElement>
        | null
        | undefined,
    ) => {
        const [toggle, setToggle] = useState(currentValue);
        const [isError, setIsError] = useState(false);

        useEffect(() => {
            setToggle(currentValue);
        }, [currentValue]);

        return (
            <div className={styles.wrapper}>
                <span className={styles.label}>{labelText}</span>
                <Form.Control
                    autoComplete="off"
                    id={id}
                    className={styles.toggle}
                    placeholder={placeholder}
                    ref={ref}
                    value={toggle}
                    onClick={(e) => {
                        if (onClick) {
                            e.preventDefault();
                            onClick(e);
                        }
                    }}
                    onChange={() => setToggle(toggle)}
                    onBlur={() => toggle ? setIsError(false) : setIsError(true)}
                />
                {!toggle && isError && (
                    <span className={styles.error}>
                        Поле обязательно для заполнения
                    </span>
                )}
            </div>
        );
    },
);
