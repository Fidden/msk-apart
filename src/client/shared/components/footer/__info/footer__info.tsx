import Image from 'next/image';
import Link from 'next/link';
import {FC} from 'react';
import FooterLogoImage from '../assets/logo.svg';
import {cnFooter} from '../footer.const';
import './footer__info.css';

export const FooterInfo: FC = () => (
    <section className={cnFooter('info')}>
        <Link
            className={cnFooter('info-logo')}
            href={'/'}
        >
            <Image
                src={FooterLogoImage}
                alt={'msk-apart'}
                width={92}
                height={16}
            />
        </Link>
        <p className={cnFooter('info-main')}>
            +7 (495) 944-06-33
            <span>С 9:00 до 21:00 без выходных</span>
        </p>
        <p className={cnFooter('info-additional')}>
            +7 (495) 065-30-01
            <span>Отдел контроля качества</span>
        </p>
    </section>
);
