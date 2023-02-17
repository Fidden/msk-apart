import {FC, PropsWithChildren} from 'react';
import {cnProduct} from '../product.const';
import './product__body.css';

type DotComponents = { Header: FC<PropsWithChildren> } & { Footer: FC<PropsWithChildren> };

export const ProductBody: FC<PropsWithChildren> & DotComponents = ({children}) => (
    <div className={cnProduct('body')}>
        {children}
    </div>
);

ProductBody.Header = ({children}) => (
    <div className={cnProduct('body-header')}>
        {children}
    </div>
);

ProductBody.Footer = ({children}) => (
    <div className={cnProduct('body-footer')}>
        {children}
    </div>
);
