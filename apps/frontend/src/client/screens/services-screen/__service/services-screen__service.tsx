import {StaticImageData} from 'next/dist/client/image';
import Image from 'next/image';
import {FC} from 'react';
import {cnServicesScreen} from '../services-screen.const';
import './services-screen__service.css';

interface IServiceScreenServiceProps {
	title: string;
	icon: StaticImageData;
	text: string;
}

export const ServiceScreenService: FC<IServiceScreenServiceProps> = (props) => {
	return (
		<div className={cnServicesScreen('service')}>
			<div className={cnServicesScreen('service-icon')}>
				<Image
					src={props.icon}
					alt={props.title}
				/>
			</div>
			<p className={cnServicesScreen('service-title')}>
				{props.title}
			</p>
			<p className={cnServicesScreen('service-text')}>
				{props.text}
			</p>
		</div>
	);
};
