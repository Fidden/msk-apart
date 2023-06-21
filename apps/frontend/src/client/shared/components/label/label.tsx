import {IClassNameProps} from '@bem-react/core';
import {FC, PropsWithChildren} from 'react';
import {cnLabel} from '~/client/shared/components/label/label.const';

interface ILabelProps extends PropsWithChildren, IClassNameProps {
	text: string;
	error?: string[];
}

export const Label: FC<ILabelProps> = ({text, children, className, error}) => {
	return (
		<label className={cnLabel.mix(className)}>
			<span className={cnLabel('text')}>
				{text}
			</span>
			{children}
			{error && <span className={cnLabel('error')}>
				{error[0]}
			</span>}
		</label>
	);
};
