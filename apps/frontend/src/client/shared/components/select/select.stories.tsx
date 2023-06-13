import {storiesOf} from '@storybook/react';
import {Select} from './select';

storiesOf('shared/select', module)
	.add('default', () => (
		<Select transformValue={() => 'Селектор'}>
			<Select.Option value={'1'}>1</Select.Option>
			<Select.Option value={'2'}>2</Select.Option>
			<Select.Option value={'3'}>3</Select.Option>
		</Select>
	));
