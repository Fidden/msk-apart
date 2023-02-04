import {withBemMod} from '@bem-react/core';
import {cnButton} from '~/client/shared/components/button/button.const';
import {IButtonProps} from '../button';

interface IButtonSizeSmallProps {
    size?: 'sm';
}

export const withButtonSizeSmall = withBemMod<IButtonSizeSmallProps, IButtonProps>(
    cnButton(),
    {size: 'sm'},
    (Button) => (props) => <Button {...props}/>
);
