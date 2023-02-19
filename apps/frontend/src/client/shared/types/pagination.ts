import {IResponse} from '~/client/shared/types/response';

export interface ILinks {
    first: string;
    last: string;
    prev?: any;
    next: string;
}

export interface ILink {
    url: string;
    label: string;
    active: boolean;
}

export interface IMeta {
    current_page: number;
    from: number;
    last_page: number;
    links: ILink[];
    path: string;
    per_page: number;
    to: number;
    total: number;
}

export interface IPagination<T> extends IResponse<T[]> {
    links: ILinks;
    meta: IMeta;
}
