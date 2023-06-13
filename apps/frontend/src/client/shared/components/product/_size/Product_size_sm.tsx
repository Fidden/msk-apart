import {withBemMod} from '@bem-react/core';
import {IProductProps} from '../product';
import {cnProduct} from '../product.const';
import './product_size_sm.css';

interface IProductSizeSmallProps {
	size?: 'sm';
}

export const withProductSizeSmall = withBemMod<IProductSizeSmallProps, IProductProps>(
	cnProduct(),
	{size: 'sm'},
	(Product) => (props) => <Product {...props}/>
);
