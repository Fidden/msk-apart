import {useRouter} from 'next/router';
import {FC} from 'react';
import {AuthContainer} from '~/client/shared/components/auth-container/auth-container';
import {Button} from '~/client/shared/components/button/button';
import {Input} from '~/client/shared/components/input/input';
import {Label} from '~/client/shared/components/label/label';
import AsideImage from './assets/aside-image.png';

export const RegisterScreen: FC = () => {
    const router = useRouter();
    return (
        <AuthContainer
            title={'Регистрация'}
            subtitle={'Давайте познакомимся!'}
            button={{
                text: 'Вход',
                onClick: () => router.push('/')
            }}
            image={AsideImage}
            action={{
                text: 'Уже зарегистрированы? -',
                linkText: 'Вход',
                href: '/'
            }}
            footerText={'Нажимая “Зарегистрироваться”, Вы соглашаетесь с политикой обработки персональных данных.'}
        >
            <Label text={'Имя'}>
                <Input
                    type={'text'}
                    placeholder={'Введите имя'}
                />
            </Label>
            <div>
                <Label text={'Фамилия'}>
                    <Input
                        type={'text'}
                        placeholder={'Введите фамилию'}
                    />
                </Label>
                <Label text={'Отчество'}>
                    <Input
                        type={'text'}
                        placeholder={'Введите отчество'}
                    />
                </Label>
            </div>
            <Label text={'Почта'}>
                <Input
                    type={'email'}
                    placeholder={'Введите почту'}
                />
            </Label>
            <Label text={'Телефон'}>
                <Input
                    type={'tel'}
                    placeholder={'Введите телефон'}
                />
            </Label>
            <Label text={'Пароль'}>
                <Input
                    type={'password'}
                    placeholder={'Введите пароль'}
                />
            </Label>
            <Button>
                Зарегистрироваться
            </Button>
        </AuthContainer>
    );
};
