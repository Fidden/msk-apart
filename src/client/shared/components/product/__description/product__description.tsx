import {FC} from 'react';
import {IProduct} from '~/client/shared/types/product';
import {cnProduct} from '../product.const';
import './product__description.css';

type IProductDescriptionProps = Pick<IProduct, 'description'>;
export const ProductDescription: FC<IProductDescriptionProps> = ({description}) => (
    <p className={cnProduct('description')}>
        {description}
    </p>
);
