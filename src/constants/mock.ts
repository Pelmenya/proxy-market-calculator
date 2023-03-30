
type Country = 'Россия' | 'Австралия' | 'Бангладеш';

type Tarif = {
    id: string;
    text: string;
    cost: number;
    proxy: string;
    country: Country;
};

export type TDropDownItem = {
    id: string;
    text: string;
    baseCosts?: number[];
    tarifs?: Tarif[];
};

export type TDropDownItems = Array<TDropDownItem>;

const periods = [1, 7, 30];


export const purposeTypes: TDropDownItems = [{
    id: '0', text: 'Для любых сайтов',
}];

export const proxyTypes: TDropDownItems = [
    {
        id: '0',
        text: 'Серверные IPv4 индивидуальные',
    },
    {
        id: '1',
        text: 'Серверные IPv4 Shared',
    },
    {
        id: '2',
        text: 'Серверные IPv6 индивидуальные',
    },
];

export const baseTarifs: TDropDownItems = [
    {
        id: '0',
        text: 'Австралия',
        baseCosts: [2, 60, 80],
    },
    {
        id: '1',
        text: 'Бангладеш',
        baseCosts: [4, 33, 69],
    },
    {
        id: '3',
        text: 'Россия',
        baseCosts: [0.50, 20, 44],
    },
];

const getTarifs = (country: Country) => {
    const baseCosts = baseTarifs.find((item) => item.text === country )?.baseCosts || [];
    const tarifs = [];
    let id = 0;
    for (let i = 0; i < periods.length; i++) {
        for (let j = 0; j < proxyTypes.length; j++) {
            let text = '';
            const cost = baseCosts[j] * periods[i];
            switch (i) {
                case 0:
                    text = `1 день от ${cost} ₽/шт `;
                    break;
                case 1:
                    text = `7 дней от ${cost} ₽/шт `;
                    break;
                case 2:
                    text = `1 месяц от ${cost} ₽/шт `;
                    break;
                default:
                    text = '';
                    break;
            }
            
            tarifs.push({ text, cost, proxy: proxyTypes[j].text, country, id: String(id) });
            id += 1;
        }
    }

    return [...tarifs];

};

export const countryTypes: TDropDownItems = [
    {
        id: '0',
        text: 'Австралия',
        baseCosts: [2, 60, 80],
        tarifs: getTarifs('Австралия'),
    },
    {
        id: '1',
        text: 'Бангладеш',
        baseCosts: [4, 33, 69],
        tarifs: getTarifs('Бангладеш'),
    },
    {
        id: '3',
        text: 'Россия',
        baseCosts: [0.50, 20, 44],
        tarifs: getTarifs('Россия'),
    },
];

export const periodTypes: TDropDownItems = [
    {
        id: '0',
        text: '1 день',
    },
    {
        id: '1',
        text: '7 дней',
    },
    {
        id: '3',
        text: '1 месяц',
    },
];

export const countTypes: TDropDownItems = [
    {
        id: '0',
        text: '1',
    },
    {
        id: '1',
        text: '2',
    },
    {
        id: '2',
        text: '3',
    },
    {
        id: '3',
        text: '4',
    },
    {
        id: '4',
        text: '5',
    },
];

console.log(countryTypes);