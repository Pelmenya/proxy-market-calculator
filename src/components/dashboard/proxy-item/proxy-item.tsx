import { SyntheticEvent, useEffect, useState } from 'react';
import styles from './proxy-item.module.css';
import { DropDown } from '../../drop-down/drop-down';
import { purposes } from '../../../constants/mock';


export const ProxyItem = () => {
    const [purpose, setPurpose] = useState(purposes[0]);

    const handlerOnClick = (e: SyntheticEvent<HTMLElement>) => {
        if (e.target instanceof HTMLAnchorElement) {
            setPurpose({ text: String(e.target.textContent), minCost: purpose.minCost });
        }
    };
    

    
    return (
        <form className={styles.container} name="ProxyItem">
            <DropDown placeholder='Выберите цель' id='d1' labelText='Цель использования' onClick={handlerOnClick} currentValue={purpose.text}/>
            <DropDown placeholder='Выберите цель' id='d2' labelText='Тип прокси' onClick={handlerOnClick} currentValue={purpose.text}/>
            <DropDown placeholder='Выберите цель' id='d3' labelText='Страна' onClick={handlerOnClick} currentValue={purpose.text}/>
            <DropDown placeholder='Выберите цель' id='d4' labelText='Количество прокси' onClick={handlerOnClick} currentValue={purpose.text}/>
            <DropDown placeholder='Выберите цель' id='d5' labelText='Срок аренды' onClick={handlerOnClick} currentValue={purpose.text}/>
            <DropDown placeholder='Выберите цель' id='d6' labelText='' onClick={handlerOnClick} currentValue={purpose.text}/>
        </form>
    );
};

