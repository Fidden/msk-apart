import {FC} from 'react';
import {IProduct} from '~/client/shared/types/product';
import {cnProduct} from '../product.const';
import './product__area.css';

type IProductAreaProps = Pick<IProduct, 'areaDescription'>
export const ProductArea: FC<IProductAreaProps> = ({areaDescription}) => (
    <p className={cnProduct('area')}>
        {areaDescription}
    </p>
);
