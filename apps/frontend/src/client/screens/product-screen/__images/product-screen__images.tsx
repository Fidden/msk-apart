import Image from 'next/image';
import {useRouter} from 'next/router';
import {FC} from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {Button} from '~/client/shared/components/button/button';
import {useProductStore} from '~/client/shared/stores/product.store';
import {cnProductScreen} from '../product-screen.const';
import ArrowIcon from './assets/arrow.svg';
import HeartIcon from './assets/heart.svg';
import './product-screen__images.css';

const responsive = {
	all: {
		breakpoint: {max: 4000, min: 0},
		items: 4,
		partialVisibilityGutter: 40
	}
};

export const ProductScreenImages: FC = () => {
	const router = useRouter();
	const product = useProductStore(state => state.product);
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
					src={product.image}
					alt={'main-image'}
					fill
				/>
			</div>
			<Carousel
				className={cnProductScreen('images-bar')}
				responsive={responsive}
				infinite={true}
				ssr={true}
				arrows={false}
			>
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
			</Carousel>
		</div>
	);
};
