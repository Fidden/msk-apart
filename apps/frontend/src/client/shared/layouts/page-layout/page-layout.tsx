import {IClassNameProps} from '@bem-react/core';
import {FC, ReactNode} from 'react';
import {Footer} from '~/client/shared/components/footer/footer';
import {Header} from '~/client/shared/components/header/header';
import {cnPageLayout} from './page-layout.const';

export interface IPageLayoutProps extends IClassNameProps {
	children: ReactNode;
}

export const PageLayout: FC<IPageLayoutProps> = ({children, className}) => {
	return (
		<div className={cnPageLayout.mix(className)}>
			<Header/>
			{children}
			<Footer/>
		</div>
	);
};
