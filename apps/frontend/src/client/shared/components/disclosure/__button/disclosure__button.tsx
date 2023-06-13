import {Disclosure as HLDisclosure} from '@headlessui/react';
import Image from 'next/image';
import {FC, PropsWithChildren} from 'react';
import CrossIcon from '../assets/cross.svg';
import {cnDisclosure} from '../disclosure.const';
import './disclosure__button.css';

export const DisclosureButton: FC<PropsWithChildren> = ({children}) => (
	<HLDisclosure.Button className={cnDisclosure('button')}>
		<p className={cnDisclosure('button-title')}>
			{children}
		</p>
		<Image
			src={CrossIcon}
			alt={'close'}
			width={24}
			height={24}
		/>
	</HLDisclosure.Button>
);
