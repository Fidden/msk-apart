import {FC} from 'react';
import {Disclosure} from '~/client/shared/components/disclosure/disclosure';
import {cnFaqScreen} from '../faq-screen.const';
import './faq-screen__info.css';

export const FaqScreenInfo: FC = () => (
	<div className={cnFaqScreen('info')}>
		<h2 className={cnFaqScreen('title')}>
			Ответы на частые вопросы
		</h2>
		<Disclosure>
			<Disclosure.Container>
				<Disclosure.Button>
					Как снять/купить недвижимость?
				</Disclosure.Button>
				<Disclosure.Panel>
					В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов,
					используя
					Lorem Ipsum для распечатки образцов.
					Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в
					электронный дизайн.
					В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов,
					используя
					Lorem Ipsum для распечатки образцов.
					Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в
					электронный дизайн.
					В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов,
					используя
					Lorem Ipsum для распечатки образцов.
					Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в
					электронный дизайн.
				</Disclosure.Panel>
			</Disclosure.Container>
		</Disclosure>
		<Disclosure>
			<Disclosure.Container>
				<Disclosure.Button>
					Не удаётся войти в личный кабинет
				</Disclosure.Button>
				<Disclosure.Panel>
					В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов,
					используя
					Lorem Ipsum для распечатки образцов.
					Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в
					электронный дизайн.
				</Disclosure.Panel>
			</Disclosure.Container>
		</Disclosure>
		<Disclosure>
			<Disclosure.Container>
				<Disclosure.Button>
					Дифференцированные цены
					в коммерческой недвижимости
				</Disclosure.Button>
				<Disclosure.Panel>
					В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов,
					используя
					Lorem Ipsum для распечатки образцов.
					Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в
					электронный дизайн.
				</Disclosure.Panel>
			</Disclosure.Container>
		</Disclosure>
		<Disclosure>
			<Disclosure.Container>
				<Disclosure.Button>
					Как разместить объявление бесплатно?
				</Disclosure.Button>
				<Disclosure.Panel>
					В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов,
					используя
					Lorem Ipsum для распечатки образцов.
					Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в
					электронный дизайн.
				</Disclosure.Panel>
			</Disclosure.Container>
		</Disclosure>
		<Disclosure>
			<Disclosure.Container>
				<Disclosure.Button>
					Как получить закрывающие документы?
				</Disclosure.Button>
				<Disclosure.Panel>
					В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов,
					используя
					Lorem Ipsum для распечатки образцов.
					Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в
					электронный дизайн.
				</Disclosure.Panel>
			</Disclosure.Container>
		</Disclosure>
		<Disclosure>
			<Disclosure.Container>
				<Disclosure.Button>
					Как заполнить больше параметров
					о квартире/комнате?
				</Disclosure.Button>
				<Disclosure.Panel>
					В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов,
					используя
					Lorem Ipsum для распечатки образцов.
					Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в
					электронный дизайн.
				</Disclosure.Panel>
			</Disclosure.Container>
		</Disclosure>
		<Disclosure>
			<Disclosure.Container>
				<Disclosure.Button>
					Как восстановить отклонённое модератором объявление?
				</Disclosure.Button>
				<Disclosure.Panel>
					В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов,
					используя
					Lorem Ipsum для распечатки образцов.
					Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в
					электронный дизайн.
				</Disclosure.Panel>
			</Disclosure.Container>
		</Disclosure>
		<Disclosure>
			<Disclosure.Container>
				<Disclosure.Button>
					Моего ЖК нет в справочнике. Что делать?
				</Disclosure.Button>
				<Disclosure.Panel>
					В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов,
					используя
					Lorem Ipsum для распечатки образцов.
					Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в
					электронный дизайн.
				</Disclosure.Panel>
			</Disclosure.Container>
		</Disclosure>
	</div>
);
