import {IClassNameProps} from '@bem-react/core';
import {FC, PropsWithChildren} from 'react';
import {cnLabel} from '~/client/shared/components/label/label.const';

interface ILabelProps extends PropsWithChildren, IClassNameProps {
    text: string;
}

export const Label: FC<ILabelProps> = ({text, children, className}) => {
    return (
        <label className={cnLabel.mix(className)}>
            <span className={cnLabel('text')}>
                {text}
            </span>
            {children}
        </label>
    );
};
