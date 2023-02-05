import React from 'react';
import {IndexScreenAbout} from '~/client/screens/index-screen/__about/index-screen__about';
import {IndexScreenAdvantage} from '~/client/screens/index-screen/__advantage/index-screen__advantage';
import {IndexScreenConsult} from '~/client/screens/index-screen/__consult/index-screen__consult';
import {IndexScreenCount} from '~/client/screens/index-screen/__count/index-screen__count';
import {StockProduct} from '~/client/shared/components/stock-products/stock-product';
import {PageLayout} from '~/client/shared/layouts/page-layout/page-layout';
import {IProduct} from '~/client/shared/types/product';
import {Screen} from '~/client/shared/types/screen';
import {IndexScreenSearch} from './__search/index-screen__search';

const products: IProduct[] = [
    {
        id: 0,
        image: '/img/product-1.png',
        title: 'Квартира в новостройке',
        description: 'Трехкомнатная квартира Номер 4, площадью 108.0 кв.м. на 3 этаже ЖК "Корона Севера". Квартира предлагается с выполненным ремонтом и готова к проживанию. Отделка включает в себя: на полу...',
        address: 'Р-н Бирюлево Восточное, Михневская улица, 8',
        areaDescription: 'Жилая - 68 м2, Кухня - 19 м2, Построен в 2010',
        price: 10000000,
        rooms: 1,
        floor: {
            value: 1,
            total: 10
        },
        area: 42,
        subway: {
            color: 'red',
            station: 'Площадь Революции',
            distance: 5
        }
    },
    {
        id: 0,
        image: '/img/product-1.png',
        title: 'Квартира в новостройке',
        description: 'Трехкомнатная квартира Номер 4, площадью 108.0 кв.м. на 3 этаже ЖК "Корона Севера". Квартира предлагается с выполненным ремонтом и готова к проживанию. Отделка включает в себя: на полу...',
        address: 'Р-н Бирюлево Восточное, Михневская улица, 8',
        areaDescription: 'Жилая - 68 м2, Кухня - 19 м2, Построен в 2010',
        price: 10000000,
        rooms: 1,
        floor: {
            value: 1,
            total: 10
        },
        area: 42,
        subway: {
            color: 'red',
            station: 'Площадь Революции',
            distance: 5
        }
    },
    {
        id: 0,
        image: '/img/product-1.png',
        title: 'Квартира в новостройке',
        description: 'Трехкомнатная квартира Номер 4, площадью 108.0 кв.м. на 3 этаже ЖК "Корона Севера". Квартира предлагается с выполненным ремонтом и готова к проживанию. Отделка включает в себя: на полу...',
        address: 'Р-н Бирюлево Восточное, Михневская улица, 8',
        areaDescription: 'Жилая - 68 м2, Кухня - 19 м2, Построен в 2010',
        price: 10000000,
        rooms: 1,
        floor: {
            value: 1,
            total: 10
        },
        area: 42,
        subway: {
            color: 'red',
            station: 'Площадь Революции',
            distance: 5
        }
    },
    {
        id: 0,
        image: '/img/product-1.png',
        title: 'Квартира в новостройке',
        description: 'Трехкомнатная квартира Номер 4, площадью 108.0 кв.м. на 3 этаже ЖК "Корона Севера". Квартира предлагается с выполненным ремонтом и готова к проживанию. Отделка включает в себя: на полу...',
        address: 'Р-н Бирюлево Восточное, Михневская улица, 8',
        areaDescription: 'Жилая - 68 м2, Кухня - 19 м2, Построен в 2010',
        price: 10000000,
        rooms: 1,
        floor: {
            value: 1,
            total: 10
        },
        area: 42,
        subway: {
            color: 'red',
            station: 'Площадь Революции',
            distance: 5
        }
    },
    {
        id: 0,
        image: '/img/product-1.png',
        title: 'Квартира в новостройке',
        description: 'Трехкомнатная квартира Номер 4, площадью 108.0 кв.м. на 3 этаже ЖК "Корона Севера". Квартира предлагается с выполненным ремонтом и готова к проживанию. Отделка включает в себя: на полу...',
        address: 'Р-н Бирюлево Восточное, Михневская улица, 8',
        areaDescription: 'Жилая - 68 м2, Кухня - 19 м2, Построен в 2010',
        price: 10000000,
        rooms: 1,
        floor: {
            value: 1,
            total: 10
        },
        area: 42,
        subway: {
            color: 'red',
            station: 'Площадь Революции',
            distance: 5
        }
    },
    {
        id: 0,
        image: '/img/product-1.png',
        title: 'Квартира в новостройке',
        description: 'Трехкомнатная квартира Номер 4, площадью 108.0 кв.м. на 3 этаже ЖК "Корона Севера". Квартира предлагается с выполненным ремонтом и готова к проживанию. Отделка включает в себя: на полу...',
        address: 'Р-н Бирюлево Восточное, Михневская улица, 8',
        areaDescription: 'Жилая - 68 м2, Кухня - 19 м2, Построен в 2010',
        price: 10000000,
        rooms: 1,
        floor: {
            value: 1,
            total: 10
        },
        area: 42,
        subway: {
            color: 'red',
            station: 'Площадь Революции',
            distance: 5
        }
    },
    {
        id: 0,
        image: '/img/product-1.png',
        title: 'Квартира в новостройке',
        description: 'Трехкомнатная квартира Номер 4, площадью 108.0 кв.м. на 3 этаже ЖК "Корона Севера". Квартира предлагается с выполненным ремонтом и готова к проживанию. Отделка включает в себя: на полу...',
        address: 'Р-н Бирюлево Восточное, Михневская улица, 8',
        areaDescription: 'Жилая - 68 м2, Кухня - 19 м2, Построен в 2010',
        price: 10000000,
        rooms: 1,
        floor: {
            value: 1,
            total: 10
        },
        area: 42,
        subway: {
            color: 'red',
            station: 'Площадь Революции',
            distance: 5
        }
    },
    {
        id: 0,
        image: '/img/product-1.png',
        title: 'Квартира в новостройке',
        description: 'Трехкомнатная квартира Номер 4, площадью 108.0 кв.м. на 3 этаже ЖК "Корона Севера". Квартира предлагается с выполненным ремонтом и готова к проживанию. Отделка включает в себя: на полу...',
        address: 'Р-н Бирюлево Восточное, Михневская улица, 8',
        areaDescription: 'Жилая - 68 м2, Кухня - 19 м2, Построен в 2010',
        price: 10000000,
        rooms: 1,
        floor: {
            value: 1,
            total: 10
        },
        area: 42,
        subway: {
            color: 'red',
            station: 'Площадь Революции',
            distance: 5
        }
    }
];

const count = {
    rooms_1: 4561,
    rooms_2: 3234,
    rooms_3: 4578,
    out_city: 2344,
    commercial: 12345,
    rooms_mo: 2490358,
    rooms_mos: 734778,
    ap_new: 588585
};

export const IndexScreen: Screen = () => {
    return (
        <PageLayout>
            <IndexScreenSearch/>
            <IndexScreenAdvantage/>
            <StockProduct
                products={products}
            />
            <IndexScreenCount
                count={count}
            />
            <IndexScreenAbout/>
            <IndexScreenConsult/>
        </PageLayout>
    );
};
