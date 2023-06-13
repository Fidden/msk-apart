import {FC} from 'react';
import {Empty} from '~/client/shared/components/empty/empty';
import {PageLayout} from '~/client/shared/layouts/page-layout/page-layout';
import Illustration from './assets/illustration.svg';

export const CareerScreen: FC = () => {
	return (
		<PageLayout>
			<Empty
				breadcrumb={[{title: 'MSK APART', href: '/'}, {title: 'Карьера', href: '/career'}]}
				title={'В разработке'}
				illustration={Illustration}
			/>
		</PageLayout>
	);
};
