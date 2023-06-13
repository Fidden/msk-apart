import {Disclosure as HLDisclosure, Transition} from '@headlessui/react';
import {FC, Fragment, PropsWithChildren} from 'react';
import {cnDisclosure} from '../disclosure.const';
import './disclosure__panel.css';

export const DisclosurePanel: FC<PropsWithChildren> = ({children}) => (
	<Transition
		as={Fragment}
		enter={cnDisclosure('panel-enter')}
		enterFrom={cnDisclosure('panel-enter-from')}
		enterTo={cnDisclosure('panel-enter-to')}
		leave={cnDisclosure('panel-leave')}
		leaveFrom={cnDisclosure('panel-leave-from')}
		leaveTo={cnDisclosure('panel-leave-to')}
	>
		<HLDisclosure.Panel className={cnDisclosure('panel')}>
			{children}
		</HLDisclosure.Panel>
	</Transition>
);
