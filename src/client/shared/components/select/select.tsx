import {Listbox} from '@headlessui/react';
import Image from 'next/image';
import {FC, PropsWithChildren} from 'react';
import ArrowIcon from './assets/arrow.svg';
import {cnSelect} from './select.const';

interface ISelectProps extends PropsWithChildren {
    value?: any;
    onChange?: (value: any) => void;
    transformValue?: (value: any) => string;
}

interface ISelectOptionProps extends PropsWithChildren {
    value: any;
    key?: any;
    disabled?: boolean;
}

export const Select: FC<ISelectProps> & { Option: FC<ISelectOptionProps> } = (props) => {
    return (
        <div className={cnSelect()}>
            <Listbox>
                <Listbox.Button className={cnSelect('button')}>
                    {props.transformValue ? props.transformValue(props.value) : props.value}
                    <Image
                        src={ArrowIcon}
                        alt={'arrow'}
                        aria-hidden={true}
                        width={7}
                        height={4}
                    />
                </Listbox.Button>
                <Listbox.Options className={cnSelect('options')}>
                    {props.children}
                </Listbox.Options>
            </Listbox>
        </div>
    );
};

Select.Option = (props) => {
    return (
        <Listbox.Option
            {...props}
            className={cnSelect('option')}
        >
            {props.children}
        </Listbox.Option>
    );
};
