import Image from 'next/image';
import {FC} from 'react';
import {cnProduct} from '~/client/shared/components/product/product.const';
import './product__images.css';

interface IProductImagesProps {
    images: string[];
    image: string;
}

export const ProductImages: FC<IProductImagesProps> = ({images, image}) => (
    <div className={cnProduct('images')}>
        <div className={cnProduct('images-bar')}>
            {images.map(src =>
                <Image
                    className={cnProduct('images-bar-item')}
                    width={106}
                    height={61}
                    key={src}
                    src={src}
                    alt={'image'}
                    aria-hidden
                />)
            }
        </div>
        <Image
            className={cnProduct('images-main')}
            src={image}
            alt={'main-image'}
            aria-hidden
            width={324}
            height={200}
        />
    </div>
);
