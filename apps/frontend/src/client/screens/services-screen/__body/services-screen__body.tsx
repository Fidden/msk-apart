import {FC} from 'react';
import {ServiceScreenService} from '../__service/services-screen__service';
import AdIcon from '../assets/ad.svg';
import {cnServicesScreen} from '../services-screen.const';
import './services-screen__body.css';

const services = [
	{
		title: 'Рекламная компания',
		icon: AdIcon,
		text: 'Рекламная компания объекта недвижимости на всех возможных площадках по продаже недвижимости и предложения партнерам'
	},
	{
		title: 'Безопасные расчеты по сделке',
		icon: AdIcon,
		text: 'Организация безопасных расчетов по сделке — гарантия получения продавцом денег за проданную недвижимость'
	},
	{
		title: 'Документы в Росреестр',
		text: 'Подача и получение документов по сделке в Росреестр',
		icon: AdIcon
	},
	{
		title: 'Помощь в оформлении ипотеки',
		text: 'Сотрудничаем со всеми известными крупными и мелкими банками',
		icon: AdIcon
	},
	{
		title: 'Проверка документов ',
		text: 'Проверка соответствия требованиям действующего законодательства правоустанавливающих документов на Объект',
		icon: AdIcon
	},
	{
		title: 'Внесение аванса покупателем',
		text: 'Организация внесения аванса покупателям с подготовкой всех необходимых для этого документов',
		icon: AdIcon
	},
	{
		title: 'Показ объекта',
		text: 'Организация и проведение показов Объекта потенциальным покупателям',
		icon: AdIcon
	},
	{
		title: 'Передача объекта',
		text: 'Организация передачи квартиры покупателю с подготовкой всех необходимых документов',
		icon: AdIcon
	},
	{
		title: 'Подбор объекта',
		text: 'Оказание комплекса услуг по подбору Объекта, для последующего оформления Объекта в собственность Заказчика',
		icon: AdIcon
	},
	{
		title: 'Юридическое сопровождение',
		text: 'Подготовка, организация и проведение сделки с полным юридическим сопровождением и составлением необходимых документов',
		icon: AdIcon
	}
];

export const ServiceScreenBody: FC = () => {
	return (
		<div className={cnServicesScreen('body')}>
			{services.map(service =>
				<ServiceScreenService
					key={service.title}
					title={service.title}
					icon={service.icon}
					text={service.text}
				/>)
			}
		</div>
	);
};
