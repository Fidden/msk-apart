import {FC} from 'react';
import {Button} from '~/client/shared/components/button/button';
import {Product} from '~/client/shared/components/product/product';
import {IProduct} from '~/client/shared/types/product';
import {cnStockProducts} from './stock-product.const';

interface IStockProducts {
	products: IProduct[];
}

export const StockProduct: FC<IStockProducts> = ({products}) => {
	return (
		<section className={cnStockProducts()}>
			<header className={cnStockProducts('header')}>
				<h3 className={cnStockProducts('title')}>
					Спецпредложения
				</h3>
				<Button variant={'outlined'}>
					Смотреть все
				</Button>
			</header>
			<div className={cnStockProducts('body')}>
				{products.map(product =>
					<Product
						size={'sm'}
						key={product.id}
						product={product}
					/>
				)}
			</div>
		</section>
	);
};
