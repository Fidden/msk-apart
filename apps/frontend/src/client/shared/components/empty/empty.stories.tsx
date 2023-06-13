import {storiesOf} from '@storybook/react';
import {breadcrumbRoutes} from '~/client/shared/mocks/breadcrumb.mock';
import Illustration from './assets/illustraiton.svg';
import {Empty} from './empty';

storiesOf('shared/empty', module)
	.add('default', () => (
		<Empty
			breadcrumb={breadcrumbRoutes}
			title={'Заголовок'}
			illustration={Illustration}
		/>
	));
