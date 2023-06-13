import Image from 'next/image';
import {FC, useState} from 'react';
import {Button} from '~/client/shared/components/button/button';
import {DoubleInput} from '~/client/shared/components/double-input/double-input';
import {Select} from '~/client/shared/components/select/select';
import {cnIndexScreen} from '../index-screen.const';
import PointIcon from './assets/pin.svg';

import './index-screen__search.css';

export const IndexScreenSearch: FC = () => {
	const [filter, setFilter] = useState({
		type: 'Квартира',
		rooms: 1,
		priceStart: 0,
		priceEnd: 0,
		address: ''
	});

	return (
		<section className={cnIndexScreen('search')}>
			<h1 className={cnIndexScreen('search-title')}>
				Найти недвижимость в Москве
			</h1>
			<form className={cnIndexScreen('search-form')}>
				<div className={cnIndexScreen('search-form-container')}>
					<Select
						value={filter.type}
						onChange={value => setFilter((prev) => ({...prev, type: value}))}
					>
						<Select.Option
							value={'Квартира'}
							key={'Квартира'}
						>
							Квартира
						</Select.Option>
						<Select.Option
							value={'Комната'}
							key={'Комната'}
						>
							Комната
						</Select.Option>
						<Select.Option
							value={'Дом'}
							key={'Дом'}
						>
							Дом
						</Select.Option>
					</Select>

					<Select
						value={filter.rooms}
						onChange={value => setFilter((prev) => ({...prev, rooms: value}))}
						transformValue={value => `Комнат: ${value}`}
					>
						<Select.Option
							value={1}
							key={1}
						>
							1
						</Select.Option>
						<Select.Option
							value={2}
							key={2}
						>
							2
						</Select.Option>
						<Select.Option
							value={3}
							key={3}
						>
							3
						</Select.Option>
					</Select>
					<DoubleInput
						first={{
							type: 'number',
							placeholder: 'От 0 млн ₽'
						}}
						second={{
							type: 'number',
							placeholder: 'До 10 млн ₽'
						}}
					/>
				</div>
				<div className={cnIndexScreen('search-form-container')}>
					<Button variant={'outlined'}>
						Показать на карте
						<Image
							src={PointIcon}
							alt={'point'}
							width={11}
							height={14}
						/>
					</Button>
					<Button>
						Найти недвижимость
					</Button>
				</div>
			</form>

		</section>
	);
};
