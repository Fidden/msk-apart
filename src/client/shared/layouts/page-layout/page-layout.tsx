import {IClassNameProps} from '@bem-react/core';
import {FC, ReactNode} from 'react';
import {cnPageLayout} from '~/client/shared/layouts/page-layout/page-layout.const';

export interface IPageLayoutProps extends IClassNameProps {
    children: ReactNode;
}

export const PageLayout: FC<IPageLayoutProps> = ({children, className}) => {
    return (
        <div className={cnPageLayout.mix(className)}>
            {children}
        </div>
    );
};
