
type Tarif = {
    label: string;
    cost: number;
    proxy: TDropDownItem;
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


type Country = 'Россия' | 'Австралия' | 'Бангладеш';

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
    for (let i = 0; i < periods.length; i++) {
        for (let j = 0; j < proxyTypes.length; j++) {
            let label = '';
            const cost = baseCosts[j] * periods[i];
            switch (i) {
                case 0:
                    label = `1 день от ${cost} ₽/шт `;
                    break;
                case 1:
                    label = `7 дней от ${cost} ₽/шт `;
                    break;
                case 2:
                    label = `1 месяц от ${cost} ₽/шт `;
                    break;
                default:
                    label = '';
                    break;
            }
            tarifs.push({ label, cost, proxy: proxyTypes[j], country });
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

console.log(getTarifs('Австралия'));


console.log(countryTypes);

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