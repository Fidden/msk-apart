import {useRouter} from 'next/router';
import {FC} from 'react';
import {AuthContainer} from '~/client/shared/components/auth-container/auth-container';
import {Button} from '~/client/shared/components/button/button';
import {Input} from '~/client/shared/components/input/input';
import {Label} from '~/client/shared/components/label/label';
import {PageLayout} from '~/client/shared/layouts/page-layout/page-layout';

export const ForgotPasswordScreen: FC = () => {
	const router = useRouter();

	return (
		<PageLayout>
			<AuthContainer
				title={'Забыли пароль?'}
				subtitle={'Мы вышлем код Вам на почту'}
				button={{
					text: 'Вход',
					onClick: () => router.push('/login')
				}}
			>
				<Label text={'Почта'}>
					<Input
						type={'email'}
						placeholder={'Введите почту'}
					/>
				</Label>
				<Button>
					Получить код
				</Button>
			</AuthContainer>
		</PageLayout>
	);
};
