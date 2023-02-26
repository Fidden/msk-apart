import {compose, IClassNameProps} from '@bem-react/core';
import Image from 'next/image';
import Link from 'next/link';
import {FC} from 'react';
import {Button} from '~/client/shared/components/button/button';
import {ProductArea} from '~/client/shared/components/product/__area/product__area';
import {IProduct} from '~/client/shared/types/product';
import {ProductAddress} from './__address/product_address';
import {ProductBody} from './__body/product__body';
import {ProductDescription} from './__description/product__description';
import {ProductImages} from './__images/product__images';
import {ProductInfo} from './__info/product__info';
import {ProductPrice} from './__price/product__price';
import {ProductSubway} from './__subway/product__subway';
import {withProductSizeSmall} from './_size/Product_size_sm';
import HeartIcon from './assets/heart.svg';
import {cnProduct} from './product.const';
import {withProductVariantProfile} from "~/client/shared/components/product/_variant/Product_variant_profile";

export interface IProductProps extends IClassNameProps {
    product: IProduct;
}

const ProductPresenter: FC<IProductProps> = ({product, className}) => {
    return (
        <Link
            className={cnProduct.mix(className)}
            href={`/product/${product.id}`}
        >
            <ProductImages
                images={product.images}
                image={product.image}
            />
            <ProductBody>
                <ProductInfo
                    rooms={product.rooms}
                    area={product.area}
                    floor={product.floor}
                />
                <ProductPrice
                    price={product.price}
                    area={product.area}
                />
                <ProductSubway subway={product.subway}/>
                <ProductAddress address={product.address}/>
                <ProductArea areaData={product.areaData}/>
                <ProductDescription description={product.description}/>
                <ProductBody.Footer>
                    <Button
                        size={'sm'}
                        variant={'outlined'}
                    >
                        Показать номер
                    </Button>
                    <Button
                        variant={'outlined'}
                        size={'sm'}
                    >
                        <Image
                            src={HeartIcon}
                            alt={'heart'}
                            width={13}
                            height={11}
                        />
                    </Button>
                </ProductBody.Footer>
            </ProductBody>
        </Link>
    );
};

export const Product = compose(
    withProductSizeSmall,
    withProductVariantProfile
)(ProductPresenter);
