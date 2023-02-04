import {compose, IClassNameProps} from '@bem-react/core';
import Link from 'next/link';
import {FC} from 'react';
import {IProduct} from '~/client/shared/types/product';
import {ProductImages} from './__images/product__images';
import {ProductInfo} from './__info/product__info';
import {ProductPrice} from './__price/product__price';
import {ProductSubway} from './__subway/product__subway';
import {withProductSizeSmall} from './_size/Product_size_sm';
import {cnProduct} from './product.const';

export interface IProductProps extends IClassNameProps {
    product: IProduct;
}

const ProductPresenter: FC<IProductProps> = ({product}) => {
    return (
        <Link
            className={cnProduct()}
            href={`/product/${product.id}`}
        >
            <ProductImages
                images={[product.image]}
                image={product.image}
            />
            <ProductPrice price={product.price}/>
            <ProductInfo
                rooms={product.rooms}
                area={product.area}
                floor={product.floor}
            />
            <ProductSubway subway={product.subway}/>
        </Link>
    );
};

export const Product = compose(
    withProductSizeSmall
)(ProductPresenter);
