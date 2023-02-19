import {FC} from 'react';
import {cnProductScreen} from '~/client/screens/product-screen/product-screen.const';
import './product-screen__description.css';

export const ProductScreenDescription: FC = () => {
    return (
        <div className={cnProductScreen('description')}>
            <p className={cnProductScreen('description-title')}>
                Описание
            </p>
            <p className={cnProductScreen('description-text')}>
                Студия с готовым ремонтом в комплексе комфорт-класса “Балтийская 15” ПОДХОДИТ ПОД ИПОТЕКУ
                Студия №701(без постоянной прописки)
                Общая площадь: 20.9 м²
                Этаж: 7/14.
                Удачное расположение! • 7 минут пешком от м. Сокол (770 м) • 17 минут пешком до платформы Красный
                Балтиец (D3 Курско-Рижский диаметр)
                Бронируйте и записывайтесь на просмотр
                Светлая комфортабельная студия в современном комплексе с клубной инфраструктурой: • коворкинги •
                фитнес-клуб • кафе • комфортные зоны отдыха
                В здании установлены новые коммуникации.
                Капитальный ремонт в 2022-м году
                Студия для людей живущих в динамичном темпе большого города!
                Документы готовы к сделке.
                1. Быстрая и юридически чистая сделка
                2. Поможем в одобрении ипотеки
                3. Оперативный показ в удобное для Вас время
                Звоните прямо сейчас!
            </p>
        </div>
    );
};