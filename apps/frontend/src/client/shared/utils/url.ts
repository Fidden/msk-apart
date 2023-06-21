import {AxiosRequestConfig} from 'axios';
import {axiosInstance} from '~/pages/_app';

export class Url<Params extends Record<string, string>, Query extends Record<string, any>> {
	private path: string;

	constructor(path: string) {
		this.path = path;
	}

	// get params of url and replace :param with variable
	public build<T>(pathParams?: Params, pathQuery?: Query, options?: AxiosRequestConfig) {
		const path = this.path.replace(/:([a-zA-Z0-9_]+)/g, (match, param) => {
			if (pathParams && pathParams[param]) {
				return pathParams[param];
			}

			return match;
		});

		// generate axios request with params and query
		return axiosInstance<T>(path, {
			...options,
			params: pathQuery,
			baseURL: 'https://animezero.ru/api'
		});
	}
}
