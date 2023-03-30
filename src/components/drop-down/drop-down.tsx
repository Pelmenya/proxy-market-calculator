import Dropdown from 'react-bootstrap/Dropdown';
import { Menu } from './menu/menu';
import { Toggle, TToggle } from './toggle/toggle';

export type TDropDownItem = {
    id: string;
    text: string;
    cost: number;
};

export type TDropDownItems = Array<TDropDownItem>;

export type TDropDownProps = TToggle & {
    items: TDropDownItems;
    activeId: string;
};

export const DropDown = ({
    id,
    items,
    placeholder,
    labelText,
    onClick,
    currentValue,
    activeId,
}: TDropDownProps) => (
    <Dropdown>
        <Dropdown.Toggle
            as={Toggle}
            id={id}
            placeholder={placeholder}
            labelText={labelText}
            currentValue={currentValue}
        />
        <Dropdown.Menu as={Menu} onClick={onClick}>
            {items.map((item) => (
                <Dropdown.Item active={item.id === activeId ? true : undefined} id={item.id} key={item.id}>
                    {item.text}
                </Dropdown.Item>
            ))}
        </Dropdown.Menu>
    </Dropdown>
);
