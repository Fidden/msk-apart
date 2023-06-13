import React, {PropsWithChildren} from 'react';
import {cnRadio} from './radio.const';

interface IRadioButtonProps extends PropsWithChildren {
	onSelect?: () => void;
	name: string,
}

//not over yet
export const Radio: React.FC<IRadioButtonProps> = (props) => {
	const onClicked = () => {
		if (props.onSelect) {
			props.onSelect();
		}
	};

	return (
		<label className={cnRadio()}>
			<input
				onChange={onClicked}
				type={'radio'}
				className={cnRadio('input')}
				name={props.name}
			/>
			<span className={cnRadio('button')}/>
			{props.children}
		</label>
	);
};
