import {FC} from 'react';
import {Input} from '~/client/shared/components/input/input';
import {cnFooter} from '../footer.const';
import './footer__contact.css';

export const FooterContact: FC = () => (
    <div className={cnFooter('contact')}>
        <p className={cnFooter('contact-title')}>
            Узнавайте о новых предложениях первыми!
        </p>
        <Input type={'email'} placeholder={'Введите Email'}/>
        <p className={cnFooter('contact-made')}>
            Made in Merga
        </p>
    </div>
);
