import {NextPage} from 'next';
import {useEffect} from 'react';
import {Breadcrumb} from '~/client/shared/components/breadcrumb/breadcrumb';
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

export const CatalogScreen: NextPage<CatalogScreenProps> = (props) => {
	const setCatalog = useCatalogStore((state) => state.set);
	const fetchCatalog = useCatalogStore((state) => state.fetch);
	const appendCatalog = useCatalogStore((state) => state.append);
	const products = useCatalogStore((state) => state.products);

	useEffect(() => {
		setCatalog(props);
	}, []);

	return (
		<PageLayout>
			<Breadcrumb routes={breadcrumbRoutes}/>
			<section className={cnCatalogScreen()}>
				<aside className={cnCatalogScreen('filter')}>
					<div className={cnCatalogScreen('filter-block')}>
						<p className={cnCatalogScreen('filter-title')}>
                            Тип недвижимости
						</p>
						<Select value={'Квартира'}>
							{stockTypes.map(item => (
								<Select.Option
									key={item.id}
									value={'Квартира'}
								>
									{item.name}
								</Select.Option>
							))}
						</Select>
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
