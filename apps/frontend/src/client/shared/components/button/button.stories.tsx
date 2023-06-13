import {storiesOf} from '@storybook/react';
import {Button} from './button';

storiesOf('shared/button', module)
	.add('default', () => (
		<Button>Кнопка</Button>
	))
	.add('variant outlined', () => (
		<Button variant="outlined">Кнопка</Button>
	));
