import {FC} from 'react';
import {cnFooter} from '~/client/shared/components/footer/footer.const';
import './footer__credits.css';

export const FooterCredits: FC = () => (
    <p className={cnFooter('credits')}>
        (c) Msk Resale, 2022. Сервис поиска и продажи недвижимости, ипотечные предложения. Общество с ограниченной
        ответственностью «МСК Недвижимость», ОГРН xxxxxxxxxxxxx Адрес: 127055, г. Москва, 12934...
    </p>
);
