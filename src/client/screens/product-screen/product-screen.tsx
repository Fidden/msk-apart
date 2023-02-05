import {createContext, FC} from 'react';
import {ProductScreenDescription} from '~/client/screens/product-screen/__desciption/product-screen__description';
import {ProductScreenHeader} from '~/client/screens/product-screen/__header/product-screen__header';
import {Breadcrumb} from '~/client/shared/components/breadcrumb/breadcrumb';
import {StockProduct} from '~/client/shared/components/stock-products/stock-product';
import {PageLayout} from '~/client/shared/layouts/page-layout/page-layout';
import {breadcrumbRoutes} from '~/client/shared/mocks/breadcrumb.mock';
import {productsMock} from '~/client/shared/mocks/products.mock';
import {IProduct} from '~/client/shared/types/product';
import {cnProductScreen} from './product-screen.const';

export const ProductPageContext = createContext<{ product?: IProduct }>({});

export const ProductScreen: FC = () => {
    return (
        <PageLayout>
            <Breadcrumb routes={breadcrumbRoutes}/>
            <ProductPageContext.Provider value={{product: productsMock[0]}}>
                <section className={cnProductScreen()}>
                    <ProductScreenHeader/>
                    <ProductScreenDescription/>
                    <StockProduct products={productsMock}/>
                </section>
            </ProductPageContext.Provider>
        </PageLayout>
    );
};
