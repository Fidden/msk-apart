import {FC, PropsWithChildren, useRef} from 'react';
import {cnCheckbox} from './checkbox.const';

interface ICheckboxProps extends PropsWithChildren {
	onChange?: (checked: boolean) => void;
}

export const Checkbox: FC<ICheckboxProps> = (props) => {
	const checked = useRef<boolean>(false);
	const handleChange = () => {
		checked.current = !checked.current;
		if (props.onChange) {
			props.onChange(checked.current);
		}
	};

	return (
		<label className={cnCheckbox()}>
			{props.children}
			<input
				type={'checkbox'}
				className={cnCheckbox('input')}
				onChange={handleChange}
			/>
			<span className={cnCheckbox('item')}/>
		</label>
	);
};
