import {FC} from 'react';
import {Button} from '~/client/shared/components/button/button';
import {FeedbackForm} from '~/client/shared/components/feedback-form/feedback-form';
import {Input} from '~/client/shared/components/input/input';
import {Label} from '~/client/shared/components/label/label';

export const ServicesScreenForm: FC = () => {
	return (
		<FeedbackForm
			title={'Обратная связь'}
			subtitle={'Оставьте заявку на консультацию и мы перезвоним в удобное для Вас время'}
			infoText={'Нажимая “Оставить заявку”, Вы соглашаетесь с политикой обработки персональных данных.'}
		>
			<Label text={'Как вас зовут?'}>
				<Input
					type={'text'}
					placeholder={'Введите имя'}
				/>
			</Label>
			<Label text={'Номер телефона'}>
				<Input
					type={'tel'}
					placeholder={'Введите номер телефона'}
				/>
			</Label>
			<Label text={'Выберите дату и время'}>
				<Input
					type={'datetime-local'}
				/>
			</Label>
			<Button>
				Оставить заявку
			</Button>
		</FeedbackForm>
	);
};
