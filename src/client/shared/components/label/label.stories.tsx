import {storiesOf} from '@storybook/react';
import {Label} from './label';

storiesOf('shared/label', module)
    .add('default', () => (
        <Label
            text={'Лейбл'}
        >
            Тело
        </Label>
    ));
