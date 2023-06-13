import axios from 'axios';
import type {AppProps} from 'next/app';
import NextNProgress from 'nextjs-progressbar';
import '~/global/styles/globals.css';

export const axiosInstance = axios.create({
	baseURL: process.env.API_URL,
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json'
	}
});

export default function App({Component, pageProps}: AppProps) {
	return (
		<>
			<NextNProgress
				color={'var(--black)'}
			/>
			<Component {...pageProps} />
		</>
	);
}
