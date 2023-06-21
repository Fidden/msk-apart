import {NextPage} from 'next';
import {useRouter} from 'next/router';
import {useEffect, useState} from 'react';
import {Breadcrumb} from '~/client/shared/components/breadcrumb/breadcrumb';
import {DoubleInput} from '~/client/shared/components/double-input/double-input';
import {Pagination} from '~/client/shared/components/pagination/pagination';
import {Product} from '~/client/shared/components/product/product';
import {Select} from '~/client/shared/components/select/select';
import {PageLayout} from '~/client/shared/layouts/page-layout/page-layout';
import {breadcrumbRoutes} from '~/client/shared/mocks/breadcrumb.mock';
import {useCatalogStore} from '~/client/shared/stores/catalog.store';
import {IPagination} from '~/client/shared/types/pagination';
import {IProduct} from '~/client/shared/types/product';
import {cnCatalogScreen} from './catalog-screen.const';

type CatalogScreenProps = IPagination<IProduct>;

const stockTypes = [
    {id: 1, name: 'Квартиры и комнаты'},
    {id: 2, name: 'Коммерческая'},
    {id: 3, name: 'Дома и участки'},
    {id: 4, name: 'Гаражи / парковки'}
];

const roomTypes = [
    {id: 1, name: '1 Комнатные'},
    {id: 2, name: '2х Комнатные'},
    {id: 3, name: '3х Комнатные'},
    {id: 4, name: '4х Комнатные'}
];

export const CatalogScreen: NextPage<CatalogScreenProps> = (props) => {
    const router = useRouter();
    const setCatalog = useCatalogStore((state) => state.set);
    const fetchCatalog = useCatalogStore((state) => state.fetch);
    const appendCatalog = useCatalogStore((state) => state.append);
    const products = useCatalogStore((state) => state.products);


    const [type, setType] = useState(router.query?.type ? Number(router.query?.type) : 1);
    const [room, setRoom] = useState(router.query?.rooms ?  Number(router.query?.rooms):  1);

    const [priceStart, setPriceStart] = useState( '0');
    const [priceEnd, setPriceEnd] = useState('45000000');

    const [areaStart, setAreaStart] = useState('0');
    const [areaEnd, setAreaEnd] = useState('90');

    useEffect(() => {
        setCatalog(props);
    }, []);

    useEffect(() => {
        (async () => {
            const res = await fetchCatalog(
                1,
                type,
                `${Number(priceStart)},${Number(priceEnd)}`,
                `${Number(areaStart)},${Number(areaEnd)}`,
                room
            );
            setCatalog(res);
        })();
    }, [type, priceStart, priceEnd, areaStart, areaEnd, room]);


    return (
        <PageLayout>
            <Breadcrumb routes={breadcrumbRoutes}/>
            <section className={cnCatalogScreen()}>
                <aside className={cnCatalogScreen('filter')}>
                    <div className={cnCatalogScreen('filter-block')}>
                        <p className={cnCatalogScreen('filter-title')}>
                            Тип недвижимости
                        </p>
                        <Select
                            onChange={e => setType(e)}
                            value={stockTypes.find(item => item.id === type)?.name}
                        >
                            {stockTypes.map(item => (
                                <Select.Option
                                    key={item.id}
                                    value={item.id}
                                >
                                    {item.name}
                                </Select.Option>
                            ))}
                        </Select>
                    </div>

                    <div className={cnCatalogScreen('filter-block')}>
                        <p className={cnCatalogScreen('filter-title')}>
                            Комнаты
                        </p>
                        <Select
                            onChange={e => setRoom(e)}
                            value={roomTypes.find(item => item.id === room)?.name}
                        >
                            {roomTypes.map(item => (
                                <Select.Option
                                    key={item.id}
                                    value={item.id}
                                >
                                    {item.name}
                                </Select.Option>
                            ))}
                        </Select>
                    </div>

                    <div className={cnCatalogScreen('filter-block')}>
                        <p className={cnCatalogScreen('filter-title')}>
                            Цена ₽
                        </p>
                        <div className={cnCatalogScreen('filter-content')}>
                            <DoubleInput
                                first={{
                                    type: 'number',
                                    placeholder: 'От 0 млн ₽',
                                    value: priceStart,
                                    onChange: (e) => setPriceStart(e.target.value)
                                }}
                                second={{
                                    type: 'number',
                                    value: priceEnd,
                                    placeholder: 'До 10 млн ₽',
                                    onChange: (e) => setPriceEnd(e.target.value)
                                }}
                            />
                        </div>
                    </div>

                    <div className={cnCatalogScreen('filter-block')}>
                        <p className={cnCatalogScreen('filter-title')}>
                            Площадь м²
                        </p>
                        <div className={cnCatalogScreen('filter-content')}>
                            <DoubleInput
                                first={{
                                    type: 'number',
                                    placeholder: 'От 0 м²',
                                    value: areaStart,
                                    onChange: (e) => setAreaStart(e.target.value)
                                }}
                                second={{
                                    type: 'number',
                                    value: areaEnd,
                                    placeholder: 'До 45 м²',
                                    onChange: (e) => setAreaEnd(e.target.value)
                                }}
                            />
                        </div>
                    </div>
                </aside>
                <div className={cnCatalogScreen('content')}>
                    {products?.data?.map(product =>
                        <Product
                            key={product.id}
                            product={product}
                        />)
                    }
                </div>
            </section>
            {products?.meta &&
                <Pagination
                    onPageChange={async (page) => setCatalog(await fetchCatalog(page))}
                    onPageAppend={async (page) => appendCatalog(await fetchCatalog(page))}
                    meta={products?.meta}
                />}
        </PageLayout>
    );
};
