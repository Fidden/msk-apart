import {FC} from 'react';
import {BreadcrumbItem} from '~/client/shared/components/breadcrumb/__item/breadcrumb__item';
import {INavRoute} from '~/client/shared/components/footer/__nav/footer__nav';
import {cnBreadcrumb} from './breadcrumb.const';

interface IBreadcrumbProps {
    routes: INavRoute[];
}

export const Breadcrumb: FC<IBreadcrumbProps> = ({routes}) => (
    <ul className={cnBreadcrumb()}>
        {routes.map(route => (
            <BreadcrumbItem
                key={route.href}
                route={route}
            />
        ))}
    </ul>
);
