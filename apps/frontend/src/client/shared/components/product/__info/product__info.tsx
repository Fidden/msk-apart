import {FC} from 'react';
import {cnProduct} from '~/client/shared/components/product/product.const';
import {IProduct} from '~/client/shared/types/product';
import './product__info.css';


type IProductInfoProps = Pick<IProduct, 'rooms' | 'floor' | 'area'>

export const ProductInfo: FC<IProductInfoProps> = (props) => (
    <p className={cnProduct('info')}>
        {props.rooms}-комн. кв.
        <span className={cnProduct('info-line')}/>
        этаж {props.floor.value}/{props.floor.total}
        <span className={cnProduct('info-line')}/>
        <span>{Number(props.area)?.toFixed(0)} м<sup>2</sup></span>
    </p>
);
