import {IndexScreen} from '~/client/screens/index-screen/index-screen';
import {IProduct} from '~/client/shared/types/product';
import {IResponse} from '~/client/shared/types/response';
import {axiosInstance} from '~/pages/_app';

IndexScreen.getInitialProps = async () => {
    const special = await axiosInstance.get<IResponse<IProduct[]>>(`/special`);
    return {
        special: special.data.data
    };
};

export default IndexScreen;
