import {useRouter} from 'next/router';
import {FC, useRef} from 'react';
import {AuthContainer} from '~/client/shared/components/auth-container/auth-container';
import {Button} from '~/client/shared/components/button/button';
import {Input} from '~/client/shared/components/input/input';
import {Label} from '~/client/shared/components/label/label';
import {PageLayout} from '~/client/shared/layouts/page-layout/page-layout';
import {ILogin, useUserStore} from '~/client/shared/stores/user.store';
import AsideImage from './assets/image.png';

export const LoginScreen: FC = () => {
    const router = useRouter();
    const loginUser = useUserStore(state => state.login);
    const formData = useRef<ILogin>({
        login: '',
        password: ''
    });

    return (
        <PageLayout>
            <AuthContainer
                title={'Вход'}
                subtitle={'Рады видеть Вас снова!'}
                button={{
                    text: 'Регистрация',
                    onClick: () => router.push('/register')
                }}
                image={AsideImage}
                action={{
                    text: 'Не зарегистрированы? -',
                    linkText: 'Регистрация',
                    href: '/'
                }}
                onSubmit={() => loginUser(formData.current)}
                footerText={'Нажимая “Войти”, Вы соглашаетесь с политикой обработки персональных данных.'}
            >
                <Label text={'Email или телефон'}>
                    <Input
                        onChange={e => formData.current.login = e.target.value}
                        type={'text'}
                        placeholder={'Введите email или телефон'}
                    />
                </Label>
                <Label text={'Пароль'}>
                    <Input
                        onChange={e => formData.current.password = e.target.value}
                        type={'password'}
                        placeholder={'Введите пароль'}
                    />
                </Label>
                <Button type={'submit'}>
                    Войти
                </Button>
            </AuthContainer>
        </PageLayout>
    );
};
