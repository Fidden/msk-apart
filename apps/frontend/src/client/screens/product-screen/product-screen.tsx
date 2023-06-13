import {NextPage} from 'next';
import {useEffect} from 'react';
import {ProductScreenDescription} from '~/client/screens/product-screen/__desciption/product-screen__description';
import {ProductScreenHeader} from '~/client/screens/product-screen/__header/product-screen__header';
import {Breadcrumb} from '~/client/shared/components/breadcrumb/breadcrumb';
import {StockProduct} from '~/client/shared/components/stock-products/stock-product';
import {PageLayout} from '~/client/shared/layouts/page-layout/page-layout';
import {breadcrumbRoutes} from '~/client/shared/mocks/breadcrumb.mock';
import {useProductStore} from '~/client/shared/stores/product.store';
import {IProduct} from '~/client/shared/types/product';
import {cnProductScreen} from './product-screen.const';

interface IProductScreenProps {
	product: IProduct;
	special: IProduct[];
}

export const ProductScreen: NextPage<IProductScreenProps> = (props) => {
	const setProduct = useProductStore(state => state.setProduct);

	useEffect(() => {
		setProduct(props.product);
	}, []);

	return (
		<PageLayout>
			<Breadcrumb routes={breadcrumbRoutes}/>
			<section className={cnProductScreen()}>
				<ProductScreenHeader/>
				<ProductScreenDescription/>
				{props?.special?.length > 0 &&
					<StockProduct products={props.special}/>
				}
			</section>
		</PageLayout>
	);
};
