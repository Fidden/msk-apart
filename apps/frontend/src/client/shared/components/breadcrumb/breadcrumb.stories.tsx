import {storiesOf} from '@storybook/react';
import {breadcrumbRoutes} from '~/client/shared/mocks/breadcrumb.mock';
import {Breadcrumb} from './breadcrumb';

storiesOf('shared/breadcrumb', module)
	.add('default', () =>
		<Breadcrumb
			routes={breadcrumbRoutes}
		/>
	);
