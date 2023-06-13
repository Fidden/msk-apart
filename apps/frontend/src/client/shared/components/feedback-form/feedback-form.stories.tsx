import {storiesOf} from '@storybook/react';
import {Button} from '~/client/shared/components/button/button';
import {Input} from '~/client/shared/components/input/input';
import {Label} from '~/client/shared/components/label/label';
import {FeedbackForm} from './feedback-form';

storiesOf('shared/feedback-form', module)
	.add('default', () => (
		<FeedbackForm
			title={'Заголовок'}
			subtitle={'Подзаголовок'}
			infoText={'Информационный текст'}
		>
			<Label text={'Лейбл'}>
				<Input
					type={'text'}
					placeholder={'Плейсхолдер'}
				/>
			</Label>
			<Label text={'Лейбл'}>
				<Input
					type={'text'}
					placeholder={'Плейсхолдер'}
				/>
			</Label>
			<Button>
				Отправить
			</Button>
		</FeedbackForm>
	));
