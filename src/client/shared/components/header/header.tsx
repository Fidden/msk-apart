import Image from 'next/image';
import {FC} from 'react';
import {HeaderControls} from './__controls/header__controls';
import {HeaderNav} from './__nav/header__nav';
import Logo from './assets/logo.svg';
import {cnHeader} from './header.const';

export const Header: FC = () => {
    return (
        <header className={cnHeader()}>
            <Image
                width={92}
                height={16}
                className={cnHeader('logo')}
                src={Logo}
                alt={'msk apart'}
            />
            <HeaderNav/>
            <HeaderControls/>
        </header>
    );
};
