import {FC} from 'react';
import {cnProductScreen} from '~/client/screens/product-screen/product-screen.const';
import {useProductStore} from '~/client/shared/stores/product.store';
import './product-screen__info.css';

export const ProductScreenInfo: FC = () => {
	const product = useProductStore(state => state.product);
	if (!product) {
		return null;
	}

	const renderText = (data?: string | number, postData?: JSX.Element) => {
		if (data) {
			if (typeof data === 'number' && data < 0) {
				return 'Нет данных';
			}

			return <>
				{data} {postData}
			</>;
		}

		return 'Нет данных';
	};

	return (
		<div className={cnProductScreen('info')}>
			<header className={cnProductScreen('info-header')}>
				<p className={cnProductScreen('info-header-text')}>
					Жилая площадь
					<span>
						{renderText(product.areaData?.living, <>м<sup>2</sup></>)}
					</span>
				</p>
				<p className={cnProductScreen('info-header-text')}>
					Площадь кухни
					<span>
						{renderText(product.areaData?.kitchen, <>м<sup>2</sup></>)}
					</span>
				</p>
				<p className={cnProductScreen('info-header-text')}>
					Год постройки
					<span>
						{renderText(product.areaData?.year)}
					</span>
				</p>
			</header>
			<ul className={cnProductScreen('info-body')}>
				<li className={cnProductScreen('info-body-text')}>
					Этаж<span>{product.floor.value} из {product.floor.total}</span>
				</li>
				{product.corpus &&
					<li className={cnProductScreen('info-body-text')}>
						Корпус<span>{product.corpus}</span>
					</li>
				}
				<li className={cnProductScreen('info-body-text')}>
					Отделка<span>{product?.finishing || 'Нет данных'}</span>
				</li>
				<li className={cnProductScreen('info-body-text')}>
					Ремонт<span>{product?.repair || 'Нет данных'}</span>
				</li>
				<li className={cnProductScreen('info-body-text')}>
					Санузел<span>{product?.bathroomType || 'Нет данных'}</span>
				</li>
				<li className={cnProductScreen('info-body-text')}>
					Тип здания<span>{product?.buildType || 'Нет данных'}</span>
				</li>
				<li className={cnProductScreen('info-body-text')}>
					Номер на этаже<span>{product.floor.value}</span>
				</li>
				<li className={cnProductScreen('info-body-text')}>
					Балкон\Лоджия<span>{product?.balcony === 0 ? 'Нет' : 'Есть'}</span>
				</li>
				<li className={cnProductScreen('info-body-text')}>
					Тип комнат<span>{product?.roomType}</span>
				</li>
			</ul>
		</div>
	);
};
