import {FC} from 'react';
import {Breadcrumb} from '~/client/shared/components/breadcrumb/breadcrumb';
import {Product} from '~/client/shared/components/product/product';
import {Select} from '~/client/shared/components/select/select';
import {PageLayout} from '~/client/shared/layouts/page-layout/page-layout';
import {breadcrumbRoutes} from '~/client/shared/mocks/breadcrumb.mock';
import {productsMock} from '~/client/shared/mocks/products.mock';
import {cnCatalogScreen} from './catalog-screen.const';

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
                    {productsMock.map(product =>
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
