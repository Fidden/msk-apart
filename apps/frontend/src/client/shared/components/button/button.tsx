import {compose, IClassNameProps} from '@bem-react/core';
import {FC, PropsWithChildren} from 'react';
import {withButtonSizeSmall} from './_size/Button_size_small';
import {withButtonVariantOutlined} from './_variant/Button_variant_outlined';
import {cnButton} from './button.const';

export interface IButtonProps extends PropsWithChildren, IClassNameProps {
	onClick?: () => void;
	disabled?: boolean;
	type?: 'button' | 'submit' | 'reset';
}

const ButtonPresenter: FC<IButtonProps> = (props) => {
	return (
		<button
			{...props}
			className={cnButton.mix(props.className)}
		>
			{props.children}
		</button>
	);
};

export const Button = compose(
	withButtonVariantOutlined,
	withButtonSizeSmall
)(ButtonPresenter);
