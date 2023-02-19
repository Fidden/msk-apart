import {CatalogScreen} from '~/client/screens/catalog-screen/catalog-screen';
import {IPagination} from '~/client/shared/types/pagination';
import {IProduct} from '~/client/shared/types/product';
import {axiosInstance} from '~/pages/_app';

CatalogScreen.getInitialProps = async () => {
    const products = await axiosInstance.get<IPagination<IProduct>>('/product');

    return {
        ...products.data
    };
};

export default CatalogScreen;
