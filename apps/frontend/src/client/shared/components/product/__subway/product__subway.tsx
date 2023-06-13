import Image from 'next/image';
import {FC} from 'react';
import {IProduct} from '~/client/shared/types/product';
import WalkIcon from '../assets/walk.svg';
import {cnProduct} from '../product.const';
import './product__subway.css';

type IProductSubwayProps = Pick<IProduct, 'subway'>;

export const ProductSubway: FC<IProductSubwayProps> = (props) => (
	<p className={cnProduct('subway')}>
		<svg
			width="16"
			height="12"
			viewBox="0 0 16 12"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M14.8992 9.96164L11.1616 0.502441L8 6.03204L4.8512 0.502441L1.1008 9.96164H0V11.3952H5.6576V9.96164H4.8128L5.632 7.60644L8 11.4976L10.368 7.60644L11.1872 9.96164H10.3424V11.3952H16V9.96164H14.8992Z"
				fill={props.subway.color}
			/>
		</svg>
		{props.subway.station}
		<Image
			src={WalkIcon}
			alt={props.subway.station}
			width={10}
			height={16}
		/>
		<span>{props.subway.distance} мин</span>
	</p>
);
