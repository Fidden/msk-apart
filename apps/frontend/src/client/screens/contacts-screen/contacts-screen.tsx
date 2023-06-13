import {FC} from 'react';
import {Breadcrumb} from '~/client/shared/components/breadcrumb/breadcrumb';
import {PageLayout} from '~/client/shared/layouts/page-layout/page-layout';
import {breadcrumbRoutes} from '~/client/shared/mocks/breadcrumb.mock';
import {ContactsScreenInfo} from './__info/contacts-screen__info';
import {ContactsScreenMap} from './__map/contacts-sceen__map';

export const ContactsScreen: FC = () => {
	return (
		<PageLayout>
			<Breadcrumb routes={breadcrumbRoutes}/>
			<ContactsScreenMap/>
			<ContactsScreenInfo/>
		</PageLayout>
	);
};
