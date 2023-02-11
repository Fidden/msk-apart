import {FC} from 'react';
import {Breadcrumb} from '~/client/shared/components/breadcrumb/breadcrumb';
import {PageLayout} from '~/client/shared/layouts/page-layout/page-layout';
import {breadcrumbRoutes} from '~/client/shared/mocks/breadcrumb.mock';
import {FaqScreenAdditional} from './__additional/faq-screen__additional';
import {FaqScreenInfo} from './__info/faq-screen__info';
import {cnFaqScreen} from './faq-screen.const';

export const FaqScreen: FC = () => (
    <PageLayout>
        <section className={cnFaqScreen()}>
            <Breadcrumb routes={breadcrumbRoutes}/>
            <FaqScreenInfo/>
            <FaqScreenAdditional/>
        </section>
    </PageLayout>
);
