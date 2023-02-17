import {FC} from 'react';
import {Button} from '~/client/shared/components/button/button';
import {cnProductScreen} from '../product-screen.const';
import './product-screen__actions.css';

export const ProductScreenActions: FC = () => {
    return (
        <div className={cnProductScreen('actions')}>
            <Button>
                Показать номер
            </Button>
            <Button variant={'outlined'}>
                Заказать обратный звонок
            </Button>
        </div>
    );
};
