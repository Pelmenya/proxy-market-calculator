import Dropdown from 'react-bootstrap/Dropdown';
import { Menu } from './menu/menu';
import { Toggle, TToggle } from './toggle/toggle';


export const DropDown = ({ placeholder, labelText, onClick, currentValue }: TToggle) => (
    <Dropdown>
        <Dropdown.Toggle as={Toggle} id="dropdown-custom-components" placeholder={placeholder} labelText={labelText} currentValue={currentValue}>
            Custom toggle
        </Dropdown.Toggle>
        <Dropdown.Menu as={Menu} onClick={onClick}>
            <Dropdown.Item eventKey="1">Red</Dropdown.Item>
            <Dropdown.Item eventKey="2">Blue</Dropdown.Item>
            <Dropdown.Item eventKey="3" active>
                Orange
            </Dropdown.Item>
            <Dropdown.Item eventKey="1">Red-Orange</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
);
