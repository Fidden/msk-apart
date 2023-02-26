import axios from 'axios';
import type {AppProps} from 'next/app';
import {useRef} from 'react';
import NextNProgress from 'nextjs-progressbar';
import {Hydrate, QueryClient, QueryClientProvider} from 'react-query';
import '~/styles/globals.css';

export const axiosInstance = axios.create({
    baseURL: process.env.API_URL,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    }
});

export default function App({Component, pageProps}: AppProps) {
    const queryClient = useRef(new QueryClient());
    return (
        <QueryClientProvider client={queryClient.current}>
            <Hydrate state={pageProps.dehydratedState}>
                <NextNProgress
                    color={'var(--black)'}
                />
                <Component {...pageProps} />
            </Hydrate>
        </QueryClientProvider>
    );
}
