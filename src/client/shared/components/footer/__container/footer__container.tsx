import {FC, PropsWithChildren} from 'react';
import {cnFooter} from '../footer.const';
import './footer__container.css';

type DotComponents = { Body: FC<PropsWithChildren> };

export const FooterContainer: FC<PropsWithChildren> & DotComponents = ({children}) => (
    <div className={cnFooter('container')}>
        {children}
    </div>
);

FooterContainer.Body = ({children}) => (
    <div className={cnFooter('container-body')}>
        {children}
    </div>
);
