import {useRouter} from 'next/router';
import {FC} from 'react';
import {AuthContainer} from '~/client/shared/components/auth-container/auth-container';
import {Button} from '~/client/shared/components/button/button';
import {Input} from '~/client/shared/components/input/input';
import {Label} from '~/client/shared/components/label/label';
import {PageLayout} from '~/client/shared/layouts/page-layout/page-layout';

export const ChangePasswordScreen: FC = () => {
    const router = useRouter();
    return (
        <PageLayout>
            <AuthContainer
                title={'Сменить пароль'}
                subtitle={'Используйте A a 1 _ @ $ % '}
                button={{
                    text: 'Вход',
                    onClick: () => router.push('/login')
                }}
            >
                <Label text={'Новый пароль'}>
                    <Input
                        placeholder={'Введите новый пароль'}
                        type={'text'}
                    />
                </Label>
                <Button>
                    Сменить пароль
                </Button>
            </AuthContainer>
        </PageLayout>
    );
};
