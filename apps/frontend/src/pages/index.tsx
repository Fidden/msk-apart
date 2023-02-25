import {IndexScreen} from '~/client/screens/index-screen/index-screen';
import {IProduct} from '~/client/shared/types/product';
import {IProductInfo} from '~/client/shared/types/product-info';
import {IResponse} from '~/client/shared/types/response';
import {urls} from '~/client/shared/utils/urls';

IndexScreen.getInitialProps = async () => {
    const [special, productInfo] = await Promise.all([
        await urls.special.build<IResponse<IProduct[]>>(),
        await urls.productInfo.build<IResponse<IProductInfo>>()
    ]);

    return {
        special: special.data.data,
        productInfo: productInfo.data.data
    };
};

export default IndexScreen;
