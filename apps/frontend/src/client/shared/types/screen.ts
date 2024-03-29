import {NextPage} from 'next';
import {ComponentType} from 'react';

export type Screen<TProps = any> = ComponentType<TProps> &
	NextPage<TProps> & {
	Layout?: ComponentType<any>;
};

export interface Params {
	[x: string]: string | string[] | number | undefined | Params;
}
