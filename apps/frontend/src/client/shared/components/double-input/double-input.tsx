import {ChangeEvent, FC, HTMLAttributes, HTMLInputTypeAttribute} from 'react';
import {cnDoubleInput} from './double-input.const';

interface InputType extends Omit<HTMLAttributes<HTMLButtonElement>, 'onChange'> {
    placeholder: string;
    type: HTMLInputTypeAttribute;
    onChange?: (value: ChangeEvent<HTMLInputElement>) => void;
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
