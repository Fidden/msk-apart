import Image from 'next/image';
import Link from 'next/link';
import {FC} from 'react';
import {useUserStore} from '~/client/shared/stores/user.store';
import EnterIcon from '../assets/enter.svg';
import HeartIcon from '../assets/heart.svg';
import SearchIcon from '../assets/search.svg';
import {cnHeader} from '../header.const';
import './header__controls.css';

export const HeaderControls: FC = () => {
    const userToken = useUserStore(state => state.token);

    return (<div className={cnHeader('controls')}>
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
        <Link
            href={userToken ? '/profile' : '/login'}
            className={cnHeader('controls-auth')}
        >
            {userToken ? 'Профиль' : 'Войти'}
            <Image
                src={EnterIcon}
                alt={'enter'}
            />
        </Link>
    </div>);
};
