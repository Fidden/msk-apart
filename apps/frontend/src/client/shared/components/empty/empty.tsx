import Image from 'next/image';
import Link from 'next/link';
import {FC, PropsWithChildren} from 'react';
import {Breadcrumb} from '~/client/shared/components/breadcrumb/breadcrumb';
import {INavRoute} from '~/client/shared/components/footer/__nav/footer__nav';
import ArrowIcon from './assets/arrow.svg';
import {cnEmpty} from './empty.const';

interface IEmptyProps extends PropsWithChildren {
    breadcrumb: INavRoute[];
    title: string;
    illustration: string;
}

export const Empty: FC<IEmptyProps> = (props) => {
    return (
        <div className={cnEmpty()}>
            <Breadcrumb routes={props.breadcrumb}/>
            <p className={cnEmpty('title')}>
                {props.title}
            </p>
            <Image
                className={cnEmpty('illustration')}
                src={props.illustration}
                alt={'illustration'}
                height={64}
                width={179}
            />
            <Link
                className={cnEmpty('link')}
                href={'/'}
            >
                <Image
                    src={ArrowIcon}
                    alt={'arrow-back'}
                    width={9}
                    height={9}
                />
                Вернутся на главную
            </Link>
        </div>
    );
};
