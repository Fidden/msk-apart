import {compose, IClassNameProps} from '@bem-react/core';
import {FC, HTMLAttributes, PropsWithChildren} from 'react';
import {withButtonSizeSmall} from './_size/Button_size_small';
import {withButtonVariantOutlined} from './_variant/Button_variant_outlined';
import {cnButton} from './button.const';

export interface IButtonProps extends PropsWithChildren, IClassNameProps, HTMLAttributes<HTMLAnchorElement> {
    onClick?: () => void;
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset' | 'link';
    href?: string;
}

const ButtonPresenter: FC<IButtonProps> = (props) => {
	const Component = props.type === 'link' ? 'a' : 'button';

	return (
		<Component
			{...props}
			className={cnButton.mix(props.className)}
		>
			{props.children}
		</Component>
	);
};

export const Button = compose(
	withButtonVariantOutlined,
	withButtonSizeSmall
)(ButtonPresenter);
