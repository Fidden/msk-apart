import Link from 'next/link';
import {FC} from 'react';
import {cnHeader} from '../header.const';
import './header__nav.css';

export const HeaderNav: FC = () => (
	<nav className={cnHeader('nav')}>
		<Link
			className={cnHeader('nav-item')}
			href={'/'}
		>
			Первичное жильё
		</Link>
		<Link
			className={cnHeader('nav-item')}
			href={'/catalog'}
		>
			Каталог
		</Link>
		<Link
			className={cnHeader('nav-item')}
			href={'/services'}
		>
			Услуги
		</Link>
		<Link
			className={cnHeader('nav-item')}
			href={'/contacts'}
		>
			Контакты
		</Link>
		<Link
			className={cnHeader('nav-item')}
			href={'/faq'}
		>
			Вопросы и ответы
		</Link>
	</nav>
);
