import {useRouter} from 'next/router';
import {FC, useState} from 'react';
import {AuthContainer} from '~/client/shared/components/auth-container/auth-container';
import {Button} from '~/client/shared/components/button/button';
import {Label} from '~/client/shared/components/label/label';
import {PageLayout} from '~/client/shared/layouts/page-layout/page-layout';
import {cnCodeScreen} from './code-screen.const';

export const CodeScreen: FC = () => {
	const router = useRouter();
	const [code, setCode] = useState<string>('');
	const sixLengthArray = [1, 2, 3, 4, 5, 6];

	const getBlockText = (index: number) => {
		return code?.at(index) || '-';
	};

	const renderCodeBlock = (index: number) => {
		// В нашем случае индексы будут всегда от 1 до 6 так что используем как ключ
		return (
			<div
				key={index}
				className={cnCodeScreen('block')}
			>
				{getBlockText(index)}
			</div>
		);
	};

	return (
		<PageLayout>
			<AuthContainer
				title={'Введите код'}
				subtitle={'Он пришел вам на почту'}
				button={{
					text: 'Вход',
					onClick: () => router.push('/login')
				}}
			>
				<Label text={'6-ти значный код'}>
					<div className={cnCodeScreen()}>
						{sixLengthArray.map((_, index) =>
							renderCodeBlock(index)
						)}
						<input
							className={cnCodeScreen('input')}
							onChange={(event) => setCode(event.target.value)}
							type="text"
						/>
					</div>
				</Label>
				<Button>
					Сменить пароль
				</Button>
			</AuthContainer>
		</PageLayout>
	);
};
