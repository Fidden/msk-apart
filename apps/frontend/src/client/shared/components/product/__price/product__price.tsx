import {FC} from 'react';
import {cnProduct} from '~/client/shared/components/product/product.const';
import {IProduct} from '~/client/shared/types/product';
import './product__price.css';

type IProductPriceProps = Pick<IProduct, 'price' | 'area'>
export const ProductPrice: FC<IProductPriceProps> = ({price, area}) => {
    const pricePerMeter = Number(price / area).toLocaleString('ru-Ru', {
        maximumFractionDigits: 0
    });

    return (
        <p className={cnProduct('price')}>
            {price.toLocaleString('ru-Ru')} ₽
            <span className={cnProduct('price-per')}>
                {pricePerMeter} ₽/м<sup>2</sup>
            </span>
        </p>
    );
};
