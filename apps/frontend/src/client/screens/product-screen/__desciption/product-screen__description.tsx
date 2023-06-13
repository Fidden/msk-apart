import {FC} from 'react';
import {cnProductScreen} from '~/client/screens/product-screen/product-screen.const';
import {useProductStore} from '~/client/shared/stores/product.store';
import './product-screen__description.css';

export const ProductScreenDescription: FC = () => {
	const product = useProductStore(state => state.product);
	return (
		<div className={cnProductScreen('description')}>
			<p className={cnProductScreen('description-title')}>
				Описание
			</p>
			<p className={cnProductScreen('description-text')}>
				{product?.description}
			</p>
		</div>
	);
};
