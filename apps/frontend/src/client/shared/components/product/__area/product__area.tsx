import {FC} from 'react';
import {IProduct} from '~/client/shared/types/product';
import {cnProduct} from '../product.const';
import './product__area.css';

type ProductAreaProps = Pick<IProduct, 'areaData'>

export const ProductArea: FC<ProductAreaProps> = (props) => {
    return (
        <p className={cnProduct('area')}>
            {Number(props.areaData?.kitchen) > 0 && <span>
                Жилая - {props.areaData?.living} м<sup>2</sup>
            </span>}
            {Number(props.areaData?.kitchen) > 0 && <span>
                Кухня - {props.areaData?.kitchen} м<sup>2</sup>
            </span>}
            {Number(props.areaData.year) > 0 &&
                <span>
                    Построен в {props.areaData?.year}
                </span>
            }
        </p>
    );
};
