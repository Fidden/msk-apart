import {FC} from 'react';
import {cnFaqScreen} from '../faq-screen.const';
import './faq-screen__additonal.css';

export const FaqScreenAdditional: FC = () => (
    <div className={cnFaqScreen('additional')}>
        <p
            className={cnFaqScreen('additional-title')}
        >
            Не нашли ответ на свой вопрос? - Свяжитесь с нами.
        </p>
        <a
            href={'tel:+7 (495) 123-45-67'}
            className={cnFaqScreen('additional-phone')}
        >
            +7 (495) 944-06-33
        </a>
    </div>
);
