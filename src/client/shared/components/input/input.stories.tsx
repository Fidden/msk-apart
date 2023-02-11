import {storiesOf} from '@storybook/react';
import {Input} from './input';

storiesOf('shared/input', module)
    .add('default', () => (
        <Input
            type={'text'}
            placeholder={'Плейсхолдер'}
        />
    ));
