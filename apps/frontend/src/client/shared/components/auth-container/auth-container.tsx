import Image, {StaticImageData} from 'next/image';
import Link from 'next/link';
import {FC, FormEvent, PropsWithChildren} from 'react';
import {Button} from '~/client/shared/components/button/button';
import {cnAuthContainer} from './auth-container.const';

interface IAuthContainerProps extends PropsWithChildren {
    title: string;
    subtitle: string;
    button: {
        text: string;
        onClick: () => void;
    };
    image?: StaticImageData;
    action?: {
        text: string;
        linkText: string;
        href: string;
    };
    footerText?: string;
    onSubmit?: () => void;
}

export const AuthContainer: FC<IAuthContainerProps> = (props) => {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (props.onSubmit) {
            props.onSubmit();
        }
    };

    return (
        <section className={cnAuthContainer({'disable-image': !props.image})}>
            <form
                onSubmit={handleSubmit}
                className={cnAuthContainer('form')}
            >
                <header className={cnAuthContainer('form-header')}>
                    <h3 className={cnAuthContainer('form-title')}>
                        {props.title}
                        <br/>
                        <span className={cnAuthContainer('form-subtitle')}>
                            {props.subtitle}
                        </span>
                    </h3>
                    <Button
                        onClick={props.button.onClick}
                        size={'sm'}
                        variant={'outlined'}
                    >
                        {props.button.text}
                    </Button>
                </header>
                {props.children}
                {props.action &&
                    <div className={cnAuthContainer('form-action')}>
                        <p className={cnAuthContainer('form-action-text')}>
                            {props.action.text}
                        </p>
                        <Link
                            className={cnAuthContainer('form-action-do')}
                            href={props.action.href}
                        >
                            {props.action.linkText}
                        </Link>
                    </div>
                }
                {props.footerText &&
                    <p className={cnAuthContainer('form-footer')}>
                        {props.footerText}
                    </p>
                }
            </form>
            {props.image &&
                <div className={cnAuthContainer('image')}>
                    <Image
                        src={props.image}
                        alt={'image'}
                        fill
                    />
                </div>
            }
        </section>
    );
};
