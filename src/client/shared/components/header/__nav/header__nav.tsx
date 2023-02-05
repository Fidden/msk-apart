import Link from 'next/link';
import {FC} from 'react';
import {cnHeader} from '../header.const';
import './header__nav.css';

export const HeaderNav: FC = () => (
    <nav className={cnHeader('nav')}>
        <Link
            className={cnHeader('nav-item')}
            href={'/'}
        >
            Первичное жильё
        </Link>
        <Link
            className={cnHeader('nav-item')}
            href={'/'}
        >
            Каталог
        </Link>
        <Link
            className={cnHeader('nav-item')}
            href={'/'}
        >
            Услуги
        </Link>
        <Link
            className={cnHeader('nav-item')}
            href={'/'}
        >
            Контакты
        </Link>
        <Link
            className={cnHeader('nav-item')}
            href={'/'}
        >
            Вопросы и ответы
        </Link>
    </nav>
);
