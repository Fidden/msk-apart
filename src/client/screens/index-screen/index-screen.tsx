import React from 'react';
import {IndexScreenAbout} from '~/client/screens/index-screen/__about/index-screen__about';
import {IndexScreenAdvantage} from '~/client/screens/index-screen/__advantage/index-screen__advantage';
import {IndexScreenConsult} from '~/client/screens/index-screen/__consult/index-screen__consult';
import {IndexScreenCount} from '~/client/screens/index-screen/__count/index-screen__count';
import {StockProduct} from '~/client/shared/components/stock-products/stock-product';
import {PageLayout} from '~/client/shared/layouts/page-layout/page-layout';
import {productsMock} from '~/client/shared/mocks/products.mock';
import {Screen} from '~/client/shared/types/screen';
import {IndexScreenSearch} from './__search/index-screen__search';

const count = {
    rooms_1: 4561,
    rooms_2: 3234,
    rooms_3: 4578,
    out_city: 2344,
    commercial: 12345,
    rooms_mo: 2490358,
    rooms_mos: 734778,
    ap_new: 588585
};

export const IndexScreen: Screen = () => {
    return (
        <PageLayout>
            <IndexScreenSearch/>
            <IndexScreenAdvantage/>
            <StockProduct
                products={productsMock}
            />
            <IndexScreenCount
                count={count}
            />
            <IndexScreenAbout/>
            <IndexScreenConsult/>
        </PageLayout>
    );
};
