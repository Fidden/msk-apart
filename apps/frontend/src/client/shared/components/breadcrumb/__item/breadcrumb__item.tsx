import Image from 'next/image';
import Link from 'next/link';
import {FC} from 'react';
import {INavRoute} from '~/client/shared/components/footer/__nav/footer__nav';
import ArrowIcon from '../assets/arrow.svg';
import {cnBreadcrumb} from '../breadcrumb.const';
import './breadcrumb__item.css';

interface IBreadcrumbItemProps {
	route: INavRoute;
}

export const BreadcrumbItem: FC<IBreadcrumbItemProps> = ({route}) => (
	<li
		className={cnBreadcrumb('item')}
		key={route.href}
	>
		<Link href={route.href}>
			{route.title}
		</Link>
		<Image
			className={cnBreadcrumb('item-icon')}
			src={ArrowIcon}
			alt={'arrow'}
			width={9}
			height={9}
		/>
	</li>
);
