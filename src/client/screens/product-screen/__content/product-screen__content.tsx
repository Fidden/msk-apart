import {FC} from 'react';
import {ProductScreenActions} from '../__actions/product-screen__actions';
import {ProductScreenInfo} from '../__info/product-sceen__info';
import {ProductScreenPrice} from '../__price/product-screen__price';
import {ProductScreenTitle} from '../__title/product-screen__title';
import {cnProductScreen} from '../product-screen.const';
import './product-screen__content.css';

export const ProductScreenContent: FC = () => {
    return (
        <div className={cnProductScreen('content')}>
            <ProductScreenTitle/>
            <ProductScreenPrice/>
            <ProductScreenActions/>
            <ProductScreenInfo/>
        </div>
    );
};
