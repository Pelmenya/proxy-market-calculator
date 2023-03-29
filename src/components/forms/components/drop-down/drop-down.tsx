import React, { LegacyRef, ReactNode, SyntheticEvent, useState, forwardRef, RefObject } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';

// The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu

export type TToggle = {
    onClick: (e: SyntheticEvent<HTMLElement>) => void;
};

export const Toggle = forwardRef(
    (
        { onClick }: TToggle,
        ref: ((instance: HTMLInputElement | null) => void) | RefObject<HTMLInputElement> | null | undefined,
    ) => (
        <Form.Control
            className=''
            ref={ref}
            onClick={(e) => {
                e.preventDefault();
                onClick(e);
            }}
        />
    ),
);

// forwardRef again here!
// Dropdown needs access to the DOM of the Menu to measure it
export type TMenu = {
    children: ReactNode | ReactNode[];
    style: React.CSSProperties | undefined;
    className: string, 
    'aria-labelledby': string;
};

const Menu = React.forwardRef(
    (
        { children, style, className, 'aria-labelledby': labeledBy }: TMenu,
        ref: LegacyRef<HTMLDivElement> | undefined,
    ) => {
        const [value, setValue] = useState('');

        return (
            <div
                ref={ref}
                style={style}
                className={className}
                aria-labelledby={labeledBy}
            >
                <Form.Control
                    autoFocus
                    className="mx-3 my-2 w-auto"
                    placeholder="Type to filter..."
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                />
                <ul className="list-unstyled">
                    {React.Children.toArray(children).filter(
                        (child: any) =>
                            !value ||
                            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
                            child.props.children.toLowerCase().startsWith(value),
                    )}
                </ul>
            </div>
        );
    },
);

export const DpopDown = () => (
    <Dropdown>
        <Dropdown.Toggle as={Toggle} id="dropdown-custom-components">
            Custom toggle
        </Dropdown.Toggle>

        <Dropdown.Menu as={Menu}>
            <Dropdown.Item eventKey="1">Red</Dropdown.Item>
            <Dropdown.Item eventKey="2">Blue</Dropdown.Item>
            <Dropdown.Item eventKey="3" active>
                Orange
            </Dropdown.Item>
            <Dropdown.Item eventKey="1">Red-Orange</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
);
