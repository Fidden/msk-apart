import {FC} from 'react';
import {ProductScreenContent} from '~/client/screens/product-screen/__content/product-screen__content';
import {ProductScreenImages} from '~/client/screens/product-screen/__images/product-screen__images';
import {cnProductScreen} from '../product-screen.const';
import './product-screen__header.css';

export const ProductScreenHeader: FC = () => (
    <header className={cnProductScreen('header')}>
        <ProductScreenImages/>
        <ProductScreenContent/>
    </header>
);
