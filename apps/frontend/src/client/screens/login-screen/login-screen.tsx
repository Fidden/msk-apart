import {useRouter} from 'next/router';
import {FC} from 'react';
import {AuthContainer} from '~/client/shared/components/auth-container/auth-container';
import {Button} from '~/client/shared/components/button/button';
import {Input} from '~/client/shared/components/input/input';
import {Label} from '~/client/shared/components/label/label';
import {PageLayout} from '~/client/shared/layouts/page-layout/page-layout';
import AsideImage from './assets/image.png';

export const LoginScreen: FC = () => {
    const router = useRouter();
    return (
        <PageLayout>
            <AuthContainer
                title={'Вход'}
                subtitle={'Рады видеть Вас снова!'}
                button={{
                    text: 'Регистрация',
                    onClick: () => router.push('/')
                }}
                image={AsideImage}
                action={{
                    text: 'Не зарегистрированы? -',
                    linkText: 'Регистрация',
                    href: '/'
                }}
                footerText={'Нажимая “Войти”, Вы соглашаетесь с политикой обработки персональных данных.'}
            >
                <Label text={'Email или телефон'}>
                    <Input
                        type={'text'}
                        placeholder={'Введите email или телефон'}
                    />
                </Label>
                <Label text={'Пароль'}>
                    <Input
                        type={'password'}
                        placeholder={'Введите пароль'}
                    />
                </Label>
                <Button>
                    Войти
                </Button>
            </AuthContainer>
        </PageLayout>
    );
};
