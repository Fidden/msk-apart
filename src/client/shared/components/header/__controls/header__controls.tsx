import Image from 'next/image';
import Link from 'next/link';
import {FC} from 'react';
import EnterIcon from '../assets/enter.svg';
import HeartIcon from '../assets/heart.svg';
import SearchIcon from '../assets/search.svg';
import {cnHeader} from '../header.const';
import './header__controls.css';

export const HeaderControls: FC = () => (
    <div className={cnHeader('controls')}>
        <div className={cnHeader('controls-item')}>
            <Image
                src={SearchIcon}
                alt={'search'}
            />
        </div>
        <Link
            href={'/favorites'}
            className={cnHeader('controls-item')}
        >
            <Image
                src={HeartIcon}
                alt={'like'}
            />
        </Link>
        <button className={cnHeader('controls-auth')}>
            Войти
            <Image
                src={EnterIcon}
                alt={'enter'}
            />
        </button>
    </div>
);
