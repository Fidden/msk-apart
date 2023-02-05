import {Meta} from '@storybook/react';
import {Button} from './button';

type ButtonType = typeof Button;

export default {
    title: 'shared/Button',
    component: Button
} as Meta<ButtonType>;

export const button = () => <Button> Click me </Button>;
