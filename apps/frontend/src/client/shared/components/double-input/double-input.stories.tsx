import {storiesOf} from '@storybook/react';
import {DoubleInput} from './double-input';

storiesOf('shared/double-input', module)
	.add('default', () => (
		<DoubleInput
			first={{
				type: 'text',
				placeholder: 'Плейсхолдер'
			}}
			second={{
				type: 'text',
				placeholder: 'Плейсхолдер'
			}}
		/>
	));
