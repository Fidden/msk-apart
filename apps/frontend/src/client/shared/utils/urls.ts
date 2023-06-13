import {Url} from '~/client/shared/utils/url';

export const urls = {
	product: new Url('/product/:id'),
	productInfo: new Url('/info'),
	special: new Url('/special'),
	catalog: new Url('/product')
};
