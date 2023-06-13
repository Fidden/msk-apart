import React from 'react';
import {IndexScreenAbout} from '~/client/screens/index-screen/__about/index-screen__about';
import {IndexScreenAdvantage} from '~/client/screens/index-screen/__advantage/index-screen__advantage';
import {IndexScreenConsult} from '~/client/screens/index-screen/__consult/index-screen__consult';
import {IndexScreenCount} from '~/client/screens/index-screen/__count/index-screen__count';
import {StockProduct} from '~/client/shared/components/stock-products/stock-product';
import {PageLayout} from '~/client/shared/layouts/page-layout/page-layout';
import {IProduct} from '~/client/shared/types/product';
import {IProductInfo} from '~/client/shared/types/product-info';
import {Screen} from '~/client/shared/types/screen';
import {IndexScreenSearch} from './__search/index-screen__search';

interface IIndexScreenProps {
	special: IProduct[];
	productInfo: IProductInfo;
}

export const IndexScreen: Screen<IIndexScreenProps> = (props) => {
	return (
		<PageLayout>
			<IndexScreenSearch/>
			<IndexScreenAdvantage/>
			{props?.special?.length > 0 &&
				<StockProduct
					products={props?.special}
				/>
			}
			<IndexScreenCount
				count={props.productInfo}
			/>
			<IndexScreenAbout/>
			<IndexScreenConsult/>
		</PageLayout>
	);
};
