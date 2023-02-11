import {FC} from 'react';
import {FooterContact} from '~/client/shared/components/footer/__contact/footer__contact';
import {FooterContainer} from '~/client/shared/components/footer/__container/footer__container';
import {FooterCredits} from '~/client/shared/components/footer/__credits/footer__credits';
import {FooterInfo} from '~/client/shared/components/footer/__info/footer__info';
import {FooterNav} from '~/client/shared/components/footer/__nav/footer__nav';
import {FooterSocials} from '~/client/shared/components/footer/__socials/footer__socials';
import {cnFooter} from './footer.const';

const navRoutes = [
    [
        {
            title: 'Карьера',
            href: '/'
        },
        {
            title: 'Первичное жильё',
            href: '/'
        },
        {
            title: 'Услуги',
            href: '/services'
        },
        {
            title: 'Избранное',
            href: '/favorites'
        }
    ],
    [
        {
            title: 'Договор-оферта',
            href: '/'
        },
        {
            title: 'Политика конфеденциальности',
            href: '/'
        },
        {
            title: 'Вопросы и ответы',
            href: '/faq'
        },
        {
            title: 'Личный кабинет',
            href: '/profile'
        }
    ]
];

export const Footer: FC = () => (
    <footer className={cnFooter()}>
        <FooterContainer>
            <FooterContainer.Body>
                <FooterInfo/>
                <FooterNav
                    routes={navRoutes[0]}
                />
                <FooterNav
                    routes={navRoutes[1]}
                />
                <FooterSocials/>
                <FooterContact/>
            </FooterContainer.Body>
            <FooterCredits/>
        </FooterContainer>
    </footer>
);
