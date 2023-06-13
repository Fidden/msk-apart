import {FC, HTMLInputTypeAttribute} from 'react';
import {cnDoubleInput} from './double-input.const';

type InputType = {
	placeholder: string;
	type: HTMLInputTypeAttribute;
}

interface IDoubleInputProps {
	first: InputType;
	second: InputType;
}

export const DoubleInput: FC<IDoubleInputProps> = ({first, second}) => {
	return (
		<div className={cnDoubleInput()}>
			<input
				{...first}
				className={cnDoubleInput('input')}
			/>
			<div className={cnDoubleInput('decimetre')}/>
			<input
				{...second}
				type={second.type}
				className={cnDoubleInput('input')}
			/>
		</div>
	);
};
