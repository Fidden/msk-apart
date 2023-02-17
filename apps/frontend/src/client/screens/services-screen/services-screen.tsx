import {FC} from 'react';
import {ServicesScreenForm} from '~/client/screens/services-screen/__form/services-screen__form';
import {Breadcrumb} from '~/client/shared/components/breadcrumb/breadcrumb';
import {PageLayout} from '~/client/shared/layouts/page-layout/page-layout';
import {breadcrumbRoutes} from '~/client/shared/mocks/breadcrumb.mock';
import {ServiceScreenBody} from './__body/services-screen__body';
import {cnServicesScreen} from './services-screen.const';

export const ServicesScreen: FC = () => {
    return (
        <PageLayout>
            <section className={cnServicesScreen()}>
                <Breadcrumb routes={breadcrumbRoutes}/>
                <ServiceScreenBody/>
                <ServicesScreenForm/>
            </section>
        </PageLayout>
    );
};

