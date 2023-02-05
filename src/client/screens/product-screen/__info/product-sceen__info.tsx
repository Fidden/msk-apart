import {FC} from 'react';
import {cnProductScreen} from '~/client/screens/product-screen/product-screen.const';
import './product-screen__info.css';

export const ProductScreenInfo: FC = () => {
    return (
        <div className={cnProductScreen('info')}>
            <header className={cnProductScreen('info-header')}>
                <p className={cnProductScreen('info-header-text')}>
                    Жилая площадь
                    <span>
                        50 м<sup>2</sup>
                    </span>
                </p>
                <p className={cnProductScreen('info-header-text')}>
                    Площадь кухни
                    <span>
                        12 м<sup>2</sup>
                    </span>
                </p>
                <p className={cnProductScreen('info-header-text')}>
                    Год постройки
                    <span>
                        2010
                    </span>
                </p>
            </header>
            <ul className={cnProductScreen('info-body')}>
                <li className={cnProductScreen('info-body-text')}>
                    Этаж<span>2 из 25</span>
                </li>
                <li className={cnProductScreen('info-body-text')}>
                    Корпус<span>49.2</span>
                </li>
                <li className={cnProductScreen('info-body-text')}>
                    Заселение<span>Оформление в собственность</span>
                </li>
                <li className={cnProductScreen('info-body-text')}>
                    Отделка<span>Готовая отделка</span>
                </li>
                <li className={cnProductScreen('info-body-text')}>
                    Прописка<span>Московская область</span>
                </li>
                <li className={cnProductScreen('info-body-text')}>
                    Артикул<span>662541</span>
                </li>
                <li className={cnProductScreen('info-body-text')}>
                    Секция<span>5</span>
                </li>
                <li className={cnProductScreen('info-body-text')}>
                    Номер на этаже<span>7</span>
                </li>
            </ul>
        </div>
    );
};
