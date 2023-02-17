import {FC, PropsWithChildren} from 'react';
import {DisclosureButton} from './__button/disclosure__button';
import {DisclosureContainer} from './__container/disclosure__container';
import {DisclosurePanel} from './__panel/disclosure__panel';
import {cnDisclosure} from './disclosure.const';

type DotComponents = { Button: FC<PropsWithChildren> }
    & { Panel: FC<PropsWithChildren> }
    & { Container: FC<PropsWithChildren> };

export const Disclosure: FC<PropsWithChildren> & DotComponents = ({children}) => (
    <div className={cnDisclosure()}>
        {children}
    </div>
);

Disclosure.Button = DisclosureButton;
Disclosure.Panel = DisclosurePanel;
Disclosure.Container = DisclosureContainer;
