import {FC} from 'react';
import {cnContactsScreen} from '../contacts-screen.const';
import './contacts-screen__info.css';

export const ContactsScreenInfo: FC = () => (
    <div className={cnContactsScreen('address')}>
        <ul className={cnContactsScreen('address-list')}>
            <li className={cnContactsScreen('address-item')}>
                <span>Москва, Краснопролетарская улица, 16с1</span>
                <span>Пн-Пт 10:00-19:00</span>
            </li>
            <li className={cnContactsScreen('address-item')}>
                <span>info@msk-apart.ru</span>
                <span>+7 (495) 032-60-35</span>
            </li>
        </ul>
    </div>
);
