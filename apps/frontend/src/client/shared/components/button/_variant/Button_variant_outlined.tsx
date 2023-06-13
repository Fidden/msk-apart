import {withBemMod} from '@bem-react/core';
import {IButtonProps} from '../button';
import {cnButton} from '../button.const';


interface IButtonVariantOutlineProps {
	variant?: 'outlined';
}

export const withButtonVariantOutlined = withBemMod<IButtonVariantOutlineProps, IButtonProps>(
	cnButton(),
	{variant: 'outlined'},
	(Button) => (props) => <Button {...props}/>
);
