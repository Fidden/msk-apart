import {ProductScreen} from '~/client/screens/product-screen/product-screen';
import {IProduct} from '~/client/shared/types/product';
import {IResponse} from '~/client/shared/types/response';
import {urls} from '~/client/shared/utils/urls';

ProductScreen.getInitialProps = async (context) => {
    const productId = context.query.id as string;
    const [product, special] = await Promise.all([
        await urls.product.build<IResponse<IProduct>>({id: productId}),
        await urls.special.build<IResponse<IProduct[]>>()
    ]);

    return {
        product: product.data.data,
        special: special.data.data
    };
};

export default ProductScreen;
