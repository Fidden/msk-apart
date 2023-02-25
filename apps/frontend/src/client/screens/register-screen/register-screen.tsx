import {useRouter} from 'next/router';
import {FC, useRef} from 'react';
import {AuthContainer} from '~/client/shared/components/auth-container/auth-container';
import {Button} from '~/client/shared/components/button/button';
import {Input} from '~/client/shared/components/input/input';
import {Label} from '~/client/shared/components/label/label';
import {PageLayout} from '~/client/shared/layouts/page-layout/page-layout';
import {IRegister, useUserStore} from '~/client/shared/stores/user.store';
import AsideImage from './assets/aside-image.png';

export const RegisterScreen: FC = () => {
    const router = useRouter();
    const userRegister = useUserStore(state => state.register);
    const formData = useRef<IRegister>({
        name: '',
        lastname: '',
        patronymic: '',
        email: '',
        phone: '',
        password: ''
    });

    return (
        <PageLayout>
            <AuthContainer
                title={'Регистрация'}
                subtitle={'Давайте познакомимся!'}
                button={{
                    text: 'Вход',
                    onClick: () => router.push('/login')
                }}
                image={AsideImage}
                action={{
                    text: 'Уже зарегистрированы? -',
                    linkText: 'Вход',
                    href: '/'
                }}
                footerText={'Нажимая “Зарегистрироваться”, Вы соглашаетесь с политикой обработки персональных данных.'}
                onSubmit={() => userRegister(formData.current)}
            >
                <Label text={'Имя'}>
                    <Input
                        onChange={e => formData.current.name = e.target.value}
                        type={'text'}
                        placeholder={'Введите имя'}
                    />
                </Label>
                <div>
                    <Label text={'Фамилия'}>
                        <Input
                            onChange={e => formData.current.lastname = e.target.value}
                            type={'text'}
                            placeholder={'Введите фамилию'}
                        />
                    </Label>
                    <Label text={'Отчество'}>
                        <Input
                            onChange={e => formData.current.patronymic = e.target.value}
                            type={'text'}
                            placeholder={'Введите отчество'}
                        />
                    </Label>
                </div>
                <Label text={'Почта'}>
                    <Input
                        onChange={e => formData.current.email = e.target.value}
                        type={'email'}
                        placeholder={'Введите почту'}
                    />
                </Label>
                <Label text={'Телефон'}>
                    <Input
                        onChange={e => formData.current.phone = e.target.value}
                        type={'tel'}
                        placeholder={'Введите телефон'}
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
                    Зарегистрироваться
                </Button>
            </AuthContainer>
        </PageLayout>
    );
};
