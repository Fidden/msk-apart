import Image from 'next/image';
import {FC} from 'react';
import {cnFooter} from '../footer.const';
import DzenIcon from './assets/dzen.svg';
import TelegramIcon from './assets/telegram.svg';
import VKIcon from './assets/vk.svg';
import YoutubeIcon from './assets/youtube.svg';
import './footer__socials.css';

export const FooterSocials: FC = () => (
	<div className={cnFooter('socials')}>
		<a
			href="https://www.facebook.com/"
			target="_blank"
			rel="noreferrer"
			className={cnFooter('socials-item')}
		>
			<Image
				src={TelegramIcon}
				alt={'telegram'}
			/>
		</a>
		<a
			href="https://www.instagram.com/"
			target="_blank"
			rel="noreferrer"
			className={cnFooter('socials-item')}
		>
			<Image
				src={VKIcon}
				alt={'vk'}
			/>
		</a>
		<a
			href="https://www.youtube.com/"
			target="_blank"
			rel="noreferrer"
			className={cnFooter('socials-item')}
		>
			<Image
				src={DzenIcon}
				alt={'dzen'}
			/>
		</a>
		<a
			href="https://www.youtube.com/"
			target="_blank"
			rel="noreferrer"
			className={cnFooter('socials-item')}
		>
			<Image
				src={YoutubeIcon}
				alt={'youtube'}
			/>
		</a>
	</div>
);
