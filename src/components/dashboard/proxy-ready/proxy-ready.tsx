import { TProxy } from '../../../redux/slices/proxys';

export const ProxyReady = ({ proxy }: { proxy: TProxy }) => (
    <>
        <p className="m-0">Прокси</p>
        <p className="m-0">
            {proxy.purposeType.text}, {proxy.proxyType.text},{' '}
            {proxy.countProxyType.text}
            {'шт., '}
            {proxy.countryType.text}, {proxy.periodType.text.split('от')[0]}
        </p>
    </>
);
