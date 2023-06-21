import {AxiosError} from 'axios';
import {create} from 'zustand';
import {devtools} from 'zustand/middleware';
import {immer} from 'zustand/middleware/immer';
import {IToken} from '~/client/shared/types/token';
import {IValidation} from '~/client/shared/types/validation';
import {axiosInstance} from '~/pages/_app';

export interface IRegister {
    name: string;
    lastname: string;
    patronymic: string;
    email: string;
    phone: string;
    password: string;
}

export interface ILogin {
    login: string;
    password: string;
}

interface State {
    register: (data: IRegister) => Promise<IToken | IValidation | undefined>;
    login: (data: ILogin) => Promise<IToken | IValidation | undefined>;
    setToken: (token: string) => void;
    token?: string;
}

export const useUserStore = create<State>()(immer(devtools(set => ({
	register: async (data) => {
		try {
			const res = await axiosInstance.post<IToken>('/user/register', data);
			return res.data;
		} catch (e) {
			if (e instanceof AxiosError) {
				return e.response?.data as IValidation;
			}
		}
	},
	login: async (data: ILogin) => {
		try {
			const res = await axiosInstance.post<IToken>('/user/login', data);
			return res.data;
		} catch (e) {
			if (e instanceof AxiosError) {
				return e.response?.data as IValidation;
			}
		}
	},
	setToken: (token: string) => {
		localStorage.setItem('token', token);
	},
	token: typeof window !== 'undefined' ? '' : (localStorage.getItem('token') || '')
}))));
