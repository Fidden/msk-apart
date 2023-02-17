import {FC} from 'react';
import {cnContactsScreen} from '../contacts-screen.const';
import './contacts-sceen__map.css';

export const ContactsScreenMap: FC = () => (
    <iframe
        className={cnContactsScreen('map')}
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A6bf2128edac5807764ebe3ff6f94e16ef19264b2710f7157660f39a9ffb7068c&amp;source=constructor"
        width="100%"
        height="616"
        frameBorder="0"
    />
);
