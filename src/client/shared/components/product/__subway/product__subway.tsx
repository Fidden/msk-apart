import Image from 'next/image';
import {FC} from 'react';
import {IProduct} from '~/client/shared/types/product';
import SubwayIcon from '../assets/subway.svg';
import WalkIcon from '../assets/walk.svg';
import {cnProduct} from '../product.const';
import './product__subway.css';

type IProductSubwayProps = Pick<IProduct, 'subway'>;

export const ProductSubway: FC<IProductSubwayProps> = (props) => (
    <p className={cnProduct('subway')}>
        <Image
            src={SubwayIcon}
            alt={props.subway.station}
        />
        {props.subway.station}
        <Image
            src={WalkIcon}
            alt={props.subway.station}
        />
        <span>{props.subway.distance} мин</span>
    </p>
);
