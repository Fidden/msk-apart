import {storiesOf} from '@storybook/react';
import {Button} from '~/client/shared/components/button/button';
import {Input} from '~/client/shared/components/input/input';
import {Label} from '~/client/shared/components/label/label';
import {AuthContainer} from './auth-container';


storiesOf('shared/auth-container', module)
    .add('default', () => (
        <AuthContainer
            title={'Заголовок'}
            subtitle={'Подзаголовок'}
            button={{
                text: 'Кнопка',
                onClick: () => console.log('Нажатие на кнопку')
            }}
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
        </AuthContainer>
    ));
