import {FC} from 'react';
import {IProduct} from '~/client/shared/types/product';
import {cnProduct} from '../product.const';
import './product__adress.css';

type IProductAddressProps = Pick<IProduct, 'address'>;
export const ProductAddress: FC<IProductAddressProps> = ({address}) => (
    <p className={cnProduct('address')}>
        {address}
    </p>
);
