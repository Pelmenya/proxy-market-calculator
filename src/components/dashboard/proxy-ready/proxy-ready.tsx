import { TProxy } from '../../../redux/slices/proxys';
import { TBaseProps } from '../../../types/t-base-props';
import { ButtonLink } from '../components/button-link/button-link';
import cn from 'classnames';
import styles from './proxy-ready.module.css';

export type TProxyReadyProps = TBaseProps & {
    proxy: TProxy;
};

export const ProxyReady = ({ proxy, onClick }: TProxyReadyProps) => (
    <div className={styles.container}>
        <p className="m-0">Прокси #{proxy.id + 1}</p>
        <p className="m-0">
            {proxy.purposeType.text}, {proxy.proxyType.text},{' '}
            {proxy.countProxyType.text}
            {'шт., '}
            {proxy.countryType.text}, {proxy.periodType.text.split('от')[0]}
        </p>
        <ButtonLink icon="delete" onClick={onClick}>
            <>Удалить</>
        </ButtonLink>
    </div>
);
