import Image from 'next/image';
import {FC} from 'react';
import {cnProductScreen} from '~/client/screens/product-screen/product-screen.const';
import {useProductStore} from '~/client/shared/stores/product.store';
import ArrowIcon from './assets/arrow.svg';
import './product-screen__price.css';

export const ProductScreenPrice: FC = () => {
    const product = useProductStore(state => state.product);
    if (!product) {
        return null;
    }

    const localePrice = Number(product.price).toLocaleString('ru-RU', {
        maximumFractionDigits: 0,
        currency: 'RUB',
        style: 'currency'
    });

    const localePricePerMeter = Number(product.price / product.area).toLocaleString('ru-RU', {
        maximumFractionDigits: 2
    });

    return (
        <div className={cnProductScreen('price')}>
            <div className={cnProductScreen('price-body')}>
                <p className={cnProductScreen('price-total')}>
                    {localePrice}
                </p>
                <div className={cnProductScreen('price-arrow')}>
                    <Image
                        src={ArrowIcon}
                        alt={'down'}
                        width={10}
                        height={6}
                    />
                </div>
                <p className={cnProductScreen('price-metre')}>
                    {localePricePerMeter} м<sup>2</sup>
                </p>
            </div>
            {/*<p className={cnProductScreen('price-permonth')}>*/}
            {/*    от 88 069 ₽/мес в ипотеку*/}
            {/*</p>*/}
        </div>
    );
};
