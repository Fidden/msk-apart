import {CatalogScreen} from '~/client/screens/catalog-screen/catalog-screen';
import {IPagination} from '~/client/shared/types/pagination';
import {IProduct} from '~/client/shared/types/product';
import {urls} from '~/client/shared/utils/urls';

CatalogScreen.getInitialProps = async () => {
	const products = await urls.catalog.build<IPagination<IProduct>>();

	return {
		...products.data
	};
};

export default CatalogScreen;
