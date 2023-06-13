import {create} from 'zustand';
import {devtools} from 'zustand/middleware';
import {immer} from 'zustand/middleware/immer';
import {IProduct} from '~/client/shared/types/product';

interface State {
	product?: IProduct;
	setProduct: (product: IProduct) => void;
}

export const useProductStore = create<State>()(immer(devtools(set => ({
	product: undefined,
	setProduct: (product: IProduct) => set(state => {
		state.product = product;
	})
}))));
