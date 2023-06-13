import {create} from 'zustand';
import {devtools} from 'zustand/middleware';
import {immer} from 'zustand/middleware/immer';
import {IPagination} from '~/client/shared/types/pagination';
import {IProduct} from '~/client/shared/types/product';
import {IProductFilter} from '~/client/shared/types/product-filter';
import {urls} from '~/client/shared/utils/urls';

interface State {
	products?: IPagination<IProduct>;
	filters?: IProductFilter;
	fetch: (page: number) => Promise<IPagination<IProduct>>;
	set: (products: IPagination<IProduct>) => void;
	append: (products: IPagination<IProduct>) => void;
}

export const useCatalogStore = create<State>()(immer(devtools(set => ({
	products: undefined,
	fetch: async (page: number) => {
		const res = await urls.catalog.build<IPagination<IProduct>>(undefined, {
			page
		});
		return res.data;
	},
	set: (products: IPagination<IProduct>) => set(state => {
		state.products = products;
	}),
	append: (products: IPagination<IProduct>) => set(state => {
		state.products = {
			...products,
			data: [
				...state.products?.data || [],
				...products.data
			]
		};
	})
}))));
