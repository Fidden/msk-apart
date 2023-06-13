import {withBemMod} from '@bem-react/core';
import {IButtonProps} from '../button';
import {cnButton} from '../button.const';

interface IButtonSizeSmallProps {
	size?: 'sm';
}

export const withButtonSizeSmall = withBemMod<IButtonSizeSmallProps, IButtonProps>(
	cnButton(),
	{size: 'sm'},
	(Button) => (props) => <Button {...props}/>
);
