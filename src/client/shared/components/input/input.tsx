import {ChangeEvent, FC, HTMLInputTypeAttribute} from 'react';
import {cnInput} from './input.const';

interface IInputProps {
    type: HTMLInputTypeAttribute;
    placeholder?: string;
    onChange?: (value: ChangeEvent<HTMLInputElement>) => void;
}

export const Input: FC<IInputProps> = (props) => (
    <input
        {...props}
        className={cnInput()}
    />
);
