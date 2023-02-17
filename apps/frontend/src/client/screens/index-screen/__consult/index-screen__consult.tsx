import React, {FC} from 'react';
import {Button} from '~/client/shared/components/button/button';
import {FeedbackForm} from '~/client/shared/components/feedback-form/feedback-form';
import {Input} from '~/client/shared/components/input/input';
import {Label} from '~/client/shared/components/label/label';
import {cnIndexScreen} from '../index-screen.const';
import './index-screen__consult.css';

export const IndexScreenConsult: FC = () => {
    return (
        <FeedbackForm
            title={'Консультируем бесплатно'}
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
            <Label
                className={cnIndexScreen('consult-form-label-wide')}
                text={'Что вас интересует?'}
            >
                <Input
                    type={'text'}
                    placeholder={'Опишите в двух словах'}
                />
            </Label>
            <Button>
                Оставить заявку
            </Button>
        </FeedbackForm>
    );
};
