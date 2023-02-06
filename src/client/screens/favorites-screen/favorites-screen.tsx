import {FC, useState} from 'react';
import {cnFavoritesScreen} from '~/client/screens/favorites-screen/favorites-screen.const';
import {Empty} from '~/client/shared/components/__empty/empty';
import {Product} from '~/client/shared/components/product/product';
import {StockProduct} from '~/client/shared/components/stock-products/stock-product';
import {PageLayout} from '~/client/shared/layouts/page-layout/page-layout';
import {breadcrumbRoutes} from '~/client/shared/mocks/breadcrumb.mock';
import {productsMock} from '~/client/shared/mocks/products.mock';
import {IProduct} from '~/client/shared/types/product';
import Illustration from './assets/illustration.svg';

export const FavoritesScreen: FC = () => {
    const [favorites] = useState<IProduct[]>(productsMock);

    return (
        <PageLayout>
            {favorites?.length > 0
                ?
                <div className={cnFavoritesScreen()}>
                    <h2 className={cnFavoritesScreen('title')}>
                        Избранное
                    </h2>
                    <div className={cnFavoritesScreen('body')}>
                        {favorites.map(product => (
                            <Product
                                product={product}
                                key={product.id}
                            />
                        ))}
                    </div>
                </div>
                :
                <Empty
                    breadcrumb={breadcrumbRoutes}
                    title={'Вы ещё не добавили ничего в избранное'}
                    illustration={Illustration}
                />
            }
            <StockProduct products={productsMock}/>
        </PageLayout>
    );
};
