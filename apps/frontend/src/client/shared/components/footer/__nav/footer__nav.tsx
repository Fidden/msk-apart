import Link from 'next/link';
import {FC} from 'react';
import {cnFooter} from '../footer.const';
import './footer__nav.css';

export interface INavRoute {
	title: string;
	href: string;
}

interface IFooterNavProps {
	routes: INavRoute[];
}

export const FooterNav: FC<IFooterNavProps> = ({routes}) => (
	<nav className={cnFooter('nav')}>
		<ul className={cnFooter('nav-list')}>
			{routes.map(route =>
				<li
					key={route.href}
					className={cnFooter('nav-item')}
				>
					<Link href={route.href}>
						{route.title}
					</Link>
				</li>
			)}
		</ul>
	</nav>
);
