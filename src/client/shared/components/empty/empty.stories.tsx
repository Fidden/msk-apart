import {storiesOf} from '@storybook/react';
import {Empty} from './empty';
import {breadcrumbRoutes} from '~/client/shared/mocks/breadcrumb.mock';
import Illustration from './assets/illustraiton.svg';

storiesOf('shared/empty', module)
    .add('default', () => (
        <Empty
            breadcrumb={breadcrumbRoutes}
            title={'Заголовок'}
            illustration={Illustration}
        />
    ));
