import {FC, useContext} from 'react';
import {ProductPageContext} from '~/client/screens/product-screen/product-screen';
import {cnProductScreen} from '../product-screen.const';
import './product-screen__title.css';

export const ProductScreenTitle: FC = () => {
    const {product} = useContext(ProductPageContext);
    if (!product) {
        return null;
    }

    return (
        <p className={cnProductScreen('title')}>
            {product.title}, {product.area} м<sup>2</sup>
        </p>
    );
};
