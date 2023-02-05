import Image from 'next/image';
import {useRouter} from 'next/router';
import {FC, useContext} from 'react';
import {ProductPageContext} from '~/client/screens/product-screen/product-screen';
import {Button} from '~/client/shared/components/button/button';
import {cnProductScreen} from '../product-screen.const';
import ArrowIcon from './assets/arrow.svg';
import HeartIcon from './assets/heart.svg';
import './product-screen__images.css';

export const ProductScreenImages: FC = () => {
    const router = useRouter();
    const {product} = useContext(ProductPageContext);
    if (!product) {
        return null;
    }

    return (
        <div className={cnProductScreen('images')}>
            <Button
                onClick={() => router.back()}
                size={'sm'}
                className={cnProductScreen('images-back')}
            >
                <Image
                    src={ArrowIcon}
                    alt={'back-arrow'}
                    width={10}
                    height={10}
                />
                Назад
            </Button>
            <Button className={cnProductScreen('images-favorite')}>
                <Image
                    src={HeartIcon}
                    alt={'back-arrow'}
                    width={13}
                    height={12}
                />
            </Button>
            <div className={cnProductScreen('images-main')}>
                <Image
                    src={product.images[0]}
                    alt={'main-image'}
                    fill
                />
            </div>
            <div className={cnProductScreen('images-bar')}>
                {product.images.map(image => (
                    <div
                        key={image}
                        className={cnProductScreen('images-bar-item')}
                    >
                        <Image
                            src={image}
                            alt={'preview-image'}
                            fill
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};
