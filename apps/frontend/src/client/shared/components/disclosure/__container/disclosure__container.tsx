import {Disclosure as HLDisclosure} from '@headlessui/react';
import {FC, PropsWithChildren} from 'react';
import {cnDisclosure} from '~/client/shared/components/disclosure/disclosure.const';
import './disclosure__container.css';

export const DisclosureContainer: FC<PropsWithChildren> = ({children}) => (
	<HLDisclosure
		as={'ul'}
		className={cnDisclosure('container')}
	>
		{children}
	</HLDisclosure>
);
