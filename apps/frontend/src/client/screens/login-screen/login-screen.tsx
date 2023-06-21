import {useRouter} from 'next/router';
import {FC, useRef, useState} from 'react';
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
	const setToken = useUserStore(state => state.setToken);

    const formData = useRef<ILogin>({
        login: '',
        password: ''
    });

    const [errors, setErrors] = useState();

    const onSumbit = async () => {
        const res = await loginUser(formData.current);
		if (res?.error) {
			return;
		}

        if (res?.errors) {
            return setErrors(res.errors);
        }

        if (res?.data?.token) {
            setToken(res.data.token);
        }

        router.push('/profile');
    };


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
                    href: '/register'
                }}
                onSubmit={() => onSumbit()}
                footerText={'Нажимая “Войти”, Вы соглашаетесь с политикой обработки персональных данных.'}
            >
                <Label
                    error={errors?.login}
                    text={'Email или телефон'}>
                    <Input
                        onChange={e => formData.current.login = e.target.value}
                        type={'text'}
                        placeholder={'Введите email или телефон'}
                    />
                </Label>
                <Label
                    error={errors?.password}
                    text={'Пароль'}>
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
