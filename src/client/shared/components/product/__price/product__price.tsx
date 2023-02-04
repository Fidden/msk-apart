import {FC} from 'react';
import {cnProduct} from '~/client/shared/components/product/product.const';
import {IProduct} from '~/client/shared/types/product';
import './product__price.css';

type IProductPriceProps = Pick<IProduct, 'price'>
export const ProductPrice: FC<IProductPriceProps> = ({price}) => (
    <p className={cnProduct('price')}>
        {price.toLocaleString('ru-Ru')} ₽
    </p>
);
