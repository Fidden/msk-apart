import {FC, PropsWithChildren} from 'react';
import {cnLabel} from '~/client/shared/components/label/label.const';

interface ILabelProps extends PropsWithChildren {
    text: string;
}

export const Label: FC<ILabelProps> = ({text, children}) => {
    return (
        <label className={cnLabel()}>
            <span className={cnLabel('text')}>
                {text}
            </span>
            {children}
        </label>
    );
};
