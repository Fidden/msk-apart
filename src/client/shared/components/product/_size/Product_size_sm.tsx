import {withBemMod} from '@bem-react/core';
import {cnButton} from '~/client/shared/components/button/button.const';
import {IProductProps} from '~/client/shared/components/product/product';
import './product_size_sm.css';

interface IProductSizeSmallProps {
    size?: 'sm';
}

export const withProductSizeSmall = withBemMod<IProductSizeSmallProps, IProductProps>(
    cnButton(),
    {size: 'sm'},
    (Product) => (props) => <Product {...props}/>
);
