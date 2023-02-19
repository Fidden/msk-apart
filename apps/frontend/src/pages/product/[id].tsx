import {ProductScreen} from '~/client/screens/product-screen/product-screen';
import {IProduct} from '~/client/shared/types/product';
import {IResponse} from '~/client/shared/types/response';
import {axiosInstance} from '~/pages/_app';

ProductScreen.getInitialProps = async (context) => {
    const productId = context.query.id;
    const product = await axiosInstance.get<IResponse<IProduct>>(`/product/${productId}`);
    const special = await axiosInstance.get<IResponse<IProduct[]>>(`/special`);

    return {
        product: product.data.data,
        special: special.data.data
    };
};
export default ProductScreen;
