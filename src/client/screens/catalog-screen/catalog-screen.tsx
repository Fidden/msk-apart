import {FC} from 'react';
import {Breadcrumb} from '~/client/shared/components/breadcrumb/breadcrumb';
import {Product} from '~/client/shared/components/product/product';
import {Select} from '~/client/shared/components/select/select';
import {PageLayout} from '~/client/shared/layouts/page-layout/page-layout';
import {IProduct} from '~/client/shared/types/product';
import {cnCatalogScreen} from './catalog-screen.const';

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
const breadcrumbRoutes = [
    {title: 'Купить', href: '/'},
    {title: 'Квартиру', href: '/'},
    {title: '1,2 Комнаты', href: '/'},
    {title: 'Тверская', href: '/'}
];

export const CatalogScreen: FC = () => {
    return (
        <PageLayout>
            <Breadcrumb routes={breadcrumbRoutes}/>
            <section className={cnCatalogScreen()}>
                <aside className={cnCatalogScreen('filter')}>
                    <div className={cnCatalogScreen('filter-block')}>
                        <p className={cnCatalogScreen('filter-title')}>
                            Тип недвижимости
                        </p>
                        <Select>
                            <Select.Option value={'Квартира'}>
                                Квартира
                            </Select.Option>
                        </Select>
                    </div>
                </aside>
                <div className={cnCatalogScreen('content')}>
                    {products.map(product =>
                        <Product
                            key={product.id}
                            product={product}
                        />)
                    }
                </div>
            </section>
        </PageLayout>
    );
};
