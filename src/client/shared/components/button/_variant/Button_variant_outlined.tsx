import {withBemMod} from '@bem-react/core';
import {cnButton} from '~/client/shared/components/button/button.const';
import {IButtonProps} from '../button';

interface IButtonVariantOutlineProps {
    variant?: 'outlined';
}

export const withButtonVariantOutlined = withBemMod<IButtonVariantOutlineProps, IButtonProps>(
    cnButton(),
    {variant: 'outlined'},
    (Button) => (props) => <Button {...props}/>
);
