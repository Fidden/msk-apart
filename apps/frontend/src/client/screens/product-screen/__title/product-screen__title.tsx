import {FC} from 'react';
import {useProductStore} from '~/client/shared/stores/product.store';
import {cnProductScreen} from '../product-screen.const';
import './product-screen__title.css';

export const ProductScreenTitle: FC = () => {
    const product = useProductStore(state => state.product);
    if (!product) {
        return null;
    }

    return (
        <p className={cnProductScreen('title')}>
            {product.title}, {product.area} м<sup>2</sup>
        </p>
    );
};
