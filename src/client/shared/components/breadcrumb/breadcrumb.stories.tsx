import {storiesOf} from '@storybook/react';
import {Breadcrumb} from './breadcrumb';
import {breadcrumbRoutes} from '~/client/shared/mocks/breadcrumb.mock';

storiesOf('shared/breadcrumb', module)
    .add('default', () =>
        <Breadcrumb
            routes={breadcrumbRoutes}
        />
    );
