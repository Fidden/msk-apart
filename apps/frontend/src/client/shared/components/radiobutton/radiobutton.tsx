import React, {PropsWithChildren} from "react";
import {cnRadiobutton} from './radiobutton.const';

interface IRadioButtonProps extends PropsWithChildren {
    onSelect?: () => void;
}
//not over yet
export const RadioButton: React.FC<IRadioButtonProps> = (props) => {
    const onClicked = () => {
        if (props.onSelect) {
            props.onSelect();
        }
    };

    return (
        <label className={cnRadiobutton()}>
            <input
                onChange={onClicked}
                type={"radio"}
                className={cnRadiobutton("input")}
            />
            {props.children}
        </label>
    );
};